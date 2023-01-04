import axios from 'axios'
import moment from 'moment'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../../apiGlobally'
import { LocalBaseURL } from '../../../../BaseURLmanagement'
let days = [{ day: "Sunday", Value: 1 }, { day: "Monday", Value: 2 }, { day: "Tuesday", Value: 3 }, { day: "Wednesday", Value: 4 }, { day: "Friday", Value: 5 }, { day: "Saturday", Value: 6 }]
// =========================================================----------==========================================
const CleanerDetailsModel = (props: any) => {
  const Navigates = useNavigate()
  // =========================================================----------==========================================
  LocalBaseURL()
  const { id, data, timeSlotsfilter, timingdata, referece, filteredCustomerData, handleCloseModalCleaner, CustomerDetails, subscription_order_id } = props
  // console.log('timingdata', timingdata);
  const celanerDatys = CustomerDetails?.fullcleaningday == "1" ? { name: "Sunday", id: 1 } :
    CustomerDetails?.fullcleaningday == "2" ? { name: "Monday", id: 2 } :
      CustomerDetails?.fullcleaningday == "3" ? { name: "Tuesday", id: 3 } :
        CustomerDetails?.fullcleaningday == "4" ? { name: "Wednesday", id: 4 } :
          CustomerDetails?.fullcleaningday == "5" ? { name: "Friday", id: 5 } :
            CustomerDetails?.fullcleaningday == "6" ? { name: "Saturday", id: 6 } :
              { name: "Not Availble", id: null }
  // =========================================================----------==========================================
  // console.log('celanerDatys', celanerDatys);
  // to filter current selected cleaner details 
  let FilteredCleanerData = data.filter((item: any) => item?.cleaner_details.id === id)[0]
  // this is to remve the default time dublicate in select =======================================================
  let updatedtimeSlotsfilter = timeSlotsfilter?.filter((orginalSlot: any) => orginalSlot.name !== timingdata?.name)
  // console.log('updatedtimeSlotsfilter', updatedtimeSlotsfilter);
  // =========================================================----------==========================================
  // this is to remve the default time dublicate in select =======================================================
  let updatedays = days.filter((days: any) => days.day !== CustomerDetails?.fulldaycleaning)
    // console.log('updatedtimeSlotsfilter', updatedtimeSlotsfilter);
    // =========================================================----------==========================================
    // const DefaultCustomerDayID = days?.filter((day: any) => day.day === celanerDatys)[0]
    // // console.log('DefaultCustomerDayID', DefaultCustomerDayID);
    // const DefaultCustomerTimingID = timeSlotsfilter?.filter((time: any) => console.log('time.name === timingdata', time.name, timingdata))[0]
    // console.log('DefaultCustomerTimingID', DefaultCustomerTimingID);
    ;
  // =========================================================----------==========================================
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const [SelectedDay, SetSelectedDay] = useState<any>(celanerDatys?.name !== "Not Availble" && celanerDatys?.name ? celanerDatys?.id : "")
  const [SelectedTiming, SetSelectedTiming] = useState<any>(timingdata?.name !== "Not Availble" && timingdata?.name ? timingdata?.id : "")
  const [SelectedDate, setSelectedDate] = useState<any>(CustomerDetails?.startdate || moment().format("YYYY-MM-DD"))
 
  // =========================================================----------==========================================
  // const ChangedAPI = `${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/assigncleanertoneworder`
  const dispatch = useDispatch()
  const handleAssigNewCleanerToCustomer = () => {
    const payload = {
      "startdate": moment(SelectedDate).format("YYYY-MM-DD"),
      "orderid": +filteredCustomerData?.id,
      "newordercleanerid": +FilteredCleanerData?.cleaner_details?.id,
      // "fullcleaningday": +SelectedDay || DefaultCustomerDayID?.Value,
      "fullcleaningday": +SelectedDay,
      "frequencyid": +filteredCustomerData.frequencyid,
      // "timeslotid": +SelectedTiming || DefaultCustomerTimingID.id,
      "timeslotid": +SelectedTiming,
      "jobsiteid": +filteredCustomerData?.jobsiteid,
    }
    if (SelectedDay && SelectedTiming) {
      if (referece === "not_assigned") {
        axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/assigncleanertoneworder`, payload).then((assin) => {
          console.log('assin', assin);
          toast.success("Successful Assigned cleaner")
          dispatch({ type: "cleanerAvailibiltyRoutes", payload: Math.random() })
          handleCloseModalCleaner()
          Navigates(-1)
        }).catch((error) => {
          toast.error("Assigning Failed",error.message, )
        })
      }
    }else{
      toast.error(!SelectedTiming ? "No time is selected" : !SelectedDay ? "No Day is selected" : "something is missing")
    } 
    
    
    
    
    
    // else {
    //   axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/assigncleanertoneworder`, payload).then((assin) => {
    //     dispatch({ type: "cleanerAvailibiltyRoutes", payload: Math.random() })
    //     toast.success("Successful Assigned cleaner ")
    //     handleCloseModalCleaner()
    //     Navigates(-1)
    //   })
    // }
  }
  // =========================================================----------==========================================
  return (
    <div className='p-10 card' style={{ width: '600px' }}                                                                                                                                                                                                                                        >
      <div className='modal-content ' >
        <div className='modal-header mb-5'>
          <h5 className='modal-title mb-2' id='exampleModalCenteredScrollableTitle'>
            What he wants ?
          </h5>
          <h5 className='modal-title mb-2 ml-10' id='exampleModalCenteredScrollableTitle'>
            What we giving ?
          </h5>
          <button
            type='button'
            className='btn-close mb-2'
            data-bs-dismiss='modal'
            aria-label='Close'
            onClick={handleCloseModalCleaner}
          ></button>
        </div>
        {/* ==================================================================================================== */}
        <div className="row mb-5">
          <div className="col-6">
            <h5>Customer Name</h5>
            <p>
              {CustomerDetails?.name}
            </p>
          </div>
          <div className="col-5">
            <h5>Cleaner Name</h5>
            {FilteredCleanerData?.cleaner_details.first_name}  {FilteredCleanerData?.cleaner_details.last_name}
          </div>
          <hr />
          <div className="col-6">
            <h5>Phone No.</h5>
            <p>{CustomerDetails?.phone}</p>
          </div>
          <div className="col-5">
            <h5>Phone No.</h5>
            <p>{FilteredCleanerData?.cleaner_details.phone}</p>
          </div>
          <hr />
        </div>
        {/* ==================================================================================================== */}
        <div className="row mb-5">
          <div className="col-6">
            <h5>Subscription Date</h5>
            <p>{CustomerDetails?.startdate}</p>
          </div>
          <div className="col-6 mb-3">
            <h5>Subscription Date</h5>
            <input
              defaultValue={CustomerDetails?.startdate}
              type='date'
              className='form-select form-select-solid me-2'
              onChange={(e) => setSelectedDate(e.target.value)}
            // value={CustomerDetails?.startdate ? CustomerDetails?.startdate : SelectedDate}
            />
          </div>
          <hr />
          <div className="col-6 mb-3">
            <h5>Cleaning Day</h5>
            {CustomerDetails?.fullcleaningday == "1" ? "Sunday" :
              CustomerDetails?.fullcleaningday == "1" ? "Sunday" :
                CustomerDetails?.fullcleaningday == "2" ? "Monday" :
                  CustomerDetails?.fullcleaningday == "3" ? "Tuesday" :
                    CustomerDetails?.fullcleaningday == "4" ? "Wednesday" :
                      CustomerDetails?.fullcleaningday == "5" ? "friday" :
                        CustomerDetails?.fullcleaningday == "6" ? "Saturday" :
                          "Not Availble"}
          </div>
          <div className="col-6  mb-3">
            <h5>Cleaning Day</h5>
            <select
              className='form-select form-select-solid me-2'
              onChange={(e) => SetSelectedDay(e.target.value)}
              value={SelectedDay}
            >
              <option >{celanerDatys?.name}</option>
              {updatedays?.map((item: any, index: number) => {
                return (
                  <option value={item.Value} key={index}>
                    {item.day}
                  </option>
                )
              })}
            </select>
          </div>
          <hr />
        </div>
        {/* ==================================================================================================== */}
        <div className="row mb-5">
          <div className="col-6">
            <h5>Timing</h5>
            {timingdata?.name}
          </div>
          <div className="col-6  mb-3">
            <h5>Timing</h5>
            <select
              className='form-select form-select-solid me-2'
              onChange={(e) => SetSelectedTiming(e.target.value)}
              value={SelectedTiming}
            >
              <option value={timingdata?.name}>{timingdata?.name}</option>
              {updatedtimeSlotsfilter?.map((item: any, index: number) => {
                return (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                )
              })}
            </select>
          </div>
          <hr />
        </div>
        {/* ==================================================================================================== */}
        {/* <div className="row mb-5">
          <div className="col-6 mb-3">
            <h5>Day</h5>
            <select
              className='form-select form-select-solid me-2'
            // onChange={handleSupervisorChange}
            // value={selectedSupervisor}
            >
              <option value=''>Select Day</option>
              {days?.map((item: any, index: number) => {
                return (
                  <option value={item.day} key={index}>
                    {item.day}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="col-6">
            <h5>Actual Start Date</h5>
            <input
              type='date'
              className='form-select form-select-solid me-2'
            // onChange={handleToDateChange}
            // value={attendencedateto}
            />
          </div>
          <hr />
        </div> */}
        {/* ==================================================================================================== */}
        <div className='modal-footer'>
          {/* <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={handleCloseModalCleaner}>
            Close
          </button> */}
          <button type='button' className='btn btn-primary ms-2' onClick={handleAssigNewCleanerToCustomer}>
            Assign cleaner
          </button>
        </div>
      </div>
    </div>
  )
}
export default CleanerDetailsModel
