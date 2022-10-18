// @ts-nocheck
import { Column } from 'react-table'
import { UserCustomHeader } from './UserCustomHeader'
import { User } from '../../core/_models'
import TicketActionColumns from './TicketActionColumns'
import TicketAction from './TicketAction'

const onboardingSubscriptionsColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Tickets' className='min-w-125px' />,
    accessor: 'customerid',
    Cell: ({ ...props }) => <TicketActionColumns data={props.data} id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='OrderId' className='min-w-125px' />
    ),
    accessor: 'id',
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
      <UserCustomHeader tableProps={props} title='Email' className='min-w-125px' />
    ),
    accessor: 'email',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Package' className='min-w-125px' />
    ),
    accessor: `packageDetail.name`,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Address' className='min-w-125px' />
    ),
    accessor: 'address',
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
      <UserCustomHeader tableProps={props} title='Cleaner' className='min-w-125px' />
    ),
    accessor: `${'cleaner.first_name'}`,
  }
]

export { onboardingSubscriptionsColumns }
