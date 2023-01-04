export interface Welcome {
    cleanerid:     number;
    date:          Date;
    timeslot_data: TimeslotData;
}

export interface TimeslotData {
    "06AM-07AM": The06Am07Am[];
    "07AM-08AM": Am[];
    "08AM-09AM": Am[];
    "10AM-11AM": any[];
    "11AM-12PM": any[];
    "12PM-01PM": any[];
    "01PM-02PM": any[];
}

export interface The06Am07Am {
    id:                         number;
    task_type:                  number;
    cleanerid:                  number;
    attendencedate:             Date;
    customerids:                string;
    orderid:                    number;
    neworderid:                 number;
    attendencedatedone:         string;
    attendence_server_datedone: string;
    markedby:                   number;
    markby_usertype:            number;
    latitude:                   string;
    longitude:                  string;
    address:                    string;
    servicetype:                number;
    timeslot:                   string;
    point:                      number;
    notathome:                  number;
    siteid:                     number;
    status:                     number;
    job_status_id:              number;
    method:                     Method;
    date_changed_from:          string;
    createdAt:                  number;
    updatedAt:                  number;
    timeslot_name:              string;
    customer_data:              The06AM07AMCustomerData;
    job_type:                   JobType;
    vehicle_details:            VehicleDetails;
    subscriptiondetails:        Subscriptiondetails;
}

export interface The06AM07AMCustomerData {
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
    createdAt:                  number;
    updatedAt:                  number;
    kylascontactid:             number;
    society_details:            string;
}

export enum JobType {
    ExteriorCleaning = "Exterior Cleaning",
    FullCleaning = "Full Cleaning",
}

export enum Method {
    Points = "points",
}

export interface Subscriptiondetails {
    id:                                 number;
    name:                               string;
    email:                              string;
    phone:                              string;
    flatno:                             string;
    locality:                           string;
    address:                            string;
    latitude:                           string;
    longitude:                          string;
    city:                               number;
    pincode:                            number;
    vehicleid:                          number;
    frequencyid:                        number;
    jobsiteid:                          number;
    customerid:                         number;
    cleanerid:                          number;
    uplevelcleanerid:                   number;
    orderid:                            number;
    cleanerprice:                       number;
    packageprice:                       number;
    discountprice:                      number;
    discountfor:                        string;
    gst:                                number;
    total:                              number;
    startdate:                          Date;
    enddate:                            Date;
    packageid:                          number;
    packagedays:                        number;
    timeslot:                           string;
    fullcleaningday:                    string;
    paymentdate:                        Date;
    transactionid:                      string;
    paymenttype:                        string;
    status:                             number;
    isactive:                           number;
    payment_mode:                       PaymentMode;
    order_type:                         OrderType;
    razorpay_order_id:                  string;
    razorpay_autopay_initated_order_id: RazorpayAutopayInitatedOrderID;
    razorpay_signature:                 string;
    payment_method_id:                  number;
    parking_no:                         string;
    extra_amount:                       number;
    is_autopay:                         number;
    razorpay_token:                     RazorpayToken;
    razorpay_status:                    RazorpayStatus;
    parent_order_id:                    number;
    inactive_date:                      string;
    reason_id:                          number;
    fine_amount:                        number;
    fine_for:                           string;
    address_id:                         number;
    ct_offer_id:                        number;
    refund_amount:                      number;
    refund_id:                          string;
    refund_initiated_date:              string;
    is_settled:                         number;
    settled_for_subscription_id:        number;
    is_paused:                          number;
    months:                             number;
    razorpay_payment_link_id:           string;
    invoice_status:                     number;
    createdAt:                          number;
    updatedAt:                          number;
}

export enum OrderType {
    Package = "package",
}

export enum PaymentMode {
    Razorpay = "razorpay",
}

export enum RazorpayAutopayInitatedOrderID {
    Empty = "",
    OrderKl2LMBvR2XYYO2 = "order_Kl2LMBvR2XYYO2",
}

export enum RazorpayStatus {
    Captured = "captured",
}

export enum RazorpayToken {
    Empty = "",
    TokenKgyKQYmGzNn94C = "token_KgyKQYmGzNn94C",
    TokenKl2IatN9H2S69K = "token_Kl2IatN9h2s69K",
}

export interface VehicleDetails {
    id:                             number;
    customer_id:                    number;
    vehicle_type:                   number;
    brandid:                        number;
    modelid:                        number;
    vehicle_category:               number;
    fuletype:                       number;
    vehicleno:                      string;
    transmission:                   string;
    registrationyear:               string;
    insurence:                      string;
    is_premium:                     number;
    required_after_cleaning_photos: number;
    source:                         string;
    status:                         number;
    createdAt:                      number;
    updatedAt:                      number;
    kylasdealid:                    null;
}

export interface Am {
    id:                         number;
    task_type:                  number;
    cleanerid:                  number;
    attendencedate:             Date;
    customerids:                string;
    orderid:                    number;
    neworderid:                 number;
    attendencedatedone:         string;
    attendence_server_datedone: string;
    markedby:                   number;
    markby_usertype:            number;
    latitude:                   string;
    longitude:                  string;
    address:                    string;
    servicetype:                number;
    timeslot:                   string;
    point:                      number;
    notathome:                  number;
    siteid:                     number;
    status:                     number;
    job_status_id:              number;
    method:                     Method;
    date_changed_from:          string;
    createdAt:                  number;
    updatedAt:                  number;
    timeslot_name:              TimeslotName;
    customer_data:              The07AM08AMCustomerData;
    job_type:                   JobType;
    vehicle_details:            VehicleDetails;
    subscriptiondetails:        Subscriptiondetails;
}

export interface The07AM08AMCustomerData {
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
    createdAt:                  number;
    updatedAt:                  number;
    kylascontactid:             number;
    society_details:            SocietyDetailsClass | string;
}

export interface SocietyDetailsClass {
    id:         number;
    name:       string;
    list_id:    string;
    phone:      string;
    email:      string;
    address:    string;
    latitude:   string;
    longitude:  string;
    city:       string;
    pincode:    string;
    code:       string;
    societycrm: number;
    area:       number;
    packageid:  number;
    status:     number;
    createdAt:  number;
    updatedAt:  number;
}

export enum TimeslotName {
    The07Am08Am = "07AM-08AM",
    The08Am09Am = "08AM-09AM",
}