import React from 'react'
const Updateform = ({ SingleSelect, ParentData, handleChnageInputUpdate }: any) => {
    return (
        <div className="px-5 w-100 ">
            <h5 className='text-center mb-2 text-primary'>     Update </h5>
            <div className="row mb-5">
                <div className="col-12  mb-3">
                    <h5>Select Job</h5>
                    {ParentData?.JobStatusData &&
                        <SingleSelect
                            handleChangeInputData={handleChnageInputUpdate}
                            name="jobid"
                            refrence="Select Job"
                            setSelectedData={null}
                            allDatafilter={ParentData?.JobStatusData}
                            reference2={null}
                        ></SingleSelect>
                    }
                </div>
                <div className="col-12  mb-3">
                    <h5>Change Status</h5>
                    <SingleSelect
                        handleChangeInputData={handleChnageInputUpdate}
                        name="status"
                        refrence="Change Status"
                        setSelectedData={null}
                        allDatafilter={[{name: 'Closed', id:0},{name: 'Recieved', id:1}]}
                        reference2={null}
                    ></SingleSelect>
                </div>
                {/* <div className="col-12  mb-3">
                    <h5>Select Supervisor</h5>
                    <SingleSelect
                        handleChangeInputData={handleChnageInputUpdate}
                        name="ticket_id"
                        refrence="Select Category"
                        setSelectedData={null}
                        // allDatafilter={ParentData?.TicketCategoryData}
                        reference2={null}
                    ></SingleSelect>
                </div> */}
                <hr />
            </div>
            {/* ==================================================================================================== */}
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}
export default Updateform
