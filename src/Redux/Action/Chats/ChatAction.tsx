import { CHAT_TICKET_ID } from '../../ActionTypes/ActionTypes';
export const ChatTicketID = (ChatTicketID: any) => {
    // console.log('ChatTicketID action', ChatTicketID);
    return { type: CHAT_TICKET_ID, payload: ChatTicketID }
}
