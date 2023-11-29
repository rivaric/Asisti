import { Flex } from '@mantine/core'
import { HeaderGroup, flexRender } from '@tanstack/react-table'
import { useHeadStyles } from './Head.styles'

interface HeadProps<T> {
  headerGroups: HeaderGroup<T>[]
}

export const Head = <T,>({ headerGroups }: HeadProps<T>) => {
  const { classes } = useHeadStyles()

  return (
    <thead className={classes.thead}>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder ? null : (
                <Flex className={classes.thChildren}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Flex>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
