// @ts-nocheck
import { Column } from 'react-table'
import { UserCustomHeader } from './UserCustomHeader'
import { User } from '../../core/_models'
import { CleanerJobCells } from './CleanerJobCells'
import MapSupervisorsName from './MapSupervisorsName'

const cleanerJobColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <CleanerJobCells data={props.data} id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Cleaner' className='min-w-125px' />,
    accessor: `cleaner.first_name`,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Cleaner Status' className='min-w-125px' />,
    accessor: `cleaner.status`,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Job Status' className='min-w-125px' />,
    accessor: `job_detail.status`,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Job Type' className='min-w-125px' />,
    accessor: `job_detail.name`,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Customer' className='min-w-125px' />,
    accessor: `customerData.first_name`,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Supervisors' className='min-w-125px' />
    ),
    id: 'supervisor',
    // supervisorname
    Cell: ({...props}) => <MapSupervisorsName data={props.data} id={props.data[props.row.index].id} />
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Date' className='min-w-125px' />
    ),
    accessor: 'attendencedate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Time slot' className='min-w-125px' />
    ),
    accessor: `timeslotDetail.name`,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Society' className='min-w-125px' />
    ),
    accessor: `societyname`,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Rating' className='min-w-125px' />
    ),
    accessor: `jobRating`,
  }
]

export { cleanerJobColumns }
