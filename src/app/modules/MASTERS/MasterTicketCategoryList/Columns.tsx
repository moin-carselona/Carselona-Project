import DataTable, { TableColumn } from 'react-data-table-component';
import { MasterTicketInterfaces } from './MasterTicketInterfaces';
// category_name: string;
// usertype:      number;
// status:        number;
// createdAt:     number;
// updatedAt:     number;
export const columns: TableColumn<MasterTicketInterfaces>[] = [
    {
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
 
    {
        name: 'ID',
        selector: (row) => row.id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'NAME',
        selector: (row) => row.category_name,
        sortable: true,
    },
    {
        name: 'USER TYPE',
        selector: (row) => row.usertype,
        sortable: true,
    },
    {
        name: 'STATUS', //
        selector: (row) => row.status,
        sortable: true,
    },

  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}