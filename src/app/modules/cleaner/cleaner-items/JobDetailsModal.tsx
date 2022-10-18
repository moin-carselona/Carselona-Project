import axios from 'axios'
import {toast} from 'react-toastify'

const JobDetailsModal = (props: any) => {
  const {id, data, handleCloseModal} = props
  // console.log('data', data);

  let arr: any[] = []
  data.map((item: any) => {
    item.attendence_data.map((data: any) => {
      data.timeslot_data.filter((inner: any) => {
        arr.push(inner)
      })
    })
  })
  // console.log('arr', arr);
  
  let filteredData = arr.filter((item: any) => item.cleanerid === id)[0]


  const handleChangeDate = () => {
    const formData = new FormData()
    formData.append('attendenceid', id)
    axios
      .post('https://adminapi.carselonadaily.com/api/admin/cleanerattendencebyid', formData)
      .then((response) => {
        toast.success('Date changed successfully')
      })
      .catch((error) => {
        toast.error('Something went wrong')
      })
  }

  return (
    // <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    //     <h3>Job Details</h3>
    //     <div className="row">
    //         <div className="col-5">
    //             <h5>Job Type</h5>
    //             <p>{filteredData?.job_type || 'test'}</p>
    //         </div>
    //         <div className="col-5">
    //             <h5>Job Site</h5>
    //             <p>{filteredData?.customer_data?.society_details.name || 'test'}</p>
    //         </div>
    //         <div className="col-5">
    //             <h5>Customer Name</h5>
    //             <p>{filteredData?.customer_data?.first_name || 'test'} {filteredData?.customer_data?.last_name || 'test'}</p>
    //         </div>
    //         <div className="col-5">
    //             <h5>Vehicle Number</h5>
    //             <p>{filteredData?.vehicle_details?.vehicleno || 'tetst'}</p>
    //         </div>
    //     </div>
    //     <button className="btn btn-sm btn-primary" onClick={handleChangeDate}>
    //         Change Date
    //     </button>
    // </div>
    <div className='p-5 card' style={{width:'500px'}}                                                                                                                                                                                                                                        >
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
                <p>{filteredData?.customer_data?.society_details.name || 'No Job Site'}</p>
            </div>
            <div className="col-5">
                <h5>Customer Name</h5>
                <p>{filteredData?.customer_data?.first_name || 'No Found'} {filteredData?.customer_data?.last_name || 'Name'}</p>
            </div>
             <div className="col-5">
                 <h5>Vehicle Number</h5>
                <p>{filteredData?.vehicle_details?.vehicleno || 'No Vehicle Number'}</p>
            </div>
        </div>
        <div className='modal-footer'>
          {/* <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={handleCloseModal}>
            Close
          </button> */}
          <button type='button' className='btn btn-primary ms-2' onClick={handleChangeDate}>
          Change Date
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsModal
