import React, {useState} from 'react'
import {FC, useEffect} from 'react'
import {MenuComponent} from '../../../../../_metronic/assets/ts/components'
import {ID, KTSVG} from '../../../../../_metronic/helpers'
import {getCleanerProfile, makeActiveCleaner, onBordingGetProfile} from '../../api'
import {toast} from 'react-toastify'
import {Dialog} from '@mui/material'
import OnBoardingCleanerProfileView from './OnBoardingCleanerProfileView'

type Props = {
  id: ID
  data: any
  createdAtId: any
}

const OnBoardingPendingCell: FC<Props> = ({id, data, createdAtId}) => {
  const [isViewProfile, setViewProfile] = useState(false)
  const [isProfileData, setProfileData] = useState()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const loadData = async () => {
    const onBordingGetProfileData = await onBordingGetProfile()
    // const getCleanerProfile =await getCleanerProfile(id)
    setProfileData(onBordingGetProfileData)
  }
  useEffect(() => {
    loadData()
  }, [])

  const handleActiveCleaner = async (id: any) => {
    const makeActiveCleanerData = await makeActiveCleaner(id)

    if (makeActiveCleanerData.status === 200) {
      toast.success(makeActiveCleanerData.msg)
    } else {
      toast.error(makeActiveCleanerData.msg || 'Not Found')
    }
  }
  const getCleanerProfileFullData = async () => {
    const getCleanerProfileData = await getCleanerProfile(id, createdAtId)
    console.log(getCleanerProfileData, 'getCleanerProfileData')
  }
  useEffect(() => {
    if (isViewProfile) {
      getCleanerProfileFullData()
    }
  }, [isViewProfile])

  const handleViewProfile = async () => {
    setViewProfile(true)
  }

  const handleCloseModal = () => {
    setViewProfile(false)
  }

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
          whiteSpace: 'nowrap',
        }}
      >
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={() => handleActiveCleaner(id)}>
            On Boarded
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={handleViewProfile}>
            Cleaner Profile
          </a>
        </div>
      </div>

      {isViewProfile && (
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
      )}
    </>
  )
}

export {OnBoardingPendingCell}
