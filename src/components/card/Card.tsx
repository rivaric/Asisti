import { useNavigate } from 'react-router-dom'
import { useStyles } from './Card.styles'

interface CardProps {
  id: string
  name: string
  verbose_name: string
  img?: string
}

export function Card({ id, name, verbose_name, img }: CardProps) {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <div className={classes.train} onClick={() => navigate(`/train/${id}`)}>
      <div className={classes.descr}>15 мин • 5 упражнений</div>
      <img src={img} />
      <div className={classes.name}>{name}</div>
    </div>
  )
}
