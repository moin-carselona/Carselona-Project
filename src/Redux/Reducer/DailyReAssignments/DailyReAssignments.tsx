const initState = {
    DailyReAssign: null,
}
export const DailyReAssignments = (state = initState, { type, payload }: any) => {
    switch (type) {
        case "DAILY-RE-ASSIGN":
            return { ...state, DailyReAssign: payload }
        default:
            return state
    }
}
