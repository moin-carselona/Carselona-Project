import { Dialog } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useMemo } from 'react'
import moment from "moment";
import { useLocation, useParams } from 'react-router'
import MultiSelect from './common/MultiSelect'
import { useSelector } from 'react-redux';
import { MonthString, MonthNumber } from './Months';
import { LocalBaseURL } from '../../../BaseURLmanagement';
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally';
import CleanerTableBodyComponent from './common/CleanerTableBodyComponent';
import JobDetailsModal from '../cleaner/cleaner-items/JobDetailsModal';
import { ChampsData } from './Interfaces';
import { TimingValue } from './TimingReturn';
import { Height } from '@mui/icons-material';
const ChampAvailabilityRoute = (props: {
  subscriptionId?: any
  distenceRadius?: string
  iscleanerpage?: boolean
}) => {
  const { } = props
  const paramsIDS: any = useParams()
  const urlEndPoint = window.location.pathname.split("/")
  let referece = urlEndPoint[urlEndPoint?.length - 2]
  const ReAssignmentDaily = useSelector((store: any) => store?.DailyReAssignments?.DailyReAssign)
  LocalBaseURL()
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(1)
  const [SubsrciptioDatas, SetSubsrciptioData] = React.useState<any>({})
  const [dates, setDates] = React.useState<any>([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [timeSlots, setTimeSlots] = React.useState<any>([])
  const [timeSlotsfilter, settimeSlotsfilter] = React.useState<any>([])
  const [timingSlots, setTimingslots] = React.useState<any>([])
  const [SelectedTimingMultiSelect, setSelectedTimingMultiSelect] = React.useState<any>([])
  const [selectedCleaner, setCleaner] = React.useState('0')
  const [id, setId] = React.useState('')
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const [loading2, setloading2] = React.useState(false)
  const [CustomerListData, SetCustomerListData] = React.useState<any>([])
  const today = new Date();
  let firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1)).toString();
  let lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7)).toString();
  let FirstDate: any = MonthString.indexOf(firstDay.split(" ")[1])
  let lastDate: any = MonthString.indexOf(lastDay.split(" ")[1])
  let start = firstDay.split(" ")[3] + "-" + MonthNumber[FirstDate] + "-" + firstDay.split(" ")[2]
  let last = lastDay.split(" ")[3] + "-" + MonthNumber[lastDate] + "-" + lastDay.split(" ")[2]
  const [attendencedatefrom, setAttendencedatefrom] = React.useState<any>(start)
  const [attendencedateto, setAttendencedateto] = React.useState<any>(last)
  const [Subscriptionsid, setSubscriptionsid] = React.useState<number>(0)
  const [defaultTimings, SetdefaultTimings] = React.useState<string>("")
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const handleFetchAvailableCleaner = (subscriptionIDs: number, dafultTiming: string) => {
    setSubscriptionsid(subscriptionIDs)
    SetdefaultTimings(dafultTiming)
  }
  React.useEffect(() => {
    // TimingValue()
    setLoading(true)
    const payloads = {
      cleanerid: referece == "active_assigned" ? paramsIDS?.cleanerid : referece == "active_assigned" ? paramsIDS?.cleanerid : paramsIDS?.id,
    }
    // if (CustomerListData.length == 0) {
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getXCleanerCustomers`, payloads)
      .then((response) => {
        console.log('response', response);
        SetCustomerListData(response?.data?.data)
        SetSubsrciptioData(response?.data?.subscriptionData)
        setCleanerStats([])
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
    // }
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
      .then((response) => {
        setTimeSlots(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`)
      .then((response) => {
        setCleanerList(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
    if (referece == "active_assigned" ? paramsIDS?.id : paramsIDS?.id) {
      setLoading(false)
    }
  }, [ReAssignmentDaily])
  // useEffect  
  React.useEffect(() => {
    let timing = TimingValue(defaultTimings)[1]
    let arr = []
    let payload = {
      name: TimingValue(defaultTimings)[1]
    }
    arr.push(payload)
    setloading2(true)
    setTimeSlots(arr)
    // setloading2(true)
    const payloads = {
      fromDate: attendencedatefrom,
      toDate: attendencedateto,
      subscriptionID: Subscriptionsid,
      timeslots: [+TimingValue(defaultTimings)[0]],
      distenceRadius: +distenceRadeus
    }
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
      .then((response) => {
        console.log('response params id', response);
        setDates(response.data.dates)
        settimeSlotsfilter(response.data.timeslots)
        setCleanerStats(response.data.data)
        // setTimeSlots([{
        //   name: timing
        // }])
        // setSelectedTimingMultiSelect([{
        //   label: timing,
        //   track: "rendered", 
        //   value : +response.data.subscriptionData.timeslot
        // }])

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
        setloading2(false)
        // setLoading(false)
      })
      .catch((error) => {
        // setLoading(false)
        setloading2(false)
      })
    !Subscriptionsid && setloading2(false)
  }, [Subscriptionsid, defaultTimings])
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
  const handleClick = () => {
    setloading2(true)
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
      console.log('arr', arr);
      setTimeSlots(arr)
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        subscriptionID: +Subscriptionsid,
        timeslots: timeSlotsidfiltered || SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      axios
        .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        .then((response) => {
          console.log('response not empty array ', response);
          setDates(response.data.dates)
          settimeSlotsfilter(response.data.timeslots)
          setCleanerStats(response.data.data)
          setloading2(false)
          // setLoading(false)
        })
        .catch((error) => {
          // setLoading(false)
          setloading2(false)
        })
    }
    else {
      // setloading2(true)
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        subscriptionID: +Subscriptionsid,
        timeslots: [],
        distenceRadius: +distenceRadeus
      }
      axios
        .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        .then((response) => {
          console.log('response empty array', response);
          setDates(response.data.dates)
          settimeSlotsfilter(response.data.timeslots)
          setCleanerStats(response.data.data)
          setTimeSlots(response.data.timeslots)

          setloading2(false)
          // setLoading(false)
        })
        .catch((error) => {
          // setLoading(false)
          setloading2(false)
        })
      // axios
      //   .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
      //   .then((response) => {
      //     setTimeSlots(response.data.data)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
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
      subscriptionID: Subscriptionsid,
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
    setDistenceRadeus(e.target.value)
  }
  const handleJobDetailSubmit = (id: any) => {
    setId(id)
    setModalOpen(true)
  }
  const handleCleanerDetailsSubmit = (id: any) => {
    setId(id)
    setCleanerModelOpen(!isCleanerModelOpen)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
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
      {/* <div className="card mr-2 p-2   d-flex flex-row align-items-center  mb-2 justify-content-between position-sticky flex-wrap" >
        <div className={`badge text-black  fw-bolder-800 cursor-pointer me-lg-1 mb-1`} > Name : {filteredData?.first_name} {filteredData?.last_name}</div>
        <div className={`badge text-black  fw-bolder cursor-pointer me-lg-1 mb-1`} >Phone : {filteredData?.phone}</div>
        <div className={`badge text-black  fw-bolder cursor-pointer me-lg-1 mb-1`} >Email : {filteredData?.email}</div>
      </div> */}
      {CustomerListData && (
        <div className='card  p-3 d-flex flex-row align-items-center   justify-content-center position-sticky flex-wrap' style={{ top: "69px", zIndex: 99, }}>
          {/* customer  */}
          <div className="container-fluid  d-flex scrollmenu p-3" style={{ overflow: "auto", overflowY: "hidden", scrollBehavior: 'smooth' }}>
            {
              CustomerListData?.map((customerlist: ChampsData, index: number) => {
                return (
                  <div className="card  me-10 min-w-25 "  >
                    <div onClick={() => handleFetchAvailableCleaner(customerlist?.id, customerlist?.timeslot)} className={`card d-flex flex-column w-100 justify-content-center align-items-start mr-auto  me-2 mb-3 ml-2 bg-${Subscriptionsid === customerlist?.id ? "warning" : ""} col-3`} style={{ boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px" }} >
                      <div className={`badge text-black text-center fw-bolder cursor-pointer me-lg-1 mb-1`}  >
                        {customerlist?.name}
                      </div>
                      <div className={`badge text-black text-center fw-bolder cursor-pointer me-lg-1 mb-1`}  >
                        {+customerlist?.timeslot == 2 ? "06AM-07AM" : +customerlist?.timeslot == 3 ? "07AM-08AM" : +customerlist?.timeslot == 4 ? "08AM-09AM" : +customerlist?.timeslot == 5 ? "09AM-10AM" : +customerlist?.timeslot == 6 ? "10AM-11AM" : +customerlist?.timeslot == 7 ? "11AM-12PM" : +customerlist?.timeslot == 8 ? "12PM-01PM" : +customerlist?.timeslot == 9 ? "01PM-02PM" : +customerlist?.timeslot == 10 ? "02PM-03PM" : !customerlist?.timeslot ? "Not Mentioned" : ""}
                      </div>
                      <div className={`badge text-black text-center fw-bolder cursor-pointer me-lg-1 mb-1`}  >
                        {+customerlist?.fullcleaningday == 1 ? "Sunday" : +customerlist?.fullcleaningday == 2 ? "Monday" : +customerlist?.fullcleaningday == 3 ? "Tuesday" : +customerlist?.fullcleaningday == 4 ? "Wednesday" : +customerlist?.fullcleaningday == 5 ? "Friday" : +customerlist?.fullcleaningday == 6 ? "Saturday" : ""}
                      </div>
                      <div className={`badge text-black text-center fw-bolder cursor-pointer me-lg-1 mb-1`}  >
                        {customerlist?.jobsitename ? customerlist?.jobsitename : "Individual"}
                      </div>
                      <div className={`badge text-black  fw-bolder cursor-pointer me-lg-1 mb-1`} >
                        {customerlist?.phone}  -  (<div className={`badge badge-light-${customerlist?.frequencyid == 1 ? "success" : customerlist?.frequencyid == 2 ? "warning" : customerlist?.frequencyid == 3 ? "danger" : customerlist?.frequencyid == 4 ? "primary" : "primary"} fw-bolder cursor-pointer me-lg-1`} >
                          {customerlist?.frequencyid == 1 ? (("A")) : customerlist?.frequencyid == 2 ? ("W") : customerlist?.frequencyid == 3 ? ("D") : customerlist?.frequencyid == 4 ? ("OT") : "No Frquency Available"}
                        </div>)
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )}
      <div className="card  position-sticky" style={{ top: "249px", zIndex: 99, }} >
        <div className='d-flex justify-content-around align-items-center flex-wrap px-3 mb-2   ' >
          <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
            <span className='me-2' >
              <MultiSelect defaultVal={TimingValue(defaultTimings)[1]} SelectedTimingMultiSelect={SelectedTimingMultiSelect} setSelectedTimingMultiSelect={setSelectedTimingMultiSelect} setTimingslots={setTimingslots} setTimeSlots={setTimeSlots} timeSlotsfilter={timeSlotsfilter} ></MultiSelect>
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
   
      {
        loading2 ?
          <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
            <div className='spinner-border mr-15' role='status'></div>
            <h4 className='fw-bold mt-2'>Loading...</h4>
          </div>
          :
          <div className='card'>
            {
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
                      subscriptionid={Subscriptionsid}
                      handleJobDetailSubmit={handleJobDetailSubmit} handleCleanerDetailsSubmit={handleCleanerDetailsSubmit}
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
                <JobDetailsModal filteredData={id} data={data} handleCloseModal={handleCloseModal} />
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
      }
    </>
  )
}
export default ChampAvailabilityRoute
