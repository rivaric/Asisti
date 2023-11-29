import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },

  navbar: {
    minWidth: '200px',
    height: '100vh',
    backgroundColor: '#D9F0E5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: '400',
    padding: '0px 0px 30px 0px',
  },

  logo: {
    width: '100%',
    padding: '20px 69px 27px 34px',
    '& path': { fill: '#000' },
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',

    '& li': {
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      paddingLeft: '20px',
      cursor: 'pointer',
    },
  },

  active: {
    background: '#F0FFF8',
  },

  wrapper: {},

  exit: {
    display: 'flex',
    gap: '6px',
    paddingLeft: '20px',
    cursor: 'pointer',
  },
})
