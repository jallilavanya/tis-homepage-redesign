import { useEffect, useState } from 'react'

export function useCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)
  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setActive(Boolean((event.target as HTMLElement).closest('a, button, [data-cursor]')))
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return { ...position, active }
}