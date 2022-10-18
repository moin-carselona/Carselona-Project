// @ts-nocheck
import { Column } from 'react-table'
import { UserActionsCell } from './UserActionsCell'
import { UserCustomHeader } from './UserCustomHeader'
import { User } from '../../core/_models'
import { InactiveActionColumns } from './inactiveActionColumns'

const serverInactivePauseColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' />
    ),
    id: 'action',
    Cell: ({ ...props }) => <InactiveActionColumns data={props.data} id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Ct ID' className='min-w-125px' />,
    accessor: 'customerid',
  },
  {
    Header: (props) => (
        <UserCustomHeader tableProps={props} title='Ticket' />
      ),
      id: 'actions',
      Cell: ({ ...props }) => <UserActionsCell data={props.data} id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />
    ),
    accessor: 'name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Phone' className='min-w-125px' />
    ),
    accessor: 'phone',
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
      <UserCustomHeader tableProps={props} title='Pause Start Date' className='min-w-125px' />
    ),
    accessor: 'startdate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Pause End Date' className='min-w-125px' />
    ),
    accessor: 'enddate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Reason' className='min-w-125px' />
    ),
    accessor: 'masterReason.reason',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Date' className='min-w-auto' />
    ),
    accessor: 'inactive_date',
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
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Email' className='min-w-auto' />
    ),
    accessor: 'email',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='City' className='min-w-auto' />
    ),
    accessor: 'cityname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Address' className='min-w-auto' />
    ),
    accessor: 'address',
  }
]

export { serverInactivePauseColumns }
