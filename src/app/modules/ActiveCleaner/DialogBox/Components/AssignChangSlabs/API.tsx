import axios from 'axios'
import { MAIN_API_BASE_API_URL, TEST_API_BASE_API_URL } from '../../../../../../apiGlobally'
// import { MAIN_ADMIN_BASE_API_URL, MAIN_API_BASE_API_URL, TEST_ADMIN_BASE_API_URL, TEST_API_BASE_API_URL } from "../../apiGlobally"
export function getSchemeRecord(localkey: any, cleanerid:number) {
  return axios.get(`${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getSchemeRecord/${cleanerid}`)
}
