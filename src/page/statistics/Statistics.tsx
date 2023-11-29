import { HistoryCard } from '../../components/historyCard/HistoryCard'
import { ScheduledWorkouts } from '../../components/scheduledWorkouts/ScheduledWorkouts'
import { TodayInfo } from '../../components/todayInfo/TodayInfo'
import { Root } from '../root/Root'
import { useStyles } from './Statictics.styles'

export default function Statistics() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Root />
      <div className={classes.statistic}>
        <div className={classes.wrapper}>
          <TodayInfo />
          <HistoryCard />
        </div>
        <ScheduledWorkouts className={classes.scheduledWorkouts} />
      </div>
    </div>
  )
}
