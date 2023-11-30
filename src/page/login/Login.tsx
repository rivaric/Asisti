import { useStyles } from './Login.styles'
import { Logo } from '../../iconpack/Logo'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../api'

export default function Login() {
  const classes = useStyles()
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  return (
    <div className={classes.form}>
      <div className="logo"></div>
      <Logo />
      <input
        type="text"
        className={classes.input}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Логин"
      />
      <input
        type="text"
        className={classes.input}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <button
        // type="submit"
        className={classes.button}
        onClick={() =>
          login(phone, password)
            .then(({ data }) => {
              localStorage.setItem('access_token', data.access_token)
              navigate('/statistics')
            })
            .catch(() => setError(true))
        }
      >
        {error && 'Не удалось выполнить вход'}
        Войти
      </button>
    </div>
  )
}
