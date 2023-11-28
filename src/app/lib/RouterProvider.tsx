import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterProvider = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    {children}
    {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
  </BrowserRouter>
)