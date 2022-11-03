import React from 'react'
import DataTable from 'react-data-table-component'
// import SortIcon from "@material-ui/icons/ArrowDownward";

const columns = [
    {
        name: 'Title',
        selector: (row: { title: any; }) => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: (row: { year: any; }) => row.year,
        sortable: true,
    },
    {
        name: 'Cleaner Name',
        selector: (row: {
            [x: string]: any; year: any;
        }) => row.cleaner,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        cleaner: 'rohan',
    },
    {
        id: 4,
        title: 'Beetlejuice',
        year: '1988',
        cleaner: 'ahan',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 3,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 6,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 44,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 5454,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 324,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 434,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 2342323,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 33424,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 44234,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 4234234,
        title: 'Ghostbusters',
        year: '2022',
    },
    {
        id: 4234234,
        title: 'Ghostbusters',
        year: '2022',
    },
    

]

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    noRowsPerPage : true,
    rangeSeparatorText: 'de',
    // selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};
const Tables = () => {
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            // selectableRows

            paginationComponentOptions={paginationComponentOptions}

        />
    )
}

export default Tables





// function MyComponent() {
//     return (
//         <DataTable
//             columns={columns}
//             data={data}
//         />
//     );
// };