import { useStyles } from './Login.styles'
import { Logo } from '../../iconpack/Logo'

export function Login() {
  const classes = useStyles()

  return (
    <form className={classes.form}>
      <div className="logo"></div>
      <Logo />
      <input type="text" className={classes.input} placeholder='Логин' />
      <input type="text" className={classes.input} placeholder='Пароль' />
      <button type="submit" className={classes.button}>
        Войти
      </button>
    </form>
  )
}
