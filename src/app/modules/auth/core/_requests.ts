import axios from 'axios'
import { AuthModel, LoginModel, UserModel } from './_models'
const API_URL = process.env.REACT_APP_API_URL
const API_NOTIFICATION_URL = "https://testadminapi.carselonadaily.com"
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`
export const REQUEST_VIEW_MEDIA_URL = `${API_NOTIFICATION_URL}/api/paritosh/admin/getMasterNotificationTemplateMediaByTemplateId`
export const REQUEST_NOTIFICATION_URL = `${API_NOTIFICATION_URL}/api/paritosh/admin/getMasterNotificationTemplates`
export const SEND_TEMPLATE_TO_SERVER = `${API_NOTIFICATION_URL}/api/paritosh/admin/createMasterNotificationTemplate`
// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}
export async function handleLogin(payload: LoginModel) {
  const response = await axios.post(LOGIN_URL, payload);

  return response.data;
}
// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}
// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  })
}
export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}
export interface Notifications {
  items: {
    id: number
    templateid: number
    mediatypeid: number
    mediasource: string
    medialink: string
    mediaextension: string
    medianame: string
    status: number
    isdeleted: number
    createdAt: string
    updatedAt: string
    media: medias
  }[]
}
type medias = {
  mediatypeid: number
  mediasource: string
  medialink: string
  mediaextension: string
  medianame: string
}
export function getNotification() {
  return axios.get(REQUEST_NOTIFICATION_URL)
}
export function GetCartNotificationData() {
  return axios.get(REQUEST_NOTIFICATION_URL)
}
export function SendNotificationTemplateToServer(templateData: any) {
  const formdata: any = new FormData();
  formdata.append("imagearray", templateData.restData.imagearray);
  formdata.append("title", JSON.stringify(templateData.title));
  formdata.append("description", JSON.stringify(templateData.description));
  formdata.append("videoarray", templateData.restData.videoarray);
  formdata.append("cleanerid", templateData.restData.cleanerid);
  console.log('formdata', formdata);
  return axios.post(SEND_TEMPLATE_TO_SERVER, formdata)
}
export function getViewMedia(Templateid: any) {
  return axios.post(REQUEST_VIEW_MEDIA_URL, Templateid)
}
