import { Dialog } from '@mui/material'
import axios from 'axios'
import React, { useMemo } from 'react'
import moment from "moment";
import { useLocation, useParams } from 'react-router'
import CleanerDetailsModel from './cleaner-items/CleanerDetailsModel'
import JobDetailsModal from './cleaner-items/JobDetailsModal'
import CleanerTableBodyComponent from './common/CleanerTableBodyComponent'
import MultiSelect from './common/MultiSelect'
import { useSelector } from 'react-redux';
import { MonthString, MonthNumber } from './Months';
import { LocalBaseURL } from '../../../BaseURLmanagement';
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally';
import Timing from './Timing';
const CleanerAvailabilityRoute = (props: {
  iscleanerpage?: boolean
}) => {
  const { iscleanerpage } = props
  LocalBaseURL()
  // const { state }: any = useLocation()
  const paramsIDS: any = useParams()
  const urlEndPoint = window.location.pathname.split("/")
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [SubscriptionData, setsubscriptionData] = React.useState<any>({})
  console.log('SubscriptionData', SubscriptionData);
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(2)
  const [dates, setDates] = React.useState<any>([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [timeSlots, setTimeSlots] = React.useState<any>([])
  console.log('timeSlots', timeSlots);
  const [timeSlotsfilter, settimeSlotsfilter] = React.useState<any>([])
  console.log('timeSlotsfilter', timeSlotsfilter);
  const [timingSlots, setTimingslots] = React.useState<any>([])
  console.log('timingSlots', timingSlots);
  const [SelectedTimingMultiSelect, setSelectedTimingMultiSelect] = React.useState<any>([])
  console.log('SelectedTimingMultiSelect', SelectedTimingMultiSelect);
  const [selectedCleaner, setCleaner] = React.useState('0')
  const [id, setId] = React.useState("")
  const [jobdetailssss, setjobdetails] = React.useState({})
  const [jobDetailsTimeSlot, setjobDetailsTimeSlot] = React.useState('')
  const [jobsiteid, setjobsiteid] = React.useState(0)
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const today = new Date();
  let firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1)).toString();
  let lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7)).toString();
  let FirstDate: any = MonthString.indexOf(firstDay.split(" ")[1])
  let lastDate: any = MonthString.indexOf(lastDay.split(" ")[1])
  let start = firstDay.split(" ")[3] + "-" + MonthNumber[FirstDate] + "-" + firstDay.split(" ")[2]
  let last = lastDay.split(" ")[3] + "-" + MonthNumber[lastDate] + "-" + lastDay.split(" ")[2]
  const [attendencedatefrom, setAttendencedatefrom] = React.useState<any>(start)
  const [attendencedateto, setAttendencedateto] = React.useState<any>(last)
  const [loading2, setloading2] = React.useState(false)
  const [trackStatus, setTrackStatus] = React.useState(false)
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const refreshAfterAssigning = useSelector((store: any) => store.ActivePaidSubscriptionReducer.cleanerAvailibiltyRoutes)
  const subscription_order_id = useSelector((store: any) => store.ActivePaidSubscriptionReducer.Assign_cleaner_id)
  React.useEffect(() => {
    let timeSlotsidfiltered = []
    for (let i = 0; i < SelectedTimingMultiSelect.length; i++) {
      timeSlotsidfiltered.push(SelectedTimingMultiSelect[i].value)
    }
    if (SelectedTimingMultiSelect.length != 0) {
      let arr = []
      for (let i = 0; i < timingSlots.length; i++) {
        let payload = {
          name: timingSlots[i]
        }
        arr.push(payload)
      }
      setTimeSlots(arr)
      setloading2(true)
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        subscriptionID: +paramsIDS?.id,
        timeslots: timeSlotsidfiltered || SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      axios
        .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        .then((response) => {
          console.log('response refresh', response);
          setDates(response.data.dates)
          settimeSlotsfilter(response.data.timeslots)
          setCleanerStats(response.data.data)
          setloading2(false)
          setTrackStatus(false)
        })
        .catch((error) => {
          setloading2(false)
        })
    }
  }, [refreshAfterAssigning])
  React.useEffect(() => {
    setLoading(true)
    const payloads = {
      fromDate: attendencedatefrom,
      toDate: attendencedateto,
      subscriptionID: +paramsIDS?.id,
      timeslots: [],
      distenceRadius: +distenceRadeus
    }
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
      .then((response) => {
        console.log('response paramsid', response);
        setDates(response.data.dates)
        settimeSlotsfilter(response.data.timeslots)
        setCleanerStats(response.data.data)
        setsubscriptionData(response.data.subscriptionData)
        const timing = response.data.subscriptionData.timeslot == "2" ? "06AM-07AM" :
          response.data.subscriptionData.timeslot == "22" ? "06AM-09AM"
            : response.data.subscriptionData.timeslot == "3" ? "07AM-08AM"
              : response.data.subscriptionData.timeslot == "4" ? "08AM-09AM"
                : response.data.subscriptionData.timeslot == "5" ? "09AM-109AM"
                  : response.data.subscriptionData.timeslot == "6" ? "10AM-11AM"
                    : response.data.subscriptionData.timeslot == "7" ? "11AM-12AM"
                      : response.data.subscriptionData.timeslot == "7" ? "12PM-01PM"
                        : response.data.subscriptionData.timeslot == "8" ? "01PM-02PM"
                          : response.data.subscriptionData.timeslot == "9" ? "02PM-03PM"
                            : response.data.subscriptionData.timeslot == "2" ? "03PM-04PM"
                              : response.data.subscriptionData.timeslot == "10" ? "04PM-05PM"
                                : response.data.subscriptionData.timeslot == "11" ? "05PM-06PM"
                                  : response.data.subscriptionData.timeslot == "12" ? "06PM-07PM"
                                    : ""
        // console.log('timing', timing);
        if (response.data.subscriptionData.timeslot === "") {
          setTimeSlots(response.data.timeslots)
        }
        else {
          setTimeSlots([{
            name: timing
          }])
          setTimingslots([timing])
          setSelectedTimingMultiSelect([{
            label: timing,
            track: "rendered",
            value: response.data.subscriptionData.timeslot
          }])
        }
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`)
      .then((response) => {
        setCleanerList(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
  }, [paramsIDS?.id])
  const handleFromDateChange = (e: any) => {
    setloading2(true)
    setTrackStatus(true)
    setAttendencedatefrom(e.target.value)
    setloading2(false)
  }
  const handleToDateChange = (e: any) => {
    setloading2(true)
    setTrackStatus(true)
    setAttendencedateto(e.target.value)
    setloading2(false)
  }
  const handleClick = () => {
    // console.log('SelectedTimingMultiSelect', SelectedTimingMultiSelect);
    let timeSlotsidfiltered = []
    for (let i = 0; i < SelectedTimingMultiSelect.length; i++) {
      timeSlotsidfiltered.push(SelectedTimingMultiSelect[i].value)
    }
    if (SelectedTimingMultiSelect.length != 0) {
      let arr = []
      for (let i = 0; i < timingSlots.length; i++) {
        let payload = {
          name: timingSlots[i]
        }
        arr.push(payload)
      }
      setTimeSlots(arr)
      setloading2(true)
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        subscriptionID: +paramsIDS?.id,
        timeslots: timeSlotsidfiltered || SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      axios
        .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        .then((response) => {
          setDates(response.data.dates)
          settimeSlotsfilter(response.data.timeslots)
          setCleanerStats(response.data.data)
          setloading2(false)
          setTrackStatus(false)
        })
        .catch((error) => {
          setloading2(false)
        })
    }
    else {
      setloading2(true)
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        subscriptionID: +paramsIDS?.id,
        timeslots: SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      axios
        .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        .then((response) => {
          setDates(response.data.dates)
          settimeSlotsfilter(response.data.timeslots)
          setCleanerStats(response.data.data)
          setsubscriptionData(response.data.subscriptionData)
          setloading2(false)
          setTimeSlots(response.data.timeslots)
        })
        .catch((error) => {
          setloading2(false)
        })
    }
  }
  const handleCleanerChange = (e: any) => {
    setloading2(true)
    setCleaner(e.target.value)
    const payload = {
      cleanerid: +e.target.value,
      fromData: attendencedatefrom,
      timeslots: SelectedTimingMultiSelect,
      toDate: attendencedateto,
      subscriptionID: +paramsIDS?.id,
      distenceRadius: +distenceRadeus
    }
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payload)
      .then((response) => {
        setCleanerStats(response.data.data)
        setloading2(false)
      })
      .catch((error) => {
        setloading2(false)
      })
  }
  const handleDistanceFormData = (e: any) => {
    setTrackStatus(true)
    setDistenceRadeus(e.target.value)
  }
  const handleJobDetailSubmit = (timeslot: any, timeslotSelected: any, jobsiteid: number) => {
    setjobdetails(timeslot)
    setjobDetailsTimeSlot(timeslotSelected)
    setjobsiteid(jobsiteid)
    setModalOpen(true)
  }
  const handleCleanerDetailsSubmit = (id: any) => {
    setId(id)
    setCleanerModelOpen(!isCleanerModelOpen)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const handleCloseModalCleaner = () => {
    setCleanerModelOpen(!isCleanerModelOpen)
  }
  if (isLoading) {
    return (
      <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
        <div className='spinner-border mr-15' role='status'></div>
        <h4 className='fw-bold mt-2'>Loading...</h4>
      </div>
    )
  }
  return (
    <>
      {!iscleanerpage && cleanerStats && (
        <div className='card  d-flex flex-row mb-1  justify-content-between position-sticky' style={{ top: "69px", zIndex: 99, height: "130px" }}>
          <div className='my-2'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Frequency :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.masterFrequency?.name} </span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Subscription Date :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.startdate} to {SubscriptionData?.enddate}  </span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Address  :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.jobsitename ? SubscriptionData?.jobsitename : "Individual"}  </span>
            </div>
          </div>
          <div className='my-2'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Customer Name:'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.name}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Customer phone:'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.phone}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Active Champ :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.activechamp?.first_name ? SubscriptionData?.activechamp?.first_name + SubscriptionData?.activechamp?.last_name : "No Name"} </span>
            </div>
          </div>
          <div className='my-2'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Time:'}</span>
              <span className='text-muted fs-5'><Timing SubscriptionData={SubscriptionData}></Timing></span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Cleaning:'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.fullcleaningday == "1" ? "Sunday" :
                SubscriptionData?.fullcleaningday == "1" ? "Sunday" :
                  SubscriptionData?.fullcleaningday == "2" ? "Monday" :
                    SubscriptionData?.fullcleaningday == "3" ? "Tuesday" :
                      SubscriptionData?.fullcleaningday == "4" ? "Wednesday" :
                        SubscriptionData?.fullcleaningday == "5" ? "Friday" :
                          SubscriptionData?.fullcleaningday == "6" ? "Saturday" :
                            "Not Availble"}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Package Name :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.packageDetail?.name} </span>
            </div>
          </div>
        </div>
      )}
      <div className='w-125 card d-flex mb-5 justify-content-around align-items-center flex-wrap px-3 position-sticky' style={{ height: "70px", top: "185px", zIndex: 100, }}>
        <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
          <span className='me-2' >
            <MultiSelect defaultVal={
              SubscriptionData?.timeslot == "2" ? "06AM-07AM"
                : SubscriptionData?.timeslot == "3" ? "07AM-08AM"
                  : SubscriptionData?.timeslot == "4" ? "08AM-09AM"
                    : SubscriptionData?.timeslot == "5" ? "09AM-109AM"
                      : SubscriptionData?.timeslot == "6" ? "10AM-11AM"
                        : SubscriptionData?.timeslot == "7" ? "11AM-12AM"
                          : SubscriptionData?.timeslot == "7" ? "12PM-01PM"
                            : SubscriptionData?.timeslot == "8" ? "01PM-02PM"
                              : SubscriptionData?.timeslot == "9" ? "02PM-03PM"
                                : SubscriptionData?.timeslot == "2" ? "03PM-04PM"
                                  : SubscriptionData?.timeslot == "10" ? "04PM-05PM"
                                    : SubscriptionData?.timeslot == "11" ? "05PM-06PM"
                                      : SubscriptionData?.timeslot == "12" ? "06PM-07PM"
                                        : ""
            } SelectedTimingMultiSelect={SelectedTimingMultiSelect} setSelectedTimingMultiSelect={setSelectedTimingMultiSelect} setTimingslots={setTimingslots} setTimeSlots={setTimeSlots} timeSlotsfilter={timeSlotsfilter}></MultiSelect>
          </span>
          <select
            className='form-select form-select-solid'
            onChange={handleCleanerChange}
            value={selectedCleaner}
          >
            <option value=''>Select Cleaner</option>
            {cleanerList?.map((item: any) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.first_name} {item.last_name}
                </option>
              )
            })}
          </select>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center mt-3'>
          <input
            type='number'
            className='form-control bg-secondary me-2 border'
            placeholder='0/km'
            onChange={handleDistanceFormData}
            value={distenceRadeus}
          />
          <input
            type='date'
            // onSelect={attendencedatefrom == }
            disabled={attendencedatefrom}
            className='form-select form-select-solid me-2'
            onChange={handleFromDateChange}
            value={attendencedatefrom}
          />
          <input
            type='date'
            className='form-select form-select-solid me-2'
            onChange={handleToDateChange}
            defaultValue={attendencedateto}
            value={attendencedateto}
          />
          <div>
            <button className='btn btn-sm btn-warning' onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='card'>
        {loading2 ? <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
          <div className='spinner-border mr-15' role='status'></div>
          <h4 className='fw-bold mt-2'>Loading...</h4>
        </div> :
          <div className='table-responsive px-3'>
            <table
              id='kt_table_users'
              className='table align-middle table-row-dashed fs-6 gy-3 dataTable no-footer'
            >
              <thead  >
                <tr  >
                  <th style={{ width: '130px' }}>
                    <div className='bg-secondary text-dark  p-2  text-center fw-bolder rounded'>
                      Cl Name
                    </div>
                  </th>
                  <th>
                    <div className='bg-secondary text-dark  p-2 text-center fw-bolder rounded'>
                      TimeSlots
                    </div>
                  </th>
                  {dates?.map((item: any) => (
                    <th key={item}>
                      <div
                        className='bg-secondary text-success  p-2 text-center fw-bolder rounded'
                        style={{ maxWidth: '120px', width: '100px' }}
                      >
                        {item}
                        <br />
                        {moment(item).format('dddd')}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              {
                SubscriptionData.timeslot === "6" ?
                  <h4 className=' mt-4 text-center mr-auto'>No Data</h4>
                  : cleanerStats && <CleanerTableBodyComponent
                    cleanerStats={cleanerStats}
                    timeSlots={timeSlots}
                    handleJobDetailSubmit={handleJobDetailSubmit} handleCleanerDetailsSubmit={handleCleanerDetailsSubmit}
                  />
              }
            </table>
          </div>
        }
        {
          isModalOpen && (
            <Dialog
              open={true}
              onClose={handleCloseModal}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <JobDetailsModal filteredData={jobdetailssss} jobsiteid={jobsiteid} jobDetailsTimeSlot={jobDetailsTimeSlot} data={data} handleCloseModal={handleCloseModal} />
            </Dialog>
          )
        }
        {
          isCleanerModelOpen && (
            <Dialog
              open={true}
              onClose={handleCloseModalCleaner}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <CleanerDetailsModel referece={urlEndPoint[urlEndPoint?.length - 2]} timeSlotsfilter={timeSlotsfilter} filteredCustomerData={SubscriptionData} timingdata={
                SubscriptionData?.timeslot == "2" ? { name: "06AM-07AM", id: "2" }
                  : SubscriptionData?.timeslot == "3" ? { name: "07AM-08AM", id: "3" }
                    : SubscriptionData?.timeslot == "4" ? { name: "08AM-09AM", id: "4" }
                      : SubscriptionData?.timeslot == "5" ? { name: "09AM-10AM", id: "5" }
                        : SubscriptionData?.timeslot == "6" ? { name: "10AM-11AM", id: "6" }
                          : SubscriptionData?.timeslot == "7" ? { name: "11AM-12AM", id: "7" }
                            : SubscriptionData?.timeslot == "8" ? { name: "12PM-01PM", id: "8" }
                              : SubscriptionData?.timeslot == "9" ? { name: "01PM-02PM", id: "9" }
                                : SubscriptionData?.timeslot == "10" ? { name: "02PM-03PM", id: "10" }
                                  : SubscriptionData?.timeslot == "11" ? { name: "03PM-04PM", id: "11" }
                                    : SubscriptionData?.timeslot == "12" ? { name: "04PM-05PM", id: "12" }
                                      : SubscriptionData?.timeslot == "13" ? { name: "05PM-06PM", id: "13" }
                                        : SubscriptionData?.timeslot == "14" ? { name: "06PM-07PM", id: "14" }
                                          : { name: "Not Availble", id: null }} id={id} subscription_order_id={subscription_order_id} data={data} handleCloseModalCleaner={handleCloseModalCleaner} CustomerDetails={SubscriptionData} />
            </Dialog>
          )
        }
      </div >
    </>
  )
}
export default CleanerAvailabilityRoute
