import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../../apiGlobally'
import { LocalBaseURL } from '../../../../BaseURLmanagement'
const ChangeDateDrawerForm = () => {
    LocalBaseURL()
    const jobdetailsData = useSelector((store: any) => store?.ActiveStatsReducer?.jobdetailsid)
    const [jobdetailsid, setJobdetails] = React.useState(useSelector((store: any) => store?.ActiveStatsReducer?.jobdetailsid))
    const localKey = JSON.parse(localStorage.getItem("API") || "0")
    const [data, setData] = useState<any>({})
    const [cleanerlist, setCleanerlist] = useState([])
    const [timeslotlistdata, settimeslotlist] = useState([])
    const [jobtypedata, setjobtypedata] = useState([])
    const [loading, setloading] = useState(false)
    const [deafultCleaener, setdeafultCleaener] = useState<any>([])
    const [deafultTimeSlot, setdeafultTimeSlot] = useState<any>([])
    const [Dates, setDate] = useState("")
    const [selectedTimeSlot, setselectedTimeSlot] = useState<any>(0)
    const [selectedCleaner, setselectedCleaner] = useState<any>(0)
    React.useEffect(() => {
        setloading(true)
        setJobdetails(jobdetailsData)
        async function invoked() {
            const response = await axios.post(`${localKey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/cleanerattendencebyid`, {
                "attendenceid": jobdetailsid
            })
            setData(response?.data?.data)
            setCleanerlist(response?.data?.cleanerlist)
            settimeslotlist(response?.data?.timeslotlist)
            setjobtypedata(response?.data?.jobtype)
            setloading(false)
        }
        invoked()
        // 
        return () => {
            console.log("cleaned useEffect")
            setloading(false)
        }
    }, [jobdetailsData])
    React.useEffect(() => {
        const deafultSingleCleaner: any = cleanerlist?.filter((ele: any) => ele?.id === data?.cleanerid)
        setdeafultCleaener(deafultSingleCleaner)
        setselectedCleaner(+deafultSingleCleaner[0]?.id)
        const deafultTimeSlot: any = timeslotlistdata?.filter((ele: any) => ele?.id == +data?.timeslot)
        setselectedTimeSlot(+deafultTimeSlot[0]?.id)
        setdeafultTimeSlot(deafultTimeSlot)
    }, [data?.id, jobdetailsData, loading])
    const handleChangeDateSubmit = () => {
        if (!Dates) {
            toast.error("pls select date")
        }
        async function invoked() {
            const response = await axios.post(`${localKey ? TEST_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/cleanerattendencebyid`, {
                "attendenceid": jobdetailsid,
                "date": Dates,
                "timeslot": selectedTimeSlot,
                "cleanerid": selectedCleaner,
            })
            setData(response?.data?.data)
            setCleanerlist(response?.data?.cleanerlist)
            settimeslotlist(response?.data?.timeslotlist)
            setjobtypedata(response?.data?.jobtype)
            setloading(false)
        }
        invoked()
    }
    return (
        <>
            {
                loading ? <>
                    <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
                        <div className='spinner-border mr-15' role='status'></div>
                        <h4 className='fw-bold'>Loading...</h4>
                    </div>
                </>
                    : <>
                        <div className=' mr-auto mb-4' style={{ width: "850px" }}>
                            <h2>Job site id : {jobdetailsid}</h2>
                            <div className='d-flex align-items-center justify-content-around mb-2 '>
                                <select
                                    className='form-select form-select-solid me-2'
                                    data-kt-select2='true'
                                    data-placeholder='Select option'
                                    data-allow-clear='true'
                                    id='cleanerType'
                                    onChange={(e) => setselectedCleaner(e.target.value || deafultCleaener[0]?.id)}
                                >
                                    <option   >{deafultCleaener[0]?.first_name}</option>
                                    {cleanerlist?.map((cleanerlist: any) => {
                                        return (
                                            <option value={cleanerlist?.id} key={cleanerlist?.id}>
                                                {cleanerlist?.first_name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='d-flex align-items-center justify-content-around mb-2 '>
                                <select
                                    className='form-select form-select-solid me-2'
                                    data-kt-select2='true'
                                    data-placeholder='Select option'
                                    data-allow-clear='true'
                                    id='cleanerType'
                                    onChange={(e) => setselectedTimeSlot(e.target.value || deafultTimeSlot[0]?.id)}
                                >
                                    <option  >{deafultTimeSlot[0]?.name}</option>
                                    {timeslotlistdata?.map((timeslot: any) => {
                                        return (
                                            <option value={timeslot.id} key={timeslot.id}>
                                                {timeslot.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='d-flex align-items-start justify-content-start mb-2'>
                                <input
                                    type='date'
                                    placeholder='Enter Attendance Time'
                                    value={Dates}
                                    onChange={(e: any) => setDate(e.target.value)}
                                    className='w-100 form-control me-2 align-start'
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning" onClick={handleChangeDateSubmit}>Change Date</button>
                    </>
            }
        </>
    )
}
export default ChangeDateDrawerForm
