import { Center, Loader } from '@mantine/core'
import { useLoadingStyles } from './Loader.styles'

export const Loading = () => {
  const { classes } = useLoadingStyles()

  return (
    <Center className={classes.container}>
      <Loader size="lg" color="#95BF7B" />
    </Center>
  )
}
