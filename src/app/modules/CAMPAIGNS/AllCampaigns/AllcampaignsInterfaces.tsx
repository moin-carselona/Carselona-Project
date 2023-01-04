

//  {
//     name: 'SI No',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'CAMPAIGN TYPE',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'REWARD TYPE',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'BUDGET',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'BUDGET LEFT',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'SEGMENTS',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'EVENTS',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'CAMPAIGNS PARTICIPANTS',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'CAMPAIGNS START DATE',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'CAMPAIGNS END DATE',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },
// {
//     name: 'STATUS',
//     selector: (row) => row.campaign_type_id,
//     sortable: true,
//     // id: "css"
// },


export interface AllcampaignsInterfaces {
    id:                                  number;
    campaign_type_id:                    number;
    reward_type_id:                      number;
    campaign_budget:                     number;
    campaign_budget_left:                number;
    campaign_title:                      string;
    campaign_description:                string;
    campaign_details:                    string;
    campaign_start_datetime:             Date;
    campaign_end_datetime:               Date;
    max_scratch_cards_per_day_per_user:  number;
    max_scratch_cards_per_user_lifetime: number;
    enable_notification:                 number;
    referrer_notification_title:         string;
    referrer_notification_body:          string;
    referee_notification_title:          string;
    referee_notification_body:           string;
    share_msg:                           string;
    status:                              number;
    createdAt:                           number;
    updatedAt:                           number;
    campaignSegments:                    CampaignSegment[];
    campaignEvents:                      CampaignEvent[];
    campaign_type_name:                  string;
    campaign_reward_name:                string;
    sharableLinkGenerated:               SharableLinkGenerated[];
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
    masterEvent:                      MasterEnt;
}

export interface MasterEnt {
    id:         number;
    name:       string;
    app?:       string;
    status:     number;
    createdAt:  number;
    updatedAt:  number;
    user_type?: number;
}

export interface CampaignSegment {
    id:            number;
    campaign_id:   number;
    segment_id:    number;
    status:        number;
    createdAt:     number;
    updatedAt:     number;
    masterSegment: MasterEnt;
}

export interface SharableLinkGenerated {
    id:                number;
    campaign_id:       number;
    userid:            number;
    usertype:          number;
    link_generated_at: Date;
    createdAt:         number;
    updatedAt:         number;
}