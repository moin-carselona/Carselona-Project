import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { LocalBaseURL } from '../../../../../BaseURLmanagement'
// import { LocalBaseURL } from '../../../../BaseURLmanagement'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, HeaderCss, IdCss, ID_inputCss, Create_BtnCss, Desc_InputCss } from "./CssCom"
interface Props {
    PopUpServicePrices: () => void
}
let IDS:any = "";

const AddNewServicePricesForm = ({ PopUpServicePrices }: Props) => {
    const [City, setCity] = useState<any[]>([])
    const [Area, setArea] = useState<any[]>([])
    const [Package, setPackage] = useState<any[]>([])
    const [ClickUpi, setClickUpi] = useState<any[]>([])
    const [address, SetAddress] = useState<any>({})
    const [SelectedCityID, SetSelectedCityID] = useState<any>('')
    const [SelectedAreaID, SetSelectedAreaID] = useState<any>('')
    const [SelectedPackageID, SetSelectedPackageID] = useState<any>('')
    const [SelectedClickUpID, SetSelectedClickUpID] = useState<any>('')
    const [SelectedEmail, SetSelectedEmail] = useState<any>('')
    const [SelectedSocietyName, SetSelectedSocietyName] = useState<any>('')
    const [SelectedPhone, SetSelectedPhone] = useState<any>('')
    const [SelectedFlatApartment, SetSelectedFlatApartment] = useState('')
    const [SelectedPinCode, SetSelectedPinCode] = useState('')
    const [latitude, SetLatitude] = useState<any>('')
    const [Longitude, SetLongitude] = useState<any>('')
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const { city, state, zip, country }: any = address
    // to store society data into server      
    const handleAddServicePrices = async () => {
      
    }
    // to close pop up form
    const handleClose = () => {
        PopUpServicePrices()
    }
    React.useEffect(() => {
        // async function getCityInvoked() {
        //     const { data } = await GetAllCityData(localKeyCheck)
        //     console.log('add society city ========== city =>', data);
        //     setCity(data.data)
        // }
        // getCityInvoked()
    }, [])

    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    <div className="row mb-5">
                        <hr />
                        <div className="col-6  mb-3">
                            <h5>City Name</h5>
                            <input
                                placeholder='City Name Here...'
                                name='city_name'
                                id='en'
                                type='text'
                                value={SelectedSocietyName}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedSocietyName(e.target.value)}
                                // onChange={handleChangeInputValue}

                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Category Name</h5>
                            <input
                                placeholder='Category Name Here...'
                                name='category_name'
                                id='en'
                                type='text'
                                value={SelectedPhone}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedPhone(e.target.value)}
                            />
                        </div>
                        <hr />
                    </div>
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Washing Price</h5>
                            <input
                                placeholder='Washing Price Here...'
                                name='washing_price'
                                type='text'
                                value={SelectedEmail}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedEmail(e.target.value)}
                            />
                        </div>

                        <div className="col-6  mb-3">
                            <h5>Sanitization</h5>
                            <input
                                placeholder='Sanitization Here...'
                                name='sanitization'
                                type='text'
                                value={SelectedEmail}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedEmail(e.target.value)}
                            />
                        </div>
                        <hr />
                    </div>
                    {/* ==================================================================================================== */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Waxing</h5>
                            <input
                                placeholder='Waxing Here...'
                                name='waxing'
                                type='text'
                                value={SelectedEmail}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Pickup Drop</h5>
                            <input
                                placeholder='Pickup Drop Here...'
                                name='pickupdrop'
                                type='text'
                                value={SelectedEmail}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedEmail(e.target.value)}
                            />
                        </div>
                        <hr />
                    </div>
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Jump Start</h5>
                            <input
                                placeholder='Jump Start Here...'
                                name='Jump Start'
                                type='text'
                                value={SelectedEmail}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Car Cleaner 15 Days</h5>
                            <input
                                placeholder='Car Cleaner 15 Days Here...'
                                name='carcleaning15days'
                                type='text'
                                value={SelectedEmail}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedEmail(e.target.value)}
                            />
                        </div>
                        <hr />
                    </div>
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Car Cleaner 30 Days</h5>
                            <input
                                placeholder='Car Cleaner 30 Days Here...'
                                name='carcleaning30days'
                                id='en'
                                type='text'
                                value={SelectedFlatApartment}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedFlatApartment(e.target.value)}
                            />
                        </div>

                        <div className="col-6  mb-3">
                            <h5>Bike Cleaner 15 Days</h5>
                            <input
                                placeholder='Bike Cleaner 15 Days Here...'
                                name='bikecleaning15days'
                                id='en'
                                type='text'
                                value={SelectedPinCode}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedPinCode(e.target.value)}
                            />
                        </div>
                        <hr />
                    </div>
                    {/* ==================================================================================================== */}
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Bike Cleaner 30 Days</h5>
                            <input
                                placeholder='BIke Cleaner 30 Days Here...'
                                name='bikecleaning30days'
                                id='en'
                                type='text'
                                value={SelectedFlatApartment}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedFlatApartment(e.target.value)}
                            />
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
                    <span className='indicator-label' onClick={handleAddServicePrices}>Save</span>
                </button>
            </div>
        </div>
    )
}
export default AddNewServicePricesForm
