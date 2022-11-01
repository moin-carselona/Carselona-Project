import clsx from 'clsx'
import { FC } from 'react'
import { Row } from 'react-table'
import { User } from '../apps/user-management/users-list/core/_models'
import ChipChat from './ChipChat'



type Props = {
  row: Row<User>
  HandleChipActivePaid:(event:any)=>void
}
const CustomRowTable: FC<Props> = ({ row , HandleChipActivePaid}) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {

      // if(cell.column.id == "chat"){

      //   console.log(cell.row.original.id, "")
      // }

      return (
        <td key={cell.column.id}>
          {cell.column.id == "chat" && cell.row.original.id ? <ChipChat ticketID={cell.row.original.id}  HandleChipActivePaid={HandleChipActivePaid} /> : cell.render('Cell')}
        </td>
      )
    })}
  </tr>
)
export { CustomRowTable }
