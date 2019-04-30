import React from "react";
import styled from "styled-components"
import { observer } from "mobx-react"
import Button from "../primitives/Button"
import Component from "../primitives/Component"

const Home = observer(({ assembly }) => (
  <Layout>
    <Component uuid="805d389b-16e2-41c9-a40a-c2d895006b67" assembly={assembly} >
      Hello!
    </Component>
  </Layout>
))

const Layout = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  padding-top: 1rem;
`

Home.route = "/"
export default Home;
