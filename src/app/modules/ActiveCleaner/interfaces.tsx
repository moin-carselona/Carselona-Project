 export interface Root {
    id: number
    ref_by_cleaners: string
    ref_by_admin: string
    distributorid: number
    supervisorid: number
    first_name: string
    last_name: string
    email: string
    referBy: string
    phone: string
    password: any
    address: string
    latitude: string
    longitude: string
    city: number
    pincode: number
    paddress: string
    platitude: string
    plongitude: string
    ppincode: number
    profile_image: string
    reference: any
    qr_code: string
    isrefer: string
    isskip: string
    termscondi: number
    tshirtid: string
    isactive: number
    status: string
    onboarded: number
    rating: number
    traininglevel: number
    isdeleted: number
    weekoffday: string
    isCRM: number
    cleaner_type: number
    travelallowence: number
    onwork: number
    appversion: number
    userType: number
    cleanerCategory: number
    default_language: string
    cleaner_payout_scheme_id: number
    own_vehicle: number
    zohocontactid: string
    createdAt: number
    updatedAt: number
    mc: Mc
    schemeRecords: SchemeRecord[]
    worklocation: Worklocation[]
    cleanerSupervisor: CleanerSupervisor[]
    attendenceData: AttendenceDaum[]
  }
  
  interface Mc {
    id: number
    country_id: number
    state_id: number
    city_name: string
    status: number
    createdAt: number
    updatedAt: number
  }
  
  interface SchemeRecord {
    id: number
    cleanerid: number
    cleaner_payout_scheme_id: number
    min_earning_week: number
    scheme_assigned_date: string
    scheme_paused_date: string
    status: number
    createdAt: number
    updatedAt: number
  }
  
  interface Worklocation {
    id: number
    cleanerid: number
    locationcategoryid: number
    dayid: number
    timeslotid: number
    address: string
    latitude: number
    longitude: number
    pincode: string
    status: number
    createdAt: number
    updatedAt: number
  }
  
  interface CleanerSupervisor {
    id: number
    supervisor_id: number
    cleaner_id: number
    status: string
    createdAt: number
    updatedAt: number
    supervisorcleaner: Supervisorcleaner
  }
  
  interface Supervisorcleaner {
    id: number
    ref_by_cleaners: string
    ref_by_admin: string
    distributorid: number
    supervisorid: number
    first_name: string
    last_name: string
    email: string
    referBy: string
    phone: string
    password: any
    address: string
    latitude: string
    longitude: string
    city: number
    pincode: number
    paddress: string
    platitude: string
    plongitude: string
    ppincode: number
    profile_image: string
    reference?: string
    qr_code: string
    isrefer: string
    isskip: string
    termscondi: number
    tshirtid: string
    isactive: number
    status: string
    onboarded: number
    rating: number
    traininglevel: number
    isdeleted: number
    weekoffday: string
    isCRM: number
    cleaner_type: number
    travelallowence: number
    onwork: number
    appversion: number
    userType: number
    cleanerCategory: number
    default_language: string
    cleaner_payout_scheme_id: number
    own_vehicle: number
    zohocontactid: number
    createdAt: number
    updatedAt: number
  }
  
  interface AttendenceDaum {
    id: number
    task_type: number
    cleanerid: number
    attendencedate: string
    customerids: string
    orderid?: number
    neworderid: number
    attendencedatedone: string
    attendence_server_datedone: string
    markedby: number
    markby_usertype: number
    latitude: string
    longitude: string
    address: string
    servicetype: number
    timeslot: string
    point: number
    notathome: number
    siteid: number
    status: number
    job_status_id: number
    method: string
    date_changed_from: string
    createdAt: number
    updatedAt: number
  }