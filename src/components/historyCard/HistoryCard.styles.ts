import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: '#F2F3F4',
    borderRadius: '10px',
    paddingTop: '20px',
  },

  title: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0F1317',
    marginBottom: '21px',
  },

  exercise: {
    background: '#fff',
    borderRadius: '10px',
    width: '176px',
    height: '216px',
    marginBottom: '15px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },

  counter: {
    textAlign: 'right',
    color: '#9DC586',
    fontWeight: '600',
  },

  exerciseName: {
    textAlign: 'center',
    fontSize: '14px',
  },

  toHistory: {
    display: 'flex',
    alignItems: 'center',
    color: '#95BF7B',
    fontSize: '14px',
    cursor: 'pointer',
  },
})
