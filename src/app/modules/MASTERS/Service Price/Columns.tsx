import DataTable, { TableColumn } from 'react-data-table-component';
import { servicePrices } from './ServicePriceInterfaces';

export const columns: TableColumn<servicePrices>[] = [
    {
        name: 'Edit',
        cell: (row ) => (
            <button  onClick={()=>handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"

    },
    {
        name: 'CITY ID',
        selector: (row) => row.cityid,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CATEGORY',
        selector: (row) => row.categoryid,
        sortable: true,
    },
    {
        name: 'WASHING',
        selector: (row) => row.carwashing,
        sortable: true,
    },
    {
        name: 'SANITIZATION',
        selector: (row) => row.sanitization,
        sortable: true,
    },
    {
        name: 'WAXING',
        selector: (row) => row.waxing,
        sortable: true,
    },
    {
        name: 'PICK UP DROP',
        selector: (row) => row.pickupdrop,
        sortable: true,
    },
    {
        name: 'JUMP START',
        selector: (row) => row.jumpstart,
        sortable: true,
    },
    {
        name: 'CLEANER 15',
        selector: (row) => row.carcleaning15,
        sortable: true,
    },
    {
        name: 'CLEANER 30',
        selector: (row) => row.bikecleaning30,
        sortable: true,
    },
  

];
  const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
  }