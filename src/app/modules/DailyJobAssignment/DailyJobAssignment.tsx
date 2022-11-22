import { Dialog } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router'
import DailyJobAssignmentTableBody from '../DailyJobAssignment/DailyJobAssignmentTableBody'
// import { useSelector } from 'react-redux'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally'
// import { MonthNumber, MonthString } from '../cleaner/Months'
import moment from 'moment'
import { useSelector } from 'react-redux'
const DailyJobAssignNotAvailable = (props: { cleanerid?: any; iscleanerpage?: boolean }) => {
  const { cleanerid, iscleanerpage } = props
  const { state }: any = useLocation()
  const { cleaneridSingle = 0 } = state || 0
  console.log('cleaneridSingle form daily job assignments', cleaneridSingle);
  const ReAssignmentDaily = useSelector((store: any) => store?.DailyReAssignments?.DailyReAssign)
  console.log('ReAssignmentDaily', ReAssignmentDaily);
  LocalBaseURL()
  const [Max, setMax] = React.useState<any>([])
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [cleanerData, setcleanerData] = React.useState<any>([])
  // console.log('cleanerStats', cleanerStats);
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(1)
  const [empty] = React.useState<any>([])
  const [timingSlots, setTimingslots] = React.useState<any>([])
  const [id, setId] = React.useState('')
  // const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  // const today = new Date()
  const [attendencedatefrom, setAttendencedatefrom] = React.useState<any>(moment().format('YYYY-MM-DD'))
  const [loading2, setloading2] = React.useState(false)
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  React.useEffect(() => {
    setloading2(true)
    let max = 0
    function read() {
      cleanerStats && cleanerStats.map((individualTimeSlot: any) => {
        individualTimeSlot?.allCustomerData?.map((data: any) => {
          if (data?.data?.length > max) {
            max = data?.data?.length
          }
        })
      })
    }
    cleanerStats && read()
    let arr = []
    for (let i = 0; i < max; i++) {
      arr.push(i + 1)
    }
    setMax(arr)
    max >= 0 && setloading2(false)
  }, [isLoading, loading2, distenceRadeus, attendencedatefrom])
  React.useEffect(() => {
    setLoading(true)
    const payloads = {
      fromDate: attendencedatefrom,
      cleanerid: cleaneridSingle,
      timeslots: empty,
      distenceRadius: +distenceRadeus,
      // //static data pass  ========================>>>>>>>>>>>>>>>>>>>
      // cleanerid: 1081,
      // fromDate: "2022-11-05",
      // distenceRadius: 10,
      // timeslots: empty,
    }
    axios
      .post(
        `${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL
        }/admin/getAvalabilitybyCleaner`,
        payloads
      )
      .then((response) => {
        console.log('response', response);
        setCleanerStats(response?.data?.data)
        setTimingslots(response?.data?.data)
        setcleanerData(response?.data?.cleanerData[0])
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
  }, [ReAssignmentDaily])
  const handleFromDateChange = (e: any) => {
    setloading2(true)
    setAttendencedatefrom(e.target.value)
    setloading2(false)
  }
  const handleClick = () => {
    setLoading(true)
    const payloads = {
      fromDate: attendencedatefrom,
      cleanerid: cleaneridSingle,
      timeslots: empty,
      distenceRadius: +distenceRadeus,
    }
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyCleaner`, payloads)
      .then((response) => {
        setCleanerStats(response.data.data)
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
  }
  const handleCleanerDetailsSubmit = (id: any) => {
    setId(id)
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
        <div
          className='card mb-3 ml-6 p-3 d-flex flex-row  justify-content-between position-sticky'
          style={{ top: '117px', zIndex: 99 }}
        >
          <div className='my-3 ml-3'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Name of Absent Champ :'}</span>
              <span className='text-muted fs-5'>{cleanerData?.first_name} </span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Super Visor Name :'}</span>
              <span className='text-muted fs-5'>
                {cleanerData?.supervisors ? cleanerData?.supervisors[0]?.supervisorcleaner?.first_name + " " + cleanerData?.supervisors[0]?.supervisorcleaner?.last_name : "No Name"}
              </span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Date of absent :'}</span>
              <span className='text-muted fs-5'>
                {attendencedatefrom}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className='card'>
        <div className='d-flex mb-3 justify-content-around align-items-center flex-wrap px-3'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
            <span className='me-2'>
              {/* <MultiSelect
                setSelectedData={setSelectedTimingMultiSelect}
                allDatafilter={timingSlots}
              ></MultiSelect> */}
            </span>
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
              data-format="yyyy-mm-dd"
            />
            <div>
              <button className='btn btn-sm btn-warning' onClick={handleClick}>
                Search
              </button>
            </div>
          </div>
        </div>
        {loading2 ? (
          <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
            <div className='spinner-border mr-15' role='status'></div>
            <h4 className='fw-bold mt-2'>Loading...</h4>
          </div>
        ) : (
          <div className='table-responsive px-3'>
            <table id='kt_table_users'
              className='table align-middle table-row-dashed fs-8 gy-7  no-footer'
            >
            </table>
            <table
              id='kt_table_users'
              className='table align-middle table-row fs-6 gy-5 dataTable no-footer'
            >
              <thead >
                <tr>
                  <th>
                    <div className='bg-secondary text-dark py-2 me-2 text-center fw-bolder rounded'>
                      TimeSlots
                    </div>
                  </th>
                  <th style={{ width: '130px' }}>
                    <div className='bg-secondary text-dark py-2 me-2 text-center fw-bolder rounded'>
                      CS Name
                    </div>
                  </th>
                  {Max && Max?.map((item: any, ins: number) => (
                    <th key={ins} >
                      <div
                        className='bg-secondary text-success py-2  gy-4  text-center fw-bolder rounded'
                        style={{ maxWidth: '120px', width: '100px' }}
                      >
                        {item}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              {cleanerStats && (
                <DailyJobAssignmentTableBody
                  cleanerStats={cleanerStats}
                  Max={Max}
                  handleJobDetailSubmit={handleJobDetailSubmit}
                  handleCleanerDetailsSubmit={handleCleanerDetailsSubmit}
                />
              )}
            </table>
          </div>
        )}
      </div>
    </>
  )
}
export default DailyJobAssignNotAvailable
