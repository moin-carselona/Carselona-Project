export interface ticektInterfaces {
    id:                   number;
    ticketno:             string;
    title:                string;
    customerid:           number;
    jobid:                number;
    cleanerid:            number;
    ticketdate:           Date;
    status:               number;
    reopen_count:         number;
    created_by_user_type: number;
    created_by_user_id:   number;
    is_visible:           number;
    source_id:            number;
    category_id:          number;
    last_date_resolution: string;
    last_date_feedback:   string;
    subscription_id:      number;
    createdAt:            string;
    updatedAt:            string;
    customer:             Customer;
    ticketstatus:         Ticketstatus;
    ticketcategory:       null;
    ticketsource:         Ticketsource;
    ticket_assigns:       null;
    subscriptionData:     SubscriptionData;
}

export interface Customer {
    id:                         number;
    cleaner_id:                 number;
    gst_number:                 number;
    distributorid:              number;
    first_name:                 string;
    last_name:                  string;
    email:                      string;
    phone:                      string;
    gender:                     string;
    flatno:                     string;
    locality:                   string;
    address_line_1:             string;
    address_line_2:             string;
    latitude:                   string;
    longitude:                  string;
    city:                       number;
    state:                      string;
    pincode:                    string;
    is_premium:                 number;
    termscondi:                 number;
    status:                     number;
    profile_image:              string;
    stage:                      number;
    societyid:                  number;
    cleanercode:                string;
    cleanerlead:                number;
    is_autodebit_enable:        number;
    userType:                   number;
    auto_debit_access_key:      null;
    customer_authentication_id: null;
    authorization_status:       null;
    coins:                      number;
    wallet_coins:               number;
    razorpay_customer_id:       string;
    referBy:                    string;
    app_rating:                 number;
    in_serviceable_area:        number;
    is_deleted:                 number;
    other_society_name:         string;
    source_id:                  number;
    enable_notification:        number;
    campaign_id:                number;
    active_status:              number;
    public_tag:                 null;
    private_tag:                null;
    createdAt:                  number;
    updatedAt:                  number;
    kylascontactid:             number;
}

export interface SubscriptionData {
    id:                       number;
    ref_by_cleaners:          string;
    ref_by_admin:             string;
    distributorid:            number;
    supervisorid:             number;
    first_name:               string;
    last_name:                string;
    email:                    string;
    referBy:                  string;
    phone:                    string;
    password:                 null;
    address:                  string;
    latitude:                 string;
    longitude:                string;
    city:                     number;
    pincode:                  number;
    paddress:                 string;
    platitude:                string;
    plongitude:               string;
    ppincode:                 number;
    profile_image:            string;
    reference:                null;
    qr_code:                  string;
    isrefer:                  string;
    isskip:                   string;
    termscondi:               number;
    tshirtid:                 string;
    isactive:                 number;
    status:                   string;
    onboarded:                number;
    rating:                   number;
    traininglevel:            number;
    isdeleted:                number;
    weekoffday:               string;
    isCRM:                    number;
    cleaner_type:             number;
    travelallowence:          number;
    onwork:                   number;
    appversion:               number;
    userType:                 number;
    cleanerCategory:          number;
    default_language:         string;
    cleaner_payout_scheme_id: number;
    own_vehicle:              number;
    zohocontactid:            string;
    public_tag:               string;
    private_tag:              string;
    createdAt:                number;
    updatedAt:                number;
    supervisors:              Supervisor[];
}

export interface Supervisor {
    id:                number;
    supervisor_id:     number;
    cleaner_id:        number;
    supervisorcleaner: Supervisorcleaner;
}

export interface Supervisorcleaner {
    id:         number;
    first_name: string;
    last_name:  string;
    phone:      string;
}

export interface Ticketsource {
    id:        number;
    name:      string;
    status:    number;
    isdeleted: number;
    createdAt: number;
    updatedAt: number;
}

export interface Ticketstatus {
    id:        number;
    name:      string;
    status_id: number;
    createdAt: null;
    updatedAt: null;
}

// rest data interface here like cleaner data supervisror data customer data  and many more .....
export interface payloadsInterfaces {
    attendencedatefrom: any
    attendencedateto: any
    cleanerid: number | string | null
    customerid: number | string | null
    ticketidcategory: number | string | null
    supervisor: number | string | null
    searchs: string
}
export interface inputEventChanger {
    lable: string | number
    value: number | number
}
export interface cleanerDataApi {
    id: number;
    first_name: string;
    last_name: null;
    email: null;
    phone: string;
    address: null;
    tshirtid: null;
    rating: number;
}
// ticektInterfaces
// cleanerDataApi
// CustomerDataApi
// SuperVisorDataApi
// ticketCategoryDataApi
// TicektSubCategoryDataApi
// TicektSourcesDataApi
// AdminListDataApi
// payloadsInterfaces
// inputEventChanger
export interface CustomerDataApi {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    gender: string;
    flatno: string;
    city: number;
}
export interface SuperVisorDataApi {
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
    cleanerCategory: number;
    default_language: string;
    cleaner_payout_scheme_id: number;
    own_vehicle: number;
    zohocontactid: number;
    createdAt: number;
    updatedAt: number;
}
export interface ticketCategoryDataApi {
    id: number;
    category_name: string;
    usertype: number;
    status: number;
    createdAt: number;
    updatedAt: number;
}
export interface TicektSubCategoryDataApi {
    id: number;
    subcategory_name: string;
    subcategory_id: number;
    app_text: string;
    inAppShown: number;
    createdAt: number;
    updatedAt: number;
}
export interface TicektSourcesDataApi {
    id: number;
    name: string;
    status: number;
    createdAt: number;
    updatedAt: number;
}
export interface AdminListDataApi {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    isfeature: string;
    profile_image: string;
    status: number;
    role: string;
    roleid: number;
    allowedcity: string;
    createdAt: number;
    updatedAt: number;
}
export interface localCheckAPI {
    localKeyCheck: string | number | undefined | null | {}
}