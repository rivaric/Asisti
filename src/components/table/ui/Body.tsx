import { RowModel, flexRender } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import { useBodyStyles } from './Body.styles'
import { Train } from '../../../types/Train'

interface BodyProps {
  rows: RowModel<Train>
}

export const Body = ({ rows }: BodyProps) => {
  const { classes } = useBodyStyles()
  const navigate = useNavigate()
  console.log(rows.rows[0].original)
  return (
    <tbody>
      {rows.rows.map((row) => (
        <tr
          key={row.id}
          className={classes.tr}
          onClick={() => navigate(`train/${row.original.id}`)}
        >
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
