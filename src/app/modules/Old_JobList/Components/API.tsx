import axios from 'axios'
import {
  MAIN_ADMIN_BASE_API_URL,
  MAIN_API_BASE_API_URL,
  TEST_ADMIN_BASE_API_URL,
  TEST_API_BASE_API_URL,
} from '../../../../apiGlobally'
/// get all society to show in ui
export function GetAllCleanerAttendanceData(localkey: any, todaysDate: string, lastDate: string, cleanerid: any) {
  return axios.post(
    `${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL
    }/admin/allcleanerattendence`, {
    "attendencedatefrom": todaysDate,
    "attendencedateto": lastDate,
    "cleanerid": "",
    "cleaner_status": "",
    "job_status": 0,
    "customerid": "",
    "radius": 0
  }
  )
}
export function GetAllCleanerListData(localkey: any) {
  return axios.post(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getactivecleanerbycity`,
    { city: 6 }
  )
}






