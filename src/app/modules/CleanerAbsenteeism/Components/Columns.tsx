import React, { useState , useCallback} from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { DropdownAttendanceStatus } from './DropdownAttendanceStatus'
import Dialog from '../../../consts/SweetAlert/Dialog'
import { LocalBaseURL } from '../../../../BaseURLmanagement'
interface DataRow {
  id: number
  cleanerid: number
  attendance_date: string
  mark_attendance_datetime: string
  total_jobs_done: number
  total_points_earned: number
  is_supervisor_approved: number
  supervisor_id: number
  attendance_status: string
  createdAt: number
  updatedAt: number
  cleaner: Cleaner
}

interface Cleaner {
  id: number
  ref_by_cleaners: string
  ref_by_admin: string
  distributorid: number
  supervisorid: number
  first_name: string
  last_name: string
  email: string
  referBy: string
  phone: string
  password: any
  address: string
  latitude: string
  longitude: string
  city: number
  pincode: number
  paddress: string
  platitude: string
  plongitude: string
  ppincode: number
  profile_image: string
  reference: any
  qr_code: string
  isrefer: string
  isskip: string
  termscondi: number
  tshirtid: string
  isactive: number
  status: string
  onboarded: number
  rating: number
  traininglevel: number
  isdeleted: number
  weekoffday: string
  isCRM: number
  cleaner_type: number
  travelallowence: number
  onwork: number
  appversion: number
  userType: number
  cleanerCategory: number
  default_language: string
  cleaner_payout_scheme_id: number
  own_vehicle: number
  zohocontactid: number
  createdAt: number
  updatedAt: number
}

export const columns: TableColumn<DataRow>[] = [
  {
    name: 'ACTION',
    cell: (row: { cleanerid: number }) => (
      <button onClick={() => handleReassign(row.cleanerid)} className='btn btn-sm btn-primary'>
        RE-ASSIGN
      </button>
    ),
    // sortable: true,
  },
  {
    name: 'ID',
    selector: (row: { id: any }) => row.id,
    sortable: true,
    id: 'ID',
  },
  {
    name: 'NAME',
    selector: (row) => row.cleaner.first_name + ' ' + row.cleaner.last_name,
    sortable: true,
    id: 'css',
  },
  {
    name: 'ATTENTANCE DATE',
    selector: (row) => row.attendance_date,
    sortable: true,
  },
  {
    name: ' MARK ATTENTANCE DATE',
    selector: (row) => row.mark_attendance_datetime,
    sortable: true,
  },
  {
    name: 'TOTAL JOB DONE',
    selector: (row) => row.total_jobs_done,
    sortable: true,
  },
  {
    name: 'TOTAL POINTS EARNED',
    selector: (row) => row.total_points_earned,
    sortable: true,
  },
  {
    name: 'IS SUPERVISOR APPROVED',
    selector: (row) => row.is_supervisor_approved,
    sortable: true,
  },
  {
    name: 'ATTENDANCE STATUS',
    cell: (row) => (


      <Columnsss props={row}></Columnsss>


    ),
  },
]
const handleReassign = (id: number) => {

  console.log('id', id)
}


const Columnsss = (props: any) => {
LocalBaseURL()


const [id, setID] = useState(0)
const [attendancestatus, setAttendancestatus] = useState("")
const localKey = JSON.parse(localStorage.getItem("API") || "0")

  const handleChangeAttendance = (id: number, attendancestatus: string) => {
    setAttendancestatus(attendancestatus)
    setID(id)
  }

  return (
    <div>
      <select
        onChange={(e) => handleChangeAttendance(props.props.id, e.target.value)}
        className='form-select form-select-solid'
        defaultValue={props.props.attendance_status}
      > 
        {DropdownAttendanceStatus.map((element: any, index: number) => {

          return <option value={element.id} key={index}>{element.name}</option>
        })}
      </select>

    <Dialog confirm="Yes" cancel="No" id={id} attendancestatus={attendancestatus} localKey={localKey}></Dialog>

    </div>
  )
}

export default Columnsss


