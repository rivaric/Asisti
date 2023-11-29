import { Skeleton, Table, Title } from '@mantine/core'
import { useInitialTable } from '../lib'
import { useTableStyles } from './Table.styles'
import { Head } from './Head'
import { Body } from './Body'
import { useEffect, useState } from 'react'
import { getHistory } from '../../../api'
import { Train } from '../../../types/Train'

const mock: Train[] = [
  {
    name: 'sd',
    created_at: '23.03.2023',
    repeats: 5,
    done_repeats: 1,
    verbose_name: '',
  },
  {
    name: 'sd',
    created_at: '23.03.2023',
    repeats: 5,
    done_repeats: 1,
    verbose_name: '',
  },
  {
    name: 'sd',
    created_at: '23.03.2023',
    repeats: 5,
    done_repeats: 1,
    verbose_name: '',
  },
  {
    name: 'sd',
    created_at: '23.03.2023',
    repeats: 5,
    done_repeats: 1,
    verbose_name: '',
  },
]

export const HistoryTable = () => {
  const [data, setData] = useState<Train[]>([])
  const { table } = useInitialTable(data)
  const { classes } = useTableStyles()

  useEffect(() => {
    getHistory()
      .then(({ data }) => setData(data))
      .catch(() => setData(mock))
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
