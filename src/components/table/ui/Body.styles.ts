import { createStyles } from '@mantine/core'

export const useBodyStyles = createStyles(({ colors }) => ({
  tr: {
    cursor: 'pointer',
    ':hover': {
      transition: '0.3s',
      background: '#F1F8E7',
    },
    height: '60px',
  },
}))
