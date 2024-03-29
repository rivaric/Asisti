import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    position: 'relative',
    height: '100vh',
    width: '100vw',
  },
  train: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    background: '#f3f3f3',
    width: '100%',
    height: '100%',
  },

  windowWebCamera: {
    position: 'relative',
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    borderRadius: '10px',
    marginBottom: '30px',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  info: {
    height: '25%',
    display: 'flex',
    gap: '25px',
  },

  comment: {
    width: '50vw',
    borderRadius: '10px',
    padding: '15px 20px',
    background: '#fff',
    minHeight: '100%',
    flexGrow: '1',
  },

  title: {
    color: '#000',
    fontSize: 'clamp(0.7rem, 0rem + 1.25vw, 1.5rem)',
    fontWeight: '500',
    marginBottom: '10px',
  },

  progressTitle: {
    fontSize: 'clamp(1rem, 0rem + 1.25vw, 2rem)',
    fontWeight: '500',
    marginBottom: '10px',
  },

  text: {
    fontSize: 'clamp(2.5rem, 0rem + 1.25vw, 2.5rem)',
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
    justifyContent: 'space-around',
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
    alignItems: 'center',
    fontSize: 'clamp(2rem, 0rem + 1.25vw, 3rem)',
  },

  clock: {
    padding: '0 20px',
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
    fontSize: 'clamp(0.75rem, 0.375rem + 0.469vw, 1.125rem)',
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
    flexGrow: '1',
    background: '#BC5959',
    color: '#fff',
    borderRadius: '10px',
  },
})
