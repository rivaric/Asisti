import { HTMLAttributes } from 'react'
import { useStyles } from './HistoryCard.styles'
import { ArrowLaft } from '../../iconpack/ArrowLaft'
import { useNavigate } from 'react-router-dom'

export function HistoryCard(props: HTMLAttributes<HTMLDivElement>) {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <div className={classes.card}>
      <div className={classes.title}>История упражнений</div>
      <div className={classes.exercise}>
        <div className={classes.counter}>12/16</div>
        {/* <img className={classes.img} /> */}
        <div className={classes.exerciseName}>Упражнение для рук</div>
      </div>
      <div className={classes.toHistory} onClick={() => navigate('/history')}>
        Посмотреть историю
        <ArrowLaft />
      </div>
    </div>
  )
}