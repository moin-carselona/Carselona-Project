






export interface CleanerSupervisor {
    id:                number;
    supervisor_id:     number;
    cleaner_id:        number;
    status:            string;
    createdAt:         number;
    updatedAt:         number;
    supervisorcleaner: AddNewTagsInterfaces;
}

export interface AddNewTagsInterfaces {
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
    reference:                null | string;
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
    zohocontactid:            number;
    public_tag:               string;
    private_tag:              string;
    createdAt:                number;
    updatedAt:                number;
    mc?:                      Mc;
    schemeRecords?:           SchemeRecord[];
    worklocation?:            Worklocation[];
    cleanerSupervisor?:       CleanerSupervisor[];
    attendenceData?:          AttendenceDatum[];
}

export interface AttendenceDatum {
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
    address:                    Address;
    servicetype:                number;
    timeslot:                   string;
    point:                      number;
    notathome:                  number;
    siteid:                     number;
    status:                     number;
    job_status_id:              number;
    method:                     Method;
    date_changed_from:          string;
    job_status:                 number;
    createdAt:                  number;
    updatedAt:                  number;
}

export enum Address {
    Empty = "",
    SnnRajGrandeur = "SNN RAJ GRANDEUR",
    Wj2GRj3 = "WJ2G+RJ3",
}

export enum Method {
    Points = "points",
}

export interface Mc {
    id:         number;
    country_id: number;
    state_id:   number;
    city_name:  string;
    status:     number;
    createdAt:  number;
    updatedAt:  number;
}

export interface SchemeRecord {
    id:                       number;
    cleanerid:                number;
    cleaner_payout_scheme_id: number;
    min_earning_week:         number;
    scheme_assigned_date:     Date;
    scheme_paused_date:       string;
    status:                   number;
    createdAt:                number;
    updatedAt:                number;
}

export interface Worklocation {
    id:                 number;
    cleanerid:          number;
    locationcategoryid: number;
    dayid:              number;
    timeslotid:         number;
    address:            string;
    latitude:           number;
    longitude:          number;
    pincode:            string;
    status:             number;
    createdAt:          number;
    updatedAt:          number;
}