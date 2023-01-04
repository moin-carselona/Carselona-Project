import React, { FC } from 'react'
import { KTCardBody } from '../../_metronic/helpers'
import DashboardWrapper from '../Dashboard'
const DashboardRoute: FC = () => {
  return (
    <KTCardBody className='card py-4 mt-12'>
      <DashboardWrapper></DashboardWrapper>
    </KTCardBody>
  )
}
export default DashboardRoute
