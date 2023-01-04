import DataTable, { TableColumn } from 'react-data-table-component';
import { ProblemInterfaces } from './ProblemInterfaces';
export const columns: TableColumn<ProblemInterfaces>[] = [
    {
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'PROBLEM NAME',
        selector: (row) => row.fuel_type,
        sortable: true,
        // id: "css"
    },
    {
        name: 'IMAGE',
        selector: (row) => row.fuel_type,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}