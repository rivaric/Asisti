import { useNavigate } from 'react-router-dom'
import { useStyles } from './Card.styles'
import { getTrainingPhotos } from '../../lib/getTrainingPhotos'

interface CardProps {
  id?: string
  name?: string
  verbose_name?: string
  img?: string
}

export function Card({ id, name, verbose_name }: CardProps) {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.train} onClick={() => navigate(`/train/${id}`)}>
      <div className={classes.descr}>6 мин • 5 упражнений</div>
      <img
        src={getTrainingPhotos(verbose_name || '')}
        style={{ minHeight: '170px' }}
      />
      <div className={classes.name}>{verbose_name || name}</div>
    </div>
  )
}
