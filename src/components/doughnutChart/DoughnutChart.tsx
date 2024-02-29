import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { useStyles } from './DoughnutChart.styles'

interface DoughnutChartProps {
  chartData: {
    done: number
    require: number
  }
  width: number
  height: number
}

export function DoughnutChart({
  chartData,
  width,
  height,
}: DoughnutChartProps) {
  const classes = useStyles()

  return (
    <div className={classes.chart} style={{ width: width, height: height }}>
      <div className={classes.pracent}>
        {(
          (chartData.done / (chartData.require + chartData.done || 1) || 0) *
          100
        ).toFixed()}
        %
      </div>
      <Doughnut
        data={{
          labels: ['Green', 'While'],
          datasets: [
            {
              data: Object.values(chartData),
              backgroundColor: ['#95BF7B', '#FFF'],
              borderRadius: 10,
            },
          ],
        }}
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
