import axios from "axios"
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from "../../../apiGlobally"
export const getAvalabilitybySubscriptionAreawise: any = async (localKeyCheck: string, payloads: any, setLoading: any) => {
    try {
        const result = await axios
            .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyAddress`, payloads)
        setLoading(false)
        return result
    } catch (error) {
        setLoading(false)
        console.log('error getAvalabilitybySubscription : ', error)
        return []
    }
}
export const gettimeslotsData: any = async (localKeyCheck: string, payloads: any) => {
    // axios
    // .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
    // .then((response) => {
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
    try {
        const result = axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
        return result
    } catch (error) {
        console.log('error getAvalabilitybySubscription : ', error)
    }
}