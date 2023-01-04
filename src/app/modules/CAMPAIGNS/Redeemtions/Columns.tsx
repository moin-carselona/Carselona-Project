import DataTable, { TableColumn } from 'react-data-table-component';
import { RedeemptionsInterfaces } from './RedeemptionsInterfaces';
export const columns: TableColumn<RedeemptionsInterfaces>[] = [
    {
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
    //     campaign_id
    // userid
    // reward_value
    // status
    // campaignEvent  ====OBJECT
    {
        name: 'CAMPAIGNS ID',
        selector: (row) => row.campaign_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'USER ID',
        selector: (row) => row.userid,
        sortable: true,
        // id: "css"
    },
    {
        name: 'USER NAME',
        selector: (row) => row.campaign_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'REWARD VALUE',
        selector: (row) => row.reward_value,
        sortable: true,
        // id: "css"
    },
    {
        name: 'REWARD TYPE',
        selector: (row) => row.campaign_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'EVENTS',
        selector: (row) => row.campaign_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'STATUS',
        selector: (row) => row.status,
        sortable: true,
        // id: "css"
    },
    {
        name: 'REWARDS DATETIME',
        selector: (row) => row.campaign_id,
        sortable: true,
        // id: "css"
    },
 
  
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}