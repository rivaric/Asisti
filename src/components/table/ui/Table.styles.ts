import { createStyles } from '@mantine/core'

export const useTableStyles = createStyles(() => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    whiteSpace: 'nowrap',
    position: 'static',
    borderRadius: '10px',
    overflowY: 'auto',
    maxHeight: '93vh',
  },
  table: {
    position: 'static',
    color: 'black',
    'thead, tbody': {
      'th, td': {
        borderLeft: 'none',
        borderRight: 'none',
        ':last-of-type': {
          borderRight: 'none',
        },
        ':first-of-type': {
          padding: '20px 30px',
          borderLeft: 'none',
          borderBottom: 'none',
        },
      },
      tr: {
        height: '60px',
        cursor: 'pointer',
    ':hover': {
      transition: '0.3s',
      background: '#F1F8E7',
    },
      },
    },
    tbody: {
      'tr > td': {
        borderTop: `1px #D0DACE solid`,
      },
    },
  },
}))
