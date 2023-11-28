import { useStyles } from './Card.styles'

export function Card() {
  const classes = useStyles()

  return (
    <div className={classes.train}>
      <div className={classes.descr}>15 мин • 5 упражнений</div>
      {/* <img className={classes.img} /> */}
      <div className={classes.name}>Тренировка для рук</div>
    </div>
  )
}
