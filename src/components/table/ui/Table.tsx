import { Skeleton, Table, Title } from '@mantine/core'
import { useInitialTable } from '../lib'
import { useTableStyles } from './Table.styles'
import { Head } from './Head'
import { Body } from './Body'
import { useEffect, useState } from 'react'
import { getHistory } from '../../../api'
import { Train } from '../../../types/Train'

export const HistoryTable = () => {
  const [data, setData] = useState<Train[]>([])
  const { table } = useInitialTable(data)
  const { classes } = useTableStyles()

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
