import { useState } from "react";

export default function useDate() {
    const now = new Date(day, hours)
    const [date, setDate] = useState(now)

    return [day, hours]
}