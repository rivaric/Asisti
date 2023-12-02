import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    height: '100vh',
  },

  feedback: {
    width: '100%',
    minHeight: '100%',
    padding: '30px',
  },

  chatWrapper: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    width: '100%',
    minHeight: '100%',
    background: '#f2f3f4',
    overflow: 'hidden',
  },

  chatSpace: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: '30px',
    padding: '30px',
    width: '100%',
    height: '100%',
  },

  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    background: '#fff',
    width: '32px',
    height: '32px',
  },

  message: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  time: {
    position: 'absolute',
    fontSize: '10px',
    color: '#BECABC',
    right: '10px',
    bottom: '0px',
  },

  patient: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  doctor: {},

  text: {
    position: 'relative',
    padding: '12px',
    background: '#fff',
    borderRadius: '10px',
    maxWidth: '360px',
    fontSize: '14px',
    lineHeight: '155%',
    paddingBottom: '15px',
  },

  actions: {
    position: 'relative',
    height: '60px',
    padding: '10px 15px',
    background: '#DFDFDF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },

  input: {
    color: '#000',
    flexGrow: '1',
    borderRadius: '10px',
    border: '1px solid #BECABC',
    background: '#FFF',
    padding: '10px 15px',
    ':placeholder': {
      color: '#D0DACE',
    },
  },

  send: {
    position: 'absolute',
    right: '25px',
    top: '20px',
  },
})
