import React, { useState } from 'react'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, HeaderCss, IdCss, ID_inputCss, Create_BtnCss, Desc_InputCss } from "../../../../../Css"
import { SendNotificationTemplateToServer } from '../../../auth/core/_requests';
import ImageUpload from './ImageUpload';
const CreateTemplates = ({ handleCreateTemplatesPop }: any) => {
    const [imgUpload, setUpload] = useState("")
    const [title, setTitle] = useState({
        en: "",
        hi: "",
        kn: ""
    })
    const [description, setDescription] = useState({
        en: "",
        hi: "",
        kn: ""
    })
    const [restData, setRestData] = useState({
        imagearray: "",
        videoarray: "",
    })
    const handleClose = () => {
        handleCreateTemplatesPop()
    }
    const handleCreateTemplates = async () => {
        let templateData = {
            title,
            description,
            restData
        }
        const { data }: any = await SendNotificationTemplateToServer(templateData)
    }
    const handleOnchangeforms = (event: any) => {
        let { name, value, id } = event.target
        if (name == "title") {
            console.log('title', title);
            setTitle({ ...title, [id]: value })
        }
        if (name == "description") {
            setDescription({ ...description, [id]: value })
        }
        if (imgUpload && !restData.imagearray) {
            name = "imagearray"
            setRestData({ ...restData, [name]: imgUpload })
        }
        else {
            setRestData({ ...restData, [name]: value })
        }
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
                            onChange={handleOnchangeforms}
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
                            onChange={handleOnchangeforms}
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
                            onChange={handleOnchangeforms}
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
                            onChange={handleOnchangeforms}
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
                            onChange={handleOnchangeforms}
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
                            onChange={handleOnchangeforms}
                        />
                    </div>
                </div>
                {/* Multi language select Description   */}
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='fv-row mb-7 me-2'>
                        <label className='required fw-bold fs-6 mb-2'>Image Link</label>
                        <ImageUpload setUpload={setUpload}></ImageUpload>
                    </div>
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Video Link</label>
                        <input
                            placeholder='Link Here...'
                            name='videoarray'
                            type='text'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            autoComplete='off'
                            onChange={handleOnchangeforms}
                        />
                    </div>
                </div>
           
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleCreateTemplates}>Create</span>
                </button>
            </div>
        </div>
    )
}
export default CreateTemplates
