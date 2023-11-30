import { useEffect, useState } from 'react'
import { DoughnutChart } from '../../components/doughnutChart/DoughnutChart'
import { ArrowLaft } from '../../iconpack/ArrowLaft'
import { useStyles } from './Train.styles'
import { Clock } from '../../iconpack/Clock'
import { Popup } from '../../components/popup/Popup'
import { Root } from '../root/Root'
import { getExercises } from '../../api'
import { Exercise } from '../../types'

export default function Train() {
  const classes = useStyles()
  const [isOpenPopup, setIsOpenPopup] = useState(true)
  const [data, setData] = useState<Exercise[]>([])
  const [currentExercise, setCurrentExercise] = useState(1)

  const [exercises, setExercises] = useState(0)
  const [exerciseData, setExerciseData] = useState<number[]>([])

  const [repeatData, setRepeatData] = useState([0, 12])

  useEffect(() => { getExercises().then(({data: fetchedData}) => {
    setExercises(fetchedData.length)
    setExerciseData([1, exercises - 1])
  })}, [exercises])

  return (
    <div className={classes.container}>
      <Root />
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
                <DoughnutChart chartData={[0, 100]} width={82} height={82} />
                <div className={classes.progressText}>{repeatData[0]}/{repeatData[1]} Повторов</div>
              </div>
              
              <div className={classes.diagram}>
                <DoughnutChart chartData={exerciseData} width={82} height={82} />
                <div className={classes.progressText}>
                  Осталось {exercises - currentExercise} упражнений
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
              <div className={classes.nextText} onClick={() => {
                setExerciseData([exerciseData[0] + 1, exerciseData[1] - 1])

                setRepeatData([0, 100])
              }}>Следующее упражнение</div>
              <ArrowLaft />
            </button>
            <button className={classes.begin}>Начать</button>
          </div>
        </div>
      </div>
    </div>
  )
}
