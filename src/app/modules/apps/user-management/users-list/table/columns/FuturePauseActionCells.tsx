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

type Props = {
  id: ID
}

const FuturePauseActionCells: FC<Props> = ({ id }) => {
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
            onClick={() => navigate(`assign-cleaner/${id}`)}>
            Assign Cleaner
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-warning text-white'>
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
    </>
  )
}

export { FuturePauseActionCells }
