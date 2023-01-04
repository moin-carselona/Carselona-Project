// import { LocalBaseURL } from "../../../../../BaseURLmanagement"
import { DropdownAttendanceStatus } from "./DropdownAttendanceStatus"
import React, { useState } from "react"
import { LocalBaseURL } from "../../../../BaseURLmanagement"
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
      <DropdownAttendanceStatus referece="AssignedCleaner" filteredData={props.props} cleaneridSingle={props.props.id}></DropdownAttendanceStatus>

    </div>
  )
}
export default HandleDropDown