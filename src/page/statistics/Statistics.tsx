import { TodayInfo } from "../../components/todayInfo/TodayInfo"
import { useStyles } from "./Statictics.styles"

export default function Statistics() {
  const classes = useStyles()
  
  return (
    <div className={classes.statistic}>
      <TodayInfo />
    </div>
  )
}