import { Doctor } from '../../iconpack/Doctor'
import { Patient } from '../../iconpack/Patient'
import { Paperclip } from '../../iconpack/Paperclip'
import { Send } from '../../iconpack/Send'
import { useMessagesStore } from '../../store'
import { Root } from '../root/Root'
import { useStyles } from './Feedback.styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { sendFeedback } from '../../api/sendFeedback'

interface Inputs {
  text: string
}

export default function Feedback() {
  const classes = useStyles()
  const { register, handleSubmit, reset } = useForm<Inputs>({ mode: 'onBlur' })

  const messages = useMessagesStore((state) => state.messages)
  const setMessage = useMessagesStore((state) => state.setMessage)

  const onSubmit: SubmitHandler<Inputs> = ({ text }) => {
    sendFeedback(text).then(() => {
      setMessage({
        sender: 'patient',
        time: new Date(),
        text,
      })
      reset()
    })
  }

  return (
    <div className={classes.container}>
      <Root />
      <div className={classes.feedback}>
        <div className={classes.chatWrapper}>
          <div className={classes.chatSpace}>
            {messages.map(({ sender, text, time }, i) => (
              <div
                key={i}
                className={`${classes.message} ${
                  sender === 'doctor' ? classes.doctor : classes.patient
                }`}
              >
                <div className={classes.icon}>
                  {sender === 'doctor' ? <Doctor /> : <Patient />}
                </div>
                <div className={classes.text}>
                  {text}
                  <div className={classes.time}>{`${time.getHours()}:${
                    time.getMinutes() > 10
                      ? time.getMinutes()
                      : `0${time.getMinutes()}`
                  }`}</div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.actions}>
              <Paperclip />
              <input
                {...register('text', { required: true })}
                className={classes.input}
                placeholder="Напишите сообщение..."
              />
              <button className={classes.send}>
                <Send />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
