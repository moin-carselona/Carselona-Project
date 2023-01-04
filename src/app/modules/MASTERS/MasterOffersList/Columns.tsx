import DataTable, { TableColumn } from 'react-data-table-component';
import { MasterInterfaces } from './MasterInterfaces';
// export interface MasterInterfaces {
//     id:                  number;
//     name:                string;
//     description:         string;
//     image:               string;
//     type:                string;
//     amount:              number;
//     coupon:              string;
//     for_all_customers:   number;
//     per_customer:        number;
//     max_discount_amount: number;
//     startdate:           string;
//     enddate:             string;
//     fly_generated:       number;
//     campaign_reward_id:  number;
//     status:              number;
//     createdAt:           number;
//     updatedAt:           number;
//     ctOffers:            CTOffer[];
// }
// export interface CTOffer {
//     id:                number;
//     customerid:        number;
//     offer_id:          number;
//     coupon:            string;
//     is_applied:        number;
//     applied_datetime:  string;
//     discounted_amount: number;
//     status:            number;
//     createdAt:         number;
//     updatedAt:         number;
// }
export const columns: TableColumn<MasterInterfaces>[] = [
    {
        name: 'Edit',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    {
        name: 'ID',
        selector: (row) => row.id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'NAME',
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: 'IMAGES',
        cell: (row: { image: any }) => <img  style={{width:"80px"}} src={row.image} alt="" />,
        sortable: true,
    },
    {
        name: 'TYPE',
        selector: (row) => row.type,
        sortable: true,
    },
    {
        name: 'PERCENTAGE/AMOUNT',
        selector: (row) => row.amount,
        sortable: true,
    },
    {
        name: 'COUPON',
        selector: (row) => row.coupon,
        sortable: true,
    },
    {
        name: 'START DATE',
        selector: (row) => row.startdate,
        sortable: true,
    },
    {
        name: 'END DATE',
        selector: (row) => row.enddate,
        sortable: true,
    },
    {
        name: 'PER CUSTOMER',
        selector: (row) => row.per_customer,
        sortable: true,
    },
    {
        name: 'MAX AMOUNT',
        selector: (row) => row.max_discount_amount,
        sortable: true,
    },
    {
        name: 'FOR ALL CUSTOMERS?',
        selector: (row) => row.for_all_customers,
        sortable: true,
    },
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}