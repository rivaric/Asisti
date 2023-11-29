import { useStyles } from './Login.styles'
import { Logo } from '../../iconpack/Logo'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <form className={classes.form}>
      <div className="logo"></div>
      <Logo />
      <input type="text" className={classes.input} placeholder="Логин" />
      <input type="text" className={classes.input} placeholder="Пароль" />
      <button
        type="submit"
        className={classes.button}
        onClick={() => navigate('/statistics')}
      >
        Войти
      </button>
    </form>
  )
}
