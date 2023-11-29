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
        accessorKey: 'progress',
        header: () => 'Прогресс',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'time',
        header: () => 'Время',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
      {
        accessorKey: 'date',
        header: () => 'Дата',
        cell: (info) => <Text>{info.getValue<string>()}</Text>,
      },
    ],
    []
  )
