/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../_metronic/helpers'
import { ChatBox } from '../../modules/TicketsList/ChatBox'
import DialogBox from '../../modules/TicketsList/DialogBox/DialogBox'
const MessengerChatBoxDrawer: FC = () => {
  const TicketData = useSelector((store: any) => store.ChatReducers.TicketData)
  const [PopOpenClose, setPopOpenClose] = React.useState(false)
  const TicketCustomerInformationPopupBTN = () => {
    setPopOpenClose(!PopOpenClose)
  }
  return (
    <div
      id='kt_drawer_chat2'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='chat'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'300px', 'md': '500px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_drawer_chat2_toggle2'
      data-kt-drawer-close='#kt_drawer_chat2_close'
    >
      <div className='card w-100 rounded-0' id='kt_drawer_chat2_messenger'>
        <div className='card-header pe-5' id='kt_drawer_chat2_messenger_header'>
          <div className='card-title'>
            <div className='d-flex justify-content-center flex-column me-3'>
              <Link to={"/"}>
                {/* <a href='#' className='fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1'> */}
                  {/* Carselona Daily - Chat */}
                  {TicketData?.customername ? TicketData.customername?.toUpperCase() : "No Name".toUpperCase()}   ( {TicketData?.updatedAt?.toUpperCase()} )
                {/* </a> */}
              </Link>
              {/* <div className='mb-0 lh-1'>
                <span className='badge badge-success badge-circle w-10px h-10px me-1'></span>
                <span className='fs-7 fw-bold text-gray-400'>Active</span>
              </div> */}
            </div>
          </div>
          <div className='card-toolbar'>
            <div className='me-2'>
              <button
                className='btn btn-sm btn-icon btn-active-light-primary'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <i className='bi bi-three-dots fs-3' onClick={TicketCustomerInformationPopupBTN}></i>
              </button>
            </div>
            <div className='btn btn-sm btn-icon btn-active-light-primary' id='kt_drawer_chat2_close'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
            </div>
          </div>
        </div>
        <ChatBox isDrawer={true}></ChatBox>
        {PopOpenClose && <DialogBox handleTicketlistPopform={TicketCustomerInformationPopupBTN} PopUpPostFormOpen={PopOpenClose} ParentData={null} reference={"ChatGlobal"}/>}
      </div>
    </div>
  )
}
export { MessengerChatBoxDrawer }
