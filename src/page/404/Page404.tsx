import { useNavigate } from 'react-router-dom'
import { usePage404Styles } from './Page404.styles'

export default function Page404() {
  const { classes } = usePage404Styles()
  const navigate = useNavigate()

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>404</h1>
      <div className={classes.text}>Страница не найдена</div>
      <button className={classes.button} onClick={() => navigate('/')}>
        Вернуться на логин
      </button>
    </div>
  )
}
