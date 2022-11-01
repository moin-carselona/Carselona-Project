// @ts-nocheck
import {Column} from 'react-table'
import {UserActionsCell} from './UserActionsCell'
import {UserCustomHeader} from './UserCustomHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell referece="AssignedCleaner" data={props.data} id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='ID' />,
  //   accessor: 'parent_order_id',
  // },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Order ID' />
    ),
    accessor: 'id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Is AutoPay' />
    ),
    accessor: 'is_autopay',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Debit Status' />
    ),
    accessor: 'razorpay_status',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Package Name' />
    ),
    accessor: 'packagename',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' />,
    accessor: 'name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Payment Date' />
    ),
    accessor: 'paymentdate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Transaction ID' />
    ),
    accessor: 'transactionid',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Start Date' />
    ),
    accessor: 'startdate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='End Date' />
    ),
    accessor: 'enddate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Phone' />
    ),
    accessor: 'phone',
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Time Slot'  />
    ),
    accessor: 'timeslotname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Vehicle'  />
    ),
    accessor: 'vehicleno',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner Name'  />
    ),
    accessor: 'cleanername',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Frequency'  />
    ),
    accessor: 'frequencyname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Full Day Cleaning'  />
    ),
    accessor: 'fulldaycleaning',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Job Site'  />
    ),
    accessor: 'jobsitename',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Email'  />,
    accessor: 'email',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Flat No.' className='min-w-500px' />
    ),
    accessor: 'flatno',
  },

]

export {usersColumns}

