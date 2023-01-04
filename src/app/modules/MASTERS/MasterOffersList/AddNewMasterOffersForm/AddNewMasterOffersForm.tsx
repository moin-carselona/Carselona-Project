import React, { ChangeEvent, useState } from 'react'
import { LocalBaseURL } from '../../../../../BaseURLmanagement'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, HeaderCss, IdCss, ID_inputCss, Create_BtnCss, Desc_InputCss } from "./CssCom"
interface Props {
    PopUpMasterBTN: () => void
}
const AddNewMasterOffersForm = ({ PopUpMasterBTN }: Props) => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const [payload, setPayload] = useState({
        name: "",
        status: true
    })
    const handleChangeInputValue = (Event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = Event.target
        setPayload(name == "name" ? { ...payload, [name]: value } : { ...payload, [name]: !payload.status })
    }
    const handleCreateMasterOfferes = async () => {
    }
    // to close pop up form
    const handleClose = () => {
        PopUpMasterBTN()
    }
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    {/* row ================================================================= */}
                    <div className="row mb-5">
                        <div className="col-12  mb-3">
                            <h5>Offer Banner</h5>
                            <input
                                // placeholder='Society Name Here...'
                                name='name'
                                type='file'
                                value={payload.name}
                                // className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeInputValue}
                            />
                        </div>
                    </div>
                    {/* row ================================================================= */}
                    <div className="row mb-5">
                        <div className="col-12  mb-3">
                            <h5>Offer Name</h5>
                            <input
                                placeholder='Offer Name Here...'
                                name='name'
                                id='en'
                                type='text'
                                value={payload.name}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeInputValue}
                            />
                        </div>
                    </div>
                    {/* row ================================================================= */}
                    <div className="row mb-5">
                        <div className="col-12  mb-3">
                            <h5>Description</h5>
                            <input
                                placeholder='Offer Name Here...'
                                name='name'
                                id='en'
                                type='text'
                                value={payload.name}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeInputValue}
                            />
                        </div>
                    </div>
                    {/* row ================================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Type</h5>
                            <input
                                placeholder='Percantage Here...'
                                name='name'
                                id='en'
                                type='text'
                                value={payload.name}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeInputValue}
                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Amount</h5>
                            <input
                                placeholder='Amount Here...'
                                name='name'
                                id='en'
                                type='text'
                                value={payload.name}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeInputValue}
                            />
                        </div>
                    </div>
                    {/* row ================================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Max Discount Amount</h5>
                            <input
                                placeholder='Max Discount Amount...'
                                name='name'
                                id='en'
                                type='text'
                                value={payload.name}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeInputValue}
                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Per Customer</h5>
                            <input
                                placeholder='Per Customer ...'
                                name='name'
                                id='en'
                                type='text'
                                value={payload.name}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeInputValue}
                            />
                        </div>
                    </div>
                    {/* row ================================================================= */}
                    <div className="row mb-5">
                        <div className="col-12  mb-3">
                            <h5>Coupon</h5>
                            <input
                                placeholder='Coupon ...'
                                name='name'
                                id='en'
                                type='text'
                                value={payload.name}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={handleChangeInputValue}
                            />
                        </div>
                    </div>
                    {/* row ================================================================= */}
                    <div className="row mb-5">
                        <div className="col-12  mb-3">
                            {/* customer  */}
                            <div className='d-flex  align-items-center'>
                                <input
                                    name='name'
                                    type='checkbox'
                                    checked={payload.status}
                                    className='me-4'
                                    autoComplete='off'
                                    onChange={handleChangeInputValue}
                                />
                                <h5 className='mt-2'>For All Customers</h5>
                            </div>
                            {/* set offer  */}
                            <div className='d-flex  align-items-center'>
                                <input
                                    name='name'
                                    type='checkbox'
                                    checked={payload.status}
                                    className='me-4'
                                    autoComplete='off'
                                    onChange={handleChangeInputValue}
                                />
                                <h5 className='mt-2'>Set Offer Duration?</h5>
                            </div>
                            {/* status   */}
                            <div className='d-flex  align-items-center'>
                                <input
                                    name='name'
                                    type='checkbox'
                                    checked={payload.status}
                                    className='me-4'
                                    autoComplete='off'
                                    onChange={handleChangeInputValue}
                                />
                                <h5 className='mt-2'>Status</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleCreateMasterOfferes}>Create/Update</span>
                </button>
            </div>
        </div>
    )
}
export default AddNewMasterOffersForm
