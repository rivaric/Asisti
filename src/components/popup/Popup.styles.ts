import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  bgPopup: {
    position: 'absolute',
    background: 'rgba(155, 155, 155, 0.40)',
    width: '100%',
    height: '100%',
    zIndex: '10',
  },

  popup: {
    position: 'absolute',
    background: '#F1F8E7',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    borderRadius: '10px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    fontSize: 'clamp(1.2rem, 0rem + 1.25vw, 3rem)',
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
    marginBottom: '20px',
  },

  ok: {
    color: '#fff',
    background: '#95BF7B',
    borderRadius: '10px',
    width: '107px',
    height: '42px',
  },
})
