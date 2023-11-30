import { useStyles } from './HistoryCard.styles'
import { ArrowLaft } from '../../iconpack/ArrowLaft'
import { useNavigate } from 'react-router-dom'
import { Exercise } from '../../types'
import img from '../../assets/exercise.jpg'

export function HistoryCard({exercise}: {exercise: Exercise}) {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.card}>
      <div className={classes.title}>История упражнений</div>
      <div className={classes.exercise} onClick={() => navigate(`/train/${exercise.id}`)}>
        <div className={classes.counter}>12/16</div>
        <img src={img} width="80%"style={{alignSelf: 'center'}} />
        <div className={classes.exerciseName}>{exercise?.verbose_name || exercise?.name}</div>
      </div>
      <div className={classes.toHistory} onClick={() => navigate('/history')}>
        Посмотреть историю
        <ArrowLaft />
      </div>
    </div>
  )
}
