import React from "react";
import styled from "styled-components"
import { observer } from "mobx-react"
import Button from "../primitives/Button"

const Home = observer(({ assembly }) => (
  <Layout>
    <TreatmentButton>
      {assembly.translate("home.survey")}
    </TreatmentButton>
  </Layout>
))

const Layout = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  padding-top: 1rem;
`

const TreatmentButton = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
`

Home.route = "/"
export default Home;
