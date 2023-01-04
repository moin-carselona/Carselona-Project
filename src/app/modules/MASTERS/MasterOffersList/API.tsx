import axios from "axios"
import { MAIN_API_BASE_API_URL, TEST_API_BASE_API_URL } from "../../../../apiGlobally"

/// get all society to show in ui
export function GetAllMasterAPIData(localkey:any) {
    return axios.get(`${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getAllOffers`)
}
