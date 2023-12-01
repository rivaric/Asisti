import { Doctor } from '../../iconpack/Doctor'
import { Paperclip } from '../../iconpack/Paperclip'
import { Patient } from '../../iconpack/Patient'
import { Send } from '../../iconpack/Send'
import { Root } from '../root/Root'
import { useStyles } from './Feedback.styles'

export default function Feedback() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Root />
      <div className={classes.feedback}>
        <div className={classes.chatWrapper}>
          <div className={classes.chatSpace}>
            <div className={`${classes.message} ${classes.doctor}`}>
              <div className={classes.icon}>
                <Doctor />
              </div>
              <div className={classes.text}>
                Добрый день, Иван! Как вы себя чувствуете сегодня?
                <div className={classes.time}>
                  0:40
                </div>
              </div>
            </div>
            <div className={`${classes.message} ${classes.patient}`}>
              <div className={classes.text}>
                Здравствуйте, доктор. Я немного лучше с каждым днем. Координация
                движений стала чуть лучше
                <div className={classes.time}>
                  0:45
                </div>
              </div>
              <div className={classes.icon}>
                <Patient />
              </div>
            </div>
          </div>
          <div className={classes.actions}>
            <Paperclip />
            <input className={classes.input} placeholder='Напишите сообщение...'/>
            <div className={classes.send}>
              <Send />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
