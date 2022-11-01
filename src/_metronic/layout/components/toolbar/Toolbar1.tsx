/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { KTSVG } from '../../../helpers'
import { CreateAppModal } from '../../../partials'
import { useLayout } from '../../core'
import { DefaultTitle } from '../header/page-title/DefaultTitle'
import React from "react"
const Toolbar1 = () => {
  const CardTemplate = useSelector<any>((state) => state?.NotificationActionReducer.CreatTemplate)
  const { classes } = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const [createTemplatesPop, setCreateTemplatesPopOpen] = useState<boolean>(false)
  const handleCreateTemplatesPop = () => {
    setCreateTemplatesPopOpen(!createTemplatesPop)
  }
  // const [localKey, setlocalKey] = useState<boolean>(false)
  // console.log('localKey', localKey);
  const changeStatusApi = () => {
    // // console.log('localKey btn', localKey);
    // localStorage.setItem("API", JSON.stringify(!localKey))
    let x = true
    localStorage.setItem("ischecked", JSON.stringify(!x))
    const is = JSON.parse(localStorage.getItem("ischecked") || "")
    console.log('xxxxxxxxxxxxxxxxx', is);
  }
  React.useEffect(() => {
    // console.log(3,localKey)
    // console.log("main url ", window.location.origin)
    if (!window.location.origin.includes("carselona")) {
      console.log('window.location.origin', window.location.origin);
      localStorage.setItem("API", JSON.stringify(false))
      const stats = JSON.parse(localStorage.getItem("API") || "")
      console.log('false', stats);
    }
    else {
      
      localStorage.setItem("API", JSON.stringify(true))
      const stats = JSON.parse(localStorage.getItem("API") || "")
      console.log('true', stats);
    }
  }, [])
  return (
    <>
      <div className='toolbar' id='kt_toolbar'>
        {/* begin::Container */}
        <div
          id='kt_toolbar_container'
          className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
        >
          <DefaultTitle />
          {/* begin::Actions */}
          <div className='d-flex align-items-center py-1'>
            {/* begin::Wrapper */}
            <div className='me-4'>
              {/* begin::Menu */}
              <a
                href='#'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTSVG
                  path='/media/icons/duotune/general/gen031.svg'
                  className='svg-icon-5 svg-icon-gray-500 me-1'
                />
                Filter
              </a>
              {/* end::Menu */}
            </div>
            <div className='me-4'>
              {/* begin::Menu */}
              <a
                href='#'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
                onClick={changeStatusApi}
              >
                <KTSVG
                  path='/media/icons/duotune/general/gen031.svg'
                  className='svg-icon-5 svg-icon-gray-500 me-1'
                />
                {/* {localKey ? "AdminAPI" : "TestAPI"} */}
              </a>
              {/* end::Menu */}
            </div>
            {/* end::Wrapper */}
            {/* begin::Button */}
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
            }
            {/* end::Button */}
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Container */}
      </div>
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} CardTemplate={CardTemplate} handleCreateTemplatesPop={handleCreateTemplatesPop} createTemplatesPop={createTemplatesPop} />
      {/* {createTemplatesPop && <DialogBox handleCreateTemplatesPop={handleCreateTemplatesPop} />} */}
    </>
  )
}
export { Toolbar1 }
