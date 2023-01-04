import DataTable, { TableColumn } from 'react-data-table-component';
import { TshirtInterfaces } from './TshirtInterfaces';
export const columns: TableColumn<TshirtInterfaces>[] = [
    {
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    
    {
        name: 'US',
        selector: (row) => row.us,
        sortable: true,
        // id: "css"
    },
    {
        name: 'UK',
        selector: (row) => row.uk,
        sortable: true,
    },
    {
        name: 'SIZE',
        selector: (row) => row.size,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}

