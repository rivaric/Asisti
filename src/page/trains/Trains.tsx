import { Card } from '../../components/card/Card'
import { ArrowLaft } from '../../iconpack/ArrowLaft'
import { Root } from '../root/Root'
import { useStyles } from './Trains.styles'

export default function Trains() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Root />
      <div className={classes.trains}>
        <div className={classes.header}>
          <div className={classes.title}>
            <ArrowLaft className={classes.arrow} />
            Тренировка для рук
          </div>
          <div className={classes.descr}>15 мин • 5 упражнений</div>
        </div>
        <div className={classes.listExercises}>
          <Card />
        </div>
      </div>
    </div>
  )
}
