import DataTable, { TableColumn } from 'react-data-table-component';
import { TrainingTopicsInterface } from './TrainingTopicsInterface';
export const columns: TableColumn<TrainingTopicsInterface>[] = [
    {  
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'TITLE',
        selector: (row) => row.title,
        sortable: true,
        // id: "css"
    },
    {
        name: 'ID',
        selector: (row) => row.id,
        sortable: true,
    },
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}