/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ID, KTSVG } from '../../../../../_metronic/helpers'
import "../../../../../styles.css"
import { MenuComponent } from '../../../../../_metronic/assets/ts/components'
import DialogBox from '../DialogBox/DialogBox'
type Props = {
  cleaneridSingle: ID
  jobID: ID
  subscriptionid: ID
  filteredData: any
  referece: string
  cleanerid: number
  attendencedate: string
  siteid: number
  servicetype: number
  attendanceStatusData: any
}
export const DropdownAttendanceStatus: FC<Props> = ({ referece, cleanerid, jobID,
  subscriptionid, cleaneridSingle, filteredData, attendencedate, siteid, servicetype, attendanceStatusData }) => {
  // console.log('filteredData', filteredData);
  const userids = JSON.parse(localStorage.getItem("user") || "0")
  const [PopupUpdateStatusOpenClose, setPopupUpdateStatusOpenClose] = useState(false)
  const [AttendanceID, setAttendanceID] = useState<any>(0)
  const [attendancestatusList, setattendancestatusList] = useState<any>({})
  const [destination, setDestination] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])
  const handleReAssign = (cleaneridSingle: any) => {
    navigate(`/daily/job/assign/oldjob/${cleaneridSingle}`)
  }
  const handleEditAttendance = (id: any) => {
    setAttendanceID(jobID)
    setDestination("editAttendance")
    setPopupUpdateStatusOpenClose(!PopupUpdateStatusOpenClose)
  }
  const handleChangeDate = (id: any) => {
    navigate(`/datechange/${siteid}/${servicetype}/${attendencedate}/${jobID}/${cleanerid}/${subscriptionid}`)
  }
  const handleUpdateStatus = (cleanerid: any, jobID: any, filteredData: any, attendanceStatusData: any) => {
    if (attendanceStatusData === null) {
      let attendancestatus = {
        attendence_id: jobID,
        customerid: filteredData?.customerids,
        user_id: userids,
        job_status_id: 0,
        job_action_id: 1,
        field_type_id: 1,
      }
      setattendancestatusList(attendancestatus)
    }
    else {
      let attendancestatus = {
        user_id: userids,
        attendence_id: jobID,
        customerid: filteredData?.customerids,
        job_status_id: 0,
        job_action_id: 1,
        field_type_id: 1,
      }
      setattendancestatusList(attendancestatus)
    }
    setDestination("updateStatus")
    setPopupUpdateStatusOpenClose(!PopupUpdateStatusOpenClose)
  }
  const handleReportAttendance = (id: any) => {
  }
  return (
    <>
      <button
        className='btn btn-sm btn-light btn-active-primary  fs-8 '
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        <i className="bi bi-chevron-bar-contract"></i>
        {/* <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' /> */}
      </button>
      <div
        className='menu DropdownContainerwidth menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
        style={{
          width: "500px",
          zIndex: '105',
          position: 'fixed',
          inset: '0px 0px auto auto',
          margin: '0px',
          transform: 'translate(-59px, 440px)',
        }}
      >
        <div className='menu-item px-3'>
          <a
            href={`/daily/job/assign/oldjob/${cleaneridSingle}`}
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleReAssign(cleaneridSingle)}
          >
            Re-Assign
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            // href='_blank'
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleEditAttendance(cleaneridSingle)}
          >
            Edit Attendance
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            href={`/datechange/${siteid}/${servicetype}/${attendencedate}/${jobID}/${cleanerid}/${subscriptionid}`}
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleChangeDate(cleaneridSingle)}
          >
            Change Date
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleUpdateStatus(cleaneridSingle, jobID, filteredData, attendanceStatusData)}
          >
            Update Status
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleReportAttendance(cleaneridSingle)}
          >
            Report Attendance
          </a>
        </div>
      </div>
      {PopupUpdateStatusOpenClose && <DialogBox AttendanceID={AttendanceID} destination={destination} handleDiloagboxform={handleUpdateStatus} PopupUpdateStatusOpenClose={PopupUpdateStatusOpenClose} attendancestatusList={attendancestatusList} />}
    </>
  )
}
