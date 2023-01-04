import axios from "axios"
import { MAIN_ADMIN_BASE_API_URL, MAIN_API_BASE_API_URL, TEST_ADMIN_BASE_API_URL, TEST_API_BASE_API_URL } from "../../../apiGlobally"

export function GetAllSocietyData(localkey:any) {
    return axios.get(`${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/master/getsociety`)
}
/// get all society to show in ui
export function AddNewSocietyPostRequest(localkey:any, payload:any) {
    return axios.post(`${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/master/addsociety`, payload)
}
/// get all city list to show in add society form 
export function GetAllCityData(localkey:any) {
    return axios.get(`${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getcity`)
}
/// get all package list to show in add society form 
export function GetAllPackageIDData(localkey:any) {
    return axios.get(`${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getActivePackageDetails`)
}
/// get all clcikupi list to show in add society form 
export function GetAllClickapiData(localkey:any) {
    return axios.get(`${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/getClickupList`)
}
/// get all area list to show in add society form 
export function GetAllAreaData(localkey:any) {
    return axios.get(`${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getarea`)
}