import { useState, useEffect } from 'react'

export const Timer = ({
  sec,
  completionTimer,
}: {
  sec: number
  completionTimer: () => void
}) => {
  const [seconds, setSeconds] = useState(sec || 60)

  const tick = () => {
    setSeconds((prevSeconds) => prevSeconds - 1)
  }

  useEffect(() => {
    const timer = setInterval(tick, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (seconds === 0) {
      completionTimer()
      setSeconds(sec || 60)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds])

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <div style={{ minWidth: '85px' }}>
      <h1>{formatTime()}</h1>
    </div>
  )
}
