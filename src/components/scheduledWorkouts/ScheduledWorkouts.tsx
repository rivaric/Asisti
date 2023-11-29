import { HTMLAttributes } from 'react'
import { useStyles } from './ScheduledWorkouts.styles'
import { Card } from '../card/Card'

export function ScheduledWorkouts(props: HTMLAttributes<HTMLDivElement>) {
  const classes = useStyles()

  return (
    <div className={classes.scheduled}>
      <div className={classes.title}>Назначенные тренировки</div>
      <div className={classes.listTrain}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
