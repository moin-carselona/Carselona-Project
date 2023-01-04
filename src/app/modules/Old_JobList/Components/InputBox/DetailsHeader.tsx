import React from 'react'
interface DetailHaderss {
    activeCleanersCount: number;
    inactiveCleanersCount: number;
    earlyJobsCount: number;
    lateJobsCount: number;
    ontimeJobsCount: number;
    overdueJobsCount: number;
    inRadiusCount: number;
    outRadiusCount: number;
    notAtHomeCount: number;
    reportedStatusCount: number;
}
interface DetailsHeaders {
    StatisticsData: DetailHaderss
}
const DetailsHeader: React.FC<DetailsHeaders> = ({ StatisticsData }) => {
    return (
        <div className='w-100   d-flex justify-content-between mb-3 '>
            <div className='d-flex align-items-start justify-content-start '>
                <div className='me-1 ' id="kt_activities_toggle2">
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-danger height-50'>
                        INACTIVE: {StatisticsData?.inactiveCleanersCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-warning height-50'>
                        REPORTED: {StatisticsData?.reportedStatusCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-success height-50'>
                        ACTIVE: {StatisticsData?.activeCleanersCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-warning height-50'>
                        EARLY JOBS:{StatisticsData?.earlyJobsCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-info height-50'>
                        LATE JOBS:{StatisticsData?.lateJobsCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-success height-50'>
                        ON TIME JOBS: {StatisticsData?.ontimeJobsCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-danger height-50'>
                        OVER DUE JOBS: {StatisticsData?.overdueJobsCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-success height-50'>
                        NEAR 40M RADIUS ATTN: {StatisticsData?.inRadiusCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-danger height-50'>
                        OUTSIDE RADIUS ATTN: {StatisticsData?.outRadiusCount}
                    </button>
                </div>
                <div className='me-1'>
                    <button style={{ width: "100%", fontSize: "11px" }} className='btn btn-sm btn-danger height-50'>
                        NOT AT HOME: {StatisticsData?.notAtHomeCount}
                    </button>
                </div>
            </div>
            {/* <div className='d-flex align-items-center justify-content-start '>
            </div> */}
        </div>
    )
}
export default DetailsHeader
