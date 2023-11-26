import { useStyles } from './TodayInfo.styles'
import GridLayout from 'react-grid-layout'

export function TodayInfo() {
  const classes = useStyles()
  const layout = [
    { i: 'b', x: 0, y: 0, w: 1, h: 1, static: true },
    { i: 'c', x: 1, y: 0, w: 1, h: 1, static: true },
    { i: 'a', x: 2, y: 0, w: 1, h: 1, static: true },
  ]

  return (
    <div className={classes.todayInfo}>
      <div className={classes.title}>Сегодня</div>
      <GridLayout layout={layout} rowHeight={113} cols={4}>
        <div className={classes.item} key="a">
          1
        </div>
        <div className={classes.item} key="b">
          2
        </div>
        <div className={classes.item} key="c">
          3
        </div>
      </GridLayout>
    </div>
  )
}
