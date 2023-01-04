import DataTable, { TableColumn } from 'react-data-table-component';
import { VehicleBrandInterfaces } from './VehicleBrandInterfaces';
export const columns: TableColumn<VehicleBrandInterfaces>[] = [
    {
        name: 'Edit',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },

    {
        name: 'VEHICLE BRAND',
        selector: (row) => row.name,
        sortable: true,
        // id: "css"
    },
    {
        name: 'VEHICLE TYPE',
        selector: (row) => row.vehicletype_id,
        sortable: true,
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