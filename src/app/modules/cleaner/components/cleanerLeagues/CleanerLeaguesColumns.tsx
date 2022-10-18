// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from '../../../apps/user-management/users-list/table/columns/UserCustomHeader'
import {User} from '../../../apps/user-management/users-list/core/_models'

const CleanerLeaguesColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer Ratings Score' className='min-w-125px' />
    ),
    accessor: 'rating_points',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Sales Score' className='min-w-125px' />
    ),
    accessor: 'sales_points',
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Absentism Score' className='min-w-125px' />
    ),
    accessor: 'absentism_points',
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title='Complaint Score'
        className='min-w-125px'
      />
    ),
    accessor: 'complaint_points',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Punctuality Score' className='min-w-125px' />
    ),
    accessor: 'punctuality_points',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Total Jobs Points' className='min-w-125px' />
    ),
    accessor: 'total_jobs_points',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Final League Score' className='min-w-125px' />
    ),
    accessor: 'final_league_points',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Normalize Score' className='min-w-125px' />
    ),
    accessor: 'points',
  },
]

export {CleanerLeaguesColumns}
