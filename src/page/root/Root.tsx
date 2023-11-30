import { Outlet, useNavigate, useLocation } from 'react-router'
import { Connection } from '../../iconpack/Connection'
import { Exit } from '../../iconpack/Exit'
import { History } from '../../iconpack/History'
import { Logo } from '../../iconpack/Logo'
import { Primary } from '../../iconpack/Primary'
import { Profile } from '../../iconpack/Profile'
import { useStyles } from './Root.styles'

export function Root() {
  const classes = useStyles()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onExit = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    navigate('/login')
  }

  return (
    <div className={classes.root}>
      <div className={classes.navbar}>
        <div>
          <Logo className={classes.logo} />
          <ul className={classes.nav}>
            <li
              className={pathname === '/profile' ? classes.active : ''}
            >
              <Profile />
              Профиль
            </li>
            <li
              className={pathname === '/statistics' ? classes.active : ''}
              onClick={() => navigate('/statistics')}
            >
              <Primary />
              Главная
            </li>
            <li
              className={pathname === '/history' ? classes.active : ''}
              onClick={() => navigate('/history')}
            >
              <History />
              История
            </li>
            <li>
              <Connection />
              Обратная связь
            </li>
          </ul>
        </div>
        <div className={classes.exit} onClick={onExit}>
          <Exit />
          Выход
        </div>
      </div>
      <Outlet />
    </div>
  )
}
