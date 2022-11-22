// https://api.carselonadaily.com/api/admin/getCustomerStats
import axios from "axios";
import { MAIN_API_BASE_API_URL, TEST_API_BASE_API_URL } from "../../apiGlobally";
export function GetAllCustomerStats(localkey: any) {
    return axios.post(
        `${localkey ?MAIN_API_BASE_API_URL  : TEST_API_BASE_API_URL}/admin/getCustomerStats`,
        {
            "startDate": "2022-11-10"
        }
    )
}
