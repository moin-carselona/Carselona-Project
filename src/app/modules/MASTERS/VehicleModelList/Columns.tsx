import DataTable, { TableColumn } from 'react-data-table-component';
import { VehcileModelInterface } from './VehicleModelInterfaces';
export const columns: TableColumn<VehcileModelInterface>[] = [
    {
        name: 'Edit',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'VEHICLE MODEL',
        selector: (row) => row.category_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'VEHICLE BRAND',
        selector: (row) => row.category_id,
        sortable: true,
    },
    {
        name: 'CATEGORY',
        selector: (row) => row.category_id,
        sortable: true,
    }
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}