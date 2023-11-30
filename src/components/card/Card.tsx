import { useNavigate } from 'react-router-dom'
import { useStyles } from './Card.styles'
import exercise from '../../assets/exercise.jpg'

interface CardProps {
  id: string
  name: string
  verbose_name: string
  img?: string
}

export function Card({ id, name, verbose_name, }: CardProps) {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.train} onClick={() => navigate(`/train/${id}`)}>
      {/* <div className={classes.descr}>15 мин • 5 упражнений</div> */}
      <img src={exercise} width="80%" />
      <div className={classes.name}>{verbose_name || name}</div>
    </div>
  )
}
