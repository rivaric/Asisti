import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  todayInfo: {
    width: 'min-content',
    borderRadius: '10px',
    background: '#F2F3F4',
    padding: '20px 25px',
  },

  title: {
    fontWeight: '600',
    marginBottom: '20px',
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '19px',
    alignItems: 'center',
    textAlign: 'center',
    background: '#fff',
    borderRadius: '10px',
    paddingTop: '22px',
    paddingBottom: '30px',
  },

  name: {
    fontSize: '16px',
    fontWeight: '400',
  },

  number: {
    fontSize: '24px',
    fontWeight: '600',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 157px) 190px',
    gridTemplateRows: 'repeat(2, 113px)',
    gridGap: '20px',
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
  },

  motivationText: {
    fontSize: '12px',
  },
})
