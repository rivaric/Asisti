import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  scheduled: {
    flexGrow: '1',
    background: '#F2F3F4',
    borderRadius: '10px',
    padding: '20px 25px',
  },

  title: {
    color: '#0F1317',
    fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
    marginBottom: '20px',
  },

  listTrain: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '29px',
    borderRadius: '10px',
    overflow: 'auto',
    height: '90%',
  },
})
