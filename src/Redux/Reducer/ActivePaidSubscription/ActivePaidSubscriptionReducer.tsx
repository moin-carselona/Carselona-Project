
const initState = {
    Assign_cleaner_id: "",
}
export const ActivePaidSubscriptionReducer = (state = initState, { type, payload }: any) => {
    switch (type) {
        case "ASSIGN_CLEANER_ID":
            return { ...state, Assign_cleaner_id: payload }
        default:
            return state
    }
}