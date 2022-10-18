/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { MenuComponent } from '../../../../../../../_metronic/assets/ts/components'
import { ID, KTSVG, QUERIES } from '../../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { deleteUser } from '../../core/_requests'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Dialog } from '@mui/material'
import React from 'react'
import AssignerCleanerComponent from '../../../../../stats/StatsItems/AssignerCleanerComponent'
import ChangeCleanerComponent from '../../../../../stats/StatsItems/ChangeCleanerComponent'

type Props = {
  id: ID
}

const RenewalActionCells: FC<Props> = ({ id }) => {
  const { setItemIdForUpdate } = useListView()
  const { query } = useQueryResponse()
  const queryClient = useQueryClient()
  const navigate = useNavigate();

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

  const handleSendNotification = (id: ID) => {
    // https://adminapi.carselonadaily.com/api/admin/renewalNotificationSubscription
    const formData = new FormData();
    formData.append('subscriptionId', String(id));
    axios.post('https://adminapi.carselonadaily.com/api/admin/renewalNotificationSubscription', formData).then(response => {
      alert("Notification sent successfully!");
    }).catch(error => {
      console.log(error);
      alert("Something went wrong!");
    })
  }

  const handleChangeStatus = (id: ID) => {
    const formData = new FormData();
    formData.append('orderid', String(id));

    axios.post('https://adminapi.carselonadaily.com/api/admin/subscriptionordercomplete', formData).then(response => {
      alert("Order updated successfully!");
      window.location.reload();
    }).catch(error => {
      console.log(error);
      alert("Something went wrong!");
    })
  }

  const handleAssignCleanerOpen = (id: any) => {
    setId(id);
    setAssignCleanerOpen(true);
  }

  const handleChangeCleanerOpen = (id: any) => {
    setId(id);
    setChangeCleanerOpen(true);
  }


  const handleCloseModal = () => {
    setAssignCleanerOpen(false)
    setChangeCleanerOpen(false)
  }

  const [isAssignCleanerOpen, setAssignCleanerOpen] = React.useState(false);
  const [changeCleanerOpen, setChangeCleanerOpen] = React.useState(false);
  const [selectedId, setId] = React.useState("");

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
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-danger text-white'>
            Get Link
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-warning text-white'
            onClick={() => handleSendNotification(id)}>
            Send Notification
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-success text-white'
            onClick={() => handleAssignCleanerOpen(id)}>
            Assign Cleaner
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-warning text-white'
            onClick={() => handleChangeCleanerOpen(id)}>
            Change Cleaner
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-warning text-white'
            onClick={() => handleChangeStatus(id)}>
            Complete
          </a>
        </div>
      </div>

      {isAssignCleanerOpen && <Dialog
        open={true}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AssignerCleanerComponent selectedId={selectedId} />
      </Dialog>}

      {changeCleanerOpen && <Dialog
        open={true}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ChangeCleanerComponent selectedId={selectedId} />
      </Dialog>}
    </>
  )
}

export { RenewalActionCells }
