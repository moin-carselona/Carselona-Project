import axios from "axios"
import { MAIN_ADMIN_BASE_API_URL, MAIN_API_BASE_API_URL, TEST_ADMIN_BASE_API_URL, TEST_API_BASE_API_URL } from "../../../apiGlobally"


export function GetAllRatings(localkey: any, payloads: any) {
    return `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/master/getRatings`
  }

export function GetAllCleaners(localkey:any) {
    return axios.get(`${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerListFields`)
    // return axios.get(`http://localhost:4000/api/admin/getCleanerListFields`)
}

export function GetAllSources(localkey:any) {
    return axios.get(`${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getActiveSources`)
    // return axios.get(`http://localhost:4000/api/admin/getActiveSources`)
}

export function GetAllCustomers(localkey:any) {
    return axios.get(`${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getActiveCustomersFields`)
    // return axios.get(`http://localhost:4000/api/admin/getActiveCustomersFields`)
}
