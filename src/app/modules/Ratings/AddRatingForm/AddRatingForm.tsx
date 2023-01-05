import React, { useState } from 'react'

import { LocalBaseURL } from '../../../../BaseURLmanagement'

import SingleSelectSearchDetails from '../../../consts/SingleSelectSearchDetails'
import { ContainerCss, Create_BtnCss, PopCloseFormNotification, PopCloseFormNotificationPtag } from '../../../consts/Styles/CssCom'
import { GetAllSources, GetAllCustomers, GetAllCleaners } from '../API'

interface Props {
    PopUpSocietyBTN: () => void
}
let IDS: any = "";
const AddRatingForm = ({ PopUpSocietyBTN }: Props) => {
    const [Sources, setSources] = useState<any[]>([])
    const [Customers, setCustomers] = useState<any[]>([])
    const [Cleaners, setCleaners] = useState<any[]>([])
    // console.log('address', address);
    const [SelectedCityID, SetSelectedCityID] = useState<any>('')
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const handleAddSocietyCreate = async () => {
       
    }

    React.useEffect(() => {
        async function getSourcesInvoked() {
            const { data } = await GetAllSources(localKeyCheck)
            // console.log('add society city ========== city =>', data);
            setSources(data.data)
        }

        async function getCustomersInvoked() {
            const { data } = await GetAllCustomers(localKeyCheck)
            // console.log('add society city ========== city =>', data);
            setCustomers(data.data)
        }

        async function getCleanersInvoked() {
            const { data } = await GetAllCleaners(localKeyCheck)
            // console.log('add society city ========== city =>', data);
            setCleaners(data.data)
        }
        getSourcesInvoked()
        getCustomersInvoked()
        getCleanersInvoked()
    }, [])



    // to close pop up form
    const handleClose = () => {
        PopUpSocietyBTN()
    }

    const handleInputChange = (e:any) => {
        // PopUpSocietyBTN()
    }
    
    const handleSelectChange = () => {
        // PopUpSocietyBTN()
    }
    
    
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    <div className="row mb-5">
                        <hr />
                        <div className="col-6  mb-3">
                            <h5>Rating</h5>
                            <input
                                placeholder='Enter Rating..'
                                name='rating'
                                type='number'
                                value=""
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => handleInputChange(e.target.value)}
                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Comment</h5>
                            <textarea
                                placeholder='Comment...'
                                name='comment'
                                value=""
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => handleInputChange(e.target.value)}
                            ></textarea>
                        </div>
                        <hr />
                    </div>
                    
                    {/* ==================================================================================================== */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Source</h5>
                            <select
                                className='form-select form-select-solid me-2'
                                onChange={(e) => handleInputChange(e.target.value)}
                                
                            >
                                <option >Select Source</option>
                                {Sources?.map((item: any, index: number) => {
                                    return (
                                        <option value={item.id} key={index}>
                                            {item.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Customer</h5>
                    

                        
                             <SingleSelectSearchDetails
                                handleChangeInputData={handleSelectChange}
                                HeaderTitle="Select Customer"
                                SelectData={Customers}
                                DynamicKey={"first_name"}
                                DynamicKey2={"last_name"}
                                DynamicKey3={"phone"}
                                id={"id"}
                                name="customer_id"
                            ></SingleSelectSearchDetails>
                        </div>
                        <hr />
                    </div>

        
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Cleaners</h5>
                            <SingleSelectSearchDetails
                                // handleChangeInputData={handleSelectChange}
                                // name="cleaner_id"
                                // HeaderTitle="Select Cleaner"
                                // allDatafilter={Cleaners}
                                // reference2={null}

                                handleChangeInputData={handleSelectChange}
                                HeaderTitle="Select Cleaner"
                                SelectData={Cleaners}
                                DynamicKey={"first_name"}
                                DynamicKey2={"last_name"}
                                DynamicKey3={"phone"}
                                id={"id"}
                                name="cleaner_id"
                            ></SingleSelectSearchDetails>
                            
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Package ID</h5>
                            
                        </div>
                        <hr />
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
export default AddRatingForm
