import DataTable, { TableColumn } from 'react-data-table-component';
import { VisitorsInterfaces } from './VisitorsInterfaces';

export const columns: TableColumn<VisitorsInterfaces>[] = [
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
        selector: (row) => row.ref_by_cleaners,
        sortable: true,
        // id: "css"
    },
    {
        name: 'ONBOARD',
        selector: (row) => row.onboarded,
        sortable: true,
        // id: "css"
    },
    {
        name: 'DATE/TIME',
        selector: (row) => row.updatedAt,
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
        name: 'SOCIETY',
        selector: (row) => row.phone,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CITY',
        selector: (row) => row.city,
        sortable: true,
        // id: "css"
    },
    {
        name: 'ADDRESS',
        selector: (row) => row.address,
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
        name: 'PINCODE',
        selector: (row) => row.pincode,
        sortable: true,
        // id: "css"
    },
    {
        name: 'COINS',
        selector: (row) => row.pincode,
        sortable: true,
        // id: "css"
    },
    {
        name: 'STATUS', 
        selector: (row) => row.status,
        sortable: true,
        // id: "css"
    },
  

  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}