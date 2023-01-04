import DataTable, { TableColumn } from 'react-data-table-component';
import { AreasInterfaces } from './AreasInterfaces';
export const columns: TableColumn<AreasInterfaces>[] = [
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
        name: 'AREA',
        selector: (row) => row.areaname,
        sortable: true,
        // id: "css"
    },
    
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}