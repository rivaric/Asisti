import { Route, Routes } from 'react-router-dom'
import { RouterProvider } from './lib/RouterProvider'
import { lazy } from 'react'
import { WithAccess } from './lib/WithAccess'

const Login = lazy(() => import('../page/login/Login'))
const Statistics = lazy(() => import('../page/statistics/Statistics'))
const Train = lazy(() => import('../page/train/Train'))
const Trains = lazy(() => import('../page/trains/Trains'))
const History = lazy(() => import('../page/history/History'))

export default function App() {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/statistics"
          element={
            <WithAccess>
              <Statistics />
            </WithAccess>
          }
        />
        <Route
          path="/train/:trainId"
          element={
            <WithAccess>
              <Train />
            </WithAccess>
          }
        />
        <Route
          path="/trains"
          element={
            <WithAccess>
              <Trains />
            </WithAccess>
          }
        />
        <Route
          path="/history"
          element={
            <WithAccess>
              <History />
            </WithAccess>
          }
        />
      </Routes>
    </RouterProvider>
  )
}
