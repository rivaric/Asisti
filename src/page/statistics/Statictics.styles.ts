import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  statistic: {
    width: '100%',
    padding: '30px',
    display: 'grid',
    gridTemplateRows: '326px 431px',
    gridTemplateColumns: '771px 222px',
    gap: '25px',
  },

  todayStatictics: {
    gridColumn: '1',
    gridRow: '1',
  },

  historyCard: {
    gridColumn: '2',
    gridRow: '1',
  },

  scheduledWorkouts: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRow: '2',
  },
})
