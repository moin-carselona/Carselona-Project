/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ID, KTSVG } from '../../../../../_metronic/helpers'
import "../../../../../styles.css"
import { MenuComponent } from '../../../../../_metronic/assets/ts/components'
type Props = {
  cleaneridSingle: ID
  data: any
  referece: string
}
export const DropdownAttendanceStatus: FC<Props> = ({ referece, cleaneridSingle, data }) => {
  console.log('data dropdown', data);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])


  // const handleDataHere = (id: any) => {
  //   let filteredData = data.filter((item: any) => item.id === id)[0]
  //   console.log('Assign cleaner Details', filteredData);
  //   navigate('assign-cleaner-view', {
  //     state: {
  //       filteredData,
  //       referece
  //     }
  //   })
  // }


  const handleReAssign = (cleaneridSingle: any) => {
    navigate('/daily/job/assign', {
      state: {
        cleaneridSingle
      }
    })


  }
  const handleEditAttendance = (id: any) => {
  }
  const handleChangeDate = (id: any) => {
  }
  const handleUpdateStatus = (id: any) => {
  }
  const handleReportAttendance = (id: any) => {
  }

  
  return (
    <>
      <button
        className='btn btn-light btn-active-light-primary btn-sm '
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
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
            onClick={() => handleUpdateStatus(cleaneridSingle)}
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
    </>
  )
}
