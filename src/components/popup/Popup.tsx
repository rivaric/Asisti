import { PopupProps } from './Popup.interface'
import { useStyles } from './Popup.styles'

export function Popup({ isOpenPopup, setIsOpenPopup } : PopupProps) {
  const classes = useStyles()

  return (
    <div className={classes.bgPopup} style={{display: isOpenPopup ? 'block' : 'none'}}>
      <div className={classes.popup}>
        <div className={classes.text}>
          Посмотрите видео с правильным выполнением упражнения, затем нажмите
          кнопку “Начать”. <br />
          Следите за комментариями для правильного выполнения.
        </div>
        <button className={classes.ok} onClick={() => setIsOpenPopup(false)}>Ок</button>
      </div>
    </div>
  )
}
