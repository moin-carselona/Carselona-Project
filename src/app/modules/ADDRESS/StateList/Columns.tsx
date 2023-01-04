import DataTable, { TableColumn } from 'react-data-table-component';
import { StatesInterfacess } from './StatesInterfacess';
export const columns: TableColumn<StatesInterfacess>[] = [
    {

        // d:         number;
        // country_id: number;
        // state_name: string;
        // state_code: string;
        // city:       string;
        // createdAt:  number;
        // updatedAt:  number;



        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
 
    {
        name: 'NAME',
        selector: (row) => row.state_name,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CODE',
        selector: (row) => row.state_code,
        sortable: true,
        // id: "css"
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}