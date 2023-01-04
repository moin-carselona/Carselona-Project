import DataTable, { TableColumn } from 'react-data-table-component';
import { CityInterfaces } from './CityInterfaces';
// category_name: string;
// usertype:      number;
// status:        number;
// createdAt:     number;
// updatedAt:     number;
export const columns: TableColumn<CityInterfaces>[] = [
    {

        // id:         number;
        // country_id: number;
        // state_id:   number;
        // city_name:  string;
        // status:     number;
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
        name: 'CITY',
        selector: (row) => row.city_name,
        sortable: true,
        // id: "css"
    }
  

  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}