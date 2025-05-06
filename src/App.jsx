import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import useSwitch from "./hooks/useSwitch.jsx"
import useDate from "./hooks/useDate.jsx"
import useCustomPointer from './hooks/useCustomPointer.jsx'
import useKeyPress from './hooks/useKeyPress.jsx'

function App() {

  //SNACK 1
  const [isOn, toggle] = useSwitch()

  //SNACK 2
  const currentDate = useDate()

  //SNACK 2
  const customPointer = useCustomPointer("https://emoji.beeimg.com/🚀/32/microsoft")

  //SNACK BONUS
  const isEnterPressed = useKeyPress("Enter")

  return (
    <>
      {/* SNACK 1 */}
      <div className='snack'>
        <h1>SNACK-1</h1>
        <div className='snack-content'>
          <p>Il valore è: </p>
          <h3>{isOn ? "ON" : "OFF"}</h3>
          <button onClick={toggle}>Switch</button>
        </div>
      </div>

      {/* SNACK 2 */}
      <div className='snack'>
        <h1>SNACK-2</h1>
        <div className='snack-content'>
          <h1>Data e ora attuali:</h1>
          <p>{currentDate.toLocaleString()}</p>
        </div>
      </div>

      {/* SNACK 3 */}
      <div className='snack'>
        <h1>SNACK-3</h1>
        <div className='snack-content'>
          <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
          {customPointer}

        </div>
      </div>

      {/* SNACK BONUS */}
      <div className='snack'>
        <h1>SNACK-BONUS</h1>
        <div className='snack-content'>
          <h1>Tieni premuto "Enter" per testare il custom hook</h1>
          <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
        </div>
      </div>
    </>
  )

}

export default App
