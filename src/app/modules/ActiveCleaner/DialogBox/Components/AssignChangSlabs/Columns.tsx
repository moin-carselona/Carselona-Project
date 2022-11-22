import DataTable, { TableColumn } from 'react-data-table-component'
import { Root } from './interfaces'
export const columns: TableColumn<Root>[] = [
  {
    name: 'SCHEMA NAME',
    selector: (row) => row?.cleanerPayoutScheme?.scheme_name,
    sortable: true,
    id: 'ID',
  },
  {
    name: 'MIN EARNIING WEEK',
    selector: (row) => row?.min_earning_week,
    sortable: true,

  },
  {
    name: 'ASSIGNED DATE',
    selector: (row : {scheme_assigned_date :any}) => row?.scheme_assigned_date,
    sortable: true,

  },
  {
    name: 'PAUSED DATE',
    selector: (row : {scheme_paused_date :any}) => row?.scheme_paused_date,
    sortable: true,

  },
  {
    name: 'STATUS',
    selector: (row ) => row?.status,
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
