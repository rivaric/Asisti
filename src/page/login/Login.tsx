import { useStyles } from './Login.styles'
import { Logo } from '../../iconpack/Logo'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormInput } from './Login.interface'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/auth'

export default function Login() {
  const classes = useStyles()
  const { register, handleSubmit } = useForm<IFormInput>({ mode: 'onBlur' })
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IFormInput> = ({ phone, password }) => {
    login(phone, password).then(({ data }) => {
      localStorage.setItem('access', data.access_token)
      localStorage.setItem('refresh', data.refresh_token)
      navigate('/statistics')
    })
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="logo"></div>
      <Logo />
      <input
        type="text"
        className={classes.input}
        placeholder="Телефон"
        {...register('phone', { required: true })}
      />
      <input
        type="text"
        className={classes.input}
        placeholder="Пароль"
        {...register('password', { required: true })}
      />
      <button type="submit" className={classes.button}>
        Войти
      </button>
    </form>
  )
}
