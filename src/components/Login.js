import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"
import field from "../util/field"
import Button from "../primitives/Button"

const Login = observer(({assembly}) => (
  <Layout>
    <h2>
      {assembly.translate("participant_login.welcome")}
    </h2>

    <Form>
      {field(assembly, "participant_login.phone_number", "tel").label}
      {field(assembly, "participant_login.phone_number", "tel").field}

      {field(assembly, "participant_login.password", "password").label}
      {field(assembly, "participant_login.password", "password").field}

      <Button onClick={() => assembly.login()}>
        {assembly.translate("participant_login.go")}
      </Button>
    </Form>
  </Layout>
))

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  justify-content: center;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
`

const Form = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 1rem;
`

export default Login;
