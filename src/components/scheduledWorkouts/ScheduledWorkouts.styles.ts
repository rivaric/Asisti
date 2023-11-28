import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
  scheduled: {
    background: '#F2F3F4',
    borderRadius: '10px',
    padding: '20px 25px',
    height: '431px',
    width: '100%'
  },

  title: {
    color: '#0F1317',
    marginBottom: '20px',
  },

  listTrain: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '29px',
    borderRadius: '10px',
    overflow: 'auto',
    height: '90%'
  },
})