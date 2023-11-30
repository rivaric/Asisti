import { useEffect, useState } from 'react'
import { DoughnutChart } from '../../components/doughnutChart/DoughnutChart'
import { ArrowLaft } from '../../iconpack/ArrowLaft'
import { useStyles } from './Train.styles'
import { Clock } from '../../iconpack/Clock'
import { Popup } from '../../components/popup/Popup'
import { Root } from '../root/Root'
import { completeExercise, getAllExercises } from '../../api'
import { Exercise } from '../../types'
import { MPHolistic } from '../../components/MPHolistic/'
import { useTrainStore } from '../../components/MPHolistic/store'
import { useNavigate } from 'react-router-dom'

export default function Train() {
  const classes = useStyles()
  const { reccomendation, comment, count } = useTrainStore(
    (state) => state.exercise
  )
  const [isOpenPopup, setIsOpenPopup] = useState(true)

  const [data, setData] = useState<Exercise[]>([])
  const [id, setId] = useState('')

  const [exercises, setExercises] = useState(0)
  const [exerciseData, setExerciseData] = useState<number[]>([])

  const [repeatData, setRepeatData] = useState([0, 1])
  const navigate = useNavigate()

  const access = localStorage.getItem('access_token')
  useEffect(() => {
    getAllExercises().then(({ data: fetchedData }) => {
      console.log(fetchedData)
      setExercises(fetchedData.exercises.length)
      setId(fetchedData.exercises[0].id)
      setData(fetchedData.exercises)
    })
  }, [])

  useEffect(() => {
    setExerciseData([1, exercises - 1])
  }, [exercises])

  return (
    <div className={classes.container}>
      <Root />
      <Popup isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
      <div className={classes.train}>
        <div className={classes.windowWebCamera}>
          <MPHolistic />
        </div>
        <div className={classes.info}>
          <div className={classes.comment}>
            <div className={classes.title}>Комментарии по выполнению:</div>
            <div className={classes.text}>
              {reccomendation}
              <p style={{ color: '#BC5959', marginTop: '20px' }}>{comment}</p>
            </div>
          </div>
          <div className={classes.progress}>
            <div className={classes.progressTitle}>Прогресс тренировки</div>
            <div className={classes.diagrams}>
              <div className={classes.diagram}>
                <DoughnutChart chartData={[0, 100]} width={82} height={82} />
                <div className={classes.progressText}>
                  {count || 0}/{data[exerciseData[0]]?.repeats} Повторов
                </div>
              </div>

              <div className={classes.diagram}>
                <DoughnutChart
                  chartData={exerciseData}
                  width={82}
                  height={82}
                />
                <div className={classes.progressText}>
                  Осталось {exercises - exerciseData[0]} упражнений
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
              <div
                className={classes.nextText}
                onClick={() => {
                  completeExercise(id, count).then(() => {
                    setExerciseData([exerciseData[0] + 1, exerciseData[1] - 1])
                    setRepeatData([0, 100])
                  })
                }}
              >
                Следующее упражнение
              </div>
              <ArrowLaft />
            </button>
            <button className={classes.begin}>Начать</button>
          </div>
        </div>
      </div>
    </div>
  )
}
