import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: '#F2F3F4',
    borderRadius: '10px',
    padding: 'calc(10px + 1vw)',
    height: '90%',
  },

  title: {
    fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
    textAlign: 'center',
    fontWeight: '600',
    color: '#0F1317',
    marginBottom: '21px',
  },

  exercise: {
    background: '#fff',
    borderRadius: '10px',
    flexGrow: '1',
    marginBottom: '15px',
    padding: '10px 25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    width: '80%',
  },

  counter: {
    fontSize: 'clamp(0.75rem, 0.375rem + 0.469vw, 1.125rem)',
    textAlign: 'right',
    color: '#9DC586',
    fontWeight: '600',
  },

  exerciseName: {
    fontSize: 'clamp(0.75rem, 0.375rem + 0.469vw, 1.125rem)',
    textAlign: 'center',
  },

  toHistory: {
    display: 'flex',
    alignItems: 'center',
    color: '#95BF7B',
    fontSize: 'clamp(0.75rem, 0.375rem + 0.469vw, 1.125rem)',
    cursor: 'pointer',
    gap: '10px',
  },
})
