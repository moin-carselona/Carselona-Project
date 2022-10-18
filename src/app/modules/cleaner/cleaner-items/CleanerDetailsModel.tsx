import axios from 'axios'
import { toast } from 'react-toastify'
let days = [{ day: "Monday", Value: 1 }, { day: "Tuesday", Value: 1 }, { day: "Wednesday", Value: 1 }, { day: "Thursday", Value: 1 }, { day: "Friday", Value: 1 }, { day: "Saturday", Value: 1 }, { day: "Sunday", Value: 1 }]

const CleanerDetailsModel = (props: any) => {
  const { id, data, handleCloseModalCleaner } = props
  let FilteredCleanerData = data.filter((item: any) => item?.cleaner_details.id === id)
  // console.log('FilteredCleanerData', FilteredCleanerData[0].attendence_data[0].timeslot_data);
  const handleAssignclenerSubmit = () => {
    // const formData = new FormData()
    // formData.append('attendenceid', id)
    // axios
    //   .post('https://adminapi.carselonadaily.com/api/admin/cleanerattendencebyid', formData)
    //   .then((response) => {
    //     console.log('response cleaner details', response);
    //     toast.success('Date changed successfully')
    //   })
    //   .catch((error) => {
    //     toast.error('Something went wrong')
    //   })

    
  }
  return (
    <div className='p-5 card' style={{ width: '500px' }}                                                                                                                                                                                                                                        >
      <div className='modal-content ' >
        <div className='modal-header mb-5'>
          <h5 className='modal-title mb-2' id='exampleModalCenteredScrollableTitle'>
            Cleaner Details
          </h5>
          <button
            type='button'
            className='btn-close mb-2'
            data-bs-dismiss='modal'
            aria-label='Close'
            onClick={handleCloseModalCleaner}
          ></button>
        </div>
        <div className="row mb-5">
          <div className="col-6">
            <h5>Society</h5>
            <p>{FilteredCleanerData[0]?.cleaner_details.address}</p>
          </div>
          <div className="col-5">
            <h5>Customer Start Date</h5>
            <p>
              <p>{FilteredCleanerData[0]?.attendence_data[0]?.timeslot_data[0]?.attendencedate}</p>
            </p>
          </div>
          <div className="col-6">
            <h5>Time</h5>
            <select
              className='form-select form-select-solid me-2'
            // onChange={handleSupervisorChange}
            // value={selectedSupervisor}
            >
              <option value=''>Select Time</option>
              {FilteredCleanerData[0].attendence_data[0].timeslot_data?.map((item: any, index: number) => {
                return (
                  <option value={item.timeslot_name} key={index}>
                    {item.timeslot_name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="col-5">
            <h5>Cleaner Name</h5>
            {FilteredCleanerData[0]?.cleaner_details.first_name}  {FilteredCleanerData[0]?.cleaner_details.last_name}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6">
            <h5>Day</h5>
            <select
              className='form-select form-select-solid me-2'
            // onChange={handleSupervisorChange}
            // value={selectedSupervisor}
            >
              <option value=''>Select Day</option>
              {days?.map((item: any, index:number) => {
                return (
                  <option value={item.day} key={index}>
                    {item.day}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="col-5">
            <h5>Actual Start Date</h5>
            <input
              type='date'
              className='form-select form-select-solid me-2'
              // onChange={handleToDateChange}
              // value={attendencedateto}
            />
          </div>
        </div>
        <div className='modal-footer'>
          {/* <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={handleCloseModalCleaner}>
            Close
          </button> */}
          <button type='button' className='btn btn-primary ms-2' onClick={handleAssignclenerSubmit}>
            Assign cleaner
          </button>
        </div>
      </div>
    </div>
  )
}
export default CleanerDetailsModel
