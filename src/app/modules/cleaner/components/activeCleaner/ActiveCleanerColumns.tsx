// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from '../../../apps/user-management/users-list/table/columns/UserCustomHeader'
import {User} from '../../../apps/user-management/users-list/core/_models'
import {ActiveCleanerCell} from './ActiveCleanerCell'

const ActiveCleanerColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
    id: 'actions',
    Cell: ({...props}) => (
      <ActiveCleanerCell data={props.data} id={props.data[props.row.index].id} />
    ),
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Full Name' className='min-w-125px' />
    ),
    accessor: 'first_name',
    Cell: ({row}) => row.original.first_name + ' ' + row.original.last_name,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Phone' className='min-w-125px' />
    ),
    accessor: 'phone',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Worklocation' className='min-w-125px' />
    ),
    accessor: 'worklocation',
    Cell: ({row}) => (row.original.worklocation.length > 0 ? 'Yes' : 'No'),
  },
  //   {
  //     Header: (props) => (
  //       <UserCustomHeader tableProps={props} title='Projected Points' className='min-w-125px' />
  //     ),
  //     accessor: '-',
  //   },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Supervisor s' className='min-w-125px' />
    ),
    accessor: 'cleanerSupervisor',
    Cell: ({row}) =>
      row.original.cleanerSupervisor.length > 0 &&
      row.original.cleanerSupervisor.map((item) => {
        return item.supervisorcleaner.first_name + ' ' + +item.supervisorcleaner.last_name + ','
      }),
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Email' className='min-w-125px' />
    ),
    accessor: 'email',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Address' className='min-w-125px' />
    ),
    accessor: 'address',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Pincode' className='min-w-125px' />
    ),
    accessor: 'pincode',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Reference' className='min-w-125px' />
    ),
    accessor: 'reference',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Rating' className='min-w-125px' />
    ),
    accessor: 'rating',
    Cell: ({row}) => row.original.rating + 'Star',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='View cleaners' className='min-w-125px' />
    ),
    accessor: '-',
    Cell: <button type="button" class="btn btn-outline-success">View Cleaners</button>,
  },
]

export {ActiveCleanerColumns}
