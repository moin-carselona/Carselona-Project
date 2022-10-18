// @ts-nocheck
import { Column } from 'react-table'
import { UserCustomHeader } from './UserCustomHeader'
import { User } from '../../core/_models'

const monthlySubscriptionColumns: ReadonlyArray<Column<User>> = [
    {
        Header: (props) => <UserCustomHeader tableProps={props} title='Order ID' className='min-w-125px' />,
        accessor: 'id',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Customer Id' className='min-w-125px' />
        ),
        accessor: 'customerid',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Package Detail' className='min-w-125px' />
        ),
        accessor: `packageDetail.name`,
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
            <UserCustomHeader tableProps={props} title='Reason' className='min-w-125px' />
        ),
        accessor: 'masterReason.reason',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Flat No' className='min-w-auto' />
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
        accessor: `vehicle.model.name`,
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Cleaner Name' className='min-w-auto' />
        ),
        accessor: `cleaner.first_name`,
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Frequency' className='min-w-auto' />
        ),
        accessor: `masterFrequency.name`,
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
            <UserCustomHeader tableProps={props} title='Address' className='min-w-auto' />
        ),
        accessor: 'address',
    }
]

export { monthlySubscriptionColumns }
