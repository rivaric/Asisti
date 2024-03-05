import { useEffect, useState } from 'react'
import { PopupProps } from './Popup.interface'
import { useStyles } from './Popup.styles'

export function Popup({
  isOpenPopup,
  setIsOpenPopup,
  text,
  time,
  isButton,
}: PopupProps) {
  const classes = useStyles()
  const [timer, setTimer] = useState<number>()

  const handleClose = () => {
    setIsOpenPopup(false)
    clearTimeout(timer)
  }

  useEffect(() => {
    if (isOpenPopup) {
      const timerId = setTimeout(() => {
        setIsOpenPopup(false)
      }, time)

      setTimer(timerId)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isOpenPopup, time, setIsOpenPopup])

  return (
    <div
      className={classes.bgPopup}
      style={{ display: isOpenPopup ? 'block' : 'none' }}
    >
      <div className={classes.popup}>
        <div className={classes.text}>{text}</div>
        {!isButton || (
          <button className={classes.ok} onClick={() => handleClose()}>
            Ок
          </button>
        )}
      </div>
    </div>
  )
}
