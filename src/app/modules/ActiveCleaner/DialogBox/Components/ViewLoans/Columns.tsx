import DataTable, { TableColumn } from 'react-data-table-component'
import { Root } from './interfaces'
export const columns: TableColumn<Root>[] = [
  {
    name: '#',
    selector: (row) => row?.id,
    sortable: true,
    id: 'ID',
  },
  {
    name: 'ALLOWANCE NAME',
    selector: (row) => row?.master_allowance?.name,
    sortable: true,
    // id: 'ID',
  },
  {
    name: 'CASH POINTS',
    selector: (row) => row?.master_allowance?.default_cash ? row?.master_allowance?.default_cash : row?.master_allowance?.default_points,
    sortable: true,
  },
  {
    name: 'AMOUNT',
    selector: (row) => row?.amount,
    sortable: true,
  },
  {
    name: 'STATUS',
    selector: (row) => row?.master_allowance?.status,
    sortable: true,
  },
  {
    name: 'ACTION',
    cell: (row) => {
      return <button className='btn btn-sm btn-primary '>Edit</button>
    },
    sortable: true,
  },
  // {
  //   name: 'MIN EARNIING WEEK',
  //   cell: (row) => {
  //     return "m"
  //     let totalProjectedPoints = 0
  //     if (row.attendenceData && row.attendenceData.length > 0) {
  //       for (let i = 0; i < row.attendenceData.length; i++) {
  //         const attendance = row.attendenceData[i]
  //         totalProjectedPoints += Number(attendance.point)
  //       }
  //     }
  //     return totalProjectedPoints
  //   },
  //   sortable: true,
  // },
]
