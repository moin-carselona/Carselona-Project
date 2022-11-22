import DataTable, {TableColumn} from 'react-data-table-component'
import HandleDropDown from './DropBox/HandleDropDown'
import { Root } from './interfaces'


export const columns: TableColumn<Root>[] = [
  {
    name: 'ID',
    selector: (row: {id: any}) => row.id,
    sortable: true,
    id: 'ID',
  },
  // {
  //   name: 'ACTION',
  //   selector: (row: {id: any}) => row.id,
  //   sortable: true,
  // },

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
    selector: (row: {phone: any}) => row.phone,
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
    name: 'SUPERVISORS',
    cell: (row) => supervisorSpan(row),
    sortable: true,
  },
  {
    name: 'EMAIL',
    selector: (row: {email: any}) => row.email,
    sortable: true,
  },
  {
    name: 'ADDRESS',
    selector: (row: {address: any}) => row.address,
    sortable: true,
  },
  {
    name: 'PINCODE',
    selector: (row: {pincode: any}) => row.pincode,
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
