import axios from "axios"
import { MAIN_ADMIN_BASE_API_URL, MAIN_API_BASE_API_URL, TEST_ADMIN_BASE_API_URL, TEST_API_BASE_API_URL } from "../../../apiGlobally";
// export const BaseURL_Tickets = "https://testadminapi.carselonadaily.com/api"
export function AllTicketsAPI(localKeyCheck: string, setPending: any, reference: string | null, payloads: any) {
    console.log('payloads', payloads);
    const result = axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAllTicketNewAdmin?ticketfrom=${payloads?.attendencedatefrom}&ticketto=${payloads?.attendencedateto}`).then((res) => {
        setPending(false)
        return res
    }).catch((err) => {
        setPending(false)
        return err
    })
    // const result = axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAllTicketNewAdmin?cleanerid=${payloads?.cleanerid}&customerid=${payloads?.customerid}&categoryid=${payloads?.ticketidcategory}&supervisorid=${payloads?.supervisor}&ticketfrom=${payloads?.attendencedatefrom}&ticketto=${payloads?.attendencedateto}`).then((res) => {
    //     setPending(false)
    //     return res
    // }).catch((err) => {
    //     setPending(false)
    //     return err
    // })
    return result
}
// get data for filter Option
export function allTicketsFilterAPI(localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getfillterlistforticket`)
}
// get chat general data  
export function GetChatGeneralApiReplies(ticketIDs: any, localKeyCheck: string, setloading2: any) {
    const result = axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getticketreplies`, ticketIDs).then((res) => {
        setloading2(false)
        return res
    }).catch((err) => {
        setloading2(false)
        return err
    })
    return result
    // return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getticketreplies`, ticketIDs)
}
// post chat public data  
export function PostPublicChatAPI(ticketIDs: any, localKeyCheck: string) {
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/replyonticketbyadmin`, ticketIDs)
}
// post chat private data  
export function PostPrivateChatAPI(ticketIDs: any, localKeyCheck: string) {
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/notesonticketbyadmin`, ticketIDs)
}
// add ticket form page for that data is fecthing here ..................
export function getTicketCategories(localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getTicketCategories`)
}
export function getTicketSubCategories(localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getTicketSubCategories`)
}
export function getTicketSources(localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getTicketSources`)
}
export function getSupervisorList(localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getSupervisorList`)
}
export function getAdminList(localKeyCheck: string) {
    return axios.get(`${localKeyCheck ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getAdminList`)
}
export function getticketreplies(localKeyCheck: string, ticketData: any) {
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getticketreplies`, ticketData?.id)
}
export function createticketByAdmin(localKeyCheck: string, ticketsPayloads: any,) {
    // console.log('ticketsPayloads ', ticketsPayloads);
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/createticketByAdmin`, JSON.stringify(ticketsPayloads))
}
export function updateAssignedUsers(localKeyCheck: string, PayloadsAssign: any,) {
    // console.log('ticketsPayloads ', ticketsPayloads);
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/updateAssignedUsers`, PayloadsAssign)
}
export function updateTicketStatus(localKeyCheck: string, PayloadsUpdate: any,) {
    // console.log('ticketsPayloads ', ticketsPayloads);
    return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/updateTicketStatus`, PayloadsUpdate)
}
export function updateCategory(localKeyCheck: string, PayloadsStatus: any, setloading2: any) {
    // console.log('PayloadsStatus', PayloadsStatus);
    // console.log('ticketsPayloads ', ticketsPayloads);
    const result = axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/updateCategory`, { ticketid : PayloadsStatus.ticketid, categoryid: PayloadsStatus.categoryid }).then((res) => {
        setloading2(false)
        return res
    }).catch((err) => {
        setloading2(false)
        return err
    })
    return result
    // return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/updateCategory`,PayloadsStatus)
}
export function updateSources(localKeyCheck: string, PayloadsStatus: any, setloading2: any) {
    // console.log('PayloadsStatus', PayloadsStatus);
    // console.log('ticketsPayloads ', ticketsPayloads);
    const result = axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/updateSource`, { ticketid : PayloadsStatus.ticketid, source_id: PayloadsStatus.source_id }).then((res) => {
        setloading2(false)
        return res
    }).catch((err) => {
        setloading2(false)
        return err
    })
    return result
    // return axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/updateSource`,PayloadsUpdate)
}
// https://adminapi.carselonadaily.com/api/admin/createticketByAdmin
// https://adminapi.carselonadaily.com/api/admin/getticketallticketAdmin?ticketfrom=2022-12-29&ticketto=2022-12-29&_=1672314702447