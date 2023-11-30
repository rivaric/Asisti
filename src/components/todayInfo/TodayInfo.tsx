import { DoughnutChart } from '../doughnutChart/DoughnutChart'
import { useStyles } from './TodayInfo.styles'
import { Exercise } from '../../types'

export function TodayInfo({ data }: { data: Exercise[] }) {
  const classes = useStyles()

  return (
    <div className={classes.todayInfo}>
      <div className={classes.title}>Сегодня</div>
      <div className={classes.grid}>
        <div className={`${classes.item} ${classes.exercises}`}>
          <div className={classes.name}>Упражнения</div>
          <div className={classes.number}>{data.length}</div>
        </div>
        <div className={`${classes.item} ${classes.trainingSessions}`}>
          <div className={classes.name}>Тренировок</div>
          <div className={classes.number}>1</div>
        </div>
        <div className={`${classes.item} ${classes.time}`}>
          <div className={classes.name}>Время</div>
          <div className={classes.number}>0 мин</div>
        </div>
        <div className={`${classes.item} ${classes.daysShockPace}`}>
          <div className={classes.name}>Дней в ударном темпе</div>
          <div className={classes.number}>6</div>
        </div>
        <div className={`${classes.item} ${classes.accuracy}`}>
          <div className={classes.name}>Правильность</div>
          <div className={classes.number}>0%</div>
        </div>
        <div className={`${classes.item} ${classes.dailyProgress}`}>
          <div className={classes.name}>Дневной прогресс</div>
          <DoughnutChart
            chartData={{ done: 0, require: 1 }}
            width={100}
            height={100}
          />
          <div className={classes.motivationText}>
            Продолжайте повышать уровень здоровья
          </div>
        </div>
      </div>
    </div>
  )
}
