/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useMutation, useQueryClient} from 'react-query'
import {
  Dialog,
  // Modal,
  // Typography
} from '@mui/material'
import { useCallback } from 'react'

import axios from 'axios'

import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteUser} from '../../core/_requests'
// import AssignerCleanerComponent from '../../../../../stats/StatsItems/AssignerCleanerComponent'
import UpdateSubscriptionComponent from '../../../../../stats/StatsItems/UpdateSubscriptionComponent'
import ChangeCleanerComponent from '../../../../../stats/StatsItems/ChangeCleanerComponent'
import ChangTimeSlotComponent from '../../../../../stats/StatsItems/ChangeTimeSlotComponent'
import CleanerAvailability from '../../../../../cleaner/cleaner-items/CleanerAvailability'
import { useDispatch } from 'react-redux'

type Props = {
  id: ID
  data: any
  referece:string
}

const UserActionsCell: FC<Props> = ({referece, id, data}) => {
  const dispatch = useDispatch()
  // console.log('userACtion id', id);
  const {setItemIdForUpdate} = useListView()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [filteredData, setFilteredData] = useState<any>([])
  const [open, setModalOpen] = useState(false)

  const [isStatusOpen, setStatusOpen] = useState(false)
  const [assignCleanerOpen, setAssignCleanerOpen] = useState(false)
  const [timeSlotOpen, setTimeSlotOpen] = useState(false)

  const [selectedId, setId] = useState('')

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const deleteItem = useMutation(() => deleteUser(id), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
    },
  })

  const updateStatus = (id: ID) => {
    data.filter((item: any) => {
      if (item.id === id) {
        setFilteredData(item)
      }
    })
    let filteredData = data.filter((item: any) => item.id === id)[0]

    const formData = new FormData()
    formData.append('vehicleid', filteredData.vehicleid)
    formData.append('required_after_cleaning_photos', filteredData.required_after_cleaning_photos)

    axios
      .post('https://adminapi.carselonadaily.com/api/admin/updateVehicleImage', formData)
      .then((response) => {
        alert('Vehicle updated successfully!')
      })
      .catch((error) => {
        alert('Something went wrong!')
      })
  }

  const handleEditModal = (id: any) => {
    // console.log('order id from UserActonsCell', id);
    dispatch({type:"ASSIGN_CLEANER_ID", payload: id})
    // setModalOpen(true)
    let filteredData = data.filter((item: any) => item.id === id)[0]
    console.log('Assign cleaner Details', filteredData);
    // console.log('data assin clean', data);
    setId(id)
    navigate('assign-cleaner-view',{
      state: {
        filteredData,
        referece
      }
    })
  }

  const handleAssignCleanerOpen = (id: any) => {
    console.log('id moin assign', id);
    console.log("assigned moin ")
    setAssignCleanerOpen(true)
    setId(id)
  }

  const handleStatusOpen = (id: any) => {
    setStatusOpen(true)
    setId(id)
  }

  const handleTimeSlotOpen = (id: any) => {
    setTimeSlotOpen(true)
    setId(id)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setStatusOpen(false)
    setAssignCleanerOpen(false)
    setTimeSlotOpen(false)
  }

  return (
    <>
      <button
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </button>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
        style={{
          zIndex: '105',
          position: 'fixed',
          inset: '0px 0px auto auto',
          margin: '0px',
          transform: 'translate(-59px, 440px)',
        }}
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link  px-3'>Get Link</a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}

        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={async () => await deleteItem.mutateAsync()}
          >
            View
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            // href='_blank'
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleEditModal(id)}
          >
            Assign Cleaner Active
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleAssignCleanerOpen(id)}
          >
            Change Cleaner
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleTimeSlotOpen(id)}
          >
            Change Time slot
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleStatusOpen(id)}
          >
            Change Status
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3  text-capitalize'
            data-kt-users-table-filter='delete_row'
            onClick={async () => updateStatus(id)}
          >
            change cleaned vehicle image status
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}

      {open && (
        <Dialog
          maxWidth={'xl'}
          open={true}
          onClose={handleCloseModal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          {/* <AssignerCleanerComponent selectedId={selectedId} /> */}
          <CleanerAvailability
            subscriptionId={id}
            distenceRadius={'10'}
            handleCloseIconModal={handleCloseModal}
          />
        </Dialog>
      )}

      {isStatusOpen && (
        <Dialog
          open={true}
          maxWidth={'xl'}
          onClose={handleCloseModal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <UpdateSubscriptionComponent selectedId={selectedId} />
        </Dialog>
      )}

      {assignCleanerOpen && (
        <Dialog
          open={true}
          maxWidth={'xl'}
          onClose={handleCloseModal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <ChangeCleanerComponent selectedId={selectedId} />
        </Dialog>
      )}

      {timeSlotOpen && (
        <Dialog
          open={true}
          maxWidth={'xl'}
          onClose={handleCloseModal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <ChangTimeSlotComponent selectedId={selectedId} />
        </Dialog>
      )}
    </>
  )
}

export {UserActionsCell}
