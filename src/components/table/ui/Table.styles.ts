import { createStyles } from '@mantine/core'

export const useTableStyles = createStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    whiteSpace: 'nowrap',
    position: 'static',
    borderRadius: '10px',
    '::-webkit-scrollbar': {
      background: 'white',
      borderRadius: '0 10px 10px 0',
    },
    overflowY: 'auto',
    '::-webkit-scrollbar-corner': {
      background: 'white',
    },
    '::-webkit-scrollbar-thumb': {
      background: colors.gray[3],
      borderRadius: '999px',
      border: '4px solid rgba(0, 0, 0, 0)',
      backgroundClip: 'padding-box',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: colors.gray[4],
      border: '4px solid rgba(0, 0, 0, 0)',
      backgroundClip: 'padding-box',
    },
    maxHeight: '93vh',
  },
  table: {
    position: 'static',
    color: 'black',
    'thead, tbody': {
      'th, td': {
        textAlign: 'center',
        borderLeft: 'none',
        borderRight: 'none',
        ':last-of-type': {
          borderRight: 'none',
        },
        ':first-of-type': {
          borderLeft: 'none',
          borderBottom: 'none',
        },
      },
      tr: {
        height: '60px',
      },
    },
    tbody: {
      'tr > td': {
        borderTop: `1px ${colors.gray[4]} solid`,
      },
    },
  },
}))
