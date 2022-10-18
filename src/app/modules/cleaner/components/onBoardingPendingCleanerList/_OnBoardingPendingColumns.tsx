// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from '../../../apps/user-management/users-list/table/columns/UserCustomHeader'
import {User} from '../../../apps/user-management/users-list/core/_models'
import { OnBoardingPendingCell } from './OnBoardingPendingCell'

const onBoardingPendingColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Actions' className='min-w-125px' />,
    id: 'actions',
    Cell: ({...props}) => <OnBoardingPendingCell data={props.data} id={props.data[props.row.index].id} createdAtId={props.data[props.row.index].createdAt}/>,
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
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Phone' className='min-w-125px' />
    ),
    accessor: 'phone',
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
      <UserCustomHeader tableProps={props} title='PinCode' className='min-w-125px' />
    ),
    accessor: 'pincode',
  },
]

export {onBoardingPendingColumns}
