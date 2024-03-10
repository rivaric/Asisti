import { useEffect, useState, useRef, useCallback } from 'react'
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
import voiceDone from '../../assets/done.mp3'
import voiceStart from '../../assets/start.mp3'
import voiceBrake from '../../assets/brake.mp3'

export default function Train() {
  const classes = useStyles()
  const navigate = useNavigate()

  const audioBrake = useRef(new Audio(voiceBrake))
  const audioStart = useRef(new Audio(voiceStart))
  const audioDone = useRef(new Audio(voiceDone))

  useEffect(() => {
    const currentAudios = [
      audioBrake.current,
      audioDone.current,
      audioStart.current,
    ]

    currentAudios.forEach((currentAudio) => {
      currentAudio.currentTime = 0
    })

    return () => {
      currentAudios.forEach((currentAudio) => {
        currentAudio.pause()
        currentAudio.onended = () => {}
      })
    }
  }, [])

  const { recommendation, comment } = useExerciseStore(
    (state) => state.exercise
  )
  const repeat = useTrainStore((state) => state.repeat)
  const exercises = useTrainStore((state) => state.exercises)
  const setRepeat = useTrainStore((state) => state.setRepeat)
  const setExercises = useTrainStore((state) => state.setExercises)

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
    hand_to_mouth: <MPHolistic />,
    hand_to_forehead: <MPForehead />,
    hand_to_back_head: <MPBackhead />,
    hand_to_top_head: <MPTopHead />,
    hand_apart_90: <MPHandsApart90 />,
    hand_apart_120: <MPHandsApart120 />,
    hand_apart_180: <MPHandsApart180 />,
  }

  useEffect(() => {
    getAllExercises().then(({ data: fetchedData }) => {
      console.log(fetchedData)
      setData(fetchedData)
      setExercises(1, fetchedData.exercises.length - 1)
    })
  }, [setExercises])

  useEffect(() => {
    if (isOpenPopupBreak || isOpenPopupStart) setRepeat(0)
  }, [repeat, isOpenPopupBreak, isOpenPopupStart, setRepeat])

  useEffect(() => {
    if (repeat && !isOpenPopupBreak && !isOpenPopupStart) {
      audioDone.current.play()
    }
  }, [repeat, isOpenPopupBreak, isOpenPopupStart])

  useEffect(() => {
    if (isOpenPopupStart) {
      audioStart.current.play()
    }
    if (isOpenPopupBreak) {
      audioBrake.current.play()
    }
  }, [audioStart, audioDone, audioBrake, isOpenPopupBreak, isOpenPopupStart])

  const SwitchTrain = useCallback(() => {
    setIsOpenPopupBreak(true)
    if (exercises.require === 0) {
      navigate('/history')
    }
    completeExercise(
      String(data?.exercises[current]?.user_exercise_id),
      repeat
    ).then(() => {
      setCurrent(current + 1)
      setExercises(exercises?.done + 1, exercises?.require - 1)
      setRepeat(0)
    })
  }, [
    current,
    data?.exercises,
    exercises?.done,
    exercises?.require,
    repeat,
    setExercises,
    setCurrent,
    setRepeat,
    navigate,
    setIsOpenPopupBreak,
  ])

  useEffect(() => {
    if (repeat === data?.exercises[current]?.repeats) SwitchTrain()
  }, [repeat, SwitchTrain, data?.exercises, current])

  return (
    <div className={classes.container}>
      <Root />
      <Popup
        isOpenPopup={isOpenPopupStart}
        setIsOpenPopup={setIsOpenPopupStart}
        text="Следуйте инструкциям по выполнению упражнений."
        time={5000}
        isButton={true}
      />
      <Popup
        isOpenPopup={isOpenPopupBreak}
        setIsOpenPopup={setIsOpenPopupBreak}
        text="Сделайте перерыв между выполнениями упражнений 10 секунд."
        time={10000}
        isButton={false}
      />
      <div className={classes.train}>
        <div className={classes.windowWebCamera}>
          {ObjMP[data?.exercises[current]?.name as keyof typeof ObjMP] || (
            <Loading />
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

            <button
              className={classes.end}
              onClick={() => navigate('/history')}
            >
              Завершить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
