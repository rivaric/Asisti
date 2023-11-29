import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useInitialColumns } from './useInitialColumns'
import { Train } from '../../../types/Train'

const data: Train[] = [
    {
      id: 0,
      name: 'Тренировка для кистей',
      progress: '50%',
      time: '30 мин',
      date: '23.03.2023',
    }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      }, {
        id: 0,
        name: 'Тренировка для кистей',
        progress: '50%',
        time: '30 мин',
        date: '23.03.2023',
      },
  ] 

export const useInitialTable = () => {
  const columns = useInitialColumns()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return { table }
}
