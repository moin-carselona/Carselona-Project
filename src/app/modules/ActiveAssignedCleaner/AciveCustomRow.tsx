// @ts-nocheck
import clsx from 'clsx'
import { FC } from 'react'
import { Row } from 'react-table'
import { User } from '../../core/_models'
import ChipCardActive from './Chips/ChipCardActive'
import ChipCardInactive from './Chips/ChipCardInactive'
import ChipDebitFailed from './Chips/ChipDebitFailed'
import ChipDeductNow from './Chips/ChipDeductNow'

type Props = {
  row: Row<User>
}

const AciveCustomRow: FC<Props> = ({ row }) => (
  <tr {...row.getRowProps()} >
    {row.cells.map((cell) => {
      // console.log('cell', cell);
      return (
        <td key={cell.column.id} className="min-w-125px me-5"  >
          {cell.column.id == "is_autopay" && cell.row.original.is_autopay == 1 ? <><ChipCardActive></ChipCardActive></>

            : cell.column.id == "is_autopay" && cell.row.original.is_autopay == 0 ? <><ChipCardInactive></ChipCardInactive></>

              : cell.column.id == "razorpay_status" && cell.row.original.is_autopay == 1 && cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid ? <><ChipDeductNow></ChipDeductNow></>

                : cell.column.id == "razorpay_status" && cell.row.original.razorpay_status == "failed" ? <><ChipDebitFailed></ChipDebitFailed></>
                  : cell.render('Cell')}
        </td>
      )
      // &&  cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid 
    })}
  </tr>
)
export { AciveCustomRow }
