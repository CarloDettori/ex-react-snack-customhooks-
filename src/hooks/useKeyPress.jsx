import { useState, useEffect } from "react";

export default function useKeyPress(key) {

    const [pressed, setPressed] = useState();

    useEffect(() => {
        const pressing = (event) => {
            if (event.key === key) {
                setPressed(true);
            }
        };

        const unpressing = (event) => {
            if (event.key === key) {
                setPressed(false);
            }
        };

        window.addEventListener("keydown", pressing)
        window.addEventListener("keyup", unpressing)

        return (() => {
            window.removeEventListener("keydown", pressing),
                window.removeEventListener("keyup", unpressing)
        }

        )
    }, [])

    return pressed
}