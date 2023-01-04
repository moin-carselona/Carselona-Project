import DataTable, { TableColumn } from 'react-data-table-component';
import { ActiveInterfaces } from './ActiveInterfaces';
export const columns: TableColumn<ActiveInterfaces>[] = [
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
        selector: (row) => row.first_name,
        sortable: true,
        // id: "css"
    },
    {
        name: 'PHONE',
        selector: (row) => row.phone,
        sortable: true,
        // id: "css"
    },
    {
        name: 'EMAIL',
        selector: (row) => row.email,
        sortable: true,
        // id: "css"
    },
    {
        name: 'TOTAL ACTIVE SUBSCRIPTION',
        selector: (row) => row.active_status,
        sortable: true,
        // id: "css"
    },
    {
        name: 'COINS',
        selector: (row) => row.coins,
        sortable: true,
        // id: "css"
    },

   
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}