import { HTMLAttributes, useState } from 'react'
import { DoughnutChart } from '../doughnutChart/DoughnutChart'
import { useStyles } from './TodayInfo.styles'

export function TodayInfo(props: HTMLAttributes<HTMLDivElement>) {
  const classes = useStyles()
  const [chartData, setChartData] = useState({
    labels: ['Green', 'While'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#95BF7B', '#FFF'],
        borderRadius: 10
      },
    ],
  })

  return (
    <div className={classes.todayInfo}>
      <div className={classes.title}>Сегодня</div>
      <div className={classes.grid}>
        <div className={`${classes.item} ${classes.exercises}`}>
          <div className={classes.name}>Упражнения</div>
          <div className={classes.number}>5</div>
        </div>
        <div className={`${classes.item} ${classes.trainingSessions}`}>
          <div className={classes.name}>Тренировок</div>
          <div className={classes.number}>1</div>
        </div>
        <div className={`${classes.item} ${classes.time}`}>
          <div className={classes.name}>Время</div>
          <div className={classes.number}>20 мин</div>
        </div>
        <div className={`${classes.item} ${classes.daysShockPace}`}>
          <div className={classes.name}>Дней в ударном темпе</div>
          <div className={classes.number}>6</div>
        </div>
        <div className={`${classes.item} ${classes.accuracy}`}>
          <div className={classes.name}>Правильность</div>
          <div className={classes.number}>60%</div>
        </div>
        <div className={`${classes.item} ${classes.dailyProgress}`}>
          <div className={classes.name}>Днейвной прогресс</div>
          <DoughnutChart chartData={chartData} />
          <div className={classes.motivationText}>
            Продолжайте повышать уровень здоровья
          </div>
        </div>
      </div>
    </div>
  )
}
