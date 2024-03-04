import { Center, Loader } from '@mantine/core'
import { useLoadingStyles } from './Loader.styles'
import { ReactNode } from 'react'

export const Loading = ({ children }: { children?: ReactNode }) => {
  const { classes } = useLoadingStyles()

  return (
    <Center className={classes.container}>
      <Loader color="#95BF7B" />
      {children}
    </Center>
  )
}
