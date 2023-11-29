import { Route, Routes } from 'react-router-dom'
import { RouterProvider } from './lib/RouterProvider'
import { lazy } from 'react'

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
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/train" element={<Train />} />
        <Route path="/trains" element={<Trains />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </RouterProvider>
  )
}
