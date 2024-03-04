import { useEffect, useState } from 'react'
import { DoughnutChart } from '../../components/doughnutChart/DoughnutChart'
import { ArrowLaft } from '../../iconpack/ArrowLaft'
import { useStyles } from './Train.styles'
import { Clock } from '../../iconpack/Clock'
import { Popup } from '../../components/popup/Popup'
import { Root } from '../root/Root'
import { completeExercise, getAllExercises } from '../../api'
import { Exercise } from '../../types'
import {
  MPHolistic,
  MPForehead,
  MPBackhead,
  MPTopHead,
} from '../../components/MP/index'
import { useExerciseStore, useTrainStore } from '../../store'
import { useNavigate } from 'react-router-dom'
import { Timer } from '../../components/timer/Timer'
import { Loading } from '../../components/loading/Loading'
import train from '../../assets/train.mp3'

export default function Train() {
  const classes = useStyles()
  const navigate = useNavigate()

  const { recommendation, comment } = useExerciseStore(
    (state) => state.exercise
  )
  const repeat = useTrainStore((state) => state.repeat)
  const exercises = useTrainStore((state) => state.exercises)
  const setRepeat = useTrainStore((state) => state.setRepeat)
  const setExercises = useTrainStore((state) => state.setExercises)

  const [isOpenPopup, setIsOpenPopup] = useState(true)
  const [current, setCurrent] = useState(0)
  const [data, setData] = useState<{
    exercises: Exercise[]
    id: string
    mail: string
    name: string
    phone: string
    role: string
    surname: string
  }>()

  const ObjMP = {
    hand_to_mouth: <MPHolistic />,
    hand_to_forehead: <MPForehead />,
    hand_to_back_head: <MPBackhead />,
    hand_to_top_head: <MPTopHead />,
  }

  useEffect(() => {
    getAllExercises().then(({ data: fetchedData }) => {
      console.log(fetchedData)
      setData(fetchedData)
      setExercises(1, fetchedData.exercises.length - 1)
    })
  }, [setExercises])

  useEffect(() => {
    if (repeat) {
      const audio = new Audio(train) // Создаем новый экземпляр аудио
      audio.play() // Воспроизводим звук
    }
  }, [repeat])

  const SwitchTrain = () => {
    console.log(1)
    if (current + 1 < Number(data?.exercises?.length))
      completeExercise(
        String(data?.exercises[current]?.user_exercise_id),
        repeat
      ).then(() => {
        setCurrent(current + 1)
        setExercises(exercises?.done + 1, exercises?.require - 1)
        setRepeat(0)
      })
  }

  return (
    <div className={classes.container}>
      <Root />
      <Popup isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
      <div className={classes.train}>
        <div className={classes.windowWebCamera}>
          <Loading>
            <MPHolistic />
          </Loading>
        </div>
        <div className={classes.info}>
          <div className={classes.comment}>
            <div className={classes.title}>Комментарии по выполнению:</div>
            <div className={classes.text}>
              {recommendation || ''}
              <p style={{ color: '#BC5959', marginTop: '10px' }}>
                {comment || ''}
              </p>
            </div>
          </div>

          <div className={classes.progress}>
            <div className={classes.progressTitle}>Прогресс тренировки</div>
            <div className={classes.diagrams}>
              <div className={classes.diagram}>
                <DoughnutChart
                  chartData={{
                    done: repeat,
                    require: Number(data?.exercises[current]?.repeats) - repeat,
                  }}
                  width={82}
                  height={82}
                />
                <div className={classes.progressText}>
                  {repeat || 0}/{data?.exercises[current]?.repeats || 0}{' '}
                  Повторов
                </div>
              </div>
              <div className={classes.diagram}>
                <DoughnutChart chartData={exercises} width={82} height={82} />
                <div className={classes.progressText}>
                  {exercises?.require || 0 > 0
                    ? `Осталось ${exercises?.require || 0} упражнений`
                    : `Последнее упражнение`}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.buttonAndTimer}>
            <div className={classes.timer}>
              <div className={classes.clock}>
                <Clock />
              </div>

              {!isOpenPopup && (
                <Timer sec={60} completionTimer={() => SwitchTrain()} />
              )}
            </div>

            <button className={classes.next}>
              <div className={classes.nextText} onClick={() => SwitchTrain()}>
                Следующее упражнение
              </div>
              <ArrowLaft />
            </button>

            {current + 1 < Number(data?.exercises?.length) ? (
              <button className={classes.begin}>Начать</button>
            ) : (
              <button
                className={classes.end}
                onClick={() => navigate('/history')}
              >
                Завершить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
