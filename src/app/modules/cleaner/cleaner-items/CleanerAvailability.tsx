import { Dialog } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useMemo } from 'react'
import { useTable } from 'react-table'
import { ID } from '../../../../_metronic/helpers'
import { cleanerJobColumns } from '../../apps/user-management/users-list/table/columns/_cleanerJobColumns'
import CleanerTableBodyComponent from '../common/CleanerTableBodyComponent'
import JobDetailsModal from './JobDetailsModal'
const CleanerAvailability = (props: {
  subscriptionId?: any
  distenceRadius?: string
  handleCloseIconModal?: () => void
}) => {
  const { subscriptionId, distenceRadius, handleCloseIconModal } = props
  // console.log('distenceRadius', distenceRadius);
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [dates, setDates] = React.useState<any>([])
  const [superVisor, setSuperVisor] = React.useState([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [timeSlots, setTimeSlots] = React.useState([])
  const [selectedCleaner, setCleaner] = React.useState('0')
  const [selectedSupervisor, setSelectedSupervisor] = React.useState('')
  const [id, setId] = React.useState('')
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const [countData, setCountData] = React.useState<any>(Object)
  const [attendencedatefrom, setAttendencedatefrom] = React.useState('2022-08-29')
  const [attendencedateto, setAttendencedateto] = React.useState('2022-09-03')
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const columns = useMemo(() => cleanerJobColumns, [])
  // const API = "https://adminapi.carselonadaily.com/api/admin/getCleanerWeekTimeSlots"
  // const API = "https://adminapi.carselonadaily.com/api/admin/getactivecleanerbycity"
  const API = 'https://adminapi.carselonadaily.com/api/admin/getAvalabilitybySubscription'
  // ?start=0&length=10&attendencedatefrom=2022-08-26&attendencedateto=2022-08-26
  React.useEffect(() => {
    setLoading(true)
    const formData = new FormData()
    // formData.append("city", "6");
    // selectedCleaner
    // formData.append("cleanerid", "0");
    formData.append('fromDate', attendencedatefrom)
    formData.append('toDate', attendencedateto)
    formData.append('subscriptionID', subscriptionId)
    distenceRadius
      ? formData.append('distenceRadius', distenceRadius)
      : formData.delete('distenceRadius')
    axios
      .post(`${API}`, formData)
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
      .get('https://adminapi.carselonadaily.com/api/admin/gettimeslots')
      .then((response) => {
        setTimeSlots(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get('https://adminapi.carselonadaily.com/api/admin/getsociety')
      .then((response) => {
        setSuperVisor(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
    axios
      .get('https://adminapi.carselonadaily.com/api/admin/getCleanerList')
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
    const formData = new FormData()
    // formData.append("city", "6");
    // formData.append("cleanerid", selectedCleaner);
    formData.append('fromDate', attendencedatefrom)
    formData.append('toDate', attendencedateto)
    formData.append('subscriptionID', subscriptionId)
    distenceRadius
      ? formData.append('distenceRadius', distenceRadius)
      : formData.delete('distenceRadius')
    // const payload = {
    //     city: 6,
    //     cleanerid: selectedCleaner,
    //     fromDate: attendencedatefrom,
    //     toDate: attendencedateto
    // }
    setLoading(true)
    axios
      .post(`${API}`, formData)
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setDates(response.data.dates)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
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
      .post(`${API}`, payload)
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
      .post(`${API}`, payload)
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
  }
  const handleJobDetailSubmit = (id: any) => {
    setId(id)
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
  }
  if (isLoading) {
    return (
      <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
        <div className='spinner-border mr-15' role='status'></div>
        <h4 className='fw-bold'>Loading...</h4>
      </div>
    )
  }
  return (
    <div className='modal fade show d-block'>
      <div className='modal-dialog modal-dialog-centered mw-1000px'>
        <div className='modal-content m-2'>
          <div className='modal-header' style={{ height: '51px' }}>
            <h2 className='fw-bolder ps-2'>Cleaner Availability</h2>
            <div
              className='btn btn-icon btn-sm btn-active-icon-primary'
              onClick={handleCloseIconModal}
              style={{ cursor: 'pointer' }}
            >
              <span className='svg-icon svg-icon-1'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mh-50px'
                >
                  <rect
                    opacity='0.5'
                    x='6'
                    y='17.3137'
                    width='16'
                    height='2'
                    rx='1'
                    transform='rotate(-45 6 17.3137)'
                    fill='currentColor'
                  ></rect>
                  <rect
                    x='7.41422'
                    y='6'
                    width='16'
                    height='2'
                    rx='1'
                    transform='rotate(45 7.41422 6)'
                    fill='currentColor'
                  ></rect>
                </svg>
              </span>
            </div>
          </div>
          <div className='d-flex mb-3 justify-content-between align-items-center flex-wrap px-3'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
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
          </div>
          <div className='table-responsive px-3'>
            <table
              id='kt_table_users'
              className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
            >
              <thead>
                <tr>
                  <th>
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
                    <th style={{ minWidth: '100px' }} key={item}>
                      <div className='bg-secondary text-success py-2 me-2 text-center fw-bolder rounded'>
                        {item}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <CleanerTableBodyComponent
                cleanerStats={cleanerStats}
                timeSlots={timeSlots}
                handleJobDetailSubmit={handleJobDetailSubmit}
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
        </div>
      </div>
    </div>
  )
}
export default CleanerAvailability
