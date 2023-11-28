import { HistoryCard } from '../../components/historyCard/HistoryCard'
import { ScheduledWorkouts } from '../../components/scheduledWorkouts/ScheduledWorkouts'
import { TodayInfo } from '../../components/todayInfo/TodayInfo'
import { useStyles } from './Statictics.styles'

export function Statistics() {
  const classes = useStyles()

  return (
    <div className={classes.statistic}>
      <div className={classes.wrapper}>
        <TodayInfo />
        <HistoryCard />
      </div>
      <ScheduledWorkouts className={classes.scheduledWorkouts} />
    </div>
  )
}
