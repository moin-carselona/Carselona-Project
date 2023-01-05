import DataTable, { TableColumn } from 'react-data-table-component';
import { PointTableInterface } from './PointTableInterface';
export const columns: TableColumn<PointTableInterface>[] = [
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
        selector: (row) => row.fuel_type,
        sortable: true,
    },
    {
        name: 'JOB TYPE',
        selector: (row) => row.fuel_type,
        sortable: true,
        // id: "css"
    },
    {
        name: 'JOB SITE',
        selector: (row) => row.fuel_type,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CAR TYPE',
        selector: (row) => row.fuel_type,
        sortable: true,
        // id: "css"
    },
    {
        name: 'USER TYPE',
        selector: (row) => row.fuel_type,
        sortable: true,
        // id: "css"
    },
    {
        name: 'POINTS',
        selector: (row) => row.fuel_type,
        sortable: true,
        // id: "css"
    },
    
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}