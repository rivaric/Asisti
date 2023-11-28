import { useState } from 'react'
import { DoughnutChart } from '../../components/doughnutChart/DoughnutChart'
import { ArrowLaft } from '../../iconpack/ArrowLaft'
import { useStyles } from './Train.styles'
import { Clock } from '../../iconpack/Clock'
import { Popup } from '../../components/popup/Popup'

export function Train() {
  const classes = useStyles()
  const [isOpenPopup, setIsOpenPopup] = useState(true)
  const [chartData, setChartData] = useState({
    labels: ['Green', 'While'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#95BF7B', '#FFF'],
        borderRadius: 10,
      },
    ],
  })

  return (
    <>
      <Popup isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
      <div className={classes.train}>
        <div className={classes.windowWebCamera}></div>
        <div className={classes.info}>
          <div className={classes.comment}>
            <div className={classes.title}>Комментарии по выполнению:</div>
            <div className={classes.text}>
              Подносите руку ко рту, а затем отводите её
            </div>
          </div>
          <div className={classes.progress}>
            <div className={classes.progressTitle}>Прогресс тренировки</div>
            <div className={classes.diagrams}>
              <div className={classes.diagram}>
                <DoughnutChart chartData={chartData} width={82} height={82} />
                <div className={classes.progressText}>0/12 Повторов</div>
              </div>
              <div className={classes.diagram}>
                <DoughnutChart chartData={chartData} width={82} height={82} />
                <div className={classes.progressText}>
                  Осталось 5 упражнений
                </div>
              </div>
            </div>
          </div>
          <div className={classes.buttonAndTimer}>
            <div className={classes.timer}>
              <Clock />
              12:00
            </div>
            <button className={classes.next}>
              <div className={classes.nextText}>Слудующее упражнение</div>
              <ArrowLaft />
            </button>
            <button className={classes.begin}>Начать</button>
          </div>
        </div>
      </div>
    </>
  )
}
