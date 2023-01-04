
const initState = {
    Assign_cleaner_id: "",
    cleanerAvailibiltyRoutes: -1,
}
export const ActivePaidSubscriptionReducer = (state = initState, { type, payload }: any) => {
    switch (type) {
        case "ASSIGN_CLEANER_ID":
            return { ...state, Assign_cleaner_id: payload }
        case "cleanerAvailibiltyRoutes":
            return { ...state, cleanerAvailibiltyRoutes: payload }
        default:
            return state
    }
}