import Body from "./Body";
import { memo, useState } from "react";
import React from "react"

const CleanerTableBodyComponent = (props: any) => {
  const { timeSlots, cleanerStats, handleJobDetailSubmit, handleCleanerDetailsSubmit } = props
  // console.log('timeSlots table', timeSlots);
  console.log('cleanerStats table', cleanerStats);


  const udpatedCleanerStats = cleanerStats.sort((a: any, b: any)=> a.cleaner_details.distanceinnumber - b.cleaner_details.distanceinnumber)

  const obj = {
    timeslot_name: '',
    date_changed_from: '',
    subscriptiondetails: { name: '' },
    customer_data: { society_details: { name: '\n' } },
  }
  const servicetype1ClassName =
    'badge badge-light-success fw-bolder mb-2 rounded d-flex justify-content-center'
  const servicetype2ClassName =
    'badge badge-light-danger fw-bolder mb-2 rounded d-flex justify-content-center'
  const noJobClassName =
    'badge badge-light-info fw-bolder mb-2 rounded d-flex justify-content-center'
  const dateChangeClassName =
    'badge badge-light-warning fw-bolder mb-2 rounded d-flex justify-content-center'

  if (!udpatedCleanerStats) {
    return (
      <>Loading</>
    )
  }

  return udpatedCleanerStats?.map((cleanerStat: any) => (
    <tbody>
      {timeSlots?.map((timeslots: any) => {
        return (
          <tr>
            <td
              style={{ maxWidth: '230px', width: '130px', cursor: 'pointer' }}
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              data-bs-html="true"
              // title={`<span>Phone</span><span>${cleanerStat.cleaner_details.phone}</span>`}
              title="And here's some amazing <span class='label label-inline font-weight-bold label-light-primary'>HTML</span> content. It's very <code>engaging</code>. Right?"
            >

              <div
                className='bg-secondary p-2 text-center rounded text-black-50'
                style={{ whiteSpace: 'pre-wrap' }
                }
                onClick={() => handleCleanerDetailsSubmit(cleanerStat?.cleaner_details?.id)}
              >

                {cleanerStat?.cleaner_details?.first_name} {cleanerStat?.cleaner_details?.last_name}  {cleanerStat?.cleaner_details?.distance + " Away"}
              </div>
              {/* </div> */}
            </td>
            <td style={{ maxWidth: '230px', width: '130px' }}>
              <div
                className='bg-secondary p-2 text-center rounded text-black-50'
                style={{ whiteSpace: 'nowrap' }}
              >
                {timeslots?.name}
              </div>
            </td>
            {cleanerStat?.attendence_data?.map((attendance: any) => (
              <>

                <td>
                  <div
                    className='p-3 d-flex flex-column'
                    style={{ maxWidth: '150px', width: '100px' }}
                  >
                    {attendance && (
                      <Body attendance={attendance} timeslots={timeslots} noJobClassName={noJobClassName} servicetype2ClassName={servicetype2ClassName} cleanerStat={cleanerStat} handleJobDetailSubmit={handleJobDetailSubmit} dateChangeClassName={dateChangeClassName} servicetype1ClassName={servicetype1ClassName}></Body>
                    )}
                    {attendance?.timeslot_data[timeslots.name]?.length <= 0 && (
                      <>
                        {
                          <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                            NJ - 0
                          </div>
                        }
                        {
                          <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                            NJ - 0
                          </div>
                        }
                        {
                          <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                            NJ - 0
                          </div>
                        }
                        {
                          <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                            NJ - 0
                          </div>
                        }
                      </>
                    )}
                  </div>
                </td>
              </>
            ))}
          </tr>
        )
      })}
    </tbody>
  ))
}
export default memo(CleanerTableBodyComponent)
