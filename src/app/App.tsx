import { Route, Routes } from 'react-router-dom'
import { RouterProvider } from './lib/RouterProvider'
import { lazy } from 'react'
import { CheckAuth } from '../HOC/CheckAuth'

const Login = lazy(() => import('../page/login/Login'))
const Statistics = lazy(() => import('../page/statistics/Statistics'))
const Train = lazy(() => import('../page/train/Train'))
const Trains = lazy(() => import('../page/trains/Trains'))
const History = lazy(() => import('../page/history/History'))
const Feedback = lazy(() => import('../page/feedback/Feedback'))
const Page404 = lazy(() => import('../page/404/Page404'))

export default function App() {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/statistics"
          element={
            <CheckAuth>
              <Statistics />
            </CheckAuth>
          }
        />
        <Route
          path="/train/:trainId"
          element={
            <CheckAuth>
              <Train />
            </CheckAuth>
          }
        />
        <Route
          path="/trains"
          element={
            <CheckAuth>
              <Trains />
            </CheckAuth>
          }
        />
        <Route
          path="/history"
          element={
            <CheckAuth>
              <History />
            </CheckAuth>
          }
        />
        <Route
          path="/feedback"
          element={
            <CheckAuth>
              <Feedback />
            </CheckAuth>
          }
        />
      </Routes>
    </RouterProvider>
  )
}
