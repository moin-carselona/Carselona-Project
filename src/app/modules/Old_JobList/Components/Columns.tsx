import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { DataRow } from './Interfaces'
import HandleDropDown from './DropBox/HandleDropDown'
// console.log('DropdownAttendanceStatus', DropdownAttendanceStatus)
export const columns: TableColumn<DataRow>[] = [
  // {
  //   name: 'ACTION',
  //   cell: (row: { cleanerid: number }) => (
  //     <button onClick={() => handleReassign(row.cleanerid)} style={{ width: "125%", fontSize: "11px" }} className='btn btn-sm btn-primary height-50'>
  //       RE-ASSIGN
  //     </button>
  //   ),
  // },
  {
    name: 'ACTION',
    cell: (row) => (
      <HandleDropDown props={row}></HandleDropDown>
    ),
  },
  {
    name: 'JOB ID',
    selector: (row) => row.id,
    sortable: true,
    id: 'ID',
  },
  {
    name: 'CLEANER NAME',
    // selector: (row) => row?.c_fname + ' ' + row?.c_lname,
    cell: (row) => {
      return (
        <div className='text-left'>
          <span  className='badge badge-light-success fs-8 fw-bold'>{row?.c_fname + ' ' + row?.c_lname}</span>
          <span  className='badge badge-light-danger fs-8 fw-bold'>
            {row?.c_phone}
          </span>

        </div>
      )
    },
    sortable: true,
    id: 'css',
  },
  {
    name: 'CUSTOMER NAME',
    cell: (row) => {
      return (
        <div className='text-left'>
          <span  className='badge badge-light-success fs-8 fw-bold'>{row?.name}</span>
          <span  className='badge badge-light-danger fs-8 fw-bold'>
            {row?.phone}
          </span>

        </div>
      )
    },
    sortable: true,
  },
  {
    name: 'DATE',
    selector: (row: { attendencedate: any }) => row.attendencedate,
    sortable: true,
  },
  {
    name: 'TIMESLOT',
    selector: (row) => row.timeslotname,
    sortable: true,
  },
  {
    name: 'CLEANER STATUS',
    selector: (row) => row.customerdata.active_status == 1 ? "Active" : "Inactive",
    sortable: true,
  },
  {
    name: 'JOB STATUS',
    selector: (row) => row.attendencedatedone,
    sortable: true,
  },
  {
    name: 'ATTENDANCE DISTANCE',
    // selector: (row) => row.attendencedatedone,
    sortable: true,
  },
  {
    name: 'SOCIETY',
    selector: (row) => row.societyname,
    sortable: true,
  },
  {
    name: 'JOB TYPE',
    selector: (row) => row.servicetypename,
  },
  {
    name: 'RATING/COMMENT',
    selector: (row) => row.societyname,
  }
]

