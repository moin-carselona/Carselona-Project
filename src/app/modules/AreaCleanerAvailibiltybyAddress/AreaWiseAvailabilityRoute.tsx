import { Dialog } from '@mui/material'
import axios from 'axios'
import React, { useMemo } from 'react'
import moment from "moment";
import { toast } from 'react-toastify'
import { useLocation } from 'react-router'
import { useTable } from 'react-table'
import { cleanerJobColumns } from '../apps/user-management/users-list/table/columns/_cleanerJobColumns'
// import { adminBaseCleanerAvailibilityURL } from './api'
// import CleanerDetailsModel from './cleaner-items/CleanerDetailsModel'
// import JobDetailsModal from './cleaner-items/JobDetailsModal'
// import CleanerTableBodyComponent from './common/CleanerTableBodyComponent'
import MultiSelect from './common/MultiSelect'
import { useSelector } from 'react-redux';
import { MonthString, MonthNumber } from './Months';
import { LocalBaseURL } from '../../../BaseURLmanagement';
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally';
import { adminBaseCleanerAvailibilityURL } from '../cleaner/api';
import CleanerTableBodyComponent from './common/CleanerTableBodyComponent';
import GoogleAutocompleteAddress from './GoogleAutocompleteAddress/GoogleAutocompleteAddress';
const AreaWiseAvailabilityRoute = (props: {
  subscriptionId?: any
  distenceRadius?: string
  iscleanerpage?: boolean
}) => {
  const { subscriptionId, distenceRadius, iscleanerpage } = props
  const { state }: any = useLocation()
  const { filteredData = {}, referece } = state || {}
  LocalBaseURL()
  console.log('referece', referece);
  // console.log('filteredData', filteredData);
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [SubscriptionData, setsubscriptionData] = React.useState<any>([])
  // console.log('cleanerStats', cleanerStats);
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(1)
  const [dates, setDates] = React.useState<any>([])
  // console.log('dates', dates);
  const [empty] = React.useState<any>([])
  const [superVisor, setSuperVisor] = React.useState([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [timeSlots, setTimeSlots] = React.useState<any>([])
  const [timeSlotsfilter, settimeSlotsfilter] = React.useState([])
  const [SelectedTimingMultiSelect, setSelectedTimingMultiSelect] = React.useState<any>([])
  console.log('SelectedTimingMultiSelect', SelectedTimingMultiSelect);
  const [timingSlots, setTimingslots] = React.useState<any>([])
  // console.log('SelectedTimingMultiSelect', SelectedTimingMultiSelect);
  const [selectedCleaner, setCleaner] = React.useState('0')
  // const [selectedSupervisor, setSelectedTiming] = React.useState('')
  const [id, setId] = React.useState('')
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const [countData, setCountData] = React.useState<any>(Object)
  const today = new Date();
  let firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1)).toString();
  let lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7)).toString();
  // console.log('lastDay', lastDay);
  let FirstDate: any = MonthString.indexOf(firstDay.split(" ")[1])
  let lastDate: any = MonthString.indexOf(lastDay.split(" ")[1])
  let start = firstDay.split(" ")[3] + "-" + MonthNumber[FirstDate] + "-" + firstDay.split(" ")[2]
  // console.log('start', start);
  let last = lastDay.split(" ")[3] + "-" + MonthNumber[lastDate] + "-" + lastDay.split(" ")[2]
  const [attendencedatefrom, setAttendencedatefrom] = React.useState<any>(start)
  // console.log('attendencedatefrom', attendencedatefrom);
  const [attendencedateto, setAttendencedateto] = React.useState<any>(last)
  const [address, SetAddress] = React.useState<any>({})
  const [Latitude, SetLatitude] = React.useState<any>("")
  console.log('latitude add ==== from ===> area wise', Latitude);
  const [Longitude, SetLongitude] = React.useState<any>("")
  console.log('Longitude add ===== from areawise ', Longitude);
  // console.log('attendencedateto', attendencedateto);
  const [loading2, setloading2] = React.useState(false)
  const [trackStatus, setTrackStatus] = React.useState(false)
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const columns = useMemo(() => cleanerJobColumns, [cleanerJobColumns])
  const reference = useMemo(() => referece, [referece])
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  console.log('reference', reference);
  const AminBaseURL = adminBaseCleanerAvailibilityURL  // base url present in api.tsx file inside cleaner folder
  const subscription_order_id = useSelector((store: any) => store.ActivePaidSubscriptionReducer.Assign_cleaner_id)
  // console.log('subscription_order_id', subscription_order_id);
  React.useEffect(() => {
    setLoading(true)
    const payloads = {
      fromDate: attendencedatefrom,
      toDate: attendencedateto,
      // subscriptionID: 22896,
      latitude: Latitude,
      longitude: Longitude,
      timeslots: empty || SelectedTimingMultiSelect,
      distenceRadius: +distenceRadeus
    }
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyAddress`, payloads)
      .then((response) => {
        setDates(response.data.dates)
        settimeSlotsfilter(response.data.timeslots)
        setCleanerStats(response.data.data)
        setsubscriptionData(response.data.subscriptionData)
        setCountData(response.data.countData)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
      .then((response) => {
        setTimeSlots(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getsociety`)
      .then((response) => {
        setSuperVisor(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`)
      .then((response) => {
        setCleanerList(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
  }, [])
  React.useEffect(() => {
    setloading2(true)
    const payloads = {
      fromDate: attendencedatefrom,
      toDate: attendencedateto,
      // subscriptionID: 22896,
      latitude: Latitude,
      longitude: Longitude,
      timeslots:  SelectedTimingMultiSelect,
      distenceRadius: +distenceRadeus
    }
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyAddress`, payloads)
      .then((response) => {
        setDates(response.data.dates)
        settimeSlotsfilter(response.data.timeslots)
        setCleanerStats(response.data.data)
        setsubscriptionData(response.data.subscriptionData)
        setCountData(response.data.countData)
        setloading2(false)
      })
      .catch((error) => {
        setloading2(false)
      })
  }, [Latitude])
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
    console.log('SelectedTimingMultiSelect', SelectedTimingMultiSelect);
    if (!trackStatus && timeSlotsfilter.length != 0) {
      toast.error("Already Ckecked Plz Select field")
    }
    else {
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
        // subscriptionID: 22896,
        latitude: Latitude,
        longitude: Longitude,
        timeslots:  SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      axios
        .post(`${AminBaseURL}/admin/getAvalabilitybySubscription`, payloads)
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
  }
  const handleCleanerChange = (e: any) => {
    setloading2(true)
    setCleaner(e.target.value)
    const payload = {
      fromDate: attendencedatefrom,
      toDate: attendencedateto,
      // subscriptionID: 22896,
      latitude: Latitude,
      longitude: Longitude,
      timeslots:  SelectedTimingMultiSelect,
      distenceRadius: +distenceRadeus
    }
    axios
      .post(`${AminBaseURL}/admin/getAvalabilitybySubscription`, payload)
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
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
      {!iscleanerpage && cleanerStats && ""
        // <div className='card  p-3 d-flex flex-row align-items-center  justify-content-between position-sticky flex-wrap' style={{ top: "117px", zIndex: 99 }}>
        //   <div className='  card d-flex flex-column justify-content-center align-items-start me-2 mb-3 ml-2 bg-secondary'>
        //     <div className='badge text-black  fw-bolder cursor-pointer me-lg-1 mb-1' >
        //       alok Kumar
        //     </div>
        //     <div className='badge text-black  fw-bolder cursor-pointer me-lg-1 mb-1' >
        //       Full Cleaning Day
        //     </div>
        //     <div className='badge text-black  fw-bolder cursor-pointer me-lg-1 mb-1' >
        //       88094485848
        //     </div>
        //   </div>
        // </div>
      }
      <div className='card'>
        <div className='d-flex mb-3 justify-content-around align-items-center flex-wrap px-3'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
            <span className='me-2' >
              <MultiSelect setSelectedTimingMultiSelect={setSelectedTimingMultiSelect} setTrackStatus={setTrackStatus} setTimingslots={setTimingslots} timeSlotsfilter={timeSlotsfilter}></MultiSelect>
            </span>
            {/* google auto complet    */}
            <GoogleAutocompleteAddress SetAddress={SetAddress} SetLatitude={SetLatitude} SetLongitude={SetLongitude}></GoogleAutocompleteAddress>
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
        {loading2 ? <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
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
                  handleJobDetailSubmit={handleJobDetailSubmit} handleCleanerDetailsSubmit={handleCleanerDetailsSubmit}
                />
              }
            </table>
          </div>
        }
        {/* {isModalOpen && (
          <Dialog
            open={true}
            onClose={handleCloseModal}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <JobDetailsModal id={id} data={data} handleCloseModal={handleCloseModal} />
          </Dialog>
        )} */}
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
export default AreaWiseAvailabilityRoute