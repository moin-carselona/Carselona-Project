// @ts-nocheck
import { Column } from 'react-table'
import { UserActionsCell } from './UserActionsCell'
import { UserCustomHeader } from './UserCustomHeader'
import { User } from '../../core/_models'

const kitSubscriptionColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <UserActionsCell data={props.data} id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Customer Name' className='min-w-125px' />,
    accessor: 'customername',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Package Name' className='min-w-125px' />
    ),
    accessor: 'packagename',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Pin Code' className='min-w-125px' />
    ),
    accessor: 'pincode',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Address' className='min-w-125px' />
    ),
    accessor: 'address',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  }
]

export { kitSubscriptionColumns }
