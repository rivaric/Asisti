import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { useStyles } from './DoughnutChart.styles'

export function DoughnutChart({ chartData }: any) {
  const classes = useStyles()

  return (
    <div className={classes.chart}>
      <div className={classes.pracent}>80%</div>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: 30,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        }}
      />
    </div>
  )
}
