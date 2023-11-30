import { useState, useEffect } from 'react'
import { getExercises } from '../../api'
import { HistoryCard } from '../../components/historyCard/HistoryCard'
import { ScheduledWorkouts } from '../../components/scheduledWorkouts/ScheduledWorkouts'
import { TodayInfo } from '../../components/todayInfo/TodayInfo'
import { Exercise } from '../../types'
import { Root } from '../root/Root'
import { useStyles } from './Statictics.styles'

export default function Statistics() {
  const classes = useStyles()

  const [data, setData] = useState<Exercise[]>([])
  
  useEffect(() => {
    getExercises().then(({ data: fetchedData }) => setData(fetchedData))
  }, [])

  return (
    <div className={classes.container}>
      <Root />
      <div className={classes.statistic}>
        <div className={classes.wrapper}>
          <TodayInfo data={data} />
          <HistoryCard />
        </div>
        <ScheduledWorkouts data={data} />
      </div>
    </div>
  )
}
