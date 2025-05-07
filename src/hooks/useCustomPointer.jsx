import { useEffect, useState } from 'react'

export default function useCustomPointer(icon) {

    const [cursor, setCursor] = useState([0, 0])

    useEffect(() => {
        window.addEventListener("mousemove", event => setCursor(
            [event.clientX, event.clientY]
        ))
    }, [])
    let child
    return <span id="cursor" style={{ left: cursor[0], top: cursor[1] }}>{icon}</span>





}