import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import useSwitch from "./customHooks/useSwitch"

function App() {
  const [isOn, toggle] = useSwitch()
  console.log(isOn)
  return (
    <>
      <h1>{isOn ? "true" : "false"}</h1>
      <button onClick={toggle}>opposite</button>
    </>
  )

}

export default App
