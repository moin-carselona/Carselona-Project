/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { MenuComponent } from '../../../../../../../_metronic/assets/ts/components'
import { ID, KTSVG, QUERIES } from '../../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { deleteUser } from '../../core/_requests'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import axios from 'axios'
import { Dialog, Drawer } from '@mui/material'
import ChangeStatusComponent from './ChangeStatusComponent'
import ChatComponent from '../../components/common/ChatComponent'
import "./style.css";

type Props = {
  id: ID,
  data: any
}

const InactiveActionColumns: FC<Props> = ({ id, data }) => {
  const { setItemIdForUpdate } = useListView()
  const { query } = useQueryResponse()
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = React.useState<any>([]);

  const [isStatusOpen, setStatusOpen] = React.useState(false);
  const [isChatOpen, setChatOpen] = React.useState(false);
  const [selectedId, setId] = React.useState("");
  const [chatData, setChatData] = React.useState(Object);
  const [userData, setUserData] = React.useState(Object);

  useEffect(() => {
    MenuComponent.reinitialization();
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
        setFilteredData(item);
      }
    })
    let filteredData = data.filter((item: any) => item.id === id)[0];

    const formData = new FormData();
    formData.append('vehicleid', filteredData.vehicleid);
    formData.append('required_after_cleaning_photos', filteredData.required_after_cleaning_photos);

    axios.post('https://adminapi.carselonadaily.com/api/admin/updateVehicleImage', formData).then(response => {
      alert("Vehicle updated successfully!");
    }).catch(error => {
      console.log(error);
      alert("Something went wrong!");
    })
  }

  const handleStatusOpen = (id: any) => {
    setId(id);
    setStatusOpen(true);
    data.filter((item: any) => {
      if (item.id === id) {
        setFilteredData(item);
      }
    })

    let filteredData = data.filter((item: any) => item.id === id)[0];
    setUserData(filteredData);
  }

  const handleCloseModal = () => {
    setStatusOpen(false)
  }

  const handleDrawerOpen = (id: any) => {
    const formData = new FormData();

    formData.append("subscriptionid", "12465");
    formData.append("cusumerud", id)
    formData.append("ticketid", "0")

    axios.post('https://adminapi.carselonadaily.com/api/admin/TicketByInactiveSubscription', formData)
      .then(response => {
        setChatData(response.data)
      }).catch(error => {
        alert("Something went wrong")
        console.log(error)
      })

    let filteredData = data.filter((item: any) => item.id === id)[0];
    setUserData(filteredData);
    setChatOpen(true)
    setId(id)
  }

  const handleDrawerClose = () => {
    setChatOpen(false)
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
          <a className='menu-link px-3 bg-danger text-white'
            onClick={() => handleStatusOpen(id)}>
            Change Status
          </a>
        </div>

        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-danger text-white' onClick={() => handleDrawerOpen(id)}>
            Show Chats1
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}

      {isStatusOpen && <Dialog
        open={true}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ChangeStatusComponent selectedId={selectedId} />
      </Dialog>}

      {isChatOpen && <Drawer
        className="chat-drawer-component"
        anchor='right'
        open={true}
        onClose={handleDrawerClose}
      >
        <ChatComponent chatData={chatData && chatData.ticketreplies} userData={userData} />
      </Drawer>}
    </>
  )
}

export { InactiveActionColumns }
