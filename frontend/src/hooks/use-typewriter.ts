import { useEffect, useState } from 'react'

export function useTypewriter(text: string, active: boolean, speed = 35, startDelay = 0) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active) return
    let i = 0
    let interval: ReturnType<typeof setInterval>

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [active, text, speed, startDelay])

  return { output, done }
}
