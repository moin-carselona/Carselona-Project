import axios from "axios"
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from "../../../apiGlobally";
// export const BaseURL_Tickets = "https://testadminapi.carselonadaily.com/api"
export function AllTicketsAPI(localKeyCheck:string) {
    return axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/servergetticketallticketAdminNewPagination?start=${0}&length=${10}&orders=${"desc"}&columns=id`)
}


// get data for pagination
// export function allTicketsPagination(starts: number, lengths: number, order: string, columns: string) {
//     console.log('starts', starts);
//     return axios.get(`${BaseURL_Tickets}/admin/servergetticketallticketAdminNewPagination?start=${starts}&length=${10}&orders=${"desc"}&columns=id`)
// }
// get data for searching
export function SearchTicketsAPI(SearchTickets: any, localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/servergetticketallticketAdminNewPagination?search=${SearchTickets}`) 
    // &start=${0}&length=${200}&columns=id&orders=desc
}
// filter by cleaner id to get cleaner data
export function filterbyCleanerID(cleanerid: any, key: string, localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/servergetticketallticketAdminNewPagination?start=${0}&length=${10}&cleanerid=${cleanerid}&columns=id&orders=${"desc"}`)
}
// filter by customer id to get customer data
export function filterbyCustomerID(cusomerid: any, key: string, localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/servergetticketallticketAdminNewPagination?start=1&length=10&customerid=${cusomerid}&columns=id&orders=desc`)
}
// filter by source id to get source data
export function filterbySourceID(sourceid: any, key: string, localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/servergetticketallticketAdminNewPagination?start=1&length=10&sourceid=${sourceid}&columns=id&orders=desc`)
}
// get data for filter Option
export function allTicketsFilterAPI(localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getfillterlistforticket`)
}
// get chat general data  
export function GetChatGeneralApiReplies(ticketIDs: any,localKeyCheck :string) {
    console.log('general chat id', ticketIDs);
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getticketreplies`, ticketIDs)
}
// post chat public data  
export function PostPublicChatAPI(ticketIDs: any, localKeyCheck :string) {
    console.log('public chat id', ticketIDs);
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/replyonticketbyadmin`, ticketIDs)
}
// post chat private data  
export function PostPrivateChatAPI(ticketIDs: any, localKeyCheck:string) {
    console.log('private chat id', ticketIDs);
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/notesonticketbyadmin`, ticketIDs)
}