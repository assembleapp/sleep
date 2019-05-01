import React from "react"
import { observer } from "mobx-react"
import { autorun, reaction, observable } from "mobx"

@observer
class Component extends React.Component {
  @observable styles = {}

  constructor(props) {
    super(props)

    this.props.assembly.network.watch`
      JSON.parse(Component.find_or_create_by(id: "${this.props.uuid}").style)
    `(response => {
      response
        .json()
        .then(style => {
        this.styles = style
        })
    })

    reaction(
      () => JSON.stringify(this.styles),
      (styles) => this.props.assembly.network.run`
        Component.find_or_create_by(id: "${this.props.uuid}").update(style: '${styles}')
      `
    )
  }

  render() {
    return (
      <div
        style={JSON.parse(JSON.stringify(this.styles))}
        onClick={() => this.props.assembly.activeComponent = this}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Component
