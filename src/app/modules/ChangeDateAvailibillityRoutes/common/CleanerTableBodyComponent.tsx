import Body from "./Body";
import { memo, useState } from "react";
import React from "react"
import SweetDateChangeAssignment from "../../../consts/SweetAlert/SweetDateChangeAssignment";
import { useDispatch, useSelector } from "react-redux";
const CleanerTableBodyComponent = (props: any) => {
  const { timeSlots, cleanerStats, handleJobDetailSubmit, handleCleanerDetailsSubmit, jobID, toggle, trackIDAssigningCanceled } = props
  let timingSlotid = { name: "" }
  const CheckedAssining = useSelector((store: any) => store?.DailyReAssignments?.trackIDAssigning)

  const localKey = JSON.parse(localStorage.getItem("API") || "0")
  const [CleanerIDS, setCleanerIDS] = useState(0)
  const [CleanerTimeslotID, setCleanertimelsotid] = useState(0)
  const [cleaeerdate, SetCleanerData] = useState(0)
  const [attendaceids, setaAttenceids] = useState(jobID)
  const [randomValue, SetrandomValue] = useState("")
  const [subscriptionStatus, setsubscriptionStatus] = React.useState(0)
  const dispatch = useDispatch()
  const handlDateChangeAssign = (randomvalue: any, cleanerid: any, cleanerTimeslotID: any, cleanerDateSlot: any) => {
    console.log('randomvalue', typeof randomvalue);
    // console.log('randomvalue', randomvalue);
    console.log('cleanerDateSlot', cleanerDateSlot);
    console.log('cleanerTimeslotID', cleanerTimeslotID);
    console.log('cleanerid', cleanerid);
    SetrandomValue(randomvalue)
    setsubscriptionStatus(Math.random())
    setCleanerIDS(cleanerid)
    setCleanertimelsotid(cleanerTimeslotID.id)
    SetCleanerData(cleanerDateSlot)
    setaAttenceids(setaAttenceids)
  }
  // const udpatedCleanerStats = cleanerStats.sort((a: any, b: any)=> a.cleaner_details.distanceinnumber - b.cleaner_details.distanceinnumber)
  const servicetype1ClassName =
    'badge badge-light-success fw-bolder mb-2 rounded d-flex justify-content-center'
  const servicetype2ClassName =
    'badge badge-light-danger fw-bolder mb-2 rounded d-flex justify-content-center'
  const noJobClassName =
    'badge badge-light-info fw-bolder mb-2 rounded d-flex justify-content-center'
  const dateChangeClassNameserviceType1 =
    'badge badge-primary fw-bolder mb-2 rounded d-flex justify-content-center border border-warning border-3'
  const dateChangeClassNameserviceType2 =
    'badge badge-danger fw-bolder mb-2 rounded d-flex justify-content-center border border-warning border-3'
  const HightListDateChange =
    'badge badge-primary fw-bolder mb-2 rounded d-flex justify-content-center'
  return cleanerStats?.map((cleanerStat: any, parentindex: number) => (
    <tbody>
      {timeSlots?.map((timeslots: any, firstIndex: number) => {
        let parentindex2 = parentindex.toString()
        // console.log('parentindex2 =========================================', parentindex2);
        let firstIndex2 = firstIndex.toString()
        timingSlotid = timeslots
        return (
          <tr>
            <td
              style={{ maxWidth: '230px', width: '130px', cursor: 'pointer' }}
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              data-bs-html="true"
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
            {cleanerStat?.attendence_data?.map((attendance: any, secondIndex: number) => {
              let secondIndex2 = secondIndex.toString()
              let id12 = `${parentindex2 + firstIndex2 + "" + secondIndex2}`
              return <>
                <td>
                  <div
                    className='p-3 d-flex flex-column'
                    style={{ maxWidth: '150px', width: '100px' }}
                  >
                    {attendance && (
                      <Body key={id12} HightListDateChange={HightListDateChange} jobID={jobID} attendance={attendance} timeslots={timeslots} noJobClassName={noJobClassName} servicetype2ClassName={servicetype2ClassName} cleanerStat={cleanerStat} handleJobDetailSubmit={handleJobDetailSubmit} dateChangeClassNameserviceType1={dateChangeClassNameserviceType1} dateChangeClassNameserviceType2={dateChangeClassNameserviceType2} servicetype1ClassName={servicetype1ClassName} handlDateChangeAssign={handlDateChangeAssign} timingSlotid={timingSlotid} subscriptionStatus={subscriptionStatus} localKey={localKey} indexID={id12} randomValue={randomValue} toggle={toggle} trackIDAssigningCanceled={trackIDAssigningCanceled}></Body>
                    )}
                    {attendance?.timeslot_data[timeslots.name]?.length <= 0 && (
                      <>
                        {[1, 2, 3, 4].map((ele: number, indexNJ: number) => {
                          // console.log('id12', id12);
                          return <>
                            {
                              <div onClick={() => handlDateChangeAssign(id12 + indexNJ, attendance.cleanerid, timeslots, attendance.date)} className={noJobClassName} style={{ cursor: ' pointer', background: CheckedAssining === id12 + indexNJ ? "yellow" : randomValue === id12 + indexNJ ? "yellow" : "", color: CheckedAssining === id12 + indexNJ ? "black" : randomValue === id12 + indexNJ ? "black" : "blue" }}>
                                {/* {randomValue == id12 +indexNJ ? "S-4-A" : "NJ"}  */}
                                {trackIDAssigningCanceled === id12 + indexNJ ? "CANCELED" : CheckedAssining === id12 + indexNJ ? "ASSIGNED" : randomValue == id12 + indexNJ ? "ASSIGNINIG....." : "NJ"}
                                <SweetDateChangeAssignment confirm="Yes" cancel="No" localKey={localKey} attendancestatus={subscriptionStatus} cleanerid={CleanerIDS} cleanerTimeSlotid={CleanerTimeslotID} cleanerDateSlotID={cleaeerdate} attendaceids={attendaceids} randomValues={randomValue}  ></SweetDateChangeAssignment>
                              </div>
                            }
                          </>
                        })}
                        {/* {
                          <div onClick={() => handlDateChangeAssign(id12, attendance.cleanerid, timeslots, attendance.date)} className={noJobClassName} style={{ cursor: ' pointer', background: randomValue === id12 ? "red" : "" }}>
                            NJ  <SweetDateChangeAssignment confirm="Yes" cancel="No" localKey={localKey} attendancestatus={subscriptionStatus} cleanerid={CleanerIDS} cleanerTimeSlotid={CleanerTimeslotID} cleanerDateSlotID={cleaeerdate} attendaceids={attendaceids}  ></SweetDateChangeAssignment>
                          </div>
                        }
                        {
                          <div onClick={() => handlDateChangeAssign(id12, attendance.cleanerid, timeslots, attendance.date)} className={noJobClassName} style={{ cursor: ' pointer', background: randomValue === id12 ? "red" : "" }}>
                            NJ
                          </div>
                        }
                        {
                          <div onClick={() => handlDateChangeAssign(id12, attendance.cleanerid, timeslots, attendance.date)} className={noJobClassName} style={{ cursor: ' pointer', background: randomValue === id12 ? "red" : "" }}>
                            NJ
                          </div>
                        }
                        {
                          <div onClick={() => handlDateChangeAssign(id12, attendance.cleanerid, timeslots, attendance.date)} className={noJobClassName} style={{ cursor: ' pointer', background: randomValue === id12 ? "red" : "" }}>
                            NJ
                          </div>
                        } */}
                      </>
                    )}
                  </div>
                </td>
              </>
            })}
          </tr>
        )
      })}
    </tbody>
  ))
}
export default memo(CleanerTableBodyComponent)
