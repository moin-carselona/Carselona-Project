import { TableColumn } from 'react-data-table-component';
import GChatBTN from '../../consts/Chats/GChatBTN';
import ChipsInfos from '../../consts/Chips/ChipsInfos';
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
        cell: (row: any) => (
            // <ChipsInfo Info={row} refs={'status'}></ChipsInfo>
            // Info?.ticketstatus?.id == 0  ? "warning" : Info?.ticketstatus?.id == 1  ? "danger" : Info?.ticketstatus?.id == 2  ? "warning" : Info?.ticketstatus?.id == 3  ? "success" : Info?.ticketstatus?.id == 4  ? "dark" : Info?.ticketstatus?.id == 5  ? "secondary" : Info?.ticketstatus?.id == 6  ? "primary"
            <ChipsInfos SelectedString={row?.ticketstatus?.name} classes={row?.ticketstatus?.id == 0 ? "warning" : row?.ticketstatus?.id == 1 ? "danger" : row?.ticketstatus?.id == 2 ? "warning" : row?.ticketstatus?.id == 3 ? "success" : row?.ticketstatus?.id == 4 ? "dark" : row?.ticketstatus?.id == 5 ? "secondary" : row?.ticketstatus?.id == 6 ? "primary" : "primary"} />
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

    // {refs === "category" ? Info?.ticketcategory?.category_name :
    // refs === "source" ? Info?.ticketsource?.name :
    //     refs === "status" ? Info?.ticketstatus?.name :
    {
        name: 'CATEGORY',
        cell: (row :any) => (
            <ChipsInfos SelectedString={row?.ticketcategory?.category_name} classes={"primary"}></ChipsInfos>
        ),
        sortable: true,
    },
    {
        name: 'SOURCE',
        cell: (row) => (
            <ChipsInfos SelectedString={row?.ticketsource?.name} classes={"primary"}></ChipsInfos>
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
