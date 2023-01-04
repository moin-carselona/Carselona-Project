import DataTable, { TableColumn } from 'react-data-table-component';
import { MasterResourceInterfacess } from './MasterResourceInterfacess';
export const columns: TableColumn<MasterResourceInterfacess>[] = [
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
        name: 'NAME',
        selector: (row) => row.name,
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