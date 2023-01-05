import React, { useState } from 'react'
import { TableColumn } from 'react-data-table-component'
import { DataRow } from './Interfaces'
import HandleDropDown from './DropBox/HandleDropDown'
import DialogBox from './DialogBox/DialogBox'
import SentenceShorter from './SentenceShorter'
import GS_Chips from '../../../consts/GS_Chips'
export const columns: TableColumn<DataRow>[] = [
  {
    name: 'ACTION',
    cell: (row) => (
      <HandleDropDown props={row}></HandleDropDown>
    ),
    grow: 1
  },
  {
    name: 'GALLARY',
    cell: (row) => {
      return (
        <>
          <ViewImages individualID={row.id}></ViewImages>
        </>
      )
    },
    sortable: true,
    grow: 1
    // id: 'ID',
  },
  {
    name: 'CLEANER NAME',
    cell: (row) => {
      return (
        <div className='text-left'>
          <span className='badge badge-light-success fs-8 fw-bold'>{row?.cleaner?.first_name + ' ' + row?.cleaner?.first_name}</span>
          <span className='badge badge-light-danger fs-8 fw-bold'>
            {row?.cleaner?.phone}
          </span>
        </div>
      )
    },
    sortable: true,
    grow: 1.5
  },
  {
    name: 'CUSTOMER NAME',
    cell: (row) => {
      return (
        <div className='text-left'>
          <span className='badge badge-light-success fs-8 fw-bold'> {row?.customerData?.first_name + ' ' + row?.customerData?.first_name}</span>
          <span className='badge badge-light-danger fs-8 fw-bold'>
            {row?.customerData?.phone}
          </span>
        </div>
      )
    },
    sortable: true,
    grow: 3
  },
  {
    name: 'SUPERVISORS',
    cell: (row) => {
      return (
        <div className='text-left'>
          {row?.cleaner?.supervisors?.map((ele: any, index: number) => {
            if (index == 0) {
              return <>
                <span className='badge text-dark fs-8 fw-bold'> {ele?.supervisorData?.first_name + ' ' + ele?.supervisorData?.last_name}</span>
              </>
            }
          })}
        </div>
      )
    },
    grow: 3
  },
  {
    name: 'DATE',
    selector: (row: { attendencedate: any }) => row.attendencedate,
    sortable: true,
    grow: 1
  },
  {
    name: 'TIMESLOTS',
    selector: (row) => row?.timeslotDetail?.name,
    sortable: true,
    grow: 1
  },
  {
    name: 'JOB STATUS',
    cell: (row) => {
      return (
        <div className='d-flex'>
          {
            row?.attendenceStatus ? <>
              <div className='badge badge-light-danger fs-8 fw-bold'>{row?.job_status_select}</div>
              <div className='badge badge-light-success fs-8 fw-bold'>{row?.job_status}</div>
            </> : row?.job_status_select === "Overdue" ? <>
              <div className='badge badge-light-success fs-8 fw-bold'>{"Overdue"}</div>
            </> : row?.job_status_select === "Early" ? <>
              <div className='badge badge-light-danger fs-8 fw-bold'>{row?.attendencedatedone}</div>
              <div className='badge badge-light-success fs-8 fw-bold'>{"Early"}</div><br />
            </> : row?.job_status_select === "Ontime" ? <>
              <div className='badge badge-light-danger fs-8 fw-bold'>{row?.attendencedatedone}</div>
              <div className='badge badge-light-success fs-8 fw-bold'>{"Ontime"}</div><br />
            </> : row?.job_status_select === "Late" ? <>
              <div className='badge badge-light-danger fs-8 fw-bold'>{row?.attendencedatedone}</div>
              <div className='badge badge-light-success fs-8 fw-bold'>{"Late"}</div><br />
            </> : row?.job_status_select === "NotAtHome" ? <>
              <div className='badge badge-light-danger fs-8 fw-bold'>{row.job_status}</div>
            </> : ""
          }
        </div>
      )
    },
    sortable: true,
    grow: 8,
  },
  {
    name: 'CLEANER. STATUS',
    cell: (row) => {
      return (
        <div className='text-left'>
          {
            row?.cleaner_onwork === "InActive" ? <span className='badge badge-light-danger fs-8 fw-bold'>{row?.cleaner_onwork}</span> : <span className='badge badge-light-success fs-8 fw-bold'>{row?.cleaner_onwork}</span>
          }
        </div>
      )
    },
    sortable: true,
    grow: 1
  },
  {
    name: 'DISTANCE',
    cell: (row) => {
      return (
        <div className='text-left'>
          {
            <span className='badge badge-dark fs-8 fw-bold'>{row?.distance ? row.distance + "KM" : "No Distance"} </span>
          }
        </div>
      )
    },
    sortable: true,
    grow: 1
  },
  {
    name: 'SOCIETY',
    selector: (row) => row.societyname,
    sortable: true,
    grow: 1
  },
  {
    name: 'JOB TYPE',
    // selector: (row) => row.servicetypename,
    cell: (row) => {
      // console.log('row', row);
      return (
        <div className='text-left'>
          <SentenceShorter sentence={row?.servicetypename}></SentenceShorter>
        </div>
      )
    },
    sortable: true,
    grow: 1
  },
  {
    name: 'RATING/COMMENT',
    selector: (row) => row.ratings,
    grow: 1
  },
  {
    name: 'VEHICLE INFO',
    cell: (row) => {
      return (
        <GS_Chips row={row} reference={"vehicle-info"}></GS_Chips>
      )
    },
    grow: 1
  },
  // {
  //   name: 'JOB STATUS',
  //   // selector: (row) => row.cleaner.status,
  //   cell: (row) => {
  //     let show;
  //     return (
  //       <div className='text-left d-flex'>
  //         {/* if ( == "") {
  //           show = <span className='badge badge-light-danger fs-8 fw-bold'>{row?.job_status_select}</span>
  //         } else if (data == ‘Early’) {
  //           show = <span className='badge badge-light-danger fs-8 fw-bold'>{row?.job_status_select}</span>
  //         } else if (data == ‘Ontime’) {
  //           show = <span className='badge badge-light-danger fs-8 fw-bold'>{row?.job_status_select}</span>
  //         } else if (data == ‘Late’) {
  //           show = <span className='badge badge-light-danger fs-8 fw-bold'>{row?.job_status_select}</span>
  //         } else if (data == ‘NotAtHome’) {
  //           show = <span className='badge badge-light-danger fs-8 fw-bold'>{row?.job_status_select}</span>
  //         } */}
  //         {
  //           row?.attendenceStatus ? <>
  //             <span className='badge badge-light-success fs-8 fw-bold'>{row?.job_status}</span>
  //             <span className='badge badge-light-danger fs-8 fw-bold'>{row?.job_status_select}</span>
  //           </> : row?.job_status_select === "Overdue" ? <>
  //             <span className='badge badge-light-success fs-8 fw-bold'>{"Overdue"}</span>
  //           </> : row?.job_status_select === "Early" ? <>
  //             <span className='badge badge-light-success fs-8 fw-bold'>{"Early"}</span>
  //             <span className='badge badge-light-danger fs-8 fw-bold'>{row?.attendencedatedone}</span>
  //           </> : row?.job_status_select === "Ontime" ? <>
  //             <span className='badge badge-light-success fs-8 fw-bold'>{"Ontime"}</span>
  //             <span className='badge badge-light-danger fs-8 fw-bold'>{row?.attendencedatedone}</span>
  //           </> : row?.job_status_select === "Late" ? <>
  //             <span className='badge badge-light-success fs-8 fw-bold'>{"Late"}</span>
  //             <span className='badge badge-light-danger fs-8 fw-bold'>{row?.attendencedatedone}</span>
  //           </> : row?.job_status_select === "NotAtHome" ? <>
  //             <span className='badge badge-light-danger fs-8 fw-bold'>{row.job_status}</span>
  //           </> : ""
  //         }
  //       </div>
  //     )
  //   },
  //   sortable: true,
  // },
]
const ViewImages = ({ individualID }: any) => {
  const [PopupUpdateStatusOpenClose, setPopupUpdateStatusOpenClose] = useState(false)
  const [destination, setDestination] = useState("")
  const [AttendanceID, setAttendanceID] = useState(0)
  const handleID = (individualID: number) => {
    setDestination("imageAction")
    setPopupUpdateStatusOpenClose(!PopupUpdateStatusOpenClose)
    setAttendanceID(individualID)
  }
  return (
    <>
      <span className='badge badge-primary fs-10 fw-bold text-center' onClick={() => handleID(individualID)}>
        <i className="bi bi-images  fs-2 text-white"></i>
      </span>
      {PopupUpdateStatusOpenClose && <DialogBox AttendanceID={AttendanceID} destination={destination} handleDiloagboxform={handleID} PopupUpdateStatusOpenClose={PopupUpdateStatusOpenClose} attendancestatusList={{
        user_id: "",
        attendence_id: "",
        customerid: "",
        job_status_id: 0,
        job_action_id: 1,
        field_type_id: 1,
      }} />}
    </>
  )
}
export default ViewImages
