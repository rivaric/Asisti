import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Train } from '../../../types/Train'
import { Text } from '@mantine/core'

export const useInitialColumns = () =>
  useMemo<ColumnDef<Train>[]>(
    () => [
      {
        accessorKey: 'name',
        header: () => 'Тренировка',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'done_repeats',
        header: () => 'Прогресс',
        cell: ({ row }) => (
          <Text>
            {(row.original.done_repeats * 100) / row.original.repeats}
          </Text>
        ),
      },
      {
        accessorKey: 'time',
        header: () => 'Время',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'created_at',
        header: () => 'Дата',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
    ],
    []
  )
