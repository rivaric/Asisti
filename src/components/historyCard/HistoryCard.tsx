import { useStyles } from './HistoryCard.styles'
import { ArrowLaft } from '../../iconpack/ArrowLaft'
import { useNavigate } from 'react-router-dom'
import { Exercise } from '../../types'
import { getTrainingPhotos } from '../../lib/getTrainingPhotos'

export function HistoryCard({ exercise }: { exercise: Exercise }) {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.card}>
      <div className={classes.title}>История упражнений</div>
      <div
        className={classes.exercise}
        onClick={() => navigate(`/train/${exercise.id}`)}
      >
        <div className={classes.counter}>12/16</div>
        <img
          src={getTrainingPhotos(exercise?.verbose_name)}
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        />
        <div className={classes.exerciseName}>
          {exercise?.verbose_name || exercise?.name}
        </div>
      </div>
      <div className={classes.toHistory} onClick={() => navigate('/history')}>
        Посмотреть историю
        <ArrowLaft />
      </div>
    </div>
  )
}
