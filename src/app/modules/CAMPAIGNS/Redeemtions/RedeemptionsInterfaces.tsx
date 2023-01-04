
export interface RedeemptionsInterfaces {
    id:                number;
    campaign_id:       number;
    userid:            number;
    usertype:          number;
    reward_value:      number;
    reward_code:       string;
    offer_id:          number;
    reward_type_id:    number;
    campaign_event_id: number;
    reward_datetime:   Date;
    reward_as:         string;
    reward_by_userid:  number;
    status:            number;
    createdAt:         number;
    updatedAt:         number;
    customer:          Customer;
    campaignEvent:     CampaignEvent;
    masterRewardType:  Master;
    masterOffer:       MasterOffer;
}

export interface CampaignEvent {
    id:                               number;
    event_id:                         number;
    campaign_id:                      number;
    is_referrer_reward_fixed:         number;
    fixed_referrer_reward_amount:     number;
    min_referrer_reward:              number;
    max_referrer_reward:              number;
    average_referrer_reward:          number;
    enable_reward_to_referee:         number;
    is_referee_reward_fixed:          number;
    fixed_referee_reward_amount:      number;
    min_referee_reward:               number;
    average_referee_reward:           number;
    max_referee_reward:               number;
    referrer_coupon_expiry_startdate: string;
    referrer_coupon_expiry_enddate:   string;
    referee_coupon_expiry_startdate:  string;
    referee_coupon_expiry_enddate:    string;
    referrer_coupon_title:            string;
    referrer_coupon_description:      string;
    referee_coupon_title:             string;
    referee_coupon_description:       string;
    createdAt:                        number;
    updatedAt:                        number;
    masterEvent:                      Master;
}

export interface Master {
    id:        number;
    name:      string;
    app?:      string;
    status:    number;
    createdAt: number;
    updatedAt: number;
    sign?:     string;
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
    createdAt:                  number;
    updatedAt:                  number;
    kylascontactid:             number;
}

export interface MasterOffer {
    id:                  number;
    name:                string;
    description:         string;
    image:               string;
    type:                string;
    amount:              number;
    coupon:              string;
    for_all_customers:   number;
    per_customer:        number;
    max_discount_amount: number;
    startdate:           Date;
    enddate:             Date;
    fly_generated:       number;
    campaign_reward_id:  number;
    status:              number;
    createdAt:           number;
    updatedAt:           number;
    ctOffers:            CTOffer[];
}

export interface CTOffer {
    id:                number;
    customerid:        number;
    offer_id:          number;
    coupon:            string;
    is_applied:        number;
    applied_datetime:  Date;
    discounted_amount: number;
    status:            number;
    createdAt:         number;
    updatedAt:         number;
}