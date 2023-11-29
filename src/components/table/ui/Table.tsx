import { Skeleton, Table, Title } from '@mantine/core'
import { useInitialTable } from '../lib'
import { useTableStyles } from './Table.styles'
import { Head } from './Head'
import { Body } from './Body'

export const HistoryTable = () => {
  const { table } = useInitialTable()
  const { classes } = useTableStyles()
  console.log('a')
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
