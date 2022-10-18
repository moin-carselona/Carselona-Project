/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {MenuComponent} from '../../../../../_metronic/assets/ts/components'
import {ID, KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  id: ID
  data: any
}

const ActiveCleanerCell: FC<Props> = ({id, data}) => {
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  return (
    <>
      <a
        href='#'
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </a>
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
        style={{
          zIndex: '105',
          position: 'fixed',
          inset: '0px 0px auto auto',
          margin: '0px',
          transform: 'translate(-59px, 440px)',
        //   whiteSpace: 'nowrap',
        }}
      >
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>View Profile</a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>Deactivate</a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>Make Full Timer</a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>Availibility</a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>Assign/Change Slab</a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>Assign/Update Allowance</a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>Give Reward</a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>View Loans</a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3'>Assign Supervisors</a>
        </div>
      </div>

      {/* {isViewProfile && (
        <Dialog
          open={true}
          maxWidth={'xl'}
          onClose={handleCloseModal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <OnBoardingCleanerProfileView
            handleCloseModal={handleCloseModal}
            isProfileData={isProfileData}
          />
        </Dialog>
      )} */}
    </>
  )
}

export {ActiveCleanerCell}
