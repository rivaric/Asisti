import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => {
  return {
    todayInfo: {
      // width: 'max-content',
      borderRadius: '10px',
      background: '#F2F3F4',
      padding: '20px 25px',
    },

    title: {
      fontWeight: '600',
      fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
      marginBottom: '20px',
    },

    item: {
      display: 'flex',
      flexDirection: 'column',
      gap: '19px',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: '#fff',
      borderRadius: '10px',
      paddingBottom: '30px',
      padding: '30px 45px',
      height: '100%',
    },

    name: {
      fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
      fontWeight: '400',
    },

    number: {
      fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
      fontWeight: '600',
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3)',
      gridTemplateRows: 'repeat(2, 170px)',
      gridGap: '20px',
      // display: 'flex'
    },

    exercises: {
      gridColumn: '1',
      gridRow: '1',
    },

    trainingSessions: {
      gridColumn: '2',
      gridRow: '1',
    },

    time: {
      gridColumn: '3',
      gridRow: '1',
    },

    accuracy: {
      gridColumn: '3',
      gridRow: '2',
    },

    daysShockPace: {
      gridColumn: '1 / 3',
      gridRow: '2',
    },

    dailyProgress: {
      gridRow: '1/3',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '25px 20px',
    },

    motivationText: {
      fontSize: 'clamp(0.75rem, 0.375rem + 0.469vw, 1.125rem)',
      minWidth: '200px',
    },
  }
})
