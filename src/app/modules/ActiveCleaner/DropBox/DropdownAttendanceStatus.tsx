/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { ID, KTSVG } from '../../../../../_metronic/helpers'
// import "../../../../../styles.css"
import { MenuComponent } from '../../../../_metronic/assets/ts/components'
import { ID, KTSVG } from '../../../../_metronic/helpers'
import { MasterLayoutDrawer } from '../../../../MasterDrawerListCommon/MasterLayoutDrawer'
// import { MenuComponent } from '../../../../../_metronic/assets/ts/components'
type Props = {
  cleaneridSingle: ID
  filteredData: any
  referece: string
}
export const DropdownAttendanceStatus: FC<Props> = ({ referece, cleaneridSingle, filteredData }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log('cleaneridSingle=>>>> ActiveCleaner =>>>>>>>>>>>>>>>>', cleaneridSingle);
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
    navigate('/champ-permanent-replacement', {
      state: {
        filteredData
      }
    })
    // console.log('id', id);
  }
  const ViewProfileCleaner = (cleaneridSingle: any) => {
  }
  const Deactivate = (cleaneridSingle: any) => {
  }
  const handleUpdateStatus = (cleaneridSingle: any) => {
  }
  const AsignChangeSlab = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
    
  }
  const AssignUpdateAlowance = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
    
  }
  const GiveRewards = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
  }
  const ViewLoans = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
  }
  const AssignSuperVisor = (cleaneridSingle: any,drawerRefs:any ) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
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
        <div className='menu-item px-3' >
          <a
            // href='_blank'
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => ViewProfileCleaner(cleaneridSingle)}
          >
            View Profile
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => Deactivate(cleaneridSingle)}
          >
            Deactivate
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleUpdateStatus(cleaneridSingle)}
          >
            Make Full Timer
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
          >
            Availibility
          </a>
        </div>
        <div className='menu-item px-3' id="kt_activities2_toggle2">
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => AsignChangeSlab(cleaneridSingle, "AsignChange")}
          >
            Assign / Change Slab
          </a>
        </div>
      
        <div className='menu-item px-3' id="kt_activities2_toggle2">
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => AssignUpdateAlowance(cleaneridSingle, "AllownceAssign")}
          >
            Assign / Upddate Allowance
          </a>
        </div>
        <div className='menu-item px-3' id='kt_activities2_toggle2'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => GiveRewards(cleaneridSingle, "giveRewards")}
          >
            Give Rewards
          </a>
        </div>
        <div className='menu-item px-3' id='kt_activities2_toggle2' >
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => ViewLoans(cleaneridSingle, "viewLoans")}
          >
            View Loans
          </a>
        </div>
        <div className='menu-item px-3'  id="kt_activities2_toggle2">
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => AssignSuperVisor(cleaneridSingle, "assignSuper")}
          >
            Assign SuperVisor
          </a>
        </div>
      </div>
    </>
  )
}
