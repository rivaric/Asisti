import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { useStyles } from './DoughnutChart.styles'
import { DoughnutChartProps } from './DoughnutChart.interface'

export function DoughnutChart({
  chartData,
  width,
  height,
}: DoughnutChartProps) {
  const classes = useStyles()

  return (
    <div className={classes.chart} style={{ width: width, height: height }}>
      <div className={classes.pracent}>80%</div>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: (width / 100) * 27,
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
