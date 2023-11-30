import { RowModel } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import { Train } from '../../../types/Train'

interface BodyProps {
  rows: RowModel<any>
}

export const Body = ({ rows }: BodyProps) => {
  const navigate = useNavigate()

  return (
    <tbody>
      {rows.rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} role="gridcell">
              {cell.getValue<string>()}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
