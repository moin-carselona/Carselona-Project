import DataTable, { TableColumn } from 'react-data-table-component';
import { SericesInterface } from './OnlyServicesInterface';

export const columns: TableColumn<SericesInterface>[] = [
    {
        name: 'ACTIONS',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye "></i></button>

        ),
        // sortable: true,
    },
    {
        name: 'SERVICES NAME',
        selector: (row) => row.services_name,
        sortable: true,
        id: "css"
    },
    {
        name: 'PRICE',
        selector: (row) => row.services_price,
        sortable: true,
    },
    {
        name: 'TDESCRIPTION',
        selector: (row) => row.services_desc,
        sortable: true,
    },

];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}



