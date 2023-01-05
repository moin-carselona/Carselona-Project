import React from 'react'
import { CleanerstatusData, JobStatusData, timelotsData } from '../../../../consts/CommonData'
import SingleSelectSearchCategory from '../../../../consts/SingleSelectSearchCategory'
import SingleSelectSearchDetails from '../../../../consts/SingleSelectSearchDetails'
import SingleSelectSearchTimeSlot from '../../../../consts/SingleSelectSearchTimeSlot'
import {
    CleanerInterfaces,
    CustomerIntterfaces,
    InputData,
    SupervisorInterfaces
} from '../Interfaces'
interface SecondHeaders {
    handleChangeInputData: (event: InputData, name: string) => void
    filterationData: DataFilterationInterfaces
}
interface DataFilterationInterfaces {
    AllCleanerList: CleanerInterfaces
    AllCustomerList: CustomerIntterfaces
    AllSuperListData: SupervisorInterfaces
}
const SecondHeader: React.FC<SecondHeaders> = ({ handleChangeInputData, filterationData }) => {
    // console.log('filterationData', filterationData);
    // console.log('SingleSelect ========', SingleSelect);
    return (
        <div className='w-100  d-flex flex-column justify-content-between mb-3  '>
            <div className='d-flex align-items-start justify-content-start mb-2 '>
                <div className='me-1 w-50'>
                    {timelotsData && (
                        <SingleSelectSearchTimeSlot
                            // handleChangeInputData, HeaderTitle, SelectData, DynamicKey,id, name , defaultData
                            handleChangeInputData={handleChangeInputData}
                            HeaderTitle="Select Time"
                            SelectData={timelotsData}
                            DynamicKey={"name"}
                            id={"id"}
                            name="timeslotid"
                            defaultData={{
                                label: "06AM-07AM",
                                value: "2",
                            }}
                        ></SingleSelectSearchTimeSlot>
                    )}
                </div>
                <div className='me-1 w-50'>
                    {filterationData?.AllCleanerList && (
                        // <SingleSelect
                        //     handleChangeInputData={handleChangeInputData}
                        //     name="cleanerid"
                        //     HeaderTitle="Select Cleaner"
                        //     setSelectedData={setSelectedData}
                        //     allDatafilter={filterationData?.AllCleanerList}
                        //     reference2={null}
                        // ></SingleSelect>
                        <SingleSelectSearchDetails
                            handleChangeInputData={handleChangeInputData}
                            HeaderTitle="Select Cleaner"
                            SelectData={filterationData?.AllCleanerList}
                            DynamicKey={"first_name"}
                            DynamicKey2={"last_name"}
                            DynamicKey3={"phone"}
                            id={"id"}
                            name="cleanerid"
                        ></SingleSelectSearchDetails>
                    )}
                </div>
                <div className='me-1 w-50'>
                    {filterationData?.AllCustomerList && (
                        // <SingleSelect
                        //     handleChangeInputData={handleChangeInputData}
                        //     name="customerid"
                        //     HeaderTitle="Select Customer"
                        //     setSelectedData={setSelectedData}
                        //     allDatafilter={filterationData?.AllCustomerList}
                        //     reference2={null}
                        // ></SingleSelect>
                        <SingleSelectSearchDetails
                            handleChangeInputData={handleChangeInputData}
                            HeaderTitle="Select Customer"
                            SelectData={filterationData?.AllCustomerList}
                            DynamicKey={"first_name"}
                            DynamicKey2={"last_name"}
                            DynamicKey3={"phone"}
                            id={"id"}
                            name="customerid"
                        ></SingleSelectSearchDetails>
                    )}
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-start '>
                <div className='me-1 w-50'>
                    {filterationData?.AllSuperListData && (
                        // <SingleSelect
                        //     handleChangeInputData={handleChangeInputData}
                        //     name="supervisorId"
                        //     refrence="Supervisor List"
                        //     setSelectedData={setSelectedData}
                        //     allDatafilter={filterationData?.AllSuperListData}
                        //     reference2={null}
                        // ></SingleSelect>
                        <SingleSelectSearchDetails
                            handleChangeInputData={handleChangeInputData}
                            HeaderTitle="Select Supervisor"
                            SelectData={filterationData?.AllSuperListData}
                            DynamicKey={"first_name"}
                            DynamicKey2={"last_name"}
                            DynamicKey3={"phone"}
                            id={"id"}
                            name="supervisorId"
                        ></SingleSelectSearchDetails>
                    )}
                </div>
                <div className='me-1 w-50'>
                    {filterationData?.AllSuperListData && (
                        <SingleSelectSearchCategory
                            // handleChangeInputData={handleChangeInputData}
                            // name="jobstatus"
                            // HeaderTitle="Job Status"
                            // setSelectedData={setSelectedData}
                            // allDatafilter={JobStatusData}
                            // reference2={null}
                            handleChangeInputData={handleChangeInputData}
                            HeaderTitle="Job Status"
                            SelectData={JobStatusData}
                            DynamicKey={"name"}
                            id={"id"}
                            name="jobstatus"
                        ></SingleSelectSearchCategory>
                    )}
                </div>
                <div className='me-1 w-50'>
                    {filterationData?.AllSuperListData && (
                        <SingleSelectSearchCategory
                            // handleChangeInputData={handleChangeInputData}
                            // name="cleanerstatus"
                            // HeaderTitle="Cleaner Status"
                            // setSelectedData={setSelectedData}
                            // allDatafilter={CleanerstatusData}
                            // reference2={null}
                            handleChangeInputData={handleChangeInputData}
                            HeaderTitle="Cleaner Status"
                            SelectData={CleanerstatusData}
                            DynamicKey={"name"}
                            id={"id"}
                            name="cleanerstatus"
                        ></SingleSelectSearchCategory>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SecondHeader
