import { useEffect, useState } from 'react'

export default function useCustomPointer(url) {
    document.body.style.cursor = `url(${url}),auto`
}