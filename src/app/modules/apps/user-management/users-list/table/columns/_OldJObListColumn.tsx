// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from './UserCustomHeader'
import {User} from '../../core/_models'
import {CleanerJobCells} from './CleanerJobCells'

const OldJobListColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
    id: 'actions',
    Cell: ({...props}) => <CleanerJobCells data={props.data} id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner' className='min-w-125px' />
    ),
    accessor: 'cleaner.first_name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer' className='min-w-125px' />
    ),
    accessor: 'attendance_date',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Date' className='min-w-125px' />
    ),
    accessor: 'mark_attendance_datetime',
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='TimeSlot' className='min-w-125px' />
    ),
    accessor: 'total_jobs_done',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner Status' className='min-w-125px' />
    ),
    accessor: 'total_points_earned',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Job Status' className='min-w-125px' />
    ),
    accessor: 'is_supervisor_approved',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Attendence Distance' className='min-w-125px' />
    ),
    accessor: 'is_supervisor_approved',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Society' className='min-w-125px' />
    ),
    accessor: 'is_supervisor_approved',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Society' className='min-w-125px' />
    ),
    accessor: 'is_supervisor_approved',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Rating/Comment' className='min-w-125px' />
    ),
    accessor: 'is_supervisor_approved',
  },
]

export {OldJobListColumns}
