import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useInitialColumns } from './useInitialColumns'
import { Train } from '../../../types/Train'

export const useInitialTable = (data: any[]) => {
  const columns = useInitialColumns()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return { table }
}
