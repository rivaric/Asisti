import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Train } from '../../../types/Train'
import { Text } from '@mantine/core'
import { prepareDate, prepareTime } from '../../../lib'

export const useInitialColumns = () =>
  useMemo<ColumnDef<Train>[]>(
    () => [
      {
        accessorKey: 'verbose_name',
        header: () => 'Тренировка',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'done_repeats',
        header: () => 'Прогресс',
        cell: ({ row }) => (
          <Text onClick={() => console.log(row.original)}>
            {(row.original.done_repeats * 100) / row.original.repeats}%
          </Text>
        ),
      },
      {
        accessorKey: 'created_at',
        header: () => 'Время',
        cell: (info) => (
          <Text>{prepareTime(new Date(info.getValue<string>()))}</Text>
        ),
      },
      {
        accessorKey: 'created_at',
        header: () => 'Дата',
        cell: (info) => (
          <Text>{prepareDate(new Date(info.getValue<string>()))}</Text>
        ),
      },
    ],
    []
  )
