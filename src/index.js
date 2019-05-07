import React from "react"
import ReactDOM from "react-dom"
import Assembly from "./Assembly"

ReactDOM.render(
  <Assembly
    uuid="25354f2a-b2b1-49e8-a74b-b75a16c1ad25"
    afterCreation={(assembly) => window.assembly = assembly}
  />,
  document.getElementById('root')
)
