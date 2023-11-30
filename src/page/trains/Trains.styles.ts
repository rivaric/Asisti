import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
  },

  trains: {
    width: '100%',
    height: '100%',
    padding: '30px',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '35px',
  },

  arrow: {
    transform: 'rotate(180deg)',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#000',
    fontWeight: '600',
    fontSize: '16px',
  },

  descr: {
    color: '#95BF7B',
    fontSize: '16px',
    fontWeight: '500',
  },

  listExercises: {
    display: 'flex',
    gap: '30px',
    background: '#f2f3f4',
    padding: '30px 25px',
    borderRadius: '10px',
    flexWrap: 'wrap',
    height: '715px',
    overflow: 'auto',
  },
})
