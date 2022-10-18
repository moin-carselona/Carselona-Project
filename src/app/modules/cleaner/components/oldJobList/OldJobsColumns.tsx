// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from '../../../apps/user-management/users-list/table/columns/UserCustomHeader'
import {User} from '../../../apps/user-management/users-list/core/_models'
import {OldJobsCell} from './OldJobsCell'

const OldJobsColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
    id: 'actions',
    Cell: ({...props}) => <OldJobsCell data={props.data} id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner' className='min-w-125px' />
    ),
    accessor: 'c_fname',
    Cell: ({row}) => row.original.c_fname + ' ' + row.original.c_lname + ' ' + row.original.c_phone,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer' className='min-w-125px' />
    ),
    accessor: 'customerdata.first_name',
    Cell: ({row}) =>
      row.original.customerdata.first_name +
      ' ' +
      row.original.customerdata.last_name +
      ' ' +
      row.original.customerdata.phone +
      ' ' +
      row.original.vehiclename,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Date' className='min-w-125px' />,
    accessor: 'attendencedate',
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='TimeSlot' className='min-w-125px' />
    ),
    accessor: 'timeslotname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner Status' className='min-w-125px' />
    ),
    accessor: '-',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Job Status' className='min-w-125px' />
    ),
    accessor: '-',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Attendence Distance' className='min-w-125px' />
    ),
    accessor: '-',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Society' className='min-w-125px' />
    ),
    accessor: 'customerdata.societyname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Job Type' className='min-w-125px' />
    ),
    accessor: 'servicetypename',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Rating/Comment' className='min-w-125px' />
    ),
    accessor: 'allowance',
  },
]

export {OldJobsColumns}
