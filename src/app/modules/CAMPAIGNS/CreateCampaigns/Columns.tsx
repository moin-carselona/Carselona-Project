import DataTable, { TableColumn } from 'react-data-table-component';
import { CreaateCampaignInterfces } from './CreaateCampaignInterfces';
export const columns: TableColumn<CreaateCampaignInterfces>[] = [
    {

        // id:               number;
        // country_name:     string;
        // country_code:     string;
        // country_currency: string;
        // currency_symbole: string;
        // conversion_rate:  string;
        // status:           number;
        // createdAt:        number;
        // updatedAt:        number;
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'NAME',
        selector: (row) => row.country_name,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CURRENCY',
        selector: (row) => row.country_currency,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CURRENCEY SYMBOL',
        selector: (row) => row.currency_symbole,
        sortable: true,
    },
    {
        name: 'CODE',
        selector: (row) => row.country_code,
        sortable: true,
    },
    {
        name: 'CONVERSION RATE',
        selector: (row) => row.conversion_rate,
        sortable: true,
    },

  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}