import axios from 'axios'
import moment from 'moment'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../../apiGlobally'
import { LocalBaseURL } from '../../../../BaseURLmanagement'
let days = [{ day: "Sunday", Value: 1 }, { day: "Monday", Value: 2 }, { day: "Tuesday", Value: 3 }, { day: "Wednesday", Value: 4 }, { day: "Friday", Value: 5 }, { day: "Saturday", Value: 6 }]
// =========================================================----------==========================================
const CleanerDetailsModel = (props: any) => {
  // =========================================================----------==========================================
  LocalBaseURL()
  const { id, data, timeSlotsfilter, referece, filteredCustomerData, handleCloseModalCleaner, CustomerDetails, subscription_order_id } = props
  console.log('filteredCustomerData', filteredCustomerData);
  // =========================================================----------==========================================
  // to filter current selected cleaner details 
  let FilteredCleanerData = data.filter((item: any) => item?.cleaner_details.id === id)
  console.log('FilteredCleanerData', FilteredCleanerData[0]);
  // this is to remve the default time dublicate in select =======================================================
  let updatedtimeSlotsfilter = timeSlotsfilter.filter((orginalSlot: any) => orginalSlot.name !== CustomerDetails?.timeslotname)
  // console.log('updatedtimeSlotsfilter', updatedtimeSlotsfilter);
  // =========================================================----------==========================================
  // this is to remve the default time dublicate in select =======================================================
  let updatedays = days.filter((days: any) => days.day !== CustomerDetails?.fulldaycleaning)
  // console.log('updatedtimeSlotsfilter', updatedtimeSlotsfilter);
  // =========================================================----------==========================================
  const DefaultCustomerDayID = days.filter((day: any) => day.day === CustomerDetails?.fulldaycleaning)
  // console.log('DefaultCustomerDayID', DefaultCustomerDayID[0]);
  // this is to select the default id timeslote id=======================================================================
  const DefaultCustomerTimingID = timeSlotsfilter.filter((time: any) => time.name === CustomerDetails?.timeslotname)
  // console.log('DefaultCustomerTimingID', DefaultCustomerTimingID[0]);
  // =========================================================----------==========================================
  const [SelectedDay, SetSelectedDay] = useState<any>()
  const [SelectedTiming, SetSelectedTiming] = useState<any>("")
  const [SelectedDate, setSelectedDate] = useState<any>(CustomerDetails?.startdate || moment().format("YYYY-MM-DD"))
  // =========================================================----------==========================================
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const ChangedAPI = `${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/assigncleanertoneworder`

  const handleAssigNewCleanerToCustomer = () => {
    const payload = {
      "startdate": moment(SelectedDate).format("YYYY-MM-DD"),
      "orderid": +filteredCustomerData.id,
      "newordercleanerid": +FilteredCleanerData[0]?.cleaner_details?.id,
      "fullcleaningday": +SelectedDay || DefaultCustomerDayID[0]?.Value,
      "frequencyid": +filteredCustomerData.frequencyid,
      "timeslotid": +SelectedTiming || DefaultCustomerTimingID[0].id,
      "jobsiteid": +filteredCustomerData.jobsiteid,
    }
    if (SelectedDay == "" && SelectedDate == "" && SelectedTiming == "") {
      toast.error("Haven't Selected any field")
    }
    else if (referece == "NotAssignCleaner") {
      axios.post(`${ChangedAPI}/admin/assigncleanertoneworder`, payload).then((assin) => {
        console.log('new Cleaner assined to not job customer', assin);
        toast.success("Successful Assign cleaner")
      })
    }
    else {
      axios.post(`${ChangedAPI}/admin/assigncleanertoneworder`, payload).then((assin) => {
        console.log('new Cleaner assined to not job customer', assin);
        toast.success("Successful Assign cleaner")
      })
    }
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
            {FilteredCleanerData[0]?.cleaner_details.first_name}  {FilteredCleanerData[0]?.cleaner_details.last_name}
          </div>
          <hr />
          <div className="col-6">
            <h5>Phone No.</h5>
            <p>{CustomerDetails?.phone}</p>
          </div>
          <div className="col-5">
            <h5>Phone No.</h5>
            <p>{FilteredCleanerData[0]?.cleaner_details.phone}</p>
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
            {/* <select
              className='form-select form-select-solid me-2'
            // onChange={handleSupervisorChange}
            // value={selectedSupervisor}
            >
              <option value=''>{CustomerDetails?.startdate}</option>
              {days?.map((item: any, index: number) => {
                return (
                  <option value={item.day} key={index}>
                    {item.day}
                  </option>
                )
              })}
            </select> */}
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
            {CustomerDetails?.fulldaycleaning}
          </div>
          <div className="col-6  mb-3">
            <h5>Cleaning Day</h5>
            <select
              className='form-select form-select-solid me-2'
              onChange={(e) => SetSelectedDay(e.target.value)}
              value={SelectedDay}
            >
              <option >{CustomerDetails?.fulldaycleaning}</option>
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
            {CustomerDetails?.timeslotname}
          </div>
          <div className="col-6  mb-3">
            <h5>Timing</h5>
            <select
              className='form-select form-select-solid me-2'
              onChange={(e) => SetSelectedTiming(e.target.value)}
              value={SelectedTiming}
            >
              <option value=''>{CustomerDetails?.timeslotname}</option>
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
