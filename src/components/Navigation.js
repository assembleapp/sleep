import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"
import { white, primary, black } from "../colors"
import InternalLink from "../principals/InternalLink"

import Icon from "@mdi/react"
import {
  mdiHome,
} from "@mdi/js"

import Home from "./Home"

const Navigation = observer(({ assembly }) => (
  <Layout>
    <InternalLink to={Home} assembly={assembly} >
      <Icon
        path={mdiHome}
        color={assembly.currentPage === Home ? primary : black}
        size="1.8rem"
      />
    </InternalLink>
  </Layout>
))

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${white};
  padding: 1rem;
`

export default Navigation;
