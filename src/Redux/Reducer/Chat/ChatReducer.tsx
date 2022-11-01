import { CHAT_TICKET_ID } from "../../ActionTypes/ActionTypes";
const initState = {
    ChatTicket_ID: "",
}
export const ChatReducers = (state = initState, { type, payload }: any) => {
    switch (type) {
        case CHAT_TICKET_ID:
            return { ...state, ChatTicket_ID: payload }
        default:
            return state
    }
}