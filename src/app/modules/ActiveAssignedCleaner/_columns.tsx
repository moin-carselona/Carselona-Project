// @ts-nocheck
// import { UserActionsCell } from '../apps/user-management/users-list/table/columns/UserActionsCell'
// import {UserActionsCell} from './UserActionsCell'
// import {UserCustomHeader} from './UserCustomHeader'
// import { UserCustomHeader } from '../apps/user-management/users-list/table/columns/UserCustomHeader'
import {Column} from 'react-table'
import {User} from '../../core/_models'
import { ActiveActionsCell } from './ActiveActionsCell'
import { ActiveCustomHeader } from './ActiveCustomHeader'

const ActiveUserColumn: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <ActiveCustomHeader tableProps={props} title='Actions' />,
    id: 'actions',
    Cell: ({...props}) => <ActiveActionsCell referece="AssignedCleaner"  data={props.data} id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='ID' />,
  //   accessor: 'parent_order_id',
  // },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Order ID'  />
    ),
    accessor: 'id',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Is AutoPay'  />
    ),
    accessor: 'is_autopay',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Debit Status' />
    ),
    accessor: 'razorpay_status',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Package Name' />
    ),
    accessor: 'packageDetail.name',
  },
  {
    Header: (props) => <ActiveCustomHeader tableProps={props} title='Name' />,
    accessor: 'name',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Payment Date' />
    ),
    accessor: 'paymentdate',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Transaction ID' />
    ),
    accessor: 'transactionid',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Start Date'  />
    ),
    accessor: 'startdate',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='End Date'  />
    ),
    accessor: 'enddate',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Phone' />
    ),
    accessor: 'phone',
  },

  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Time Slot'  />
    ),
    accessor: 'timeslotname',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Vehicle'  />
    ),
    accessor: 'vehicleno',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Cleaner Name'  />
    ),
    accessor: 'cleanername',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Frequency'  />
    ),
    accessor: 'masterFrequency.name',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Full Day Cleaning'  />
    ),
    accessor: 'fulldaycleaning',
  },
  {
    Header: (props) => (
      <ActiveCustomHeader tableProps={props} title='Job Site'  />
    ),
    accessor: 'jobsitename',
  },
  {
    Header: (props) => <ActiveCustomHeader tableProps={props} title='Email'  />,
    accessor: 'email',
  },
  // {
  //   Header: (props) => (
  //     <ActiveCustomHeader tableProps={props} title='Flat No.' className='min-w-500px' />
  //   ),
  //   accessor: 'flatno',
  // },

]

export {ActiveUserColumn}

