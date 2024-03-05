import { useEffect } from 'react'
import { PopupProps } from './Popup.interface'
import { useStyles } from './Popup.styles'

export function Popup({ isOpenPopup, setIsOpenPopup, text, time, isButton }: PopupProps) {
  const classes = useStyles()

  useEffect(() => {
    setTimeout(() => {
      setIsOpenPopup(false)
    }, time)
  })

  return (
    <div
      className={classes.bgPopup}
      style={{ display: isOpenPopup ? 'block' : 'none' }}
    >
      <div className={classes.popup}>
        <div className={classes.text}>{text}</div>
        {!isButton || (
          <button className={classes.ok} onClick={() => setIsOpenPopup(false)}>
            Ок
          </button>
        )}
      </div>
    </div>
  )
}
