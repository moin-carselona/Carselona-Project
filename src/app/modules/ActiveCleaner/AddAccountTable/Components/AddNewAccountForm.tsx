import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { LocalBaseURL } from '../../../../../BaseURLmanagement';
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, Create_BtnCss, } from '../../../../consts/Styles/CssCom';
import { createCleanerBankDetails } from '../../API';
import BankForm from './BankForm';
import UPIForm from './UPIForm';
interface Props {
    handleCloseModal: () => void
    ParentData: any | null
    reference: string
    DynamicHeaderinfo: string
}
const AddNewAccountForm = ({ ParentData, DynamicHeaderinfo, handleCloseModal, reference }: Props) => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const [IsAccountType, setAccountType] = useState("")
    const [PayloadsBank, setPayloadsBank] = useState({
        holder_name: "",
        cleaner_id: ParentData?.id,
        account_type: "",
        account_no: "",
        ifsc: "",
        status: "",
    })
    const [PayloadsUPI, setPayloadsUPI] = useState({
        cleaner_id: ParentData?.id,
        account_type: "",
        upi_id: "",
        status: "",
    })
    // console.log('PayloadsBank', PayloadsBank);
    // console.log('PayloadsUPI', PayloadsUPI);
    const Togglling = (event: any) => {
        setAccountType(event.value)
        if (event.value === "bank_account") {
            setPayloadsBank({ ...PayloadsBank, [event.name]: event.value })
        }
        else {
            setPayloadsUPI({ ...PayloadsUPI, [event.name]: event.value })
        }
    }
    // storing data into payload for handling form data change
    const handleChangeInputData = (event: any, refs: string) => {
        const { name, value } = event
        if (refs === "bank") {
            setPayloadsBank({ ...PayloadsBank, [name]: value })
        }
        else {
            setPayloadsUPI({ ...PayloadsUPI, [name]: value })
        }
    }
    // by this fuction hitting api to create new ticket
    const AddBankAccount = async () => {
        let payloads = IsAccountType === "bank_account" ? PayloadsBank : PayloadsUPI
        console.log('payloads', payloads);
        const result = await createCleanerBankDetails(localKeyCheck, payloads, null)
        if (result?.data?.message == 200) {
            toast.success(result.data?.message)
        } else {
            toast.error(result.data?.message)
        }
    }
    const handleClose = () => {
        handleCloseModal()
    }
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    <div className="row mb-5">
                        <div className="col-12  mb-3">
                            <select
                                className='form-select form-select-solid me-2'
                                // data-kt-select2='true'
                                // data-placeholder='Select option'
                                // data-allow-clear='true'
                                name={"account_type"}
                                onChange={(e) => Togglling(e.target)}
                            >
                                <option>Select Account Type</option>
                                <option value={"upi"}>UPI</option>
                                <option value={"bank_account"}>Bank Account</option>
                            </select>
                        </div>
                        <hr />
                    </div>
                    {
                        IsAccountType === "bank_account" ?
                            <BankForm handleChangeInputData={handleChangeInputData} PayloadsBank={PayloadsBank} ></BankForm> :
                            IsAccountType === "upi" ?
                                <UPIForm handleChangeInputData={handleChangeInputData} PayloadsUPI={PayloadsUPI}></UPIForm> : <h2 className='text-center'>Pls Select Bank Account</h2>
                    }
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={AddBankAccount}>Add Bank</span>
                </button>
            </div>
        </div>
    )
}
export default AddNewAccountForm
