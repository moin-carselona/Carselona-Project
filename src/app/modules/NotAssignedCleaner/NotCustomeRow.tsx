// @ts-nocheck
import clsx from 'clsx'
import { FC } from 'react'
import { Row } from 'react-table'
import { User } from '../../core/_models'

type Props = {
  row: Row<User>
}
const NotCustomeRow: FC<Props> = ({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      // console.log('cell', cell);
      return (
        <td className='min-w-125px me-5' key={Math.random()}>
           {cell.render('Cell')}
        </td>
      )
      // &&  cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid 
    })}
  </tr>
)
export { NotCustomeRow }
