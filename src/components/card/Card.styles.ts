import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  train: {
    background: '#fff',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '220px',
    height: '270px',
    paddingTop: '11px',
    paddingBottom: '13px',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },

  descr: {
    color: '#95BF7B',
    fontSize: '14px',
    fontWeight: '500',
  },

  name: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
    fontSize: '14px',
    color: '#000',
    fontWeight: '400',
  },
})
