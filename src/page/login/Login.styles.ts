import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  form: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },

  input: {
    width: '320px',
    height: '42px',
    borderRadius: '7px',
    border: '1px solid #D0DACE',
    background: '#F9FAF8',
    padding: '10px 12px',
    '&::placeholder': {
      color: '#D0DACE',
      fontSize: '14px',
      fontWeight: '400',
    },
  },

  button: {
    width: '90px',
    height: '35px',
    borderRadius: '10px',
    background: '#95BF7B',

    color: '#FFF',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 500,
  },
})
