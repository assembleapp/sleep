import React from "react";
import styled from "styled-components"
import { observer } from "mobx-react"
import Button from "../principals/Button"
import Component from "../principals/Component"

const Home = observer(({ assembly }) => (
  <Layout>
    <Component
      uuid="11ec9f80-ee6d-44a9-a3c8-69e4bb8baabf"
      assembly={assembly}
    >
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
