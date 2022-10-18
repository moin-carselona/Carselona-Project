// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from '../../../apps/user-management/users-list/table/columns/UserCustomHeader'
import {User} from '../../../apps/user-management/users-list/core/_models'
import {WeeklyReportsCell} from './WeeklyReportsCell'

const weeklyReportsColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
    id: 'actions',
    Cell: ({...props}) => (
      <WeeklyReportsCell data={props.data} id={props.data[props.row.index].id} />
    ),
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'cleaner.first_name',
    Cell: ({row}) => row.original.cleaner.first_name + ' ' + row.original.cleaner.last_name,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Scheme Name' className='min-w-125px' />
    ),
    accessor: 'cleanerPayoutScheme.scheme_name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Week Start Date' className='min-w-125px' />
    ),
    accessor: 'week_start_date',
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Week End Date' className='min-w-125px' />
    ),
    accessor: 'week_end_date',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Week Id' className='min-w-125px' />
    ),
    accessor: 'week_id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Total Points Earned' className='min-w-125px' />
    ),
    accessor: 'total_points_earned',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Earned Points Value' className='min-w-125px' />
    ),
    accessor: 'earned_points_value',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Total Cash Earned' className='min-w-125px' />
    ),
    accessor: 'total_cash_earned',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Sub Total Earned' className='min-w-125px' />
    ),
    accessor: '-',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Min Weekly Payout' className='min-w-125px' />
    ),
    accessor: 'min_weekly_payout',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Allowance' className='min-w-125px' />
    ),
    accessor: 'allowance',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Net Earned' className='min-w-125px' />
    ),
    accessor: 'net_earned',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Total Deduction' className='min-w-125px' />
    ),
    accessor: 'total_deduction',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Grand Net Earned' className='min-w-125px' />
    ),
    accessor: 'grand_net_earned',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Payout Datetime' className='min-w-125px' />
    ),
    accessor: 'payout_datetime',
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Report Generated Datetime'
        className='min-w-125px'
      />
    ),
    accessor: 'report_generated_datetime',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Payout Amount' className='min-w-125px' />
    ),
    accessor: 'payout_amount',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Remaining Balance' className='min-w-125px' />
    ),
    accessor: 'remaining_balance',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Payout Status' className='min-w-125px' />
    ),
    accessor: 'payout_status',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
]

export {weeklyReportsColumns}
