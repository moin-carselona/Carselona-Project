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
  React.useEffect(()=>{
    const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "0")
    if(!onclickeBaseURLChange){
      console.log("checking when is chkekd not inlocal")
    localStorage.setItem("ischecked", JSON.stringify(false))

    }

  },[])
  const CardTemplate = useSelector<any>((state) => state?.NotificationActionReducer.CreatTemplate)
  const { classes } = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const [createTemplatesPop, setCreateTemplatesPopOpen] = useState<boolean>(false)
  const handleCreateTemplatesPop = () => {
    setCreateTemplatesPopOpen(!createTemplatesPop)
  }
  const onclickeBaseURLChange =  JSON.parse(localStorage.getItem("ischecked") || "0") ? JSON.parse(localStorage.getItem("ischecked") || "0") : false
  // console.log('onclickeBaseURLChange toolbar', onclickeBaseURLChange);

  const [localKey, setlocalKey] = useState<boolean>(onclickeBaseURLChange||false)
  // console.log('localKey toolbar', localKey);
  const changeStatusApi = () => {
    // // console.log('localKey btn', localKey);
    // localStorage.setItem("API", JSON.stringify(!localKey))
    localStorage.setItem("ischecked", JSON.stringify(!localKey))
    const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "0")
    // console.log('onclickeBaseURLChange', onclickeBaseURLChange);
    setlocalKey(onclickeBaseURLChange)
    
  }
  React.useEffect(() => {
    // console.log(3,localKey)\
    // console.log('=>>>>>> window.location .origin', window.location.origin, '>>>>>>>>>>>>>', window.location.origin.includes("3011"))




   // console.log("main url ", window.location.origin)
   if(localKey){
    localStorage.setItem("API", JSON.stringify(true))
    
  }else{
    if (window.location.origin.includes("3011")) {
      // console.log('window.location.origin', window.location.origin);
      localStorage.setItem("API", JSON.stringify(false))
      const stats = JSON.parse(localStorage.getItem("API") || "0")
      console.log('false', stats);
    }
    else {
      localStorage.setItem("API", JSON.stringify(true))
      // console.log('window.location.origin', window.location.origin);
      const stats = JSON.parse(localStorage.getItem("API") || "0")
      console.log('true', stats);
    }
  }













  }, [localKey])
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
                {localKey ? "AdminApi" : "TestAdminApi"}
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
