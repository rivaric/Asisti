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
  MPHandsApart90,
  MPHandsApart120,
  MPHandsApart180,
} from '../../components/MP/index'
import { useExerciseStore, useTrainStore } from '../../store'
import { useNavigate } from 'react-router-dom'
import { Timer } from '../../components/timer/Timer'
import { Loading } from '../../components/loading/Loading'
import train from '../../assets/correct-answer.mp3'

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

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isOpenPopupStart, setIsOpenPopupStart] = useState(true)
  const [isOpenPopupBreak, setIsOpenPopupBreak] = useState(false)
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
    hand_to_mouth: (
      <MPHolistic isLoading={isLoading} setIsLoading={setIsLoading} />
    ),
    hand_to_forehead: (
      <MPForehead isLoading={isLoading} setIsLoading={setIsLoading} />
    ),
    hand_to_back_head: (
      <MPBackhead isLoading={isLoading} setIsLoading={setIsLoading} />
    ),
    hand_to_top_head: (
      <MPTopHead isLoading={isLoading} setIsLoading={setIsLoading} />
    ),
    hand_apart_90: (
      <MPHandsApart90 isLoading={isLoading} setIsLoading={setIsLoading} />
    ),
    hand_apart_120: (
      <MPHandsApart120 isLoading={isLoading} setIsLoading={setIsLoading} />
    ),
    hand_apart_180: (
      <MPHandsApart180 isLoading={isLoading} setIsLoading={setIsLoading} />
    ),
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
    if (current + 1 < Number(data?.exercises?.length))
      completeExercise(
        String(data?.exercises[current]?.user_exercise_id),
        repeat
      ).then(() => {
        if (current + 1 !== Number(data?.exercises?.length) - 1)
          setIsOpenPopupBreak(true)
        setCurrent(current + 1)
        setExercises(exercises?.done + 1, exercises?.require - 1)
        setRepeat(0)
      })
  }

  return (
    <div className={classes.container}>
      <Root />
      <Popup
        isOpenPopup={isOpenPopupStart}
        setIsOpenPopup={setIsOpenPopupStart}
        text="Следуйте инструкциям по выполнению упражнений."
        time={10000}
        isButton={false}
      />
      <Popup
        isOpenPopup={isOpenPopupBreak}
        setIsOpenPopup={setIsOpenPopupBreak}
        text="Сделайте перерыв между выполнениями упражнений 10 секунд."
        time={10000}
        isButton={true}
      />
      <div className={classes.train}>
        <div className={classes.windowWebCamera}>
          {ObjMP[data?.exercises[current]?.name as keyof typeof ObjMP]}
          {isLoading ? (
            <div className={classes.loader}>
              <Loading />
            </div>
          ) : (
            ''
          )}
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

              {!isOpenPopupStart &&
              !isOpenPopupBreak &&
              current + 1 < Number(data?.exercises?.length) ? (
                <Timer sec={60} completionTimer={() => SwitchTrain()} />
              ) : (
                '0:00'
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
