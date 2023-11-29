import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { useStyles } from './DoughnutChart.styles'
import { DoughnutChartProps } from './DoughnutChart.interface'

export function DoughnutChart({ chartData, width, height }: DoughnutChartProps) {
  const classes = useStyles()

  return (
<<<<<<< HEAD
    <div className={classes.chart}>
      <div className={classes.pracent}>80%</div>
=======
    <div className={classes.chart} style={{width: width, height: height}}>
      <div className={classes.pracent}>
        80%
      </div>
>>>>>>> 3fa88932a147d85b07cf54d80efe49442cbc7a82
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: width / 100 * 27,
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
