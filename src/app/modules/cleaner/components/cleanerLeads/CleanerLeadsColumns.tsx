// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from '../../../apps/user-management/users-list/table/columns/UserCustomHeader'
import {User} from '../../../apps/user-management/users-list/core/_models'

const CleanerLeadsColumns: ReadonlyArray<Column<User>> = [
//   {
//     Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
//     id: 'actions',
//     Cell: ({...props}) => <WeeklyReportsCell data={props.data} id={props.data[props.row.index].id} />,
//   },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner Name' className='min-w-125px' />
    ),
    accessor: 'cleaner.first_name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer Name' className='min-w-125px' />
    ),
    accessor: 'customername',
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer Phone' className='min-w-125px' />
    ),
    accessor: 'customerphone',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Date' className='min-w-125px' />
    ),
    accessor: '-',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer Email' className='min-w-125px' />
    ),
    accessor: 'email',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Society' className='min-w-125px' />
    ),
    accessor: 'society_name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Address' className='min-w-125px' />
    ),
    accessor: 'address',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='City' className='min-w-125px' />
    ),
    accessor: 'city_name',
  },
]

export {CleanerLeadsColumns}
