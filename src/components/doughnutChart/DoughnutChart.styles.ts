import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  chart: {
    position: 'relative',
    width: '100px',
    height: '100px',
    background: '#F1F8E7',
    borderRadius: '100%',
    padding: '10px',
  },

  pracent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    fontSize: '16px',
    fontWeight: '500',
  }
})
