import axios from "axios"
import { MAIN_API_BASE_API_URL, TEST_API_BASE_API_URL } from "../../apiGlobally"

export function GetAllSocietyData(localkey:any) {
    return axios.get(`${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/master/getsociety`)
}