import axios from "axios"
import { useEffect, useState } from "react"

const ChangeStatusComponent = (selectedId: any) => {
    const [stopType] = useState([{ id: "1", value: 'Inactive' }, { id: "2", value: 'Active' },])
    const [responseData, setResponseData] = useState(Object);

    useEffect(() => {
        axios.post('https://adminapi.carselonadaily.com/api/admin/getMasterReasonsForSubscription').then((response) => {
            setResponseData(response.data);
        }).catch(error => {
            console.error("ERROR", error);
        });
    }, []);

    const [inputField, setInputField] = useState({
        subscriptionid: selectedId,
        isactivestatus: '',
        reason_id: '',
        inactive_date: '',
    })

    const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }

    const handleSubmitCleaner = () => {
        const formData = new FormData();
        formData.append("subscriptionid", inputField.subscriptionid.selectedId)
        formData.append("isactivestatus", inputField.isactivestatus)
        formData.append("reason_id", inputField.reason_id)
        formData.append("inactive_date", inputField.inactive_date)

        axios.post('https://adminapi.carselonadaily.com/api/admin/updateSubscriptionStatus', formData)
            .then(response => {
                alert("Status Changed")
            }).catch(error => {
                console.log(error)
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
                id="isactivestatus"
                onChange={handleChange}
            >
                <option>Select Type</option>
                {stopType?.map((item: any) => {
                    return <option value={item.id}
                        key={item.id}>{item.value}</option>
                })}
            </select>

            <input
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                id="inactive_date"
                className='form-select form-select-solid bg-white my-2'
                type="date"
                onChange={handleChange}
            />

            <select
                className='form-select form-select-solid bg-white'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                id="reason_id"
                onChange={handleChange}
            >
                <option>Select Package</option>
                {responseData.data?.map((item: any) => {
                    return <option value={item.id}
                        key={item.id}>{item.reason}</option>
                })}
            </select>
            <button onClick={handleSubmitCleaner} className="btn btn-warning btn-sm mt-2">Update Status</button>
        </div>
    )
}

export default ChangeStatusComponent;