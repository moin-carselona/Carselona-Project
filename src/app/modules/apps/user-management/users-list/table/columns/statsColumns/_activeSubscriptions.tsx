// @ts-nocheck
import { Column } from 'react-table'
import { User } from '../../core/_models'
import { UserCustomHeader } from '../UserCustomHeader'

const activeSubscriptionColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Customer Name' className='min-w-125px' />,
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
    accessor: 'packageid',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Frequency' className='min-w-125px' />
    ),
    accessor: 'frequencyid',
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
      <UserCustomHeader tableProps={props} title='Payment Date' className='min-w-125px' />
    ),
    accessor: 'paymentdate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Vehicle ID' className='min-w-auto' />
    ),
    accessor: 'vehicleid',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer ID' className='min-w-auto' />
    ),
    accessor: 'customerid',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner ID' className='min-w-auto' />
    ),
    accessor: 'cleanerid',
  }
]

export { activeSubscriptionColumns }
