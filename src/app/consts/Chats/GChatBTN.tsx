import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatTicketID } from "../../../Redux/Action/Chats/ChatAction";
import RenderingData from "./RenderingData";
const GChatBTN = ({ ticketDataParent }: any) => {
    // console.log('ticketDataParent', ticketDataParent);
    const TicketData = useSelector((store: any) => store.ChatReducers.TicketData)
    const dispatch = useDispatch()
    const [backgroundColors, setBackgroundColors] = useState(0)
    const HandleChipActivePaid = (ticketids: any) => {
        setBackgroundColors(ticketids)
        dispatch(ChatTicketID(ticketDataParent))
    }
    return (
        <>
            <RenderingData ticketid={TicketData} ticketID={ticketDataParent} backgroundColors={backgroundColors} HandleChipActivePaid={HandleChipActivePaid}></RenderingData>
        </>
    )
}
export default GChatBTN
