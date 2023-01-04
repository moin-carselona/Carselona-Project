import DataTable, { TableColumn } from 'react-data-table-component';
import { VahicleInterfaces } from './VahicleInterfaces';
export const columns: TableColumn<VahicleInterfaces>[] = [
    {
        name: 'Edit',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'NAME',
        selector: (row) => row.category_name,
        sortable: true,
        // id: "css"
    },
    {
        name: 'IMAGES',
        selector: (row) => row.image,
        sortable: true,
    },
    {
        name: 'BACKGROUND',
        selector: (row) => row.bg_image,
        sortable: true,
    },
    {
        name: 'COLOR',
        selector: (row) => row.color_code,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}
