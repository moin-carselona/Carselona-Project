import React, { useState } from 'react'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, HeaderCss, IdCss, ID_inputCss, Create_BtnCss, Desc_InputCss } from "./CssCom"
// import { SendNotificationTemplateToServer } from '../../../auth/core/_requests';
// import ImageUpload from './ImageUpload';
interface Props {
    PopUpSocietyBTN: () => void
}
const addSocietyForm = ({ PopUpSocietyBTN }: Props) => {

// to store society data into server        
    const handleAddSocietyCreate = () => {

    }

    // to close pop up form
    const handleClose = () => {

        PopUpSocietyBTN()


    }
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='d-flex align-items-start justify-content-center mb-lg-5'  >
                    <h2 style={HeaderCss}>New Template</h2>
                </div>
                {/* Multi language select title   */}
                <div className='d-flex align-items-center justify-content-center' >
                    <div className='fv-row mb-7 me-2'>
                        <label className='required fw-bold fs-6 mb-2'> Hindi Title </label>
                        <input
                            placeholder='Title Here...'
                            name='title'
                            id='hi'
                            type='text'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            autoComplete='off'
                        // onChange={handleOnchangeforms}
                        />
                    </div>
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Hindi Description</label>
                        <input
                            placeholder='Title Here...'
                            name='description'
                            id='hi'
                            type='text'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            autoComplete='off'
                        // onChange={handleOnchangeforms}
                        />
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center' >
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>English Title</label>
                        <input
                            placeholder='Title Here...'
                            name='title'
                            id='en'
                            type='text'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            autoComplete='off'
                        // onChange={handleOnchangeforms}
                        />
                    </div>
                    <div className='fv-row mb-7 me-2'>
                        <label className='required fw-bold fs-6 mb-2'> English Description </label>
                        <input
                            placeholder='Description Here...'
                            name='description'
                            id='en'
                            type='text'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            autoComplete='off'
                        // onChange={handleOnchangeforms}
                        />
                    </div>
                </div>
                {/* Multi language select  title */}
                {/* Multi language select Description  */}
                <div className='d-flex align-items-center justify-content-center' >
                    <div className='fv-row mb-7 me-2'>
                        <label className='required fw-bold fs-6 mb-2'> Kanada Title </label>
                        <input
                            placeholder='Title Here...'
                            name='title'
                            id='Kn'
                            type='text'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            autoComplete='off'
                        // onChange={handleOnchangeforms}
                        />
                    </div>
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Kanada Description</label>
                        <input
                            placeholder='Description Here...'
                            name='description'
                            id='kn'
                            type='text'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            autoComplete='off'
                        // onChange={handleOnchangeforms}
                        />
                    </div>
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleAddSocietyCreate}>Add Society</span>
                </button>
            </div>
        </div>
    )
}
export default addSocietyForm
