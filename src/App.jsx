import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import useSwitch from "./hooks/useSwitch"
import useDate from "./hooks/useDate"

function App() {
  //snack 1
  const [isOn, toggle] = useSwitch()

  //snack 2
  const currentDate = useDate()

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
          {currentDate.day} {currentDate.hours}
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
