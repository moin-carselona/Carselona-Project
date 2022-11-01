// @ts-nocheck
import clsx from 'clsx'
import { FC } from 'react'
import { Row } from 'react-table'
import { User } from '../../core/_models'
import ChipCardInactive from '../ChipCardInactive'
import ChipCardActive from '../ChipCardActive'
import ChipDeductNow from '../ChipDeductNow'
type Props = {
  row: Row<User>
}
const NotCustomeRow: FC<Props> = ({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      // console.log('cell', cell);
      return (
        <td>
          {cell.column.id == "is_autopay" && cell.row.original.is_autopay == 1 ? <><ChipCardActive></ChipCardActive></> : cell.column.id == "is_autopay" && cell.row.original.is_autopay == 0 ? <><ChipCardInactive></ChipCardInactive></> : cell.column.id == "razorpay_status" && cell.row.original.is_autopay == 1  &&  cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid  ? <><ChipDeductNow></ChipDeductNow></> : cell.render('Cell')}
        </td>
      )
      // &&  cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid 
    })}
  </tr>
)
export { NotCustomeRow }
