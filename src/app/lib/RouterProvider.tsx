import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterProvider = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <Suspense fallback={'Загрузка...'}>{children}</Suspense>
  </BrowserRouter>
)
