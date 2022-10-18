import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const DueDateComponent = (props: { tickets: any }) => {
    const { tickets } = props
    const [inputField, setInputField] = useState({
        ticketid: tickets.id,
        duedate: '',
    })

    const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }

    const handleSubmitDueDate = () => {
        const formData = new FormData();
        formData.append("ticketid", inputField.ticketid);
        formData.append("duedate", inputField.duedate);
        axios.post('https://adminapi.carselonadaily.com/api/admin/changeduedate', formData)
            .then(response => {
                toast.success("Due Date submitted")
            }).catch(error => {
                console.log(error);
                toast.error("Something went wrong!")
            })
    }

    return (
        <div className="p-2">
            <h3>Ticket No: {tickets.id}</h3>
            <input
                type='date'
                data-kt-user-table-filter='search'
                id='duedate'
                className='form-control form-control-solid bg-white my-2'
                placeholder='Start Date'
                onChange={handleChange} />
            <button className="btn btn-sm btn-primary" onClick={handleSubmitDueDate}>Submit</button>
        </div>
    )
}

export default DueDateComponent;