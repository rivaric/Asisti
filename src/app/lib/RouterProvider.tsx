import { Center, Loader } from '@mantine/core'
import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterProvider = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <Suspense
      fallback={
        <Center h="100vh">
          <Loader color="teal" size={48} />
        </Center>
      }
    >
      {children}
    </Suspense>
  </BrowserRouter>
)
