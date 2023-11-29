import { useNavigate } from 'react-router-dom'
import { useStyles } from './Card.styles'

export function Card() {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <div className={classes.train} onClick={() => navigate('/train')}>
      <div className={classes.descr}>15 мин • 5 упражнений</div>
      {/* <img className={classes.img} /> */}
      <div className={classes.name}>Тренировка для рук</div>
    </div>
  )
}
