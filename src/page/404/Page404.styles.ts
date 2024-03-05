import { createStyles } from '@mantine/styles'

export const usePage404Styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    color: '#95BF7B',
  },
  title: {
    fontSize: '154px',
  },
  text: {
    fontSize: '42px',
    textAlign: 'center',
    marginBottom: '25px',
  },
  button: {
    padding: '20px',
    borderRadius: '10px',
    background: '#95BF7B',

    color: '#FFF',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: 500,
  },
})
