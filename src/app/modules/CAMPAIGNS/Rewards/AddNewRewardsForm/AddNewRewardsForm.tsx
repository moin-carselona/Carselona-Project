import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { LocalBaseURL } from '../../../../../BaseURLmanagement'
// import { LocalBaseURL } from '../../../../BaseURLmanagement'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, HeaderCss, IdCss, ID_inputCss, Create_BtnCss, Desc_InputCss } from "./CssCom"
interface Props {
    PopUpRewardsBTN: () => void
}
let IDS:any = "";

const AddNewRewardsForm = ({ PopUpRewardsBTN }: Props) => {
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
    const handleAddPackagesCreate = async () => {
      
    }
    // to close pop up form
    const handleClose = () => {
        PopUpRewardsBTN()
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
                            <h5>Society Name</h5>
                            <input
                                placeholder='Society Name Here...'
                                name='name'
                                id='en'
                                type='text'
                                value={SelectedSocietyName}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedSocietyName(e.target.value)}
                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Phone</h5>
                            <input
                                placeholder='Phone Here...'
                                name='phone'
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
                            <h5>Email</h5>
                            <input
                                placeholder='Email Here...'
                                name='email'
                                type='text'
                                value={SelectedEmail}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedEmail(e.target.value)}
                            />
                        </div>

                        <div className="col-6  mb-3">
                            <h5>Email</h5>
                            <input
                                placeholder='Email Here...'
                                name='email'
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
                            <h5>City</h5>
                            <select
                                className='form-select form-select-solid me-2'
                                onChange={(e) => SetSelectedCityID(e.target.value)}
                                value={SelectedCityID}
                            >
                                <option >Select City</option>
                                {City?.map((item: any, index: number) => {
                                    return (
                                        <option value={item.id} key={index}>
                                            {item.city_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Area</h5>
                            <select
                                className='form-select form-select-solid me-2'
                                onChange={(e) => SetSelectedAreaID(e.target.value)}
                                value={SelectedAreaID}
                            >
                                <option >Select Area</option>
                                {Area?.map((item: any, index: number) => {
                                    return (
                                        <option value={item.cityid} key={index}>
                                            {item.areaname}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <hr />
                    </div>
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Clickup List</h5>
                            <select
                                className='form-select form-select-solid me-2'
                                onChange={(e) => SetSelectedClickUpID(e.target.value)}
                                value={SelectedClickUpID}
                            >
                                <option >Select Clickup List</option>
                                {ClickUpi?.map((item: any, index: number) => {
                                    return (
                                        <option value={item.id} key={index}>
                                            {item.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Package ID</h5>
                            <select
                                className='form-select form-select-solid me-2'
                                onChange={(e) => SetSelectedPackageID(e.target.value)}
                                value={SelectedPackageID}
                            >
                                <option >Select Package Id</option>
                                {Package?.map((item: any, index: number) => {
                                    return (
                                        <option value={item.id} key={index}>
                                            {item.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <hr />
                    </div>
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Totol Apartments</h5>
                            <input
                                placeholder='Society Name Here...'
                                name='name'
                                id='en'
                                type='text'
                                value={SelectedFlatApartment}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedFlatApartment(e.target.value)}
                            />
                        </div>

                        <div className="col-6  mb-3">
                            <h5>Pin Code</h5>
                            <input
                                placeholder='Society Name Here...'
                                name='name'
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
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleAddPackagesCreate}>Add Society</span>
                </button>
            </div>
        </div>
    )
}
export default AddNewRewardsForm
