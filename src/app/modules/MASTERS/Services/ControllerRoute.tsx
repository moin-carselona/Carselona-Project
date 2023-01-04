import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { KTCardBody } from '../../../../_metronic/helpers'
import ServicesMain from './ServicesMain'
// import { KTCardBody } from '../../_metronic/helpers'
// import ReactDataTable from '../../../Reuse/All Societies/societyController'
const ControllerRoute: FC = () => {
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
<ServicesMain></ServicesMain>

        </KTCardBody>
    )
}
export default ControllerRoute
