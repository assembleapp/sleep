import React from "react"
import { observer } from "mobx-react"
import { autorun, reaction, observable } from "mobx"

@observer
class Component extends React.Component {
  @observable styles = {}

  constructor(props) {
    super(props)

    props.assembly.network.watch`
      JSON.parse(Component.find_or_create_by(id: "${props.uuid}").style)
    `(response => {
      response
        .json()
        .then(style => {
        this.styles = style
        })
    })
  }

  render() {
    return (
      <div style={JSON.parse(JSON.stringify(this.styles))}>
        {this.props.children}
      </div>
    )
  }
}

export default Component
