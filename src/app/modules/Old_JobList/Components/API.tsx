import axios from 'axios'
import {
  MAIN_ADMIN_BASE_API_URL,
  MAIN_API_OLD_URL,
  TEST_ADMIN_BASE_API_URL,
} from '../../../../apiGlobally'
import { updateStatusFromInterface } from './Interfaces'
/// get all society to show in ui
export function GetAllCleanerAttendanceData(localkey: any, payloads: any) {
  return axios.post(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL
    }/admin/allChampsJobs`, payloads
  )
}
export function GetAllCleanerListData(localkey: any) {
  return axios.post(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getactivecleanerbycity`,
    { city: 6 }
  )
}
export function GetAllSuperVisorData(localkey: any) {
  return axios.get(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getSupervisorList`
  )
}
export function GetAllCleanerData(localkey: any) {
  return axios.get(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`
  )
}
export function GetAllCutomerData(localkey: any) {
  return axios.get(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getActiveCustomerlist`
  )
}
export function getAllJobStatusActionsV2(localkey: any) {
  return axios.get(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAllJobStatusActionsV2`
  )
}
export function GetAllCleanerListandjobtype(localkey: any, AttendanceID: any) {
  return axios.post(
    `${localkey ? MAIN_API_OLD_URL : MAIN_API_OLD_URL}/admin/cleanerattendencebyid`, { "attendenceid": AttendanceID }
  )
  // https://old.carselonadaily.com/api/admin/cleanerattendencebyid
}
export function GetAllImage(localkey: any, AttendanceID: any) {
  return axios.post(
    `${localkey ? MAIN_API_OLD_URL : MAIN_API_OLD_URL}/admin/showattendenceimages`, { "attendenceid": AttendanceID }
  )
  // https://old.carselonadaily.com/api/admin/cleanerattendencebyid
}
export function PostRequestUpdateStatus(localkey: any, payloads: updateStatusFromInterface) {
  return axios.post(
    `${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/updateAttendenceStatus`, payloads
  )
}