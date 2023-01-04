import DataTable, { TableColumn } from 'react-data-table-component';
import { CreditReasonsInterfaces } from './CreditReasonsInterfaces';
export const columns: TableColumn<CreditReasonsInterfaces>[] = [
    {
       
        name: 'ACTIONS',
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
        name: 'REASONS',
        selector: (row) => row.reason,
        sortable: true,
        // id: "css"
    },
    {
        name: 'STATUS',
        selector: (row) => row.status,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}