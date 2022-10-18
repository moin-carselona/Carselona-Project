export enum STATS {
    ACTIVE_SUBSCRIPTIONS,
    SAME_DAY_SUBSCRIPTIONS,
    INACTIVE_SUBSCRIPTIONS,
    PAUSED_SUBSCRIPTIONS,
    UPCOMING_SUBSCRIPTIONS,
    NEW_VEHICLE_ONBOARD,
    RENEWED_SUBSCRIPTIONS,
    REACTIVATED_SUBSCRIPTIONS,
    FUTURE_PAUSE,
    FUTURE_INACTIVE,
    ONBOARDING_TICKETS
}

export function GET_ALL_STATS() {
    return [
        {
            label: 'Active Paid',
            value: STATS.SAME_DAY_SUBSCRIPTIONS,
            url: 'same-day',
        },
        {
            label: 'On Demand',
            value: STATS.INACTIVE_SUBSCRIPTIONS,
            url: 'inactive',
        },
        {
            label: 'Renewal',
            value: STATS.PAUSED_SUBSCRIPTIONS,
            url: 'paused',
        },
        {
            label: 'Not Assigned',
            value: STATS.UPCOMING_SUBSCRIPTIONS,
            url: 'upcoming',
        },
        {
            label: 'Kit Subscriptions',
            value: STATS.NEW_VEHICLE_ONBOARD,
            url: 'vehicles/new',
        },
        {
            label: 'InActive',
            value: STATS.RENEWED_SUBSCRIPTIONS,
            url: 'renewed',
        },
        {
            label: 'Server Inactive',
            value: STATS.REACTIVATED_SUBSCRIPTIONS,
            url: 'reactivated',
        },
        {
            label: 'Renewal List',
            value: STATS.FUTURE_PAUSE,
            url: 'future-pause',
        },
        {
            label: 'Date wise Onboarding',
            value: STATS.FUTURE_INACTIVE,
            url: 'monthly-onboard',
        },
        {
            label: 'Onboarding Subscriptions',
            value: STATS.ONBOARDING_TICKETS,
            url: 'pending-onboard',
        },
    ]
}