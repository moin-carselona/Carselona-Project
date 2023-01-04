import DataTable, { TableColumn } from 'react-data-table-component';
import { masterReaonsInterface } from './masterReasonInterfacess';
export const columns: TableColumn<masterReaonsInterface>[] = [
    {

        // id:        number;
        // reason:    string;
        // for:       string;
        // status:    number;
        // createdAt: number;
        // updatedAt: number;
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'FOR',
        selector: (row) => row.for,
        sortable: true,
        // id: "css"
    },
    {
        name: 'ID',
        selector: (row) => row.id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'REASONS',
        selector: (row) => row.reason,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}