// @ts-nocheck
import clsx from 'clsx'
import { FC } from 'react'
import { Row } from 'react-table'
import { User } from '../../core/_models'
import ChipCardInactive from '../ChipCardInactive'
import ChipCardActive from '../ChipCardActive'
import ChipDeductNow from '../ChipDeductNow'
import ChipDebitFailed from '../ChipDebitFailed'
type Props = {
  row: Row<User>
}
const CustomRow: FC<Props> = ({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      // console.log('cell', cell);
      return (
        <td>
          { cell.render('Cell') } 
        </td>
      )
      // &&  cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid 
    })}
  </tr>
)
export { CustomRow }
