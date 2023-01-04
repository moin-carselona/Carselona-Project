import DataTable, { TableColumn } from 'react-data-table-component';
import { VehicleTypeinterfaces } from './fuletypeInterfaces';
export const columns: TableColumn<VehicleTypeinterfaces>[] = [
    {
        name: 'Edit',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },

    {
        name: 'VEHICLE TYPE',
        selector: (row) => row.vehicle_type,
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