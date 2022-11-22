import React from 'react'
import { DataRow } from '../Interfaces'
export interface SecondHeaders {
    AllCleanerListData: DataRow
    setSelectedData: any
    SingleSelect: any
}
const SecondHeader: React.FC<SecondHeaders> = ({ AllCleanerListData, setSelectedData, SingleSelect, }) => {
    return (
        <div className='w-100   d-flex justify-content-between mb-3 '>
            <div className='d-flex align-items-start justify-content-start '>
                <div className='me-1'>
                    {AllCleanerListData && (
                        <SingleSelect
                            refrence="Select Cleaner"
                            setSelectedData={setSelectedData}
                            allDatafilter={AllCleanerListData}
                        ></SingleSelect>
                    )}
                </div>
                <div className='me-1'>
                    {AllCleanerListData && (
                        <SingleSelect
                            refrence="Select Customer"
                            setSelectedData={setSelectedData}
                            allDatafilter={AllCleanerListData}
                        ></SingleSelect>
                    )}
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-start '>
                <div className='me-1 w-25'>
                    {AllCleanerListData && (
                        <SingleSelect
                            refrence="Cleaner Status"
                            setSelectedData={setSelectedData}
                            allDatafilter={AllCleanerListData}
                        ></SingleSelect>
                    )}
                </div>
                <div className='me-1 w-25'>
                    {AllCleanerListData && (
                        <SingleSelect
                            refrence="Job Status"
                            setSelectedData={setSelectedData}
                            allDatafilter={AllCleanerListData}
                        ></SingleSelect>
                    )}
                </div>
                <div className='me-1 w-25'>
                    {AllCleanerListData && (
                        <SingleSelect
                            refrence="Attendance Status"
                            setSelectedData={setSelectedData}
                            allDatafilter={AllCleanerListData}
                        ></SingleSelect>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SecondHeader
