import Body from "./Body";
import { Dialog } from '@mui/material'
import React, { useState } from "react"
import DailyTotalJobsTimeslotWise from "../../PopForms/DailyTotalJobsTimeslotWise";
import DailyJobAssignCleaner from "../../PopForms/DailyJobAssignCleaner";
const DailyTableBodyJobComponent = (props: any) => {
  const { cleanerStats, Max, handleJobDetailSubmit } = props
  const servicetype1ClassName =
    'badge badge-light-success fw-bolder mb-2 rounded d-flex justify-content-center text-align'
  const servicetype2ClassName =
    'badge badge-light-danger fw-bolder mb-2 rounded d-flex justify-content-center text-align'
  const noJobClassName =
    'badge badge-light-info fw-bolder mb-2 rounded d-flex justify-content-center text-align'
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [TimseSlotsData, setTimseSlotsData] = React.useState<any>([])
  const [cleanerids, setcleanerids] = useState<number>(0)
  const HandleJobAssignCleaner = (cleanerid: number) => {
    setcleanerids(cleanerid)
    setModalOpen(!isModalOpen)
  }
  const handleCleanerDeatils = (timeslotss: any) => {
    console.log('timeslotss cleaner details', timeslotss);
    setTimseSlotsData(timeslotss)
    setCleanerModelOpen(!isCleanerModelOpen)
  }
  if (!cleanerStats && Max.length == 0) {
    return (
      <>Loading</>
    )
  }
  return cleanerStats?.map((individualTimeSlot: any) => {
    let trackDataNull = 0
    return (<>
      <tbody >
        <tr className="   mb-5"  >
          {
            individualTimeSlot?.allCustomerData && <td rowSpan={individualTimeSlot?.allCustomerData?.length}
              style={{ maxWidth: '230px', width: '130px', cursor: 'pointer' }}
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              data-bs-html="true"
              title="And here's some amazing <span class='label label-inline font-weight-bold label-light-primary'>HTML</span> content. It's very <code>engaging</code>. Right?"
            >
              <div
                className='bg-secondary p-2 text-center  rounded text-black'
                style={{ whiteSpace: 'pre-wrap' }
                }
              >
                {individualTimeSlot?.name}
              </div>
            </td>
          }
          {
            individualTimeSlot?.allCustomerData?.map((allcustomer: any, index: number) => {
              console.log('allcustomer', allcustomer);
              trackDataNull = allcustomer?.data?.length
              if (index == 0) return (
                <>
                  <td style={{ maxWidth: '230px', width: '130px' }} className="border">
                    <div
                      className='bg-secondary p-2 text-center rounded text-black'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {allcustomer?.subscriptionData?.name}
                      <br />
                      {allcustomer?.subscriptionData?.todayAttendenceData?.servicetype == 1 ? "Exterior" : "Full cleaning Day"}
                    </div>
                  </td>
                  {allcustomer?.data?.map((attendance: any) => {
                    return (
                      <>
                        <td className="border">
                          <div
                            className='p-3 d-flex flex-column '
                            style={{ maxWidth: '100px', width: '100px' }}
                          >
                            {attendance?.attendence_data[0] && (
                              <Body Max={Max} attendanceids={allcustomer?.subscriptionData?.attendenceid} HandleJobAssignCleaner={HandleJobAssignCleaner} handleCleanerDeatils={handleCleanerDeatils} trackDataNull={trackDataNull} cleaner_details={attendance?.cleaner_details} attendance={attendance?.attendence_data[0]} timeslots={individualTimeSlot} noJobClassName={noJobClassName} servicetype2ClassName={servicetype2ClassName} handleJobDetailSubmit={handleJobDetailSubmit} servicetype1ClassName={servicetype1ClassName} len={allcustomer?.data?.length}></Body>
                            )}
                          </div>
                        </td>
                      </>
                    )
                  })}
                  {
                    trackDataNull == 0 && Max?.map((ele: any, i: number) => {
                      return (
                        <>
                          {
                            <td className="border"   >
                              <div
                                className='p-3 d-flex flex-column bg-secondary text-black text-center  rounded'
                                style={{ maxWidth: '100px', width: '100px' }}
                              >
                                NC -1
                              </div>
                            </td>
                          }
                        </>
                      )
                    })
                  }
                  {
                    trackDataNull > 0 && trackDataNull < Max.length && Max?.map((ele: any, i: number) => {
                      var xx = Max.length - trackDataNull
                      // console.log('xx==============================', xx);
                      if (i < xx) return (
                        <>
                          {
                            <td className="border"  >
                              <div
                                className='p-3 d-flex flex-column bg-secondary text-black  text-center  rounded'
                                style={{ maxWidth: '100px', width: '100px' }}
                              >
                                NC -1
                              </div>
                            </td>
                          }
                        </>
                      )
                    })
                  }
                </>
              )
            })
          }
        </tr>
        <tr className="   mb-5" >
          {
            individualTimeSlot?.allCustomerData?.map((allcustomer: any, index: number) => {
              // console.log('allcustomer > 0 -==================', allcustomer);
              trackDataNull = allcustomer?.data?.length
              if (index > 0) return (
                <>
                  <td style={{ maxWidth: '230px', width: '130px' }} className="border" >
                    <div
                      className='bg-secondary p-2 text-center rounded text-black'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {allcustomer?.subscriptionData?.name}
                    </div>
                  </td>
                  {allcustomer?.data?.map((attendance: any) => {
                    return (
                      <>
                        <td className="border">
                          <div
                            className='p-3 d-flex flex-column '
                            style={{ maxWidth: '100px', width: '100px' }}
                          >
                            {attendance?.attendence_data[0] && (
                              <Body Max={Max} attendanceids={allcustomer?.subscriptionData?.attendenceid} HandleJobAssignCleaner={HandleJobAssignCleaner} trackDataNull={trackDataNull} cleaner_details={attendance?.cleaner_details} attendance={attendance?.attendence_data[0]} timeslots={individualTimeSlot} noJobClassName={noJobClassName} servicetype2ClassName={servicetype2ClassName} handleCleanerDeatils={handleCleanerDeatils} servicetype1ClassName={servicetype1ClassName} len={allcustomer?.data?.length}></Body>
                            )}
                          </div>
                        </td>
                      </>
                    )
                  })}
                  {
                    trackDataNull == 0 && Max?.map((ele: any, i: number) => {
                      console.log('ele  check', ele);
                      return (
                        <>
                          {
                            <td className="border"   >
                              <div
                                className='p-3 d-flex flex-column bg-secondary text-black text-center  rounded'
                                style={{ maxWidth: '100px', width: '100px' }}
                              >
                                NC -1
                              </div>
                            </td>
                          }
                        </>
                      )
                    })
                  }
                  {
                    trackDataNull > 0 && trackDataNull < Max.length && Max?.map((ele: any, i: number) => {
                      if (i < Max.length - trackDataNull) return (
                        <>
                          {
                            <td className="border"  >
                              <div
                                className='p-3 d-flex flex-column bg-secondary text-black text-center  rounded'
                                style={{ maxWidth: '100px', width: '100px' }}
                              >
                                NC -1
                              </div>
                            </td>
                          }
                        </>
                      )
                    })
                  }
                </>
              )
            })
          }
        </tr>
      </tbody>
      {isModalOpen && (
        <Dialog
          open={true}
          onClose={HandleJobAssignCleaner}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DailyJobAssignCleaner cleanerids={cleanerids}></DailyJobAssignCleaner>
        </Dialog>
      )}
      {isCleanerModelOpen && (
        <Dialog
          open={true}
          onClose={handleCleanerDeatils}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DailyTotalJobsTimeslotWise TimseSlotsData={TimseSlotsData}  ></DailyTotalJobsTimeslotWise>
        </Dialog>
      )}
    </>
    )
  })
}
export default DailyTableBodyJobComponent
