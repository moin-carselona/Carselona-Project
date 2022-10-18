import axios from "axios";
import React from "react";
import { useEffect } from "react";

const ChangTimeSlotComponent = (selectedId: any) => {

    const [timeSlotList, setTimeSlotList] = React.useState(Object);
    const [timeSlot, setTimeSlot] = React.useState("");
    // https://adminapi.carselonadaily.com/api/admin/getactivecleanerforneworder
    useEffect(() => {
        const formData = new FormData();
        formData.append("city", "6");
        axios.post('https://adminapi.carselonadaily.com/api/admin/getactivecleanerforneworder', formData)
            .then(response => {
                setTimeSlotList(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    const handleChange = (e: any) => {
        setTimeSlot(e.target.value)
    }

    return (
        <div className="p-3 d-flex align-items-center flex-column">
            <h3>Assign Time Slot</h3>
            <select
                className='form-select form-select-solid bg-white'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                id="packageId"
                onChange={handleChange}
                value={timeSlot}
            >
                <option>Select Time Slot</option>
                {timeSlotList.timeslotlist?.map((item: any) => {
                    return <option value={item.id}
                        key={item.id}>{item.name}</option>
                })}
            </select>
            <button className="btn btn-warning btn-sm mt-2">Change</button>
        </div>
    )
}

export default ChangTimeSlotComponent;