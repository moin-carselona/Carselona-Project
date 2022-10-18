import { Dialog } from '@mui/material'
import axios from 'axios'
import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import { useTable } from 'react-table'
import { cleanerJobColumns } from '../apps/user-management/users-list/table/columns/_cleanerJobColumns'
import { adminBaseCleanerAvailibilityURL } from './api'
import CleanerDetailsModel from './cleaner-items/CleanerDetailsModel'
import JobDetailsModal from './cleaner-items/JobDetailsModal'
import CleanerTableBodyComponent from './common/CleanerTableBodyComponent'
const CleanerAvailabilityRoute = (props: {
  subscriptionId?: any
  distenceRadius?: string
  iscleanerpage?: boolean
}) => {
  const { subscriptionId, distenceRadius, iscleanerpage } = props
  const { state }: any = useLocation()
  const { filteredData = {} } = state || {}
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  // console.log('cleanerStats', cleanerStats);
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(3)
  // console.log('distenceRadeus', distenceRadeus);
  const [dates, setDates] = React.useState<any>([])
  const [superVisor, setSuperVisor] = React.useState([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [timeSlots, setTimeSlots] = React.useState([])
  const [selectedCleaner, setCleaner] = React.useState('0')
  const [selectedSupervisor, setSelectedSupervisor] = React.useState('')
  const [id, setId] = React.useState('')
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const [countData, setCountData] = React.useState<any>(Object)
  const [attendencedatefrom, setAttendencedatefrom] = React.useState('2022-08-29')
  const [attendencedateto, setAttendencedateto] = React.useState('2022-09-03')
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const columns = useMemo(() => cleanerJobColumns, [])
  const AminBaseURL = adminBaseCleanerAvailibilityURL  // base url present in api.tsx file inside cleaner folder
  // const API = "https://adminapi.carselonadaily.com/api/admin/getCleanerWeekTimeSlots"
  // const API = "https://adminapi.carselonadaily.com/api/admin/getactivecleanerbycity"
  // ?start=0&length=10&attendencedatefrom=2022-08-26&attendencedateto=2022-08-26
  React.useEffect(() => {
    // console.log('distenceRadius', distenceRadeus);
    setLoading(true)
    const formData = new FormData()
    // formData.append("city", "6");
    // selectedCleaner
    // formData.append("cleanerid", "0");
    formData.append('fromDate', attendencedatefrom)
    formData.append('toDate', attendencedateto)
    formData.append('subscriptionID', subscriptionId)
    distenceRadius
      ? formData.append('distenceRadius', distenceRadeus)
      : formData.delete('distenceRadius')
    axios
      .post(`${AminBaseURL}/admin/getAvalabilitybySubscription`, formData)
      .then((response) => {
        setDates(response.data.dates)
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
    axios
      .get(`${AminBaseURL}/admin/gettimeslots`)
      .then((response) => {
        setTimeSlots(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get(`${AminBaseURL}/admin/getsociety`)
      .then((response) => {
        setSuperVisor(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
    axios
      .get(`${AminBaseURL}/admin/getCleanerList`)
      .then((response) => {
        setCleanerList(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
  }, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  const handleFromDateChange = (e: any) => {
    setAttendencedatefrom(e.target.value)
  }
  const handleToDateChange = (e: any) => {
    setAttendencedateto(e.target.value)
  }
  const handleClick = () => {
    // console.log('dates', dates);
    const formData = new FormData()
    // formData.append("city", "6");
    // formData.append("cleanerid", selectedCleaner);
    formData.append('fromDate', attendencedatefrom)
    formData.append('toDate', attendencedateto)
    formData.append('subscriptionID', subscriptionId)
    distenceRadius
      ? formData.append('distenceRadius', distenceRadeus)
      : formData.delete('distenceRadius')
    // const payload = {
    //     city: 6,
    //     cleanerid: selectedCleaner,
    //     fromDate: attendencedatefrom,
    //     toDate: attendencedateto
    // }
    setLoading(true)
    axios
      .post(`${AminBaseURL}/admin/getAvalabilitybySubscription`, formData)
      .then((response) => {
        console.log('response', response);
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setDates(response.data.dates)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
    // console.log('dates 2', dates);
  }
  const handleSupervisorChange = (e: any) => {
    setLoading(true)
    // const formData = new FormData();
    // formData.append("city", "6");
    // formData.append("cleanerid", e.target.value);
    // formData.append("fromDate", attendencedatefrom);
    // formData.append("toDate", attendencedateto);
    setSelectedSupervisor(e.target.value)
    const payload = {
      city: 6,
      cleanerid: '0',
      fromData: attendencedatefrom,
      toDate: attendencedateto,
      societyid: e.target.value,
    }
    axios
      .post(`${AminBaseURL}/admin/getAvalabilitybySubscription`, payload)
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
  }
  const handleCleanerChange = (e: any) => {
    setLoading(true)
    // const formData = new FormData();
    // formData.append("city", "6");
    // formData.append("cleanerid", "0");
    // formData.append("fromDate", attendencedatefrom);
    // formData.append("toDate", attendencedateto);
    // formData.append("societyid", e.target.value)
    setCleaner(e.target.value)
    const payload = {
      city: 6,
      cleanerid: e.target.value,
      fromData: attendencedatefrom,
      toDate: attendencedateto,
      societyid: selectedSupervisor,
    }
    axios
      .post(`${AminBaseURL}/admin/getAvalabilitybySubscription`, payload)
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
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
      {!iscleanerpage && (
        <div className='card mb-3 d-flex flex-row  justify-content-between position-sticky' style={{ top: "117px", zIndex: 99 }}>
          <div className='my-2'>
            <div className='me-1 my-2'>
              <span className='bg-secondary fw-bolder fs-3 rounded p-1'>
                {filteredData?.frequencyname}
              </span>
            </div>
            <div className='d-flex'>
              <span className='text-muted fs-5 me-1'>{filteredData?.startdate}</span>
              <span className='text-muted fs-5 me-1'>To</span>
              <span className='text-muted fs-5'>{filteredData?.enddate}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Payment Date:'}</span>
              <span className='text-muted fs-5'>{filteredData?.paymentdate}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Price:'}</span>
              <span className='text-muted fs-5'>{filteredData?.cleanerprice}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Payment Method:'}</span>
              <span className='text-muted fs-5'>{filteredData?.payment_mode}</span>
            </div>
          </div>
          <div className='my-2'>
            <div className='me-1 my-2'>
              <span className='bg-secondary fw-bolder fs-3 rounded p-1'>Cleaner</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Cleaner Name:'}</span>
              <span className='text-muted fs-5'>{filteredData?.name}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Cleaner phone:'}</span>
              <span className='text-muted fs-5'>{filteredData?.phone}</span>
            </div>
          </div>
          <div className='my-2'>
            <div className='me-1 my-2'>
              <span className='bg-secondary fw-bolder fs-3 rounded p-1'>TimeSlot</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Time:'}</span>
              <span className='text-muted fs-5'>{filteredData?.timeslotname}</span>
            </div>
            <span className='text-muted fs-5'>{filteredData?.frequencyname}</span>
          </div>
        </div>
      )}
      <div className='card'>
        <div className='d-flex mb-3 justify-content-around align-items-center flex-wrap px-3'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
            <select
              className='form-select form-select-solid me-2'
              onChange={handleSupervisorChange}
              value={selectedSupervisor}
            >
              <option value=''>Select Society</option>
              {superVisor?.map((item: any) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                )
              })}
            </select>
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
              value={attendencedateto}
            />
            <div>
              <button className='btn btn-sm btn-warning' onClick={handleClick}>
                Search
              </button>
            </div>
          </div>
        </div>
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
                      className='bg-secondary text-success py-2 me-1 text-center fw-bolder rounded'
                      style={{ maxWidth: '230px', width: '140px' }}
                    >
                      {item}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <CleanerTableBodyComponent
              cleanerStats={cleanerStats}
              timeSlots={timeSlots}
              handleJobDetailSubmit={handleJobDetailSubmit} handleCleanerDetailsSubmit={handleCleanerDetailsSubmit}
            />
          </table>
        </div>
        {isModalOpen && (
          <Dialog
            open={true}
            onClose={handleCloseModal}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <JobDetailsModal id={id} data={data} handleCloseModal={handleCloseModal} />
          </Dialog>
        )}
        {isCleanerModelOpen && (
          <Dialog
            open={true}
            onClose={handleCloseModalCleaner}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <CleanerDetailsModel id={id} data={data} handleCloseModalCleaner={handleCloseModalCleaner} />
          </Dialog>
        )}
      </div>
    </>
  )
}
export default CleanerAvailabilityRoute
