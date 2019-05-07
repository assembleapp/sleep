import React from "react";
import styled from "styled-components"
import { observer } from "mobx-react"
import Button from "../principals/Button"
import Component from "../principals/Component"

@observer
class Home extends React.Component {
  layout = React.createRef()
  layoutInner = React.createRef()

  render = () => (
    <Layout
      ref={this.layout}
      innerRef={this.layoutInner}
    >
      <Component
        uuid="1902593e-1dd8-40f7-ace6-44ad8eeae6ed"
        assembly={this.props.assembly}
        container={this.layout}
      >
        This week:
        <br/>
        Relaxation techniques
      </Component>
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  padding-top: 1rem;
`

Home.route = "/"
export default Home;
