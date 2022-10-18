import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FutureChatComponent = () => {
    const { id }: any = useParams() || "";
    const [chatData, setChatData] = useState(Object);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // https://adminapi.carselonadaily.com/api/admin/TicketByInactiveSubscription
        // subscriptionid: 11984
        // cusumerid: 8148
        // ticketid: 0
        const formData = new FormData();
        formData.append("subscriptionid", "12465");
        formData.append("cusumerud", "8387")
        formData.append("ticketid", "0")
        axios.post('https://adminapi.carselonadaily.com/api/admin/TicketByInactiveSubscription', formData)
            .then(response => {
                setChatData(response.data)
            }).catch(error => {
                console.log(error)
                alert("Something went wrong!")
            })
    }, [success])

    const handleChange = (event: any) => {
        setMessage(event.target.value)
    }

    const handleSendMessage = () => {
        // ticketid: 4570
        // answer: DDD
        // userid: 7
        const formData = new FormData();
        formData.append("ticketid", "4570");
        formData.append("answer", message);
        formData.append("userid", "7");

        axios.post('https://adminapi.carselonadaily.com/api/admin/replyonticketbyadmin', formData)
            .then(response => {
                alert("Message sent")
                setSuccess(true)
            }).catch(error => {
                alert("Something went wrong!")
                console.log(error)
            })
    }

    return (
        <>
            <div className="">
                {chatData && chatData.ticketreplies && chatData.ticketreplies.data?.map((item: any) => (
                    <div key={item.id} className="mt-5 d-flex flex-column justify-column-end align-items-end col-10">
                        <span className="bg-dark text-white p-3 rounded">{item.answers}</span>
                        <span>{item.status === 1 ? '' : '(private note)'} {item.createdAt} by {item.name}</span>
                    </div>
                ))}
            </div>
            <div className="d-flex flex-column">
                <textarea className="col-10 mt-4" onChange={handleChange} value={message}></textarea>
                <div className="m-2">
                    <button className="btn btn-success me-2" onClick={handleSendMessage}>Send</button>
                    <button className="btn btn-primary">Add Private Note</button>
                </div>
            </div>
        </>
    )
}

export default FutureChatComponent;