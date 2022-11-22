import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { DataRow } from './Interfaces'
// import HandleDropDown from './DropBox/HandleDropDown'
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
  // {
  //   name: 'ACTION',
  //   cell: (row) => (
  //     <HandleDropDown props={row}></HandleDropDown>
  //   ),
  // },
  {
    name: '#',
    selector: (row) => row.id + ' ' + row.id,
    cell: (row) => (
      <div className='d-flex justify-content-start align-items-center flex-shrink-0 ' style={{ width: "125%" }}>
        <p className='btn btn-icon  me-1 p-1  ' style={{ width: "50%", fontSize: "11px" }}>{row.id}</p>
      </div>
    ),
    sortable: true,
    id: 'ID',
  },
  {
    name: 'CUSTOMER NAME',
    selector: (row) => row.name,
    sortable: true,
    id: 'css',
  },
  {
    name: 'PHONE',
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: 'EMAIL',
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: 'PACKAGE',
    selector: (row) => row.packageid,
    sortable: true,
  },
  {
    name: 'FREQUENCY',
    selector: (row) => row.frequencyid,
    sortable: true,
  },
  {
    name: 'START DATE',
    selector: (row: { startdate: any }) => row.startdate,
    sortable: true,
  },
  {
    name: 'END DATE',
    selector: (row: { enddate: any }) => row.enddate,
    sortable: true,
  },
  {
    name: 'PAYMENT DATE',
    selector: (row: { paymentdate: any }) => row.paymentdate,
    sortable: true,
  },
  {
    name: 'VEHICLE ID',
    selector: (row) => row.vehicleid,
  },
  {
    name: 'CLEANER ID',
    selector: (row) => row.cleanerid,
  }
]
