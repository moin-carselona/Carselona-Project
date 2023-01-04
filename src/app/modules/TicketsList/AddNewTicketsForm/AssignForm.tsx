import React from 'react'
import MultiSelect from '../../../consts/MultiSelect'
const AssignForm = ({ SingleSelect, ParentData, handleChnageInputAssign }: any) => {
    return (
        <div className="px-5 w-100 ">
            <h5 className='text-center mb-2 text-warning'>     Assign </h5>
            <div className="row mb-5">
                <div className="col-12  mb-3">
                    <h5>Select Admin</h5>
                    {ParentData?.AdminData &&
                        <MultiSelect
                            setSelectedData={handleChnageInputAssign}
                            allDatafilter={ParentData?.AdminData}
                            reference2={"default"}
                            name="admins"
                        ></MultiSelect>
                    }
                </div>
                <div className="col-12  mb-3">
                    <h5>Select Supervisor</h5>
                    <MultiSelect
                        setSelectedData={handleChnageInputAssign}
                        allDatafilter={ParentData?.Supervisordata}
                        reference2={"default"}
                        name="cleaners"
                    ></MultiSelect>
                </div>
                <div className="col-12  mb-3">
                    <h5>Last Date for Resolution</h5>
                    <input type="date" onChange={(event) => handleChnageInputAssign(event.target, "last_date_resolution")} className='form-select form-select-solid me-2' />
                </div>
                <div className="col-12  mb-3">
                    <h5>Last Date for feedback</h5>
                    <input type="date" onChange={(event) => handleChnageInputAssign(event.target, "last_date_feedback")} className='form-select form-select-solid me-2' />
                </div>
                <hr />
            </div>
            {/* ==================================================================================================== */}
        </div>
    )
}
export default AssignForm
