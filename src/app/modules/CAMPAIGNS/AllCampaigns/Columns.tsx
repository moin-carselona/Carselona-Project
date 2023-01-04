import DataTable, { TableColumn } from 'react-data-table-component';
import { AllcampaignsInterfaces } from './AllcampaignsInterfaces';
export const columns: TableColumn<AllcampaignsInterfaces>[] = [
    {
        name: 'ACTION',
        cell: (row) => (
            <button onClick={() => handleEditeBTN(row?.id)} className="btn btn-sm btn-primary"><i className="fa fa-eye " ></i></button>
        ),
        sortable: true,
        id: "css"
    },
//     campaign_type_name
// campaign_reward_name
// campaign_budget
// campaign_budget_left
// campaignSegments ============== arrray
// campaignEvents  ============== arrray
// campaign_start_datetime
// campaign_end_datetime
// status
    {
        name: 'SI No',
        selector: (row) => row.campaign_type_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CAMPAIGN TYPE',
        selector: (row) => row.campaign_type_name,
        sortable: true,
        // id: "css"
    },
    {
        name: 'REWARD TYPE',
        selector: (row) => row.campaign_reward_name,
        sortable: true,
        // id: "css"
    },
    {
        name: 'BUDGET',
        selector: (row) => row.campaign_budget,
        sortable: true,
        // id: "css"
    },
    {
        name: 'BUDGET LEFT',
        selector: (row) => row.campaign_budget_left,
        sortable: true,
        // id: "css"
    },
    {
        name: 'SEGMENTS',
        selector: (row) => row.campaign_type_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'EVENTS',
        selector: (row) => row.campaign_type_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CAMPAIGNS PARTICIPANTS',
        selector: (row) => row.campaign_type_id,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CAMPAIGNS START DATE',
        selector: (row : {campaign_start_datetime :any}) => row.campaign_start_datetime,
        sortable: true,
        // id: "css"
    },
    {
        name: 'CAMPAIGNS END DATE',
        selector: (row : {campaign_end_datetime :any}) => row.campaign_end_datetime,
        sortable: true,
        // id: "css"
    },
    {
        name: 'STATUS',
        selector: (row) => row.status,
        sortable: true,
        // id: "css"
    },
    
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
    // console.log('target', target.innerHTML);
}