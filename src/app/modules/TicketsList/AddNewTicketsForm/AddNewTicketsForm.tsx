import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { LocalBaseURL } from '../../../../BaseURLmanagement';
import MultiSelect from '../../../consts/MultiSelect';
import SingleSelect from '../../../consts/SingleSelect';
import { createticketByAdmin } from '../API';
import { AdminListDataApi, cleanerDataApi, CustomerDataApi, localCheckAPI, payloadsInterfaces, SuperVisorDataApi, ticektInterfaces, TicektSourcesDataApi, TicektSubCategoryDataApi, ticketCategoryDataApi } from "../TicketInterface";
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, Create_BtnCss, } from "./CssCom"
interface ticketInputChangeHnadlerInterface {
}
interface Props {
    handleTicketlistPopform: () => void
    ParentData: {
        localKeyCheck: localCheckAPI,
        filterData: ticektInterfaces[],
        TicketsData: ticektInterfaces[],
        CleanerfilterData: cleanerDataApi[],
        CustomerfilterData: CustomerDataApi[],
        SelectedFilterTicketCateogryData: any,
        TicketCategoryData: ticketCategoryDataApi[],
        ticektSubCategoryData: TicektSubCategoryDataApi[],
        TicketSources: TicektSourcesDataApi[],
        AdminListData: AdminListDataApi[],
        SupervisorsListData: SuperVisorDataApi[],
        payloads: payloadsInterfaces,
    } | null
}
const AddNewTicketsForm = ({ handleTicketlistPopform, ParentData }: Props) => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const userid = JSON.parse(localStorage.getItem("user") || "0")
    const [TicketPayloads, setTicketPayloads] = useState({
        title: "",
        customerid: 0,
        categoryid: 0,
        subcategoryid: [],
        source_id: 0,
        visible_id: 0,
        duedate: "",
        admins: [],
        answer: "",
        cleaners: [],
        userid: userid
    })

    // storing data into payload for handling form data change
    const handleChangeInputData = (event: any, name: string) => {
        if (name === "subcategoryid") {
            setTicketPayloads({ ...TicketPayloads, [name]: event })
        }
        else if (name === "admins") {
            setTicketPayloads({ ...TicketPayloads, [name]: event })
        }
        else if (name === "cleaners") {
            setTicketPayloads({ ...TicketPayloads, [name]: event })
        }
        else {
            if (event == null) {
                setTicketPayloads({ ...TicketPayloads, [name]: name === "answer" ? "" : name === "title" ? "" : name === "duedate" ? "" : 0 })
            }
            else {
                const { value } = event
                setTicketPayloads({ ...TicketPayloads, [name]: name === "answer" ? value : name === "title" ? value : name === "duedate" ? value : +value })
            }
        }
    }
    // by this fuction hitting api to create new ticket
    const handleCreateTicketes = async () => {
        const result = await createticketByAdmin(localKeyCheck, TicketPayloads)
        if (result?.data?.status == 200) {
            toast.success(result.data?.msg)
        } else {
            toast.error(result.data?.msg)
        }
    }



    
    const handleClose = () => {
        handleTicketlistPopform()
    }
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    <div className="row mb-5">
                        <hr />
                        <div className="col-12  mb-3">
                            <h5>Title </h5>
                            <input
                                placeholder='Society Name Here...'
                                name='name'
                                type='text'
                                // value={ParentData?.payloads?.title}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(event) => handleChangeInputData(event.target, "title")}
                            />
                        </div>
                        <div className="col-12 mb-3">
                            <h5>Description</h5>
                            <div className="form-outline">
                                <textarea className="form-control" name='description' placeholder='Message' id="textAreaExample1" rows={4}
                                    onChange={(event) => handleChangeInputData(event.target, "answer")}
                                ></textarea>
                            </div>
                        </div>
                        <hr />
                    </div>
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Select Customer</h5>
                            {"filterationData" &&
                                <SingleSelect
                                    handleChangeInputData={handleChangeInputData}
                                    name="customerid"
                                    refrence="Select Customer"
                                    setSelectedData={null}
                                    allDatafilter={ParentData?.CustomerfilterData}
                                    reference2={null}
                                ></SingleSelect>
                            }
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Select Category</h5>
                            <SingleSelect
                                handleChangeInputData={handleChangeInputData}
                                name="categoryid"
                                refrence="Select Category"
                                setSelectedData={null}
                                allDatafilter={ParentData?.TicketCategoryData}
                                reference2={null}
                            ></SingleSelect>
                        </div>
                        <hr />
                    </div>
                    {/* ==================================================================================================== */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Select Sub Category</h5>
                            <MultiSelect
                               
                                setSelectedData={handleChangeInputData}
                                allDatafilter={ParentData?.ticektSubCategoryData}
                                reference2={"default"}
                                name="subcategoryid"
                            ></MultiSelect>
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Select Source</h5>
                            <SingleSelect
                                handleChangeInputData={handleChangeInputData}
                                name="source_id"
                                refrence="Select Source"
                                setSelectedData={null}
                                allDatafilter={ParentData?.TicketSources}
                                reference2={null}
                            ></SingleSelect>
                        </div>
                        <hr />
                    </div>
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Choose to show to customer or not</h5>
                            <SingleSelect
                                handleChangeInputData={handleChangeInputData}
                                name="visible_id"
                                refrence="Select Here"
                                setSelectedData={null}
                                allDatafilter={[{ name: "No, Don't show to customer", id: "0" }, { name: "Yes, Don't show to customer", id: "1" }]}
                                reference2={null}
                            ></SingleSelect>
                        </div>
                        <div className="col-6  ">
                            <h5>Choose Due Date</h5>
                            <input onChange={(event) => handleChangeInputData(event.target, "duedate")} type="date" className='form-select form-select-solid me-2' />
                        </div>
                        <hr />
                        Assign To
                    </div>
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Select Admin Users</h5>
                            <MultiSelect
                                // refrence="Admin Users"
                                // setSelectedData={null}
                                setSelectedData={handleChangeInputData}
                                allDatafilter={ParentData?.AdminListData}
                                reference2={"default"}
                                name="admins"
                            ></MultiSelect>
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Select Supervisors</h5>
                            <MultiSelect
                               
                                setSelectedData={handleChangeInputData}
                                allDatafilter={ParentData?.SupervisorsListData}
                                reference2={"default"}
                                name="cleaners"
                            ></MultiSelect>
                        </div>
                        <hr />
                    </div>
                    {/* ==================================================================================================== */}
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleCreateTicketes}>Create Ticket</span>
                </button>
            </div>
        </div>
    )
}
export default AddNewTicketsForm
