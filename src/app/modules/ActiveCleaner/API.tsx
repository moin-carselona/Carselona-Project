import axios from 'axios'
import {
  MAIN_ADMIN_BASE_API_URL,
  MAIN_API_BASE_API_URL,
  TEST_ADMIN_BASE_API_URL,
  TEST_API_BASE_API_URL,
} from '../../../apiGlobally'
// import { MAIN_ADMIN_BASE_API_URL, MAIN_API_BASE_API_URL, TEST_ADMIN_BASE_API_URL, TEST_API_BASE_API_URL } from "../../apiGlobally"

export function GetAllActiveCleaner(localkey: any) {
  return axios.get(`${localkey ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/cleanerlist`)
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
