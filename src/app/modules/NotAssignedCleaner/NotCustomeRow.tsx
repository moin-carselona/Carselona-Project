// @ts-nocheck
import clsx from 'clsx'
import moment from 'moment'
import { FC } from 'react'
import { Row } from 'react-table'
import { User } from '../../core/_models'

type Props = {
  row: Row<User>
}

const NotCustomeRow: FC<Props> = ({ row }) => (
  <tr {...row.getRowProps()} className={`${
    row?.original?.startdate === moment().add(0, "days").format("YYYY-MM-DD") ?"bg-danger text-white px-3" :  
    row?.original?.startdate === moment().add(1, "days").format("YYYY-MM-DD") ?"bg-warning text-white px-3" :   row?.original?.startdate === moment().add(2, "days").format("YYYY-MM-DD")  ?"bg-success text-white px-3" : 
    ""}`}>
    {row.cells.map((cell) => {
      // console.log('cell', moment().add(0, "days").format("YYYY-MM-DD"));
      // console.log("moment", moment().add(0, "days").format("YYYY-MM-DD"), moment().add(1, "days").format("YYYY-MM-DD"), moment().add(2, "days").format("YYYY-MM-DD"))
      return (
        <td className='min-w-125px px-2' key={Math.random()}>
           {cell.render('Cell')}
        </td>
      )
      // &&  cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid 
    })}
  </tr>
)
export { NotCustomeRow }
