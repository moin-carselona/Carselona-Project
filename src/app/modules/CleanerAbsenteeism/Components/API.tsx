import axios from 'axios'
import {
  MAIN_ADMIN_BASE_API_URL,
  MAIN_API_BASE_API_URL,
  TEST_ADMIN_BASE_API_URL,
  TEST_API_BASE_API_URL,
} from '../../../../apiGlobally'
/// get all society to show in ui
export function GetAllCleanerAttendanceData(localkey: any, selectedDate: string, cleanerid: any) {
  if (cleanerid) {
    return axios.get(
      `${
        localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL
      }/admin/getCleanerAttendance?date=${selectedDate}&cleanerid=${cleanerid}`
    )
  } else {
    return axios.get(
      `${
        localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL
      }/admin/getCleanerAttendance?date=${selectedDate}`
    )
  }
}

export function GetAllCleanerListData(localkey: any) {
  return axios.post(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getactivecleanerbycity`,
    {city: 6}
  )
}
