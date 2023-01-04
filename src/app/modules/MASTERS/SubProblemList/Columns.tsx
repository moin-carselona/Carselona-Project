import DataTable, { TableColumn } from 'react-data-table-component';
import { SubProblemsInterfaces } from './SubProblemsInterfaces';
export const columns: TableColumn<SubProblemsInterfaces>[] = [
    {
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'SUB PROBLEM',
        selector: (row) => row.fuel_type,
        sortable: true,
        // id: "css"
    },
    {
        name: 'PROBLEM',
        selector: (row) => row.fuel_type,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}