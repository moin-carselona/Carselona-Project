import DataTable, { TableColumn } from 'react-data-table-component';
import { JobStatusInterfaces } from './JobStatusInterfaces';
export const columns: TableColumn<JobStatusInterfaces>[] = [
    {    
    
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'SI',
        selector: (row) => row?.id,
        sortable: true,
    },
    {
        name: 'STATUS NAME',
        selector: (row) => row?.status_name,
        sortable: true,
    },
    {
        name: 'CUTOMER STATUS',
        selector: (row) => row?.customer_app_status,
        sortable: true,
    },
    {
        name: 'CLEANER STATUS',
        selector: (row) => row?.cleaner_app_status,
        sortable: true,
    },
    {
        name: 'STATUS',
        selector: (row) => row?.status_code,
        sortable: true,
        // id: "css"
    },
  
   
 
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}