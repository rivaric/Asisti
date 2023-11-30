import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    position: 'relative',
  },
  train: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    background: '#f3f3f3',
    width: '100%',
  },

  windowWebCamera: {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    borderRadius: '10px',
    marginBottom: '30px',
  },

  info: {
    height: '25%',
    display: 'flex',
    gap: '25px',
  },

  comment: {
    borderRadius: '10px',
    padding: '15px 20px',
    background: '#fff',
    minHeight: '100%',
    flexGrow: '1'
  },

  title: {
    color: '#000',
    fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
    fontWeight: '500',
    marginBottom: '20px',
  },

  progressTitle: {
    fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
    fontWeight: '500',
    marginBottom: '10px',
  },

  text: {
    fontSize: 'clamp(0.75rem, 0.375rem + 0.469vw, 1.125rem)',
    fontWeight: '400',
  },

  progress: {
    flexGrow: '0.5',
    background: '#fff',
    textAlign: 'center',
    padding: '15px 25px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  progressText: {
    fontSize: 'clamp(0.75rem, 0.375rem + 0.469vw, 1.125rem)',
  },

  diagrams: {
    display: 'flex',
    justifyContent: 'space-around',
    // width: '270px',
  },

  diagram: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    gap: '5px',
    width: 'min-content',
  },

  buttonAndTimer: {
    display: 'flex',
    flexGrow: '0.3',
    flexDirection: 'column',
    height: '100%',
    gap: '15px',
  },

  timer: {
    flexGrow: '1',
    borderRadius: '10px',
    display: 'flex',
    background: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'clamp(2rem, 0rem + 1.25vw, 3rem)',
    gap: '10px',
  },

  next: {
    flexGrow: '1',
    borderRadius: '10px',
    border: '1px solid #95BF7B',
    background: '#fff',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '7px',
    fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
    fontWeight: '500',
    color: '#95BF7B',
    textAlign: 'left',
  },

  nextText: {
    width: 'min-content',
  },

  begin: {
    fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
    flexGrow: '1',
    background: '#95BF7B',
    color: '#fff',
    height: '42px',
    borderRadius: '10px',
  },
  end: {
    width: '161px',
    background: '#BC5959',
    color: '#fff',
    height: '42px',
    borderRadius: '10px',
  },
})
