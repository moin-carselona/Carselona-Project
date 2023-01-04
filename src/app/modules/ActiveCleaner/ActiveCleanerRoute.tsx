import React, {FC, useCallback, useEffect, useMemo, useState} from 'react'
import {KTCardBody} from '../../../_metronic/helpers'
// import { KTCardBody } from '../../_metronic/helpers'
// import ReactDataTable from '../../../Reuse/All Societies/societyController'
import ActiveCleaner from './ActiveCleaners'
const ActiveCleanerRoute: FC = () => {

  
  // React.useEffect(() => {
  //   const handleTabClose = (event:any) => {
  //     event.preventDefault();
  //     const urlEndPoint = window.location.pathname.split("/")
  //     !urlEndPoint[urlEndPoint?.length-1] && localStorage.setItem("oldjob", JSON.stringify([]))
      

  //     // return (event.returnValue = 'Are you sure you want to exit?');
  //   };

  //   window.addEventListener('beforeunload', handleTabClose);

  //   return () => {
  //     const urlEndPoint = window.location.pathname.split("/")

  //     !urlEndPoint[urlEndPoint?.length-1] && localStorage.setItem("oldjob", JSON.stringify([]))

  //     window.removeEventListener('beforeunload', handleTabClose);
  //   };
  // }, []);
  const [isLoading, setIsloading] = useState(false)
  if (isLoading) {
    return (
      <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
        <div className='spinner-border mr-15' role='status'></div>
        <h4 className='fw-bold'>Loading...</h4>
      </div>
    )
  }
  return (
    <KTCardBody className='card py-4'>
      <ActiveCleaner></ActiveCleaner>
    </KTCardBody>
  )
}
export default ActiveCleanerRoute
