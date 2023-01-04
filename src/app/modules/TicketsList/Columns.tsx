import { TableColumn } from 'react-data-table-component';
import GChatBTN from '../../consts/Chats/GChatBTN';
import ChipsInfo from '../../consts/Chips/ChipsInfo';
import { ticektInterfaces } from './TicketInterface';

export const columns: TableColumn<ticektInterfaces>[] = [
    {
        name: 'TICKET NO',
        selector: (row) => row.ticketno
        ,
        sortable: true,
    },
    {
        name: 'CUSTOMER NAME',
        // selector: (row) => row.customer.first_name,
        cell: (row) => (
            <>
            <span>{row.customer.first_name}</span>
            <span>{row.customer.last_name}</span>
            </>

        ),
        sortable: true,
    },
    {
        name: 'CHAT',
        cell: (row) => (<GChatBTN ticketDataParent={row}></GChatBTN>),
        // id: "director"
    },
 
    {
        name: 'STATUS',
        cell: (row) => (
            <ChipsInfo Info={row} refs={'status'}></ChipsInfo>
         ),
        sortable: true,
    },
    {
        name: 'CREATED AT',
        selector: (row) => row.createdAt,
        sortable: true,
    },
    {
        name: 'UPDATED AT',
        selector: (row) => row.updatedAt,
        sortable: true,
    },
    {
        name: 'CATEGORY',
        cell: (row) => (
           <ChipsInfo Info={row} refs={"category"}></ChipsInfo>
        ),

        sortable: true,
    },
    {
        name: 'SOURCE',
        cell: (row) => (
            <ChipsInfo Info={row} refs={"source"}></ChipsInfo>
         ),
        sortable: true,
    },
    {
        name: 'CLEANER',
        selector: (row) => row.createdAt,
        sortable: true,
    },
    {
        name: 'SUPERVISOR',
        selector: (row) => row.createdAt,
        sortable: true,
    },
    {
        name: 'ASSIGNED',
        selector: (row) => row.createdAt,
        sortable: true,
    }
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
}
