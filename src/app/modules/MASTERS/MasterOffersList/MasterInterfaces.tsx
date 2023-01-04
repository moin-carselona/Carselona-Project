


export interface MasterInterfaces {
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
    startdate:           string;
    enddate:             string;
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
    applied_datetime:  string;
    discounted_amount: number;
    status:            number;
    createdAt:         number;
    updatedAt:         number;
}