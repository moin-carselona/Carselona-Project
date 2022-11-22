import DataTable, { TableColumn } from 'react-data-table-component';
interface DataRow {
    name: string;
    CustomerCount: number;
    package: {
        name: string
    };
    total_apartments: number
    areaname: string
    phone: number
    email: string
    city_name: string
    address: string
}
export const columns: TableColumn<DataRow>[] = [
    // {
    //     name: 'ID',
    //     selector: (row: { id: any; }) => row.id,
    //     sortable: true,
    //     id: "ID"
    // },
    {
        name: 'NAME',
        selector: (row: { name: any; }) => row.name,
        sortable: true,
        id:"css"
    },
    {
        name: 'ACTIVE',
        selector: (row: { name: any; }) => row.name,
        sortable: true,
    },
    {
        name: 'TOTAL CUSTOMER',
        selector: (row: { CustomerCount: number; }) => row.CustomerCount,
        sortable: true,
    },
    {
        name: 'PACKAGE NAME',
        selector: (row: { package: any; }) => row.package.name,
        sortable: true,
    },
    {
        name: 'FLATS',
        selector: (row: { total_apartments: any; }) => row.total_apartments,
        sortable: true,
    },
    {
        name: 'AREA',
        selector: (row: { areaname: any; }) => row.areaname,
        sortable: true,
    },
    {
        name: 'PHONE',
        selector: (row: { phone: any; }) => row.phone,
        sortable: true,
    },
    {
        name: 'EMAIL',
        selector: (row: { email: any; }) => row.email,
        sortable: true,
    },
    {
        name: 'CITY',
        selector: (row: { city_name: any; }) => row.city_name,
        sortable: true,
    },
    {
        name: 'ADDRESS',
        selector: (row: { address: any; }) => row.address,
        sortable: true,
    },
    // {
    //   name: 'Edit',
    //   cell: (row: { year: string; id: number }) => (
    //     <button onClick={() => handleEditeBTN(row.id)} className="btn btn-sm btn-primary">Edit</button>
    //   ),
    //   // sortable: true,
    // },
];
//   const handleEditeBTN = (id: number) => {
//     console.log('id', id);
//     // console.log('target', target.innerHTML);
//   }