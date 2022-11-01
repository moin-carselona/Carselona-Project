// @ts-nocheck
import { Column } from 'react-table'
import { UserActionsCell } from '../apps/user-management/users-list/table/columns/UserActionsCell'
import { UserCustomHeader } from '../apps/user-management/users-list/table/columns/UserCustomHeader'
import { User } from '../apps/user-management/users-list/core/_models'

const TicketsColumns: ReadonlyArray<Column<User>> = [
    // {
    //     Header: (props) => <UserCustomHeader tableProps={props} title='Actions' />,
    //     id: 'actions',
    //     Cell: ({ ...props }) => <UserActionsCell data={props.data} id={props.data[props.row.index].id} />,
    // },
   
    {
        Header: (props) => <UserCustomHeader tableProps={props} title='CUSTOMER NAME'  />,
        accessor: 'customerticket.Customer_Name',
    },
   
    {
        Header: (props) => <UserCustomHeader tableProps={props} title='CHAT'  />,
        accessor: 'chat',
    },
  
    {
        Header: (props) => <UserCustomHeader tableProps={props} title='TICKET NO'  />,
        accessor: 'ticketno',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='TICKET GENERATED'  />
        ),
       
        accessor: 'ticketdate',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='QUERY'  />
        ),
        accessor: 'title',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='STATUS'  />
        ),
        accessor: 'status',
    },
    {
        Header: (props) => (
            <UserCustomHeader tableProps={props} title='LAST RESOLUTION'  />
        ),
        accessor: 'last_date_resolution',
    },
    {
        Header: (props) => <UserCustomHeader tableProps={props} title='LAST FEEDBACK'  />,
        accessor: 'last_date_feedback',
    },

   
]
export { TicketsColumns }
