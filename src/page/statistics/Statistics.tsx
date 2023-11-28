import { HistoryCard } from '../../components/historyCard/HistoryCard'
import { ScheduledWorkouts } from '../../components/scheduledWorkouts/ScheduledWorkouts'
import { TodayInfo } from '../../components/todayInfo/TodayInfo'
import { useStyles } from './Statictics.styles'

export default function Statistics() {
  const classes = useStyles()

  return (
    <div className={classes.statistic}>
      <TodayInfo className={classes.todayStatictics}/>
      <HistoryCard className={classes.historyCard}/>
      <ScheduledWorkouts className={classes.scheduledWorkouts}/>
    </div>
  )
}
