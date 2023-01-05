import { useState } from 'react'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import TagPopUp from '../../consts/PopUp/TagPopUp'
import HandleDropDown from './DropBox/HandleDropDown'
import { Root } from './interfaces'
import Dialogbox from '../../consts/Dialogbox/Dialogbox'
export const columns: TableColumn<Root>[] = [
  {
    name: 'ID',
    selector: (row: { id: any }) => row.id,
    sortable: true,
    id: 'ID',
  },
  {
    name: 'ACTION',
    cell: (row) => (
      <HandleDropDown props={row}></HandleDropDown>
    ),
  },
  {
    name: 'NAME',
    selector: (row) => row.first_name + ' ' + row.last_name,
    sortable: true,
    id: 'css',
  },
  {
    name: 'PHONE',
    selector: (row: { phone: any }) => row.phone,
    sortable: true,
  },
  {
    name: 'WORK LOCATION',
    cell: (row) => {
      if (row.worklocation.length > 0) {
        return <span className='badge badge-light-success fs-8 fw-bold'>Yes</span>
      } else {
        return <span className='badge badge-light-danger fs-8 fw-bold'>No</span>
      }
    },
  },
 
  {
    name: 'SUPERVISORS',
    cell: (row) => supervisorSpan(row),
    sortable: true,
  },
  {
    name: 'PROJECT POINTS',
    cell: (row) => {
      let totalProjectedPoints = 0
      if (row.attendenceData && row.attendenceData.length > 0) {
        for (let i = 0; i < row.attendenceData.length; i++) {
          const attendance = row.attendenceData[i]
          totalProjectedPoints += Number(attendance.point)
        }
      }
      return totalProjectedPoints
    },
    sortable: true,
  },
  {
    name: 'PRIVATE TAGS',
    cell: (row: any) => (
      <>
        < div
          className='badge badge- fw-bolder rounded mb-1 d-flex justify-content-center'
          style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }
          }
        >
          {
            row?.private_tag === "" ? <span className='me-1 badge badge-light-danger fs-8 fw-bold'> No Tags Are Available </span> : row?.private_tag.split(",").map((ele: any, index: number) => {
              return (
                <span className='me-1 badge badge-light-primary fs-8 fw-bold'> {ele} </span>
              )
            })
          }
        </div>
      </>
    )
  },
  {
    name: 'PUBLIC TAGS',
    cell: (row: any) => (
      <>
        < div
          className='badge badge- fw-bolder rounded mb-1 d-flex justify-content-center'
          style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }
          }
        >
          {row?.private_tag === "" ? <span className='me-1 badge badge-light-danger fs-8 fw-bold'> No Tags Are Available </span> :
            row?.public_tag.split(",").map((ele: any, index: number) => {
              return (
                <span className='me-1 badge badge-light-primary fs-8 fw-bold'> {ele} </span>
              )
            })
          }
        </div>
      </>)
  },
  {
    name: 'EMAIL',
    selector: (row: { email: any }) => row.email,
    sortable: true,
  },
  {
    name: 'ADDRESS',
    selector: (row: { address: any }) => row.address,
    sortable: true,
  },
  {
    name: 'PINCODE',
    selector: (row: { pincode: any }) => row.pincode,
    sortable: true,
  },
  {
    name: 'RATING',
    cell: (row) => {
      return <span className='badge badge-light-success fs-8 fw-bold'>{row.rating}</span>
    },
    sortable: true,
  },
]
const supervisorSpan = (row: any) => {
  // console.log('row', row)
  if (row.cleanerSupervisor.length > 0) {
    var output = row.cleanerSupervisor.map((supervisorname: any) => {
      if (supervisorname.supervisorcleaner.id == 680) {
        return (
          <span className='badge badge-light-danger fs-8 fw-bold'>
            {supervisorname?.supervisorcleaner?.first_name +
              ' ' +
              supervisorname?.supervisorcleaner?.last_name}
          </span>
        )
      } else {
        return (
          <span className='badge badge-light-success fs-8 fw-bold'>
            {supervisorname?.supervisorcleaner?.first_name +
              ' ' +
              supervisorname?.supervisorcleaner?.last_name}
          </span>
        )
      }
    })
    return (
      <>
        <p className=''>{output}</p>
      </>
    )
  } else {
    return (
      <>
        <span className='badge badge-light-success fs-8 fw-bold'>Not Assigned</span>
      </>
    )
  }
}
// const BTNShowTags = ({ row }: any) => {
//   const [isOpenedTags, setOpenedTags] = useState<boolean>(false)
//   const [tagsData, settagsData] = useState<any>({})
//   const [DynamicHeaderinfos, setDynamicHeaderinfos] = useState<any>({})
//   const handleMangangeBTN = (row: any) => {
//     setOpenedTags(!isOpenedTags)
//     settagsData(row)
//     setDynamicHeaderinfos("Tags")
//   }
//   const handleclosedata = () => {
//     setOpenedTags(false)
//   }
//   return (
//     <>
//       <span className='badge badge-light-primary fs-8 fw-bold' onClick={() => handleMangangeBTN(row)}>Tags</span>
//       {isOpenedTags && <Dialogbox handleCloseForm={handleclosedata} PopUpPostFormOpen={isOpenedTags} ParentData={
//         tagsData
//       } reference={"ActiveCleanerTagShow"} />}
//     </>
//   )
// }
// export default BTNShowTags
