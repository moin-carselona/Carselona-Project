import DataTable, { TableColumn } from 'react-data-table-component';
import { packagesInterface } from './packagesInterface';
// id:                       number;
// category_id:              number;
// packageid:                number;
// Price:                    number;
// Service:                  string;
// city:                     number;
// carcleanerprice15:        number;
// carcleanerprice30:        number;
// carcleanerpriceweekly:    number;
// bikecleanerprice15:       number;
// bikecleanerprice30:       number;
// bikecleanerpriceweekly:   number;
// instencecarcleanerprice:  number;
// instencebikecleanerprice: number;
// points:                   number;
// createdAt:                number;
// updatedAt:                number;
export const columns: TableColumn<packagesInterface>[] = [
    {
        name: 'Edit',
        cell: (row ) => (
            <button  onClick={()=>handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"

    },
    {
        name: 'NAME',
        // selector: (row) => row.category_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'PRICE',
        selector: (row) => row.Price,
        sortable: true,
    },
    {
        name: 'SERVICES',
        selector: (row) => row.Service,
        sortable: true,
    },
    {
        name: 'CATEGORY',
        selector: (row) => row.category_id,
        sortable: true,
    },
    {
        name: 'CITY',
        selector: (row) => row.city,
        sortable: true,
    },

    {
        name: 'CAR CLEANER PRICES ( 15 DAYS )',
        selector: (row) => row.carcleanerprice15,
        sortable: true,
    },
    {
        name: 'CAR CLEANER PRICES ( 30 DAYS )',
        selector: (row) => row.carcleanerprice30,
        sortable: true,
    },
    {
        name: 'CAR CLEANER WEEKLY',
        selector: (row) => row.carcleanerpriceweekly,
        sortable: true,
    },
    {
        name: 'BIKE CLEANER PRICES ( 15 DAYS )',
        selector: (row) => row.bikecleanerprice15,
        sortable: true,
    },
    {
        name: 'BIKE CLEANER PRICES ( 30 DAYS )',
        selector: (row) => row.bikecleanerprice30,
        sortable: true,
    },
    {
        name: 'BIKE CLEANER WEEKLY',
        selector: (row) => row.bikecleanerpriceweekly,
        sortable: true,
    },
    {
        name: 'INSTANT CAR CLEANER',
        selector: (row) => row.instencecarcleanerprice,
        sortable: true,
    },
    {
        name: 'INSTANT BIKE CLEANER',
        selector: (row) => row.instencebikecleanerprice,
        sortable: true,
    },
    {
        name: 'COINS',
        selector: (row) => row.points,
        sortable: true,
    },
  

];
  const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
  }