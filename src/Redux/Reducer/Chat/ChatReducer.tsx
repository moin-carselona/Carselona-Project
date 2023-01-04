import { CHAT_DATA } from "../../ActionTypes/ActionTypes";
const initState = {
    TicketData: {},
}
export const ChatReducers = (state = initState, { type, payload }: any) => {
    switch (type) {
        case CHAT_DATA:
            return { ...state, TicketData: payload }
       
        default:
            return state
    }
}