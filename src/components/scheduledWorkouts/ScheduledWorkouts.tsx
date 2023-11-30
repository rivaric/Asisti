import { useStyles } from './ScheduledWorkouts.styles'
import { Card } from '../card/Card'
import { Exercise } from '../../types'

export function ScheduledWorkouts({ data }: { data: Exercise[] }) {
  const classes = useStyles()

  return (
    <div className={classes.scheduled}>
      <div className={classes.title}>Назначенные тренировки</div>
      <div className={classes.listTrain}>
        {data.map(({ id, name, verbose_name, image_url }) => (
          <Card
            key={id}
            id={id}
            name={name}
            verbose_name={verbose_name}
            img={image_url}
          />
        ))}
      </div>
    </div>
  )
}
