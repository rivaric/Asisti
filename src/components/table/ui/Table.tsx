import { Skeleton, Table, Title } from '@mantine/core'
import { useInitialTable } from '../lib'
import { useTableStyles } from './Table.styles'
import { Head } from './Head'
import { Body } from './Body'
import { useEffect, useState } from 'react'
import { getExercises, getHistory } from '../../../api'
import { Train } from '../../../types/Train'

const mock = [
  {
    name: 'Тренировка для рук',
    done_repeats: '50%',
    time: '20 мин',
    created_at: '12.11.2023'
  },
  {
    name: 'Тренировка для ног',
    done_repeats: '30%',
    time: '20 мин',
    created_at: '12.11.2023'
  },
  {
    name: 'Тренировка для рук',
    done_repeats: '50%',
    time: '10 мин',
    created_at: '02.11.2023'
  },
  {
    name: 'Тренировка для лица',
    done_repeats: '10%',
    time: '30 мин',
    created_at: '16.11.2023'
  },
  {
    name: 'Тренировка для костей',
    done_repeats: '50%',
    time: '20 мин',
    created_at: '12.11.2023'
  },
  {
    name: 'Тренировка для рук',
    done_repeats: '40%',
    time: '15 мин',
    created_at: '10.11.2023'
  },
]

export const HistoryTable = () => {
  const [data, setData] = useState<Train[]>([])
  const { table } = useInitialTable(mock)
  const { classes } = useTableStyles()

  // useEffect(() => {
  //   getExercises()
  //     .then(({ data }) => setData(data))
      
  // }, [])

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
