import { useEffect, useState } from 'react'

export default function useCustomPointer(icon) {

    const [cursor, setCursor] = useState([0, 0])

    useEffect(() => {
        window.addEventListener("mousemove", event => setCursor(
            [event.clientX, event.clientY]
        ))
    }, [])
    let child
    return <span id="cursor" className='big-z' style={{ left: cursor[0] + 2, top: cursor[1] + 2 }}>{icon}</span>

}