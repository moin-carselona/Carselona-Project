import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import ReactDataTable from '../../../Reuse/React Data Tables/ReactDataTable'
import { KTCardBody } from '../../../_metronic/helpers'
const ReactTables: FC = () => {
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
        <ReactDataTable></ReactDataTable>
        </KTCardBody>
    )
}
export default ReactTables
