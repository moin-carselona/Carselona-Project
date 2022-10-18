import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

type Props = {
    id: string,
    data: any
}

const TicketActionColumns = (props: Props) => {
    const { id, data } = props;
    let filteredData = data.filter((item: any) => item.id === id)[0];
    
    const [options] = React.useState([
        { id: "0", label: "Open" },
        { id: "3", label: "Closed" }
    ]);
    const [value, setValue] = React.useState("");
    const [ticket, setTicket] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.currentTarget.value)
        setTicket(event.currentTarget.id)
        console.log("event.currentTarget.id", event.currentTarget.value, event.currentTarget.id)
        const formData = new FormData();
        // ticketid
        // status
        formData.append("ticketid", ticket);
        formData.append("status", value)
        axios.post('https://adminapi.carselonadaily.com/api/admin/changeOnboardingStatus', formData)
            .then(response => {
                toast.success("Ticket updated successfully")
            })
            .catch(error => {
                toast.error("Something went wrong")
            })
    }
    return (
        <>
            {filteredData && filteredData.ctCustomer && filteredData.ctCustomer?.tickets.map((ticket: any) => (
                <div key={ticket.id} className="my-1 d-flex">
                    <span className="badge badge-warning">{ticket.title}
                        <i className="fa fa-comment"></i></span>

                    <select className="mt-1 mx-2" id={ticket.id} onChange={handleChange}>{
                        options.map((option: any) => (
                            <option value={option.id}>{option.label}</option>
                        ))
                    }</select>
                </div>
            ))}
        </>
    )
}

export default TicketActionColumns;