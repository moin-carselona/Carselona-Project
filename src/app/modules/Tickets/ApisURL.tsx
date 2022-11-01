import axios from "axios"
export const BaseURL_Tickets = "https://testadminapi.carselonadaily.com/api"

export function AllTicketsAPI() {
    return axios.get(`${BaseURL_Tickets}/admin/servergetticketallticketAdminNewPagination?start=${0}&length=${10}&orders=${"desc"}&columns=id`)
}
// get data for pagination
export function allTicketsPagination(starts: number, lengths: number, order: string, columns: string) {
    console.log('starts', starts);
    return axios.get(`${BaseURL_Tickets}/admin/servergetticketallticketAdminNewPagination?start=${starts}&length=${10}&orders=${"desc"}&columns=id`)
}
// get data for searching
export function SearchTicketsAPI(SearchTickets: any) {
    return axios.get(`${BaseURL_Tickets}/admin/servergetticketallticketAdminNewPagination?search=${SearchTickets}&start=${0}&length=${10}&columns=id&orders=desc`)
}
// filter by cleaner id to get cleaner data
export function filterbyCleanerID(cleanerid: any, key: string) {

    return axios.get(`${BaseURL_Tickets}/admin/servergetticketallticketAdminNewPagination?start=${0}&length=${10}&cleanerid=${cleanerid}&columns=id&orders=${"desc"}`)
}
// filter by customer id to get customer data
export function filterbyCustomerID(cusomerid: any, key: string) {

    return axios.get(`${BaseURL_Tickets}/admin/servergetticketallticketAdminNewPagination?start=1&length=10&customerid=${cusomerid}&columns=id&orders=desc`)
}
// filter by source id to get source data

export function filterbySourceID(sourceid: any, key: string) {

    return axios.get(`${BaseURL_Tickets}/admin/servergetticketallticketAdminNewPagination?start=1&length=10&sourceid=${sourceid}&columns=id&orders=desc`)
}
// get data for filter Option
export function allTicketsFilterAPI() {
    return axios.get(`${BaseURL_Tickets}/admin/getfillterlistforticket`)
}
// get chat general data  
export function GetChatGeneralApiReplies(ticketIDs:any) {
    console.log('general chat id', ticketIDs);
    return axios.post(`${BaseURL_Tickets}/admin/getticketreplies`, ticketIDs)
}

// post chat public data  
export function PostPublicChatAPI (ticketIDs:any) {
    console.log('public chat id', ticketIDs);
    return axios.post(`${BaseURL_Tickets}/admin/replyonticketbyadmin`, ticketIDs)
}
// post chat private data  
export function PostPrivateChatAPI (ticketIDs:any) {
    console.log('private chat id', ticketIDs);
    return axios.post(`${BaseURL_Tickets}/admin/notesonticketbyadmin`, ticketIDs)
}