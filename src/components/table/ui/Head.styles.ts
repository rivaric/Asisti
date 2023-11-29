import { createStyles } from '@mantine/core'

export const useHeadStyles = createStyles(() => ({
  thead: {
    background: 'white',
    position: 'sticky',
    zIndex: 1,
    left: 0,
    top: '-0.5%',
    textAlign: 'center',
    '::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '.7px',
      background: '#D0DACE',
      width: '100%',
    },
  },
  thChildren: {
    color: '#BECABC',
    fontSize: '16px',
    width: '100%',
    alignItems: 'center',
  },
}))
