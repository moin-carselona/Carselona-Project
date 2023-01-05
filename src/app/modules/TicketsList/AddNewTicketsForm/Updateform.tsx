import React from 'react'
import SingleSelectSearchCategory from '../../../consts/SingleSelectSearchCategory'
const Updateform = ({ ParentData, handleChnageInputUpdate }: any) => {
    return (
        <div className="px-5 w-100 ">
            <h5 className='text-center mb-2 text-primary'>     Update </h5>
            <div className="row mb-5">
                <div className="col-12  mb-3">
                    <h5>Select Job</h5>
                    {ParentData?.JobStatusData &&
                        <SingleSelectSearchCategory
                            handleChangeInputData={handleChnageInputUpdate}
                            HeaderTitle="Select Job"
                            SelectData={ParentData?.JobStatusData}
                            DynamicKey={"name"}
                            id={"id"}
                            name="jobid"
                        ></SingleSelectSearchCategory>
                    }
                </div>
                <div className="col-12  mb-3">
                    <h5>Change Status</h5>
                    <SingleSelectSearchCategory
                        handleChangeInputData={handleChnageInputUpdate}
                        HeaderTitle="Select Status"
                        SelectData={[{ name: 'Closed', id: 0 }, { name: 'Recieved', id: 1 }]}
                        DynamicKey={"name"}
                        id={"id"}
                        name="status"
                    ></SingleSelectSearchCategory>
                </div>
                <hr />
            </div>
            {/* ==================================================================================================== */}
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}
export default Updateform
