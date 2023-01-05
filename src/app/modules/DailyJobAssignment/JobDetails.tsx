import axios from 'axios'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
const JobDetails = (props: any) => {
    const { CustomerJobData, handleCloseModal } = props
    console.log('CustomerJobData', CustomerJobData);
    return (
        <div className='p-5 card' style={{ width: '500px' }}                                                                                                                                                                                                                                        >
            <div className='modal-content'>
                <div className='modal-header mb-5'>
                    <h5 className='modal-title mb-2' id='exampleModalCenteredScrollableTitle'>
                        Job Details
                    </h5>
                    <button
                        type='button'
                        className='btn-close mb-2'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                        onClick={handleCloseModal}
                    ></button>
                </div>
                <div className="row mb-5">
                    <div className="col-5">
                        <h5>Job Type</h5>
                        <p>
                            {CustomerJobData?.todayAttendenceData?.servicetype == 1 ? "Exterior" : "Full cleaning Day"}
                        </p>
                    </div>
                    <div className="col-5">
                        <h5>Job Site</h5>
                        <p>{CustomerJobData?.societyid == 0 ? "Individual" : CustomerJobData?.jobsitename}</p>
                    </div>
                    <div className="col-5">
                        <h5>Customer Name</h5>
                        <p> {CustomerJobData?.name || 'No Name'}</p>
                    </div>
                    <div className="col-5">
                        {/* <h5>Vehicle Number</h5>
                        <p>{CustomerJobData?.vehicleid || 'No Vehicle Number'}</p> */}
                    </div>
                </div>
                <div className='modal-footer'>
                </div>
            </div>
        </div>
    )
}
export default JobDetails
