import DataTable, { TableColumn } from 'react-data-table-component';
import { PincodeMainsInterfaces } from './PincodeMainsInterfaces';
export const columns: TableColumn<PincodeMainsInterfaces>[] = [
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
        selector: (row) => row.id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'PINCODE',
        selector: (row) => row.pincode,
        sortable: true,
    },
    {
        name: 'STATE',
        selector: (row) => row.state_id,
        sortable: true,
    },
    {
        name: 'CITY',
        selector: (row) => row.city_id,
        sortable: true,
    },
    {
        name: 'LOCALITY',
        selector: (row) => row.locality,
        sortable: true,
    },
    {
        name: 'DIVISION',
        selector: (row) => row.division,
        sortable: true,
    },
    {
        name: 'REGION',
        selector: (row) => row.region,
        sortable: true,
    },
    {
        name: 'CIRCLE',
        selector: (row) => row.circle,
        sortable: true,
    },
    {
        name: 'TALUKA',
        selector: (row) => row.taluka,
        sortable: true,
    },
    {
        name: 'DISTRICT',
        selector: (row) => row.district,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}