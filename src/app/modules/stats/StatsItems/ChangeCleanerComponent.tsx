import axios from "axios";
import React, { useEffect } from "react";

const ChangeCleanerComponent = (selectedId: any) => {

    const [cleanerList, setCleanerList] = React.useState(Object);
    const [cleaner, setCleaner] = React.useState("");

    useEffect(() => {
        const formData = new FormData();
        formData.append("city", "6");
        axios.post('https://adminapi.carselonadaily.com/api/admin/getactivecleanerbycity', formData)
            .then(response => {
                setCleanerList(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    const handleChange = (e: any) => {
        setCleaner(e.target.value)
    }

    const handleSubmitCleaner = () => {
        // orderid: 12756
        // cleanerid: 489
        const formData = new FormData();
        formData.append("orderid", selectedId.selectedId);
        formData.append("cleanerid", cleaner);
        axios.post('https://adminapi.carselonadaily.com/api/admin/changecleanerofcustomer', formData)
            .then(response => {
                alert("Saved")
            }).catch(error => {
                console.log(error);
                alert("Something went wrong!")
            })
    }

    return (
        <div className="p-3 d-flex align-items-center flex-column">
            <h3>Assign Cleaner</h3>
            <select
                className='form-select form-select-solid bg-white'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                id="packageId"
                onChange={handleChange}
                value={cleaner}
            >
                <option>Select Package</option>
                {cleanerList.data?.map((item: any) => {
                    return <option value={item.id}
                        key={item.id}>{item.first_name} {item.last_name}</option>
                })}
            </select>
            <button onClick={handleSubmitCleaner} className="btn btn-warning btn-sm mt-2">Assign</button>
        </div>
    )
}

export default ChangeCleanerComponent;