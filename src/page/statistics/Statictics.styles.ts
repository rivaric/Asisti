import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
  },
  statistic: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    padding: '30px',
  },

  wrapper: {
    display: 'flex',
    gap: '25px',
  },

  scheduledWorkouts: {},
})
