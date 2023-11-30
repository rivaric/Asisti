import { RowModel, flexRender } from '@tanstack/react-table'

interface BodyProps {
  rows: RowModel<any>
}

export const Body = ({ rows }: BodyProps) => (
  <tbody>
    {rows.rows.map((row) => (
      <tr key={row.original.created_at}>
        {row.getVisibleCells().map((cell) => (
          <td role="gridcell" key={row.original.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
)
