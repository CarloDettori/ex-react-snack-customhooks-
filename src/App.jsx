import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import useSwitch from "./hooks/useSwitch"

function App() {
  const [isOn, toggle] = useSwitch()
  console.log(isOn)
  return (
    <>
      <div className='snack'>
        <h1>SNACK-1</h1>
        <div className='snack-content'>
          <h3>{isOn ? "true" : "false"}</h3>
          <button onClick={toggle}>opposite</button>
        </div>
      </div>

      <div className='snack'>
        <h1>SNACK-2</h1>
        <div className='snack-content'>

        </div>
      </div>

      <div className='snack'>
        <h1>SNACK-3</h1>
        <div className='snack-content'>

        </div>
      </div>

      <div className='snack'>
        <h1>SNACK-BONUS</h1>
        <div className='snack-content'>

        </div>
      </div>
    </>
  )

}

export default App
