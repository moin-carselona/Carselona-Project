import { useDispatch } from 'react-redux'
const JobDetailsModal = (props: any) => {
  const dispatch = useDispatch()
  const { filteredData, data, jobDetailsTimeSlot, refrencsss, jobsiteid, handleCloseModal } = props
  const   handleChangeDate = (drawerRefs: any) => {
    handleCloseModal()
    
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "JOBDETAILS", payload: jobsiteid })
  }
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
            <p>{filteredData?.job_type || 'No Job Type'}</p>
          </div>
          <div className="col-5">
            <h5>Job Site</h5>
            <p>{filteredData?.customer_data?.societyid == 0 ? "Individual" : filteredData?.customer_data?.society_details?.name}</p>
          </div>
          <div className="col-5">
            <h5>Customer Name</h5>
            <p>{filteredData?.customer_data?.first_name || 'No '} {filteredData?.customer_data?.last_name || 'Name'}</p>
          </div>
          <div className="col-5">
            <h5>Vehicle Number</h5>
            <p>{filteredData?.vehicle_details?.vehicleno || 'No Vehicle Number'}</p>
          </div>
        </div>
        {/* <div className='modal-footer'>
          {
            refrencsss == "datechange" && <button type='button' className='btn btn-primary ms-2' onClick={() => handleChangeDate("JobDetails")} id="kt_activities2_toggle2">
              Change Date
            </button>
          }
        </div> */}
      </div>
    </div>
  )
}
export default JobDetailsModal
