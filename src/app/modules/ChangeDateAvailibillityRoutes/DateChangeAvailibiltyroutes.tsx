import { Dialog } from '@mui/material';
import axios from 'axios';
import moment from "moment";
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally';
import { LocalBaseURL } from '../../../BaseURLmanagement';
import JobDetailsModal from '../cleaner/cleaner-items/JobDetailsModal';
import { getAvalabilitybySubscription, getAvalabilitybySubscriptionOnlcik, getCleanerList, getTimeslotsDataAPI } from './api';
import CleanerTableBodyComponent from './common/CleanerTableBodyComponent';
import MultiSelect from './common/MultiSelect';
const DateChangeAvailibiltyroutes = (props: {
  subscriptionId?: any
  distenceRadius?: string
  iscleanerpage?: boolean
}) => {
  const { iscleanerpage } = props
  const paramsIDS: any = useParams()
  const urlEndPoint = window.location.pathname.split("/")
  // console.log('urlEndPoint', urlEndPoint);
  let siteid = urlEndPoint[urlEndPoint.length - 6]
  // console.log('siteid', siteid);
  let servicetype = urlEndPoint[urlEndPoint.length - 5]
  // console.log('servicetype', servicetype);
  let attendencedate = urlEndPoint[urlEndPoint.length - 4]
  // console.log('attendencedate', attendencedate);
  let jobID = urlEndPoint[urlEndPoint.length - 3]
  // console.log('jobID', jobID);
  let cleanerid = urlEndPoint[urlEndPoint.length - 2]
  // console.log('cleanerid', cleanerid);
  let subscriptionid = urlEndPoint[urlEndPoint.length - 1]
  // console.log('subscriptionid', subscriptionid);
  LocalBaseURL()
  const refreshData = useSelector((store: any) => store?.DailyReAssignments?.DailyReAssigDateChange)
  const trackIDAssigningCanceled = useSelector((store: any) => store?.DailyReAssignments?.trackIDAssigningCanceled)
  console.log('trackIDAssigningCanceled', trackIDAssigningCanceled);
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [SubscriptionData, setsubscriptionData] = React.useState<any>([])
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(2)
  const [dates, setDates] = React.useState<any>([])
  const [toggle, setToggle] = React.useState<boolean>(false)
  const [cleanerList, setCleanerList] = React.useState([])
  const [timeSlots, setTimeSlots] = React.useState<any>([])
  const [timeSlotsfilter, settimeSlotsfilter] = React.useState([])
  const [SelectedTimingMultiSelect, setSelectedTimingMultiSelect] = React.useState<any>([])
  const [timingSlots, setTimingslots] = React.useState<any>([])
  const [selectedCleaner, setCleaner] = React.useState('0')
  const [id, setId] = React.useState('')
  const [jobDetailsTimeSlot, setjobDetailsTimeSlot] = React.useState('')
  const [jobsiteid, setjobsiteid] = React.useState(0)
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [jobDtailsCustomerData, setjobDtailsCustomerData] = React.useState({})
  const [isLoading, setLoading] = React.useState(false)
  const [attendencedatefrom, setAttendencedatefrom] = React.useState<any>(attendencedate)
  const [attendencedateto, setAttendencedateto] = React.useState<any>(moment(attendencedate).add(4, "days").format("YYYY-MM-DD"))
  const [loading2, setloading2] = React.useState(false)
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  React.useEffect(() => {
    setLoading(true)
    const payloads = {
      fromDate: attendencedatefrom,
      toDate: attendencedateto,
      subscriptionID: +subscriptionid,
      timeslots: SelectedTimingMultiSelect,
      distenceRadius: distenceRadeus
    }
    async function invoked() {
      const getAvalabilitybySubscriptiondata: any = await getAvalabilitybySubscription(localKeyCheck, payloads, setLoading)
      setDates(getAvalabilitybySubscriptiondata.data.dates)
      settimeSlotsfilter(getAvalabilitybySubscriptiondata.data.timeslots)
      let filterdataCleanerStats = getAvalabilitybySubscriptiondata?.data?.data?.filter((filter: any) => filter?.cleaner_details?.id == +cleanerid)
      let datasss = getAvalabilitybySubscriptiondata?.data?.data
      for (let i = 0; i < datasss.length; i++) {
        if (datasss[i].cleaner_details?.id !== +cleanerid) {
          filterdataCleanerStats.push(datasss[i])
        }
      }
      console.log('filterdataCleanerStats', filterdataCleanerStats);
      setCleanerStats(filterdataCleanerStats)
      setsubscriptionData(getAvalabilitybySubscriptiondata.data.subscriptionData)
      const gettimeslotsdata: any = await getTimeslotsDataAPI(localKeyCheck)
      setTimeSlots(gettimeslotsdata)
      const getCleanerListdata: any = await getCleanerList(localKeyCheck)
      setCleanerList(getCleanerListdata)
    }
    invoked()
    setToggle(!toggle)
  }, [refreshData])
  const handleFromDateChange = (e: any) => {
    setloading2(true)
    setAttendencedatefrom(e.target.value)
    setloading2(false)
  }
  const handleToDateChange = (e: any) => {
    setloading2(true)
    setAttendencedateto(e.target.value)
    setloading2(false)
  }
  const handleClick = async () => {
    setloading2(true)
    if (SelectedTimingMultiSelect.length != 0) {
      let arr = []
      for (let i = 0; i < timingSlots.length; i++) {
        let payload = {
          name: timingSlots[i]
        }
        arr.push(payload)
      }
      setTimeSlots(arr)
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        subscriptionID: +subscriptionid,
        timeslots: SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      setloading2(true)
      const invoked = async () => {
        const getAvalabilitybySubscriptiondata: any = await getAvalabilitybySubscriptionOnlcik(localKeyCheck, payloads, setloading2)
        setDates(getAvalabilitybySubscriptiondata.data.dates)
        settimeSlotsfilter(getAvalabilitybySubscriptiondata.data.timeslots)
        let filterdataCleanerStats = getAvalabilitybySubscriptiondata?.data?.data?.filter((filter: any) => filter?.cleaner_details?.id == +cleanerid)
        let datasss = getAvalabilitybySubscriptiondata?.data?.data
        for (let i = 0; i < datasss.length; i++) {
          if (datasss[i].cleaner_details?.id !== +cleanerid) {
            filterdataCleanerStats.push(datasss[i])
          }
        }
        console.log('filterdataCleanerStats', filterdataCleanerStats);
        setCleanerStats(filterdataCleanerStats)
        setsubscriptionData(getAvalabilitybySubscriptiondata.data.subscriptionData)
      }
      invoked()
    }
    else {
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        subscriptionID: +subscriptionid,
        timeslots: SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      setloading2(true)
      const invoked = async () => {
        const getAvalabilitybySubscriptiondata: any = await getAvalabilitybySubscriptionOnlcik(localKeyCheck, payloads, setloading2)
        setDates(getAvalabilitybySubscriptiondata.data.dates)
        settimeSlotsfilter(getAvalabilitybySubscriptiondata.data.timeslots)
        let filterdataCleanerStats = getAvalabilitybySubscriptiondata?.data?.data?.filter((filter: any) => filter?.cleaner_details?.id == +cleanerid)
        let datasss = getAvalabilitybySubscriptiondata?.data?.data
        for (let i = 0; i < datasss.length; i++) {
          if (datasss[i].cleaner_details?.id !== +cleanerid) {
            filterdataCleanerStats.push(datasss[i])
          }
        }
        console.log('filterdataCleanerStats', filterdataCleanerStats);
        setCleanerStats(filterdataCleanerStats)
        setsubscriptionData(getAvalabilitybySubscriptiondata.data.subscriptionData)
      }
      invoked()
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
      subscriptionID: +subscriptionid,
      distenceRadius: +distenceRadeus
    }
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payload)
      .then((response) => {
        setDates(response.data.dates)
        settimeSlotsfilter(response.data.timeslots)
        let filterdataCleanerStats = response?.data?.data?.filter((filter: any) => filter?.cleaner_details?.id == +cleanerid)
        let datasss = response?.data?.data
        for (let i = 0; i < datasss.length; i++) {
          if (datasss[i].cleaner_details?.id !== +cleanerid) {
            filterdataCleanerStats.push(datasss[i])
          }
        }
        setCleanerStats(filterdataCleanerStats)
        setsubscriptionData(response.data.subscriptionData)
        setloading2(false)
      })
      .catch((error) => {
        setloading2(false)
      })
  }
  const handleDistanceFormData = (e: any) => {
    setDistenceRadeus(e.target.value)
  }
  const handleJobDetailSubmit = (timeslot: any, timeslotSelected: any, jobsiteid: number) => {
    setjobDtailsCustomerData(timeslot)
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
        <div className='card mb-3 d-flex flex-row   p-3 justify-content-between position-sticky' style={{ top: "66px", zIndex: 99, paddingTop: "-55" }}>
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
              <span className='fw-bolder fs-5 me-1'>{'Active Champ :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.activechamp?.first_name
                ? SubscriptionData?.activechamp?.first_name + SubscriptionData?.activechamp?.last_name : "No Name"} </span>
            </div>
            <div className='d-flex'>
              <span className='badge badge-primary fs-8 fw-bold me-2'>{'Csutomer Address Details  :'}</span>
              <span className='badge badge-light-success fs-8 fw-bold me-2 fs-5'>{SubscriptionData?.jobsitename ? SubscriptionData?.jobsitename : "Individual"}  </span>
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
              <span className='fw-bolder fs-5 me-1'>{'Package Name :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.packageDetail?.name} </span>
            </div>
            <div className='d-flex'>
              <span className='badge badge-primary fs-8 fw-bold me-2'>{'Date Change Details : '}</span>
              <span className='badge badge-light-danger fs-8 fw-bold me-2'> {attendencedate} </span>
              <span className='badge badge-light-success fs-8 fw-bold me-2'> {siteid === "1" ? "Society" : "Individual"} </span>
              <span className='badge badge-light-primary fs-8 fw-bold '>  {servicetype === "1" ? "Exterior" : "Full Cleaning"}</span>
            </div>
          </div>
          <div className='my-2'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Time:'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.timeslot == "2" ? "06AM-07AM"
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
                                        : "Not Availble"}</span>
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
        
            
          </div>
        </div>
      )}
      <div className='card position-sticky mb-5' style={{ height: "70px", top: "168px", zIndex: 100, width: "100%" }}>
        <div className='d-flex justify-content-around align-items-center flex-wrap px-3 ' >
          <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
            <span className='me-2' >
              <MultiSelect setSelectedTimingMultiSelect={setSelectedTimingMultiSelect} setTimingslots={setTimingslots} timeSlotsfilter={timeSlotsfilter}></MultiSelect>
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
      </div>
      <br />
      <div className='card'>
        {loading2 ?
          <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
            <div className='spinner-border mr-15' role='status'></div>
            <h4 className='fw-bold mt-2'>Loading...</h4>
          </div> :
          <div className='table-responsive px-3'>
            <table
              id='kt_table_users'
              className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
            >
              <thead>
                <tr>
                  <th style={{ width: '130px' }}>
                    <div className='bg-secondary text-dark py-2 me-2 text-center fw-bolder rounded'>
                      Cl Name
                    </div>
                  </th>
                  <th>
                    <div className='bg-secondary text-dark py-2 me-2 text-center fw-bolder rounded'>
                      TimeSlots
                    </div>
                  </th>
                  {dates?.map((item: any) => (
                    <th key={item}>
                      <div
                        className='bg-secondary text-success py-2  gy-5  text-center fw-bolder rounded'
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
                cleanerStats && <CleanerTableBodyComponent
                  cleanerStats={cleanerStats}
                  timeSlots={timeSlots}
                  jobID={jobID}
                  handleJobDetailSubmit={handleJobDetailSubmit} handleCleanerDetailsSubmit={handleCleanerDetailsSubmit}
                  toggle={toggle}
                  trackIDAssigningCanceled={trackIDAssigningCanceled}
                />
              }
            </table>
          </div>
        }
        {isModalOpen && (
          <Dialog
            open={true}
            onClose={handleCloseModal}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <JobDetailsModal filteredData={jobDtailsCustomerData} refrencsss={"datechange"} jobsiteid={jobsiteid} jobDetailsTimeSlot={jobDetailsTimeSlot} data={data} handleCloseModal={handleCloseModal} />
          </Dialog>
        )}
        {/* {isCleanerModelOpen && (
          <Dialog
            open={true}
            onClose={handleCloseModalCleaner}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <CleanerDetailsModel referece={referece} timeSlotsfilter={timeSlotsfilter} filteredCustomerData={filteredData} id={id} subscription_order_id={subscription_order_id} data={data} handleCloseModalCleaner={handleCloseModalCleaner} CustomerDetails={filteredData} />
          </Dialog>
        )} */}
      </div>
    </>
  )
}
export default DateChangeAvailibiltyroutes
