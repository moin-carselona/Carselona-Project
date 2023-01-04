import { LocalBaseURL } from "../../../../../BaseURLmanagement"
import { DropdownAttendanceStatus } from "./DropdownAttendanceStatus"
import React, { useState } from "react"
const HandleDropDown = (props: any) => {
  LocalBaseURL()
  const [id, setID] = useState(0)
  const [attendancestatus, setAttendancestatus] = useState("")
  const localKey = JSON.parse(localStorage.getItem("API") || "0")
  const handleChangeAttendance = (id: number, attendancestatus: string) => {
    setAttendancestatus(attendancestatus)
    setID(id)
  }
  return (
    <div className='primary'>
      <DropdownAttendanceStatus referece="oldjobList" cleanerid={props?.props?.cleaner?.id} filteredData={props.props} jobID={props?.props?.id} subscriptionid={props?.props?.neworderid} cleaneridSingle={props.props?.cleaner?.id} attendencedate={props?.props?.attendencedate} siteid={props?.props?.siteid} servicetype={props?.props?.servicetype} attendanceStatusData={props.props.attendenceStatus}></DropdownAttendanceStatus>
    </div>
  )
}
export default HandleDropDown