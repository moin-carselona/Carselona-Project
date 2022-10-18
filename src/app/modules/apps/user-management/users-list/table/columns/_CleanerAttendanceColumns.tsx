// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from './UserCustomHeader'
import {User} from '../../core/_models'

const CleanerAttendanceColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Full Name' className='min-w-125px' />
    ),
    accessor: 'cleaner.first_name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Attendance Date' className='min-w-125px' />
    ),
    accessor: 'attendance_date',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Mark Attendance Date' className='min-w-125px' />
    ),
    accessor: 'mark_attendance_datetime',
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Total Job Done' className='min-w-125px' />
    ),
    accessor: 'total_jobs_done',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Total Points Earned' className='min-w-125px' />
    ),
    accessor: 'total_points_earned',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Is Supervisor Approved' className='min-w-125px' />
    ),
    accessor: 'is_supervisor_approved',
  },
]

export {CleanerAttendanceColumns}
