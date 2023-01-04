import DataTable, { TableColumn } from 'react-data-table-component';
import { RoleInterfaces } from './RoleInterfaces';

export const columns: TableColumn<RoleInterfaces>[] = [
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
        name: 'MODULE NAME',
        selector: (row) => row.first_name,
        sortable: true,
        // id: "css"
    }
  

  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}