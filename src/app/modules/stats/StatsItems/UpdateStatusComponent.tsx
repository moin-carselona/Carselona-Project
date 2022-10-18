import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateStatusComponent = (props: { selectedId: any, data: any }) => {
    const { selectedId, data } = props;
    console.log("data", data)
    const [filteredData, setFilteredData] = useState<any>([]);
    const [jobStatus, setJobStatus] = useState<any>([]);
    // customerids

    useEffect(() => {
        axios.get("https://adminapi.carselonadaily.com/api/admin/getAllJobStatusActionsV2")
            .then(response => {
                setJobStatus(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        data.filter((item: any) => {
            if (item.id === selectedId) {
                setFilteredData(item);
            }
        })
        let filteredData = data.filter((item: any) => item.id === selectedId)[0];

        setInputField((prevState) => ({
            ...prevState,
            ['customerid']: filteredData.customerids,
        }));

        setFilteredData(filteredData)
    }, [])

    const [inputField, setInputField] = useState({
        notathome: "",
        mark_attendence: "",
        job_status_id: "",
        field_value: "",
        time: "",
        attendence_id: selectedId,
        customerid: filteredData.customerids
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type } = e.target;
        if (type === "checkbox") {
            if (e.target.checked) {
                setInputField((prevState) => ({
                    ...prevState,
                    [id]: "1",
                }));
            } else {
                setInputField((prevState) => ({
                    ...prevState,
                    [id]: "0",
                }));
            }
        } else {
            setInputField((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        }
    }

    const handleSubmit = () => {

        // customerid: 4809
        // attendence_id: 98865
        // job_action_id:
        // field_type_id:
        // mark_attendence: 1
        // time:
        // job_status_id: 32
        // field_value: ddd
        // notathome: 0
        // user_id: 7

        const formData = new FormData();

        formData.append("customerid", inputField.customerid)
        formData.append("attendence_id", inputField.attendence_id)
        formData.append("job_status_id", inputField.job_status_id)
        formData.append("mark_attendence", inputField.mark_attendence)
        formData.append("time", inputField.time)
        formData.append("notathome", inputField.notathome)
        formData.append("user_id", "7")

        axios.post("https://adminapi.carselonadaily.com/api/admin/updateAttendenceStatus", formData)
            .then(response => {
                toast.success("Status Updated")
            })
            .catch(error => {
                console.log("error")
                toast.error("Something went wrong")
            })
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center w-100 p-3">
            <h1>Attendance Update</h1>
            <label> Mark not at home</label>
            <input
                className='form-check-input'
                type='checkbox'
                id='notathome'
                onChange={handleChange}
            />
            <br></br>
            <label>Mark attendance</label>
            <input
                className='form-check-input'
                type='checkbox'
                id='mark_attendence'
                onChange={handleChange}
            />
            <br></br>

            {inputField.notathome === "0" && inputField.mark_attendence === "0" && <>
                <select
                    className="form-select form-select-solid bg-white my-2">
                    <option>Select Job Status</option>
                    {jobStatus?.map((option: any) => (
                        <optgroup label={option.status_name}>
                            {option.children?.map((item: any) => (
                                <option value={item.id}>{item.status_name}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>

                <input
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    type='text'
                    placeholder="Write"
                    id='field_value'
                    onChange={handleChange} /></>}

            {inputField.mark_attendence === "1" && <input
                className='form-control form-control-solid mb-3 mb-lg-0 my-2'
                type='datetime-local'
                id='time'
                onChange={handleChange}
            />}

            <button className="btn  btn-sm btn-primary" onClick={handleSubmit}>Update Status</button>
        </div>
    )
}

export default UpdateStatusComponent;