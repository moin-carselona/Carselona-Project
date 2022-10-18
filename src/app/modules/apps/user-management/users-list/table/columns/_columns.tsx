// @ts-nocheck
import {Column} from 'react-table'
import {UserActionsCell} from './UserActionsCell'
import {UserCustomHeader} from './UserCustomHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell data={props.data} id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'parent_order_id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Order ID' className='min-w-125px' />
    ),
    accessor: 'id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Debit Status' className='min-w-125px' />
    ),
    accessor: 'razorpay_status',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Package Name' className='min-w-125px' />
    ),
    accessor: 'packagename',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Payment Date' className='min-w-125px' />
    ),
    accessor: 'paymentdate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Transaction ID' className='min-w-125px' />
    ),
    accessor: 'transactionid',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Start Date' className='min-w-125px' />
    ),
    accessor: 'startdate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='End Date' className='min-w-125px' />
    ),
    accessor: 'enddate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Phone' className='min-w-125px' />
    ),
    accessor: 'phone',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Flat No.' className='min-w-auto' />
    ),
    accessor: 'flatno',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Time Slot' className='min-w-auto' />
    ),
    accessor: 'timeslotname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Vehicle' className='min-w-auto' />
    ),
    accessor: 'vehicleno',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner Name' className='min-w-auto' />
    ),
    accessor: 'cleanername',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Frequency' className='min-w-auto' />
    ),
    accessor: 'frequencyname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Full Day Cleaning' className='min-w-auto' />
    ),
    accessor: 'fulldaycleaning',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Job Site' className='min-w-auto' />
    ),
    accessor: 'jobsitename',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Email' className='min-w-auto' />,
    accessor: 'email',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='City' className='min-w-auto' />,
    accessor: 'cityname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Address' className='min-w-auto' />
    ),
    accessor: 'address',
  },
]

export {usersColumns}
