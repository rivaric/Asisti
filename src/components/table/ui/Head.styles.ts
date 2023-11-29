import { createStyles } from '@mantine/core'

export const useHeadStyles = createStyles(({ colors }) => ({
  thead: {
    background: 'white',
    position: 'sticky',
    zIndex: 1,
    left: 0,
    top: '-0.5%',
    textAlign: 'center',
    '::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      background: colors.gray[4],
      width: '100%',
    },
    '::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '.7px',
      background: colors.gray[4],
      width: '100%',
    },
  },
  thChildren: {
    color: '#BECABC',
    fontSize: '16px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
