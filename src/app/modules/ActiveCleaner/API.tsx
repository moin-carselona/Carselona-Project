import axios from 'axios'
import {
  MAIN_ADMIN_BASE_API_URL,
  MAIN_API_BASE_API_URL,
  TEST_ADMIN_BASE_API_URL,
  TEST_API_BASE_API_URL,
} from '../../../apiGlobally'
export function GetAllActiveCleaner(localkey: any) {
  return axios.get(`${localkey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/cleanerlist`)
}
export function GetAllActiveSchemes(localkey: any) {
  return axios.get(
    `${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getAllActiveSchemes`
  )
}
export function GetAllAllowance(localkey: any) {
  return axios.get(
    `${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getAllAllowance`
  )
}
export function GetReasons(localkey: any) {
  return axios.get(`${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getReasons`)
}
export function GetSupervisorList(localkey: any) {
  return axios.get(
    `${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getSupervisorList`
  )
}
export function GetAllSuperVisorData(localkey: any) {
  return axios.get(
    `${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getSupervisorList`
  )
}
export function getcleanerbankdetail(localKeyCheck: string, payloads: any, setLoading: any) {
  console.log('getcleanerbankdetail', payloads);
  const result = axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getcleanerbankdetail`, { cleanerid: payloads }).then((res) => {
    setLoading(false)
    return res
  }).catch((err) => {
    setLoading(false)
    return err
  })
  return result
}
export function createCleanerBankDetails(localKeyCheck: string, payloads: any, setLoading: any) {
  // console.log('createCleanerBankDetails', payloads);
  const result = axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/createCleanerBankDetails`, payloads).then((res) => {
    // setLoading(false)
    return res
  }).catch((err) => {
    // setLoading(false)
    return err
  })
  return result
}