import React, { useState } from 'react'
import { LocalBaseURL } from '../../../../../BaseURLmanagement';
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, Create_BtnCss, } from '../../../../consts/Styles/CssCom';
import {  GetAllCleanerListandjobtype } from '../API';

interface Props {
    AttendanceID : any
    handleDiloagboxform: (event: number | string) => void
}

const EditAttendence = ({AttendanceID, handleDiloagboxform }: Props) => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const [CleanerList, SetCleanerList] = useState<any>([])
    const [JobTypeList, SetJobTypeList] = useState<any>([])
    const [payloads, setPayloads] = useState({
        cleanerid: 0,
        jobtypeid: 0,
    })
    // to store society data into server   
    const handleChangeFormData = (event: any) => {
        setPayloads({ ...payloads, [event.target.name]: event.target.value })
    }
    const handleEditAttenddanceForm = async () => {
    }
    // to close pop up form
    const handleClose = () => {
        handleDiloagboxform(0)
    }
    React.useEffect(() => {
        async function getCityInvoked() {
            const response = await GetAllCleanerListandjobtype(localKeyCheck, AttendanceID)
            SetCleanerList(response?.data?.cleanerlist)
            SetJobTypeList(response?.data?.jobtype)
        }
        getCityInvoked()
    }, [])
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <h4 className='text-center'>Attendance Edit</h4>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    {
                        <div className="row mb-5">
                            <h6 >Select Cleaner</h6>
                            <div className="col-12  mb- d-flex  align-items-center">
                                <select
                                    className='form-select form-select-solid me-2'
                                    name="cleanerid"
                                    onChange={handleChangeFormData}
                                >
                                    <option value="" >Select Cleaner</option>
                                    {
                                        CleanerList?.map((ele: any) => {
                                            return (
                                                <>
                                                    <option value={ele.id} >{ele.first_name} {ele.last_name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    }
                    {
                        <div className="row mb-5">
                            <h6 >Select Job Type</h6>
                            <div className="col-12  mb- d-flex  align-items-center">
                                <select
                                    className='form-select form-select-solid me-2'
                                    name="jobtypeid"
                                    onChange={handleChangeFormData}
                                >
                                    <option value="" >Select Job Type</option>
                                    {
                                        JobTypeList?.map((ele: any) => {
                                            return (
                                                <>
                                                    <option value={ele.id} >{ele.name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    }
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-sm btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleEditAttenddanceForm}>Assign</span>
                </button>
            </div>
        </div>
    )
}
export default EditAttendence
