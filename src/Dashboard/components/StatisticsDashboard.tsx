/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch } from 'react-redux'
import { KTSVG, toAbsoluteUrl } from '../../_metronic/helpers'
import { Dropdown1 } from '../../_metronic/partials'
type Props = {
  className: string
  items?: number
  Active_Subscriptions: any
  New_Vehicle_Onboards: any
  Reactivated_Subscription: any
  Same_Day_Started_Subscriptions: any
  Renewed_Subscription: any
  Upcoming_Subscriptions: any
  Pause_Subscriptions: any
  Future_Pause: any
  Future_Inactive: any
  Inactive_Subscriptions: any
}
const StatisticsDashboard: React.FC<Props> = ({ className, Active_Subscriptions, New_Vehicle_Onboards, Reactivated_Subscription, Same_Day_Started_Subscriptions, Renewed_Subscription, Upcoming_Subscriptions,
  Pause_Subscriptions, Future_Pause, Future_Inactive, Inactive_Subscriptions }) => {
  const dispatch = useDispatch()
  const SetRefToStore = (refs :string, data :any) => {
    console.log('data', data);
    // console.log('refs', refs);
    // dispatch({ type: "REFS", payload: refs })
    dispatch({type : 'ACTIVE_STATE', payload : data})
    dispatch({type : 'LISTDRAWER', payload : "activeStats"})
  }
  return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Current</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-0'>
        {/* begin::Item */}
        {/* ================================= */}
        <div className='d-flex align-items-center  rounded  mb-7 col-xl-12'>
          <div id="kt_activities2_toggle2" onClick={()=>SetRefToStore("activeSubs", Active_Subscriptions)} className='d-flex align-items-center bg-light-warning rounded p-3 mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Active Subscriptions
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Active_Subscriptions?.length}</span>
          </div>
          <div     id="kt_activities2_toggle2" onClick={()=>SetRefToStore("sameDaysSubs", Same_Day_Started_Subscriptions)}      className='d-flex align-items-center bg-light-warning rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Same Day Started
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Same_Day_Started_Subscriptions?.length}</span>
          </div>
          <div     id="kt_activities2_toggle2" onClick={()=>SetRefToStore("inactiveSubs", Inactive_Subscriptions)}      className='d-flex align-items-center bg-light-warning rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Inactive Subscriptions
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Inactive_Subscriptions?.length}</span>
          </div>
          {/* end::Lable */}
        </div>
        {/* ================================= */}
        <div className='d-flex align-items-center  rounded  mb-7 col-xl-12'>
          <div     id="kt_activities2_toggle2" onClick={()=>SetRefToStore("pauseSubs", Pause_Subscriptions)}      className='d-flex align-items-center bg-light-success rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Pause Subscriptions
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Pause_Subscriptions?.length}</span>
          </div>
          <div     id="kt_activities2_toggle2" onClick={()=>SetRefToStore("upcomingSubs", Upcoming_Subscriptions)}      className='d-flex align-items-center bg-light-success rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Upcoming Subscriptions
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Upcoming_Subscriptions?.length}</span>
          </div>
          <div     id="kt_activities2_toggle2" onClick={()=>SetRefToStore("newVehicleSubs", New_Vehicle_Onboards)}      className='d-flex align-items-center bg-light-success rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                New Vehicle Onboards
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{New_Vehicle_Onboards?.length}</span>
          </div>
          {/* end::Lable */}
        </div>
        {/* ================================= */}
        <div className='d-flex align-items-center  rounded  mb-7 col-xl-12'>
          <div    id="kt_activities2_toggle2" onClick={()=>SetRefToStore("renewedSubs", Renewed_Subscription)}       className='d-flex align-items-center bg-light-danger rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Renewed Subscription
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Renewed_Subscription?.length}</span>
          </div>
          <div    id="kt_activities2_toggle2" onClick={()=>SetRefToStore("reactivateSubs", Reactivated_Subscription)}       className='d-flex align-items-center bg-light-danger rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Reactivated Subscription
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Reactivated_Subscription?.length}</span>
          </div>
          <div    id="kt_activities2_toggle2" onClick={()=>SetRefToStore("futurePauseSubs", Future_Pause)}       className='d-flex align-items-center bg-light-danger rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Future Pause
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Future_Inactive?.length}</span>
          </div>
          {/* end::Lable */}
        </div>
        {/* ================================= */}
        <div className='d-flex align-items-center  rounded  mb-7 col-xl-12'>
          <div     id="kt_activities2_toggle2" onClick={()=>SetRefToStore("futureInactiveSubs", Future_Inactive)}      className='d-flex align-items-center bg-light-success rounded p-3  mb-2 me-2 col-xl-4'>
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/general/gen045.svg' className='svg-icon-1 svg-icon-success svg-icon-2x' />
            </span>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Future Inactive
              </a>
            </div>
            <span className='fw-bold text-danger py-1'>{Future_Pause?.length}</span>
          </div>
          {/* end::Lable */}
        </div>
        {/* ================================= */}
      </div>
    </div>
  )
}
export default StatisticsDashboard
