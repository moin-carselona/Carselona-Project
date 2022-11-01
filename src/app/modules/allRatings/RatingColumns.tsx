// @ts-nocheck
import { Column } from 'react-table'
import { UserActionsCell } from '../../../../src/app/modules/apps/user-management/users-list/table/columns/UserActionsCell'
import { UserCustomHeader } from '../../../../src/app/modules/apps/user-management/users-list/table/columns/UserCustomHeader'
import { User } from '../../../../src/app/modules/apps/user-management/users-list/core/_models'
const RatingsColumns: ReadonlyArray<Column<User>> = [
    // {
    //     Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
    //     id: 'actions',
    //     Cell: ({ ...props }) => <UserActionsCell data={props.data} id={props.data[props.row.index].id} />,
    // },
    {
        Header: (props) => <UserCustomHeader tableProps={props} title='Cleaner Name'  />,
        accessor: 'cleanerDetails.Cleaner_Name',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Customer Name'  />
        ),
        accessor: 'customerDetails.Customer_Name',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Customer Id'  />
        ),
        accessor: 'customerid',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Super Visor Name'  />
        ),
        accessor: 'cleanerDetails.supcleaner.supervisorData.first_name',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Is Paid'  />
        ),
        accessor: 'ispaid',
    },
    {
        Header: (props) => <UserCustomHeader tableProps={props} title='Rating'  />,
        accessor: 'rate',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Comments'  />
        ),
        accessor: 'comment',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Rating Date'  />
        ),
        accessor: 'date_time',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Attendence Date'  />
        ),
        accessor: 'jobDetails.attendencedate',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='Rating Source'  />
        ),
        accessor: 'sourceDetails.name',
    },
]
export { RatingsColumns }
