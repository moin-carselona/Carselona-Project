import { Dialog } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useMemo } from 'react'
import { useLocation, useParams } from 'react-router'
import DailyJobAssignmentTableBody from '../DailyJobAssignment/DailyJobAssignmentTableBody'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally'
import moment from 'moment'
import { useSelector } from 'react-redux'
import JobDetails from './JobDetails'
import JobDetailsModal from '../cleaner/cleaner-items/JobDetailsModal'
import TagPopUp from '../../consts/PopUp/TagPopUp'
const DailyJobAssignNotAvailable = (props: { cleanerid?: any; iscleanerpage?: boolean }) => {
  const { cleanerid, iscleanerpage } = props
  const paramsIDS: any = useParams()
  const ReAssignmentDaily = useSelector((store: any) => store?.DailyReAssignments?.DailyReAssign)
  LocalBaseURL()
  const [Max, setMax] = React.useState<any>([])
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [cleanerData, setcleanerData] = React.useState<any>([])
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(2)
  const [empty] = React.useState<any>([])
  const [timingSlots, setTimingslots] = React.useState<any>([])
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [isModelOpenss, setModalOpen] = React.useState(false)
  const [JobDetailsCustomer, setJobDetailsCustomer] = React.useState<any>({})
  const [isLoading, setLoading] = React.useState(false)
  const [attendencedatefrom, setAttendencedatefrom] = React.useState<any>(moment().format('YYYY-MM-DD'))
  const [loading2, setloading2] = React.useState(false)
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  const [isCsutomerModelOpen, setCsutomerModelOpen] = React.useState(false)
  const [isInfoTagOpen, setisInfoTagOpen] = React.useState(false)
  const [DynamicHeaderinfos, SetDynamicHeaderinfo] = React.useState<any>("")
  const [InfoTagData, SetInfoTagData] = React.useState("")
  const [CustomerJobData, setCustomerJobData] = React.useState(false)
  const handlesCutomerDetailsSubmit = (jobData: any) => {
    setCustomerJobData(jobData)
    setCsutomerModelOpen(!isCleanerModelOpen)
  }
  const hadleInfoTagshowBTN = (infoTagData: any, DynamicHeaderinfo: string | null | [] | {}) => {
    SetInfoTagData(infoTagData)
    SetDynamicHeaderinfo(DynamicHeaderinfo)
    setisInfoTagOpen(!isCleanerModelOpen)
  }

  const handleCloseModal = () => {
    setisInfoTagOpen(false)
    setCsutomerModelOpen(false)
  }
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
      cleanerid: +paramsIDS.id,
      timeslots: empty,
      distenceRadius: +distenceRadeus,
    }
    axios
      .post(
        `${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL
        }/admin/getAvalabilitybyCleaner`,
        payloads
      )
      .then((response) => {
        setCleanerStats(response?.data?.data)
        setTimingslots(response?.data?.data)
        setcleanerData(response?.data?.cleanerData[0])
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
  }, [ReAssignmentDaily, paramsIDS.id])
  const handleFromDateChange = (e: any) => {
    setloading2(true)
    setAttendencedatefrom(e.target.value)
    setloading2(false)
  }
  const handleClick = () => {
    setLoading(true)
    const payloads = {
      fromDate: attendencedatefrom,
      cleanerid: +paramsIDS.id,
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
  const handleJobDetailSubmit = (timeslot: any) => {
    // console.log('timeslot', timeslot);
    setJobDetailsCustomer(timeslot)
    setModalOpen(!isModelOpenss)
  }
  const handleCloseModalss = () => {
    setModalOpen(false)
  }
  const handleCleanerDetailsSubmit = (id: any) => {
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

        <div className='card  d-flex flex-row mb-1 p-3 align-items-center    justify-content-between position-sticky' style={{ top: "69px", zIndex: 99, height: "80px" }}>
          <div className='my-2'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Absent Champ Name :'}</span>
              <span className='text-muted fs-5'>{cleanerData?.first_name} {cleanerData?.last_name} </span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Supervisor Name :'}</span>
              <span className='text-muted fs-5'>
                {cleanerData?.supervisors ? cleanerData?.supervisors[0]?.supervisorcleaner?.first_name + " " + cleanerData?.supervisors[0]?.supervisorcleaner?.last_name : "No Name"}
              </span>
            </div>
            <div className='d-flex mb-2'>
              <span className='fw-bolder fs-5 me-1'>{'Absent Date :'}</span>
              <span className='text-muted fs-5'>
                {attendencedatefrom}
              </span>
            </div>
          </div>

        </div>
      )}
      <div className='d-flex mb-3 justify-content-around align-items-center flex-wrap px-3 position-sticky' style={{ top: '160px', zIndex: 99 }}>
        <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
          <span className='me-2'>
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
      <br />
      <div className='card'>
       
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
                  handlesCutomerDetailsSubmit={handlesCutomerDetailsSubmit}
                  hadleInfoTagshowBTN={hadleInfoTagshowBTN}
                />
              )}
              {/* pop up  details  */}
              {isCsutomerModelOpen && (
                <Dialog
                  open={true}
                  onClose={handleCloseModal}
                  aria-labelledby='alert-dialog-title'
                  aria-describedby='alert-dialog-description'
                >
                  <JobDetails dalilyjob={"dalilyjob"} CustomerJobData={CustomerJobData} handleCloseModal={handleCloseModal} />
                </Dialog>)}
              {isInfoTagOpen && (
                <Dialog
                  open={true}
                  onClose={handleCloseModal}
                  aria-labelledby='alert-dialog-title'
                  aria-describedby='alert-dialog-description'
                >
                  <TagPopUp infoData={InfoTagData} DynamicHeaderinfo={DynamicHeaderinfos} handleCloseModal={handleCloseModal} reference={"SweetDIalogDailyJobTag"} />
                </Dialog>)}
              {isModelOpenss && (
                <Dialog
                  open={true}
                  onClose={handleCloseModalss}
                  aria-labelledby='alert-dialog-title'
                  aria-describedby='alert-dialog-description'
                >
                  <JobDetailsModal filteredData={JobDetailsCustomer} handleCloseModalss={handleCloseModalss} />
                </Dialog>)}
            </table>
          </div>
        )}
      </div>
    </>
  )
}
export default DailyJobAssignNotAvailable
