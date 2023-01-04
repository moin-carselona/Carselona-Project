import React from 'react'
import { CleanerstatusData, JobStatusData, timelotsData } from '../../../../consts/CommonData'
import {
    CleanerInterfaces,
    CustomerIntterfaces,
    InputData,
    SupervisorInterfaces
} from '../Interfaces'
interface SecondHeaders {
    handleChangeInputData: (event: InputData, name: string) => void
    setSelectedData: (event: any) => void
    SingleSelect: any
    filterationData: DataFilterationInterfaces
    payloads:{
        attendencedatefrom: Date | any,
        attendencedateto: Date | any,
        cleanerid: number | string,
        timeslotid: number | string,
        cleanerstatus: number | string | null,
        jobstatus: number | string,
        reportid : number | string,
        customerid: number | string,
        radius: number | string,
        supervisorId: number | string,
    }
}
interface DataFilterationInterfaces {
    AllCleanerList: CleanerInterfaces
    AllCustomerList: CustomerIntterfaces
    AllSuperListData: SupervisorInterfaces
}
const SecondHeader: React.FC<SecondHeaders> = ({payloads,  handleChangeInputData, filterationData, setSelectedData, SingleSelect }) => {
    // console.log('filterationData', filterationData);
    // console.log('SingleSelect ========', SingleSelect);
    return (
        <div className='w-100  d-flex flex-column justify-content-between mb-3  '>
            <div className='d-flex align-items-start justify-content-start mb-2 '>
                <div className='me-1 w-50'>
                    {timelotsData && (
                        <SingleSelect

                            handleChangeInputData={handleChangeInputData}
                            name="timeslotid"
                            refrence="Select Time"
                            setSelectedData={setSelectedData}
                            allDatafilter={timelotsData}
                            reference2={"timeslotids"}
                        ></SingleSelect>
                    )}
                </div>
                <div className='me-1 w-50'>
                    {filterationData?.AllCleanerList && (
                        <SingleSelect
                            handleChangeInputData={handleChangeInputData}
                            name="cleanerid"
                            refrence="Select Cleaner"
                            setSelectedData={setSelectedData}
                            allDatafilter={filterationData?.AllCleanerList}
                            reference2={null}

                        ></SingleSelect>
                    )}
                </div>
                <div className='me-1 w-50'>
                    {filterationData?.AllCustomerList && (
                        <SingleSelect
                            handleChangeInputData={handleChangeInputData}
                            name="customerid"
                            refrence="Select Customer"
                            setSelectedData={setSelectedData}
                            allDatafilter={filterationData?.AllCustomerList}
                            reference2={null}


                        ></SingleSelect>
                    )}
                </div>
           
            </div>
        
            
            <div className='d-flex align-items-center justify-content-start '>
            <div className='me-1 w-50'>
                    {filterationData?.AllSuperListData && (
                        <SingleSelect
                            handleChangeInputData={handleChangeInputData}
                            name="supervisorId"
                            refrence="Supervisor List"
                            setSelectedData={setSelectedData}
                            allDatafilter={filterationData?.AllSuperListData}
                            reference2={null}

                        ></SingleSelect>
                    )}
                </div>  
                <div className='me-1 w-50'>
                    {filterationData?.AllSuperListData && (
                        <SingleSelect
                            handleChangeInputData={handleChangeInputData}
                            name="jobstatus"
                            refrence="Job Status"
                            setSelectedData={setSelectedData}
                            allDatafilter={JobStatusData}
                            reference2={null}

                        ></SingleSelect>
                    )}
                </div>
          
                <div className='me-1 w-50'>
                    {filterationData?.AllSuperListData && (
                        <SingleSelect
                            handleChangeInputData={handleChangeInputData}
                            name="cleanerstatus"
                            refrence="Cleaner Status"
                            setSelectedData={setSelectedData}
                            allDatafilter={CleanerstatusData}
                            reference2={null}

                        ></SingleSelect>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SecondHeader
