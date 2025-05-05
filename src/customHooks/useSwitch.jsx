import { useState } from "react";
export default function useSwitch() {
    const [value, setValue] = useState(false)
    function toggle() {
        if (value) {
            setValue(false)
        } else {
            setValue(true)
        }
    }
    return [value, toggle]
}