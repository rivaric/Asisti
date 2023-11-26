import { Outlet } from 'react-router'
import { Connection } from '../../iconpack/Connection'
import { Exit } from '../../iconpack/Exit'
import { History } from '../../iconpack/History'
import { Logo } from '../../iconpack/Logo'
import { Primary } from '../../iconpack/Primary'
import { Profile } from '../../iconpack/Profile'
import { useStyles } from './Root.styles'

export function Root() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.navbar}>
        <div className={classes.wrapper}>
          <Logo className={classes.logo} />
          <ul className={classes.nav}>
            <li>
              <Profile />
              Профиль
            </li>
            <li className={classes.active}>
              <Primary />
              Главная
            </li>
            <li>
              <History />
              История
            </li>
            <li>
              <Connection />
              Обратная связь
            </li>
          </ul>
        </div>
        <div className={classes.exit}>
          <Exit />
          Выход
        </div>
      </div>
      <Outlet />
    </div>
  )
}
