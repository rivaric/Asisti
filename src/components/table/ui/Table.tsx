import { Skeleton, Table, Title } from '@mantine/core'
import { useInitialTable } from '../lib'
import { useTableStyles } from './Table.styles'
import { Head } from './Head'
import { Body } from './Body'
import { useEffect, useState } from 'react'
import { getExercises, getHistory } from '../../../api'
import { Train } from '../../../types/Train'
import { useNavigate } from 'react-router-dom'

export const HistoryTable = () => {
  const [data, setData] = useState<Train[]>([])
  const { table } = useInitialTable(data)
  const { classes } = useTableStyles()
  const navigate = useNavigate()

  const access_token = localStorage.getItem('access_token')
  if (!access_token) navigate('/login')

  useEffect(() => {
    const access_token = localStorage.getItem('access_token')
    getHistory(access_token!).then(({ data }) => setData(data))
  }, [])

  return (
    <Skeleton visible={false} className={classes.container}>
      <Title p="20px 30px" fz={16}>
        Недавние тренировки
      </Title>
      <Table className={classes.table}>
        <Head headerGroups={table.getHeaderGroups()} />
        <Body rows={table.getRowModel()} />
      </Table>
    </Skeleton>
  )
}
