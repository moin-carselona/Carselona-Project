import Body from "./Body";
import { Dialog } from '@mui/material'
import React, { useState } from "react"
import DailyTotalJobsTimeslotWise from "../../PopForms/DailyTotalJobsTimeslotWise";
const DailyTableBodyJobComponent = (props: any) => {
  const { cleanerStats, Max, handleJobDetailSubmit, handlesCutomerDetailsSubmit , hadleInfoTagshowBTN} = props
  const servicetype1ClassName =
    'badge badge-light-success fw-bolder mb-2 rounded d-flex justify-content-center text-align'
  const servicetype2ClassName =
    'badge badge-light-danger fw-bolder mb-2 rounded d-flex justify-content-center text-align'
  const noJobClassName =
    'badge badge-light-info fw-bolder mb-2 rounded d-flex justify-content-center text-align'
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [TimseSlotsData, setTimseSlotsData] = React.useState<any>([])
  const HandleJobAssignCleaner = (cleanerid: number) => {
    setModalOpen(!isModalOpen)
  }
  const upatedDatas = cleanerStats?.filter((allCustomerData: any) => {
    return allCustomerData?.allCustomerData?.filter((cleaner: any) => {
      return cleaner?.data?.sort((a: any, b: any) => a?.cleaner_details?.distanceinnumber - b?.cleaner_details?.distanceinnumber)
    })
  })
  const handleCleanerDeatils = (timeslotss: any) => {
    setTimseSlotsData(timeslotss)
    setCleanerModelOpen(!isCleanerModelOpen)
  }
  if (!cleanerStats && Max.length == 0) {
    return (
      <>Loading</>
    )
  }
  return upatedDatas?.map((individualTimeSlot: any) => {
    let trackDataNull = 0
    return (<>
      <tbody >
        {
          individualTimeSlot?.allCustomerData?.map((allcustomer: any, index: number) => {
            trackDataNull = allcustomer?.data?.length
            if (index == 0) return (
              <>
                <tr className=" border  mb-5"  >
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
                  <td style={{ maxWidth: '230px', width: '130px' }} className="border">
                    <div
                      onClick={() => handlesCutomerDetailsSubmit(allcustomer?.subscriptionData)}
                      className='bg-secondary p-2 text-center rounded text-black cursor-pointer'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {allcustomer?.subscriptionData?.name}
                      <br />
                      {allcustomer?.subscriptionData?.todayAttendenceData?.servicetype == 1 ? "Exterior" : "Full cleaning Day"}
                      <br />
                      {individualTimeSlot?.name}
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
                              <Body hadleInfoTagshowBTN={hadleInfoTagshowBTN} Max={Max} attendanceids={allcustomer?.subscriptionData?.attendenceid} HandleJobAssignCleaner={HandleJobAssignCleaner} handleCleanerDeatils={handleCleanerDeatils} trackDataNull={trackDataNull} cleaner_details={attendance?.cleaner_details} attendance={attendance?.attendence_data[0]} timeslots={individualTimeSlot} noJobClassName={noJobClassName} servicetype2ClassName={servicetype2ClassName} handleJobDetailSubmit={handleJobDetailSubmit} servicetype1ClassName={servicetype1ClassName} len={allcustomer?.data?.length}></Body>
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
                                NC
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
                      if (i < xx) return (
                        <>
                          {
                            <td className="border"  >
                              <div
                                className='p-3 d-flex flex-column bg-secondary text-black  text-center  rounded'
                                style={{ maxWidth: '100px', width: '100px' }}
                              >
                                NC
                              </div>
                            </td>
                          }
                        </>
                      )
                    })
                  }
                </tr>
              </>
            )
            if (index > 0) return (
              <>
                <tr className=" border  mb-5"  >
                  <td style={{ maxWidth: '230px', width: '130px' }} className="border">
                    <div
                      onClick={() => handlesCutomerDetailsSubmit(allcustomer?.subscriptionData)}
                      className='bg-secondary p-2 text-center rounded text-black'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {allcustomer?.subscriptionData?.name}
                      <br />
                      {allcustomer?.subscriptionData?.todayAttendenceData?.servicetype == 1 ? "Exterior" : "Full cleaning Day"}
                      <br />
                      {individualTimeSlot?.name}
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
                              <Body hadleInfoTagshowBTN={hadleInfoTagshowBTN} Max={Max} attendanceids={allcustomer?.subscriptionData?.attendenceid} HandleJobAssignCleaner={HandleJobAssignCleaner} handleCleanerDeatils={handleCleanerDeatils} trackDataNull={trackDataNull} cleaner_details={attendance?.cleaner_details} attendance={attendance?.attendence_data[0]} timeslots={individualTimeSlot} noJobClassName={noJobClassName} servicetype2ClassName={servicetype2ClassName} handleJobDetailSubmit={handleJobDetailSubmit} servicetype1ClassName={servicetype1ClassName} len={allcustomer?.data?.length}></Body>
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
                                NC
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
                      if (i < xx) return (
                        <>
                          {
                            <td className="border"  >
                              <div
                                className='p-3 d-flex flex-column bg-secondary text-black  text-center  rounded'
                                style={{ maxWidth: '100px', width: '100px' }}
                              >
                                NC
                              </div>
                            </td>
                          }
                        </>
                      )
                    })
                  }
                </tr>
              </>
            )
          })
        }
      </tbody>
     
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
