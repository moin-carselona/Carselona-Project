import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateTaskComponent = (props: { selectedId: string, data: any }) => {
    const { data, selectedId } = props;
    const [cleanerList, setCleanerList] = useState([]);
    const [filtered, setFilteredData] = useState(Object);

    const [jobType, setJobType] = useState([
        { id: "1", label: "Cleaning Job" },
        { id: "2", label: "Buddy Job" }
    ]);
    const [cleaner, setCleaner] = useState("");
    const [job, setJob] = useState("");

    useEffect(() => {
        axios.get('https://adminapi.carselonadaily.com/api/admin/getCleanerList')
            .then(response => {
                setCleanerList(response.data.data);
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
        setFilteredData(filteredData)
    }, [])

    const handleChange = (e: any) => {
        setCleaner(e.target.value)
    }
    const handleJobType = (e: any) => {
        setJob(e.target.value)
    }

    const handleSubmit = (e: any) => {
        // cleanerid
        // customerids: 3042
        // subscriptionMonth: 10276
        // tasktype: 2
        const formData = new FormData();
        formData.append("cleanerid", cleaner);
        formData.append("subscriptionMonth", filtered.subscriptionMonth.id);
        formData.append("customerids", filtered.customerData.id);
        formData.append("tasktype", job);

        axios.post("https://adminapi.carselonadaily.com/api/admin/createJobTask", formData)
            .then(response => {
                toast.success("Task created")
            })
            .catch(error => {
                console.log(error)
                toast.error("Something went wrong")
            })
    }


    return (
        <div className="p-2">
            <h2>Create Tasksss</h2>
            <select
                className='form-select form-select-solid bg-white'
                onChange={handleJobType}
                value={job}>
                <option value="">Select Job Type</option>
                {jobType?.map((item: any) => {
                    return <option value={item.id}
                        key={item.id}>{item.label}</option>
                })}
            </select>
            <select
                className='form-select form-select-solid bg-white'
                onChange={handleChange}
                value={cleaner}>
                <option value="">Select Cleaner</option>
                {cleanerList?.map((item: any) => {
                    return <option value={item.id}
                        key={item.id}>{item.first_name} {item.last_name}</option>
                })}
            </select>
            <button className="btn btn-sm btn-warning" onClick={handleSubmit}>Save</button>
        </div>
    )
}

export default CreateTaskComponent;