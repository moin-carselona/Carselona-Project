import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../../apiGlobally'
import { LocalBaseURL } from '../../../../BaseURLmanagement'
const AddBankAccountListDrawer = () => {
    LocalBaseURL()
    const cleanerid = useSelector((store: any) => store?.ActiveStatsReducer?.addBank)
    const localKey = JSON.parse(localStorage.getItem("API") || "0")
    const [loading, setloading] = useState(false)
    const [Dates, setDate] = useState("")
    React.useEffect(() => {
        // setloading(true)
        async function invoked() {
            // const response = await axios.post(`${localKey ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/cleanerattendencebyid`, {
            //     "attendenceid": jobdetailsid
            // })
            // setloading(false)
        }
        invoked()
        // 
        return () => {
            console.log("cleaned useEffect")
            setloading(false)
        }
    }, [cleanerid])

    
    const handleChangeDateSubmit = () => {
        if (!Dates) {
            toast.error("pls select date")
        }
        async function invoked() {
        }
        invoked()
    }
    return (
        <>
            {
                // loading ? <>
                //     <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
                //         <div className='spinner-border mr-15' role='status'></div>
                //         <h4 className='fw-bold'>Loading...</h4>
                //     </div>
                // </>
                //     :
                <>
                    <div className=' mr-auto mb-4' style={{ width: "850px" }}>
                        <h2>Cleaner id : {cleanerid?.id}</h2>
                        <div className='d-flex align-items-center justify-content-around mb-2 '>
                            {/* <select
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
                                </select> */}
                        </div>
                        <div className='d-flex align-items-center justify-content-around mb-2 '>
                            {/* <select
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
                                </select> */}
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
export default AddBankAccountListDrawer
