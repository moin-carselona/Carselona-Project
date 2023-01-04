export interface DataRow {
  id: number;
  task_type: number;
  cleanerid: number;
  attendencedate: Date;
  customerids: string;
  orderid: number;
  neworderid: number;
  attendencedatedone: string;
  attendence_server_datedone: string;
  markedby: number;
  markby_usertype: number;
  latitude: string;
  longitude: string;
  address: string;
  servicetype: number;
  timeslot: string;
  point: number;
  notathome: number;
  siteid: number;
  status: number;
  job_status_id: number;
  method: string;
  date_changed_from: string;
  createdAt: number;
  updatedAt: number;
  subscriptionMonth: SubscriptionMonth;
  cleaner: Cleaner;
  timeslotDetail: TimeslotDetail;
  attendenceStatus: null;
  jobRating: null;
  customerData: CustomerData;
  job_detail: JobDetail;
  customercity: string;
  ratings: string;
  societyname: string;
  servicetypename: string;
  cleaner_fulldetial: string;
  customer_fulldetial: string;
  cleaner_onwork: string;
  vehicle_brand: string;
  vehicle_info: string;
  job_status: string;
  job_status_select: string;
  distance: string;
}
export interface Supervisor {
  id: number;
  supervisor_id: number;
  cleaner_id: number;
  status: string;
  createdAt: number;
  updatedAt: number;
  supervisorData: Cleaner;
}
export interface Cleaner {
  id: number;
  ref_by_cleaners: string;
  ref_by_admin: string;
  distributorid: number;
  supervisorid: number;
  first_name: string;
  last_name: string;
  email: string;
  referBy: string;
  phone: string;
  password: null;
  address: string;
  latitude: string;
  longitude: string;
  city: number;
  pincode: number;
  paddress: string;
  platitude: string;
  plongitude: string;
  ppincode: number;
  profile_image: string;
  reference: null | string;
  qr_code: string;
  isrefer: string;
  isskip: string;
  termscondi: number;
  tshirtid: string;
  isactive: number;
  status: string;
  onboarded: number;
  rating: number;
  traininglevel: number;
  isdeleted: number;
  weekoffday: string;
  isCRM: number;
  cleaner_type: number;
  travelallowence: number;
  onwork: number;
  appversion: number;
  userType: number;
  default_language: string;
  cleaner_payout_scheme_id: number;
  own_vehicle: number;
  createdAt: number;
  updatedAt: number;
  supervisors?: Supervisor[];
}
export interface CustomerData {
  id: number;
  cleaner_id: number;
  distributorid: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  flatno: string;
  locality: string;
  address_line_1: string;
  address_line_2: string;
  latitude: string;
  longitude: string;
  city: number;
  state: string;
  pincode: string;
  is_premium: number;
  termscondi: number;
  status: number;
  profile_image: string;
  stage: number;
  societyid: number;
  cleanercode: string;
  cleanerlead: number;
  is_autodebit_enable: number;
  userType: number;
  auto_debit_access_key: null;
  customer_authentication_id: null;
  authorization_status: null;
  coins: number;
  wallet_coins: number;
  razorpay_customer_id: string;
  referBy: string;
  app_rating: number;
  in_serviceable_area: number;
  is_deleted: number;
  other_society_name: string;
  source_id: number;
  enable_notification: number;
  campaign_id: number;
  active_status: number;
  createdAt: number;
  updatedAt: number;
  society: Society;
}
export interface Society {
  id: number;
  name: string;
  list_id: string;
  phone: string;
  email: string;
  address: string;
  latitude: string;
  longitude: string;
  city: string;
  pincode: string;
  code: string;
  societycrm: number;
  area: number;
  packageid: number;
  status: number;
  createdAt: number;
  updatedAt: number;
}
export interface JobDetail {
  id: number;
  name: string;
  status: number;
  show_in_cleaner_wallet: number;
  wallet_order: number;
  createdAt: number;
  updatedAt: number;
}
export interface SubscriptionMonth {
  id: number;
  name: string;
  email: string;
  phone: string;
  flatno: string;
  locality: string;
  address: string;
  latitude: string;
  longitude: string;
  city: number;
  pincode: number;
  vehicleid: number;
  frequencyid: number;
  jobsiteid: number;
  customerid: number;
  cleanerid: number;
  uplevelcleanerid: number;
  orderid: number;
  cleanerprice: number;
  packageprice: number;
  discountprice: number;
  discountfor: string;
  gst: number;
  total: number;
  startdate: Date;
  enddate: Date;
  packageid: number;
  packagedays: number;
  timeslot: string;
  fullcleaningday: string;
  paymentdate: Date;
  transactionid: string;
  paymenttype: string;
  status: number;
  isactive: number;
  payment_mode: string;
  order_type: string;
  razorpay_order_id: string;
  razorpay_autopay_initated_order_id: string;
  razorpay_signature: string;
  payment_method_id: number;
  parking_no: string;
  extra_amount: number;
  is_autopay: number;
  razorpay_token: string;
  razorpay_status: string;
  parent_order_id: number;
  inactive_date: string;
  reason_id: number;
  fine_amount: number;
  fine_for: string;
  address_id: number;
  ct_offer_id: number;
  refund_amount: number;
  refund_id: string;
  refund_initiated_date: string;
  is_settled: number;
  settled_for_subscription_id: number;
  is_paused: number;
  months: number;
  razorpay_payment_link_id: string;
  invoice_status: number;
  createdAt: number;
  updatedAt: number;
  master_city: MasterCity;
  vehicle: Vehicle;
}
export interface MasterCity {
  id: number;
  country_id: number;
  state_id: number;
  city_name: string;
  status: number;
  createdAt: number;
  updatedAt: number;
}
export interface Vehicle {
  id: number;
  customer_id: number;
  vehicle_type: number;
  brandid: number;
  modelid: number;
  vehicle_category: number;
  fuletype: number;
  vehicleno: string;
  transmission: string;
  registrationyear: string;
  insurence: string;
  is_premium: number;
  required_after_cleaning_photos: number;
  source: string;
  status: number;
  createdAt: number;
  updatedAt: number;
  vehicleBrand: VehicleBrand;
}
export interface VehicleBrand {
  id: number;
  vehicletype_id: number;
  name: string;
  status: number;
  createdAt: number;
  updatedAt: number;
}
export interface TimeslotDetail {
  id: number;
  name: string;
  status: number;
  time_from: string;
  time_to: string;
  createdAt: number;
  updatedAt: number;
}
//// cleaner interface 
export interface CleanerInterfaces {
  id: number;
  ref_by_cleaners: string;
  ref_by_admin: string;
  distributorid: number;
  supervisorid: number;
  first_name: string;
  last_name: string;
  email: string;
  referBy: string;
  phone: string;
  password: null;
  address: string;
  latitude: string;
  longitude: string;
  city: number;
  pincode: number;
  paddress: string;
  platitude: string;
  plongitude: string;
  ppincode: number;
  profile_image: string;
  reference: null;
  qr_code: string;
  isrefer: string;
  isskip: string;
  termscondi: number;
  tshirtid: string;
  isactive: number;
  status: string;
  onboarded: number;
  rating: number;
  traininglevel: number;
  isdeleted: number;
  weekoffday: string;
  isCRM: number;
  cleaner_type: number;
  travelallowence: number;
  onwork: number;
  appversion: number;
  userType: number;
  cleanerCategory: number;
  default_language: string;
  cleaner_payout_scheme_id: number;
  own_vehicle: number;
  zohocontactid: string;
  createdAt: number;
  updatedAt: number;
}
//// custoemr interface 
export interface CustomerIntterfaces {
  id: number;
  cleaner_id: number;
  distributorid: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  flatno: string;
  locality: string;
  address_line_1: string;
  address_line_2: string;
  latitude: string;
  longitude: string;
  city: number;
  state: string;
  pincode: string;
  is_premium: number;
  termscondi: number;
  status: number;
  profile_image: string;
  stage: number;
  societyid: number;
  cleanercode: string;
  cleanerlead: number;
  is_autodebit_enable: number;
  userType: number;
  auto_debit_access_key: null;
  customer_authentication_id: null;
  authorization_status: null;
  coins: number;
  wallet_coins: number;
  razorpay_customer_id: string;
  referBy: string;
  app_rating: number;
  in_serviceable_area: number;
  is_deleted: number;
  other_society_name: string;
  source_id: number;
  enable_notification: number;
  campaign_id: number;
  active_status: number;
  createdAt: number;
  updatedAt: number;
}
//// supervisor interface 
export interface SupervisorInterfaces {
  id: number;
  ref_by_cleaners: string;
  ref_by_admin: string;
  distributorid: number;
  supervisorid: number;
  first_name: string;
  last_name: string;
  email: string;
  referBy: string;
  phone: string;
  password: null;
  address: string;
  latitude: string;
  longitude: string;
  city: number;
  pincode: number;
  paddress: string;
  platitude: string;
  plongitude: string;
  ppincode: number;
  profile_image: string;
  reference: string;
  qr_code: string;
  isrefer: string;
  isskip: string;
  termscondi: number;
  tshirtid: string;
  isactive: number;
  status: string;
  onboarded: number;
  rating: number;
  traininglevel: number;
  isdeleted: number;
  weekoffday: string;
  isCRM: number;
  cleaner_type: number;
  travelallowence: number;
  onwork: number;
  appversion: number;
  userType: number;
  default_language: string;
  cleaner_payout_scheme_id: number;
  own_vehicle: number;
  createdAt: number;
  updatedAt: number;
}
// input value    interface  
export interface InputData {
  label: string
  value: number | string
}
// attendence Status    interface  
export interface attendenceStatusInterfaces {
  user_id: number | string
  attendence_id: number | string
  customerid: number | string
  job_status_id: number | string,
  job_action_id: number | string,
  field_type_id: number | string,
}
export interface updateStatusFromInterface {
  user_id: number | string
  customerid: number | string
  attendence_id: number | string
  job_status_id: number | string
  job_action_id: number | string
  field_type_id: number | string
  notathome: boolean
  mark_attendence: boolean
  time:string | number
  field_value:string | number
}
