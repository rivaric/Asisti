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
    getExercises().then(({ data: fetchedData }) =>
      setData(fetchedData.exercises)
    )
  }, [])

  return (
    <div className={classes.container}>
      <Root />
      <div className={classes.statistic}>
        <div className={classes.wrapper}>
          <div style={{ width: '70%', height: '100%' }}>
            <TodayInfo data={data} />
          </div>
          <div style={{ width: '30%', height: '100%' }}>
            <HistoryCard exercise={data[0]} />
          </div>
        </div>
        <ScheduledWorkouts data={data} />
      </div>
    </div>
  )
}
