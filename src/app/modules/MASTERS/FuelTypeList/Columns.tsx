import DataTable, { TableColumn } from 'react-data-table-component';
import { FueltTypeinterfaces } from './fuletypeInterfaces';
export const columns: TableColumn<FueltTypeinterfaces>[] = [
    {
        name: 'Edit',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'FUEL TYPE',
        selector: (row) => row.fuel_type,
        sortable: true,
        // id: "css"
    },
    {
        name: 'STATUS',
        selector: (row) => row.fuel_type,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}