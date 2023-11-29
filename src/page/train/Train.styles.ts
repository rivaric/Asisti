import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  container: {
    display: 'flex'
  },
  train: {
    padding: '30px',
    background: '#f3f3f3',
    height: '100vh',
  },

  windowWebCamera: {
    width: '1018px',
    height: '562px',
    background: '#fff',
    borderRadius: '10px',
    marginBottom: '30px',
  },

  info: {
    display: 'flex',
    gap: '25px',
  },

  comment: {
    borderRadius: '10px',
    padding: '15px 20px',
    background: '#fff',
    height: '180px',
    width: '487px',
  },

  title: {
    color: '#000',
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '20px',
  },

  progressTitle: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '10px',
  },

  text: {
    fontSize: '16px',
    fontWeight: '400',
  },

  progress: {
    background: '#fff',
    textAlign: 'center',
    padding: '15px 25px',
    borderRadius: '10px',
  },

  progressText: {
    fontSize: '14px',
  },

  diagrams: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '270px',
  },

  diagram: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    gap: '5px',
    width: '100px',
  },

  buttonAndTimer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: '15px',
  },

  timer: {
    width: '161px',
    height: '47px',
    borderRadius: '10px',
    display: 'flex',
    background: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    gap: '10px',
  },

  next: {
    borderRadius: '10px',
    border: '1px solid #95BF7B',
    background: '#fff',
    width: '161px',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#95BF7B',
    textAlign: 'left',
  },

  nextText: {
    width: 'min-content',
  },

  begin: {
    width: '161px',
    background: '#95BF7B',
    color: '#fff',
    height: '42px',
    borderRadius: '10px',
  },
})
