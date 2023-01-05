import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { LocalBaseURL } from '../../../../../BaseURLmanagement';
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, Create_BtnCss, } from '../../../../consts/Styles/CssCom';
import { getAllJobStatusActionsV2, PostRequestUpdateStatus } from '../API';
import { attendenceStatusInterfaces } from '../Interfaces';

interface Props {
    handleDiloagboxform: (event: number | string) => void
    attendancestatusList: attendenceStatusInterfaces
}
const UpdateStatusform = ({ handleDiloagboxform, attendancestatusList }: Props) => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const [JobStatusList, SetJobStatusList] = useState<any>([])
    const [notAttHOme, setnotAttHOme] = useState<boolean>(true)
    const [markAttend, setmarkAttend] = useState<boolean>(false)
    const [payloads, setPayloads] = useState({
        user_id: attendancestatusList?.user_id,
        customerid: attendancestatusList?.customerid,
        attendence_id: attendancestatusList?.attendence_id,
        job_status_id: "",
        job_action_id: "",
        field_type_id: "",
        notathome: notAttHOme,
        mark_attendence: markAttend,
        time: "",
        field_value: "",
    })
    const handleChangeFormData = (event: any) => {
        if (event.target.name === "notathome") {
            if (notAttHOme === true && markAttend == false) {
                setnotAttHOme(!notAttHOme)
            }
            else if (notAttHOme === false && markAttend == false) {
                setnotAttHOme(!notAttHOme)
            }
            else {
                setmarkAttend(!markAttend)
                setnotAttHOme(!notAttHOme)
            }
        }
        else if (event.target.name === "mark_attendence") {
            if (markAttend === true && notAttHOme == false) {
                setmarkAttend(!markAttend)
            }
            else if (markAttend === false && notAttHOme == false) {
                setmarkAttend(!markAttend)
            }
            else {
                setnotAttHOme(!notAttHOme)
                setmarkAttend(!markAttend)
            }
        }
        else {
            setPayloads({ ...payloads, [event.target.name]: event.target.value })
        }
    }
    const handleDiloagboxformHere = async () => {
        const payloads2 = {
            user_id: attendancestatusList?.user_id,
            customerid: attendancestatusList?.customerid,
            attendence_id: attendancestatusList?.attendence_id,
            job_status_id: notAttHOme === false && markAttend === false ? payloads.job_status_id : attendancestatusList?.job_status_id,
            job_action_id: attendancestatusList?.job_action_id,
            field_type_id: attendancestatusList?.field_type_id,
            notathome: notAttHOme,
            mark_attendence: markAttend,
            time: markAttend === true && notAttHOme === false ? payloads.time : "",
            field_value: notAttHOme === false && markAttend === false ? payloads.field_value : "",
        }


        // console.log('payloads2', payloads2);
        const SubmittedRequest = await PostRequestUpdateStatus(localKeyCheck, payloads2)
        if (SubmittedRequest.status === 200) {
            toast.success("Attendance status updated successfully")
        } else {
            toast.error("!Updatation failed")
        }
    }
    // to close pop up form
    const handleClose = () => {
        handleDiloagboxform(0)
    }
    React.useEffect(() => {
        async function getCityInvoked() {
            const jobstatus = await getAllJobStatusActionsV2(localKeyCheck)
            SetJobStatusList(jobstatus?.data?.data)
        }
        getCityInvoked()
    }, [])
    // console.log('payloads', payloads);
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <h4 className='text-center'>Update Status</h4>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    <div className="row mb-2">
                        <div className="col-12  mb- d-flex  align-items-center">
                            <input
                                name='notathome'
                                type='checkbox'
                                className='me-3'
                                autoComplete='off'
                                id="notathome"
                                checked={notAttHOme}
                                onChange={handleChangeFormData}
                            />
                            <h6 className='mt-2'>Mark Not At Home</h6>
                        </div>
                        <div className="col-12  mb-3  d-flex  align-items-center">
                            <input
                                name='mark_attendence'
                                id="mark_attendence"
                                type='checkbox'
                                className='me-3'
                                autoComplete='off'
                                checked={markAttend}
                                onChange={handleChangeFormData}
                            />
                            <h6 className='mt-2'>Mark Attendance</h6>
                        </div>
                    </div>
                    {
                        notAttHOme === false && markAttend === true ? <div className="row mb-5">
                            <h6 >Enter Attendence Date</h6>
                            <div className="col-12  mb- d-flex  align-items-center">
                                <input type="datetime-local" name="time" onChange={handleChangeFormData} />
                            </div>
                        </div>
                            : <></>
                    }
                    {/* slect started here ....................................................................  */}
                    {
                        notAttHOme === false && markAttend === false ?
                            <div className="row mb-5">
                                <h6 >Select Stuats</h6>
                                <div className="col-12  mb- d-flex  align-items-center">
                                    <select
                                        className='form-select form-select-solid me-2'
                                        name="job_status_id"
                                        onChange={handleChangeFormData}
                                    >
                                        <option value="" className="bg-primary text-white">Select Job Status</option>
                                        {
                                            JobStatusList?.map((ele: any) => {
                                                // let parentid = ele.id
                                                // console.log('parentid', parentid);
                                                return (
                                                    <>
                                                        <option value="" className="bg-primary text-white">{ele.status_name}</option>
                                                        {ele?.children?.map((ele: any, index: number) => {
                                                            // let firstchild = ele.id
                                                            // console.log('firstchild', firstchild);
                                                            return (
                                                                <>
                                                                    <option value="" className="bg-light-success text-dark" >       ----- {ele.status_name}</option>
                                                                    {
                                                                        ele?.children?.map((ele: any) => {
                                                                            // let thirdchild = ele.id
                                                                            // console.log('thirdchild', thirdchild);
                                                                            return (
                                                                                <>
                                                                                    <option value={ele.id}  > ------------{ele.status_name}</option>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </>
                                                            )
                                                        })}
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            : <></>
                    }
                    {
                        notAttHOme === false && markAttend === false ? <div className="col-12  mb-3">
                            <h5>Write</h5>
                            <input
                                placeholder='Messsage Here...'
                                name='field_value'
                                type='text'
                                value={payloads.field_value}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeFormData}
                            />
                        </div> : <></>
                    }
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-sm btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleDiloagboxformHere}>Update Status</span>
                </button>
            </div>
        </div>
    )
}
export default UpdateStatusform
