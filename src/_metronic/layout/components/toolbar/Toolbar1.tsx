/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { KTSVG } from '../../../helpers'
import { CreateAppModal } from '../../../partials'
import { useLayout } from '../../core'
import { DefaultTitle } from '../header/page-title/DefaultTitle'
import React from "react"
import GoogleAutocompleteAddress from '../../../../app/modules/AreaCleanerAvailibiltybyAddress/GoogleAutocompleteAddress/GoogleAutocompleteAddress'
const Toolbar1 = () => {
  React.useEffect(() => {
    const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "0")
    if (!onclickeBaseURLChange) {
      localStorage.setItem("ischecked", JSON.stringify(false))
    }
  }, [])
  const CardTemplate = useSelector<any>((state) => state?.NotificationActionReducer.CreatTemplate)
  const { classes } = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const [createTemplatesPop, setCreateTemplatesPopOpen] = useState<boolean>(false)
  const handleCreateTemplatesPop = () => {
    setCreateTemplatesPopOpen(!createTemplatesPop)
  }
  const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "0") ? JSON.parse(localStorage.getItem("ischecked") || "0") : false
  const [localKey, setlocalKey] = useState<boolean>(onclickeBaseURLChange || false)
  const changeStatusApi = () => {
    localStorage.setItem("ischecked", JSON.stringify(!localKey))
    const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "0")
    setlocalKey(onclickeBaseURLChange)
  }
  React.useEffect(() => {
    if (localKey) {
      localStorage.setItem("API", JSON.stringify(true))
    } else {
      if (window.location.origin.includes("3011")) {
        localStorage.setItem("API", JSON.stringify(false))
        const stats = JSON.parse(localStorage.getItem("API") || "0")
      }
      else {
        localStorage.setItem("API", JSON.stringify(true))
        const stats = JSON.parse(localStorage.getItem("API") || "0")
        // console.log('true', stats);
      }
    }
  }, [localKey])
  const urlEndPoint = window.location.pathname.split("/")
  {
    urlEndPoint[urlEndPoint.length - 1] === "area-wise-cleaner" &&
    <div className='me-4'>
      <GoogleAutocompleteAddress></GoogleAutocompleteAddress>
    </div>
  }
  // console.log('urlEndPoint', urlEndPoint[urlEndPoint.length - 1]);
  // console.log('===========================================global menu ', "moin-moin-moin-moin-moin-moin-moin-moin-moin-");
  return (
    <>
      <div className='toolbar' id='kt_toolbar'>
        <div
          id='kt_toolbar_container'
          className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
        >
          <DefaultTitle />
          <div className='d-flex align-items-center py-1'>
            {/* area-wise-cleaner cleaner list seacrh box ======================================================  */}
            {
              urlEndPoint[urlEndPoint.length - 1] === "area-wise-cleaner" &&
              <div className='me-4'>
                <GoogleAutocompleteAddress></GoogleAutocompleteAddress>
              </div>
            }
            {/* area-wise-cleaner cleaner list seacrh box ========================================================= */}
            {/* to toggle running api into test admin or live admin==============================================   */}
            <div className='me-2'>
              {/* begin::Menu */}
              {
                !window.location.origin.includes("3011") ? <></> : <a
                  // href='#'
                  className={`btn btn-sm btn-flex btn-light btn-${localKey ? "danger" : "primary"} fw-bolder`}
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                  data-kt-menu-flip='top-end'
                  onClick={changeStatusApi}
                >
                  <i className="bi bi-globe"></i>
                  {localKey ? "ADMIN-API-RUNNING" : "TEST-ADMIN-API-RUNNING"}
                </a>
              }
            </div>
            {/* to toggle running api into test admin or live admin ==================================================  */}
            {/* Notification template form page ===================================================================  */}
            {
              CardTemplate == "create_notify_template" ?
                <a
                  className='btn btn-sm btn-primary cursor-pointer'
                  id='kt_toolbar_primary_button'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_create_app'
                  onClick={() => handleCreateTemplatesPop()}
                >
                  Create Templates
                </a> : ""
            }
            {/* {
              CardTemplate == "create_notify_template" ?
                <a
                  className='btn btn-sm btn-primary cursor-pointer'
                  id='kt_toolbar_primary_button'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_create_app'
                  onClick={() => handleCreateTemplatesPop()}
                >
                  Create Templates
                </a> :
                <a
                  className='btn btn-sm btn-primary cursor-pointer'
                  id='kt_toolbar_primary_button'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_create_app'
                  onClick={() => setShowCreateAppModal(true)}
                >
                  Create
                </a>
            } */}
            {/* end::Button */}
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Container */}
      </div>
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} CardTemplate={CardTemplate} handleCreateTemplatesPop={handleCreateTemplatesPop} createTemplatesPop={createTemplatesPop} />
    </>
  )
}
export { Toolbar1 }
