import { RowModel, flexRender } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'

interface BodyProps {
  rows: RowModel<any>
}

export const Body = ({ rows }: BodyProps) => {
  const navigate = useNavigate()

  return (
    <tbody>
      {rows.rows.map((row) => (
        <tr key={row.original.created_at}>
          {row.getVisibleCells().map((cell) => (
            <td onClick={() => console.log(cell)} role="gridcell">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
