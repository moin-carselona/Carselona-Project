import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import SingleSelectSearchCategory from '../../../consts/SingleSelectSearchCategory'
import { getAdminList, GetChatGeneralApiReplies, getSupervisorList, getTicketCategories, getTicketSources, updateAssignedUsers, updateCategory, updateSources, updateTicketStatus } from '../API'
import AssignForm from './AssignForm'
import "./PopCss.css"
import Updateform from './Updateform'
interface PayloadsAssignform {
    ticketid: number | string
    admins: any[]
    cleaners: any[]
    last_date_resolution: string
    last_date_feedback: string
    value: string | number
}
interface PayloadsUdateform {
    ticket_id: number | string
    status: number | string
    jobid: number | string
    value: string | number
}
const Customer_Information = ({ }: any) => {
    const ticketData = useSelector((store: any) => store.ChatReducers.TicketData)
    const [JobStatusData, setJobStatusData] = React.useState<any>([])
    const [AdminData, setAdminData] = React.useState<any>([])
    const [Supervisordata, setSupervisordata] = React.useState<any>([])
    const [TicketCategoryData, SetTicketCategoryData] = React.useState<any>([])
    const [loading, setloading2] = React.useState<any>([])
    const [SourcesData, SetSourcesData] = React.useState<any>([])
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    // console.log('localKeyCheck', localKeyCheck);
    const [PayloadsAssign, setPayloadsAssign] = React.useState<any>({
        ticketid: ticketData?.id,
        admins: [],
        cleaners: [],
        last_date_resolution: "",
        last_date_feedback: ""
    })
    const [PayloadsUpdate, setPayloadsUpdate] = React.useState<any>({
        ticket_id: ticketData?.id,
        status: 0,
        jobid: 0,
    })
    const [PayloadsStatus, setPayloadsStatus] = React.useState<any>({
        ticketid: ticketData?.id,
        categoryid: 0,
        source_id: 0,
    })
    // console.log('PayloadsUpdate', PayloadsUpdate);
    // console.log('PayloadsAssign', PayloadsAssign);
    React.useEffect(() => {
        async function invoked() {
            const getticketrepliesData = await GetChatGeneralApiReplies({ "ticketid": ticketData?.id }, localKeyCheck, setloading2)
            setJobStatusData(getticketrepliesData?.data?.ticket?.customerLastSubscription?.attendanceList)
            // console.log('getticketrepliesData', getticketrepliesData);
            const adminsData = await getAdminList(localKeyCheck)
            setAdminData(adminsData?.data?.data)
            // console.log('adminsData', adminsData);
            const supervisorData = await getSupervisorList(localKeyCheck)
            setSupervisordata(supervisorData?.data?.data)
            // console.log('supervisorData', supervisorData);
            const TicketCategory = await getTicketCategories(localKeyCheck)
            SetTicketCategoryData(TicketCategory?.data?.data)
            // console.log('TicketCategory', TicketCategory);
            const TicketSource = await getTicketSources(localKeyCheck)
            SetSourcesData(TicketSource?.data?.data)
            // console.log('TicketSource', TicketSource);
        }
        invoked()
    }, [])
    const handleChnageInputAssign = (event: PayloadsAssignform, name: string) => {
        setPayloadsAssign({ ...PayloadsAssign, [name]: name === "admins" ? event : name === "cleaners" ? event : event.value })
    }
    const handleChnageOnchangeStatus = (event: PayloadsAssignform, name: string) => {
        if (event == null) {
            setPayloadsStatus({ ...PayloadsStatus, [name]: 0 })
        }
        else {
            setPayloadsStatus({ ...PayloadsStatus, [name]: +event.value })
        }
    }
    const handleChnageInputUpdate = (event: PayloadsUdateform, name: string) => {
        if (event == null) {
            setPayloadsUpdate({ ...PayloadsUpdate, [name]: 0 })
        }
        else {
            setPayloadsUpdate({ ...PayloadsUpdate, [name]: +event.value })
        }
    }
    const HandleAssigning = async () => {
        const responseBackAssigned = await updateAssignedUsers(localKeyCheck, PayloadsAssign)
        console.log('responseBackAssigned', responseBackAssigned);
    }
    const HandleUpdate = async () => {
        const responseBackupate = await updateTicketStatus(localKeyCheck, PayloadsUpdate)
        console.log('responseBackupate', responseBackupate);
    }
    React.useEffect(() => {
        async function invoked() {
            const response = await updateSources(localKeyCheck, PayloadsStatus, setloading2)
            // console.log('response', response);
            if (response?.data?.status == 200) {
                toast.success('Changes Are saved successfully')
            }
            else {
                toast.error('changes are not saved')
            }
        }
        PayloadsStatus?.categoryid && invoked()
    }, [PayloadsStatus?.categoryid])
    React.useEffect(() => {
        async function invoked() {
            const response = await updateCategory(localKeyCheck, PayloadsStatus, setloading2)
            // console.log('response', response);
            if (response?.data?.status == 200) {
                toast.success('Changes Are saved successfully')
            }
            else {
                toast.error('changes are not saved')
            }
        }
        PayloadsStatus?.source_id && invoked()
    }, [PayloadsStatus?.source_id])
    return (
        <>
            <div className="page-content page-container " id="page-content" style={{ width: "720px" }}>
                <div className="padding" style={{ width: "100%", height: "100%" }}>
                    <div className="row container d-flex justify-content-center" style={{ width: "100%", height: "100%", marginLeft: '-60px' }}>
                        <h3>  Customer Name , Customer Mobile </h3>
                        <div className="col-xl-6 col-md-12" style={{ width: "100%", height: "100%" }}>
                            <div className="card user-card-full" style={{ width: "100%", height: "100%" }}>
                                <div className="row m-l-0 m-r-0" style={{ width: "100%", height: "100%", }}>
                                    <div className="col-sm-12 mb-4 mt-4 bg-dark text-white">
                                        <div className="col-12  mb-3">
                                            <h5 className='text-white'>Select Category</h5>
                                            {JobStatusData &&
                                    
                                                <SingleSelectSearchCategory
                                                    handleChangeInputData={handleChnageOnchangeStatus}
                                                    HeaderTitle="Select Category"
                                                    SelectData={TicketCategoryData}
                                                    DynamicKey={"category_name"}
                                                    id={"id"}
                                                    name="categoryid"
                                                ></SingleSelectSearchCategory>
                                            }
                                        </div>
                                        <div className="col-12  mb-8">
                                            <h5 className='text-white'>Select Source</h5>
                                 
                                            <SingleSelectSearchCategory
                                                handleChangeInputData={handleChnageOnchangeStatus}
                                                HeaderTitle="Select Source"
                                                SelectData={TicketCategoryData}
                                                DynamicKey={"name"}
                                                id={"id"}
                                                name="source_id"
                                            ></SingleSelectSearchCategory>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-4 mt-4 bg-warning">
                                        <AssignForm  ParentData={{
                                            AdminData,
                                            Supervisordata,
                                        }} handleChnageInputAssign={handleChnageInputAssign} />
                                        <button
                                            style={{ textAlign: "right" }}
                                            type='submit'
                                            className='btn btn-white mb-2   text-align-right '
                                            data-kt-users-modal-action='submit'
                                        >
                                            <span className='indicator-label text-right' onClick={() => HandleAssigning()}>Assign</span>
                                        </button>
                                    </div>
                                    <div className="col-sm-6 mb-4 mt-4 bg-primary">
                                        <Updateform  ParentData={{
                                            JobStatusData,
                                        }} handleChnageInputUpdate={handleChnageInputUpdate} />
                                        <button
                                            style={{ textAlign: "right" }}
                                            type='submit'
                                            className='btn btn-white mb-2   text-align-right'
                                            data-kt-users-modal-action='submit'
                                        >
                                            <span className='indicator-label' onClick={() => HandleUpdate()}>Update</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Customer_Information
