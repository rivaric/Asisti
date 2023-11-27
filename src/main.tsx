import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Login } from './page/login/Login'
import { Root } from './page/root/Root'
import { Statistics } from './page/statistics/Statistics'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'statistics',
        element: <Statistics />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
)
