import React from 'react'
import { DataRow } from '../Interfaces'
export interface DetailsHeaders {
    AllCleanerListData: DataRow
  
}
const DetailsHeader: React.FC<DetailsHeaders> = ({ AllCleanerListData }) => {
    return (
        <div className='w-100   d-flex justify-content-between mb-3 '>
            <div className='d-flex align-items-start justify-content-start '>
                <div className='me-1 ' id="kt_activities_toggle2">
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-danger height-50'>
                    INACTIVE: 652
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-warning height-50'>
                    REPORTED: 55
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-success height-50'>
                    ACTIVE: 0
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-warning height-50'>
                    EARLY JOBS:74
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-info height-50'>
                    LATE JOBS:257
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-success height-50'>
                    ON TIME JOBS: 246
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-danger height-50'>
                    OVER DUE JOBS: 20
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-success height-50'>
                    NEAR 40M RADIUS ATTN: 245
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-danger height-50'>
                    OUTSIDE RADIUS ATTN: 386
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-danger height-50'>
                    NOT AT HOME: 16
                    </button>
                </div>
           
            </div>
            {/* <div className='d-flex align-items-center justify-content-start '>
            </div> */}
        </div>
    )
}
export default DetailsHeader
