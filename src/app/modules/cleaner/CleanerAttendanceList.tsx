import React, {useEffect, useMemo, useState} from 'react'
import {ColumnInstance, Row, useTable} from 'react-table'
import {User} from '../apps/user-management/users-list/core/_models'
import {CustomHeaderColumn} from '../apps/user-management/users-list/table/columns/CustomHeaderColumn'
import {CustomRow} from '../apps/user-management/users-list/table/columns/CustomRow'
import {CleanerAttendanceColumns} from '../apps/user-management/users-list/table/columns/_CleanerAttendanceColumns'
import {getActiveCleanerByCity, getActiveCleanerProfile, getCleanerAttendanceList} from './api'

const CleanerAttendanceList = () => {
  const [cleanerAttendance, setCleanerAttendance] = useState([])
  const loadData = async () => {
    const getCleanerAttendanceData = await getCleanerAttendanceList()
    setCleanerAttendance(getCleanerAttendanceData)
    const getActiveCleanerByCityData = await getActiveCleanerByCity()
    const getActiveCleanerProfileData = await getActiveCleanerProfile()
    console.log('getActiveCleanerProfileData : ', getActiveCleanerProfileData)
    console.log('getActiveCleanerByCityData : ', getActiveCleanerByCityData)
  }
  useEffect(() => {
    loadData()
  }, [])

  const data = useMemo(() => cleanerAttendance, [cleanerAttendance])
  const columns = useMemo(() => CleanerAttendanceColumns, [])

  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <div className='card p-3'>
      <div className='align-items-center justify-content-center'>
        <input
          type='text'
          data-kt-user-table-filter='search'
          className='form-control form-control-solid'
          placeholder='Search'
        />
      </div>
      <div className='table-responsive px-4' style={{whiteSpace: 'nowrap'}}>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<User>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<User>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CleanerAttendanceList
