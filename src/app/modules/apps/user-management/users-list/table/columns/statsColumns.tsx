// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'

const statsColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Phone' className='min-w-125px' />,
    accessor: 'phone',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner Price' className='min-w-125px' />
    ),
    accessor: 'cleanerprice',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Package Price' className='min-w-125px' />
    ),
    accessor: 'packageprice',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Discount Price' className='min-w-125px' />
    ),
    accessor: 'discountprice',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='GST' className='text-end min-w-100px' />
    ),
    accessor: 'gst',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Total' className='text-end min-w-100px' />
    ),
    accessor: 'total',
  },
]

const muiColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'email', width: 200 },
  { field: 'phone', headerName: 'phone', width: 150 },
  { field: 'cleanerprice', headerName: 'cleanerprice', width: 70 },
  { field: 'packageprice', headerName: 'packageprice', width: 70 },
  { field: 'discountprice', headerName: 'discountprice', width: 70 },
  { field: 'gst', headerName: 'gst', width: 70 },
  { field: 'total', headerName: 'total', width: 70 },
]

export {statsColumn, muiColumns}
