import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { AddNewSocietyPostRequest, GetAllAreaData, GetAllCityData, GetAllClickapiData, GetAllPackageIDData } from '../API'
import GoogleAutocompleteAddress from '../GoogleAutocompleteAddress/GoogleAutocompleteAddress'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, HeaderCss, IdCss, ID_inputCss, Create_BtnCss, Desc_InputCss } from "./CssCom"
interface Props {
    PopUpSocietyBTN: () => void
}
const AddSocietyForm = ({ PopUpSocietyBTN }: Props) => {
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
    const [latitude, SetLatitude] = useState<any>("")
    const [Longitude, SetLongitude] = useState<any>("")
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const { city, state, zip, country }: any = address
    const handleAddSocietyCreate = async () => {
        let payload = {
            "societyname": SelectedSocietyName,
            "societyphone": SelectedPhone,
            "societyemail": SelectedEmail,
            "address": `${city}, ${state}, ${country}, ${zip}`,
            "societycity": +SelectedCityID,
            "societyarea": +SelectedAreaID,
            "list_id": +SelectedClickUpID,
            "packageid": +SelectedPackageID,
            "latitude": +latitude,
            "longitude": +Longitude
        }
        if (SelectedSocietyName != "" && SelectedPhone != "" && SelectedEmail != "" && address != "" && SelectedCityID != "" && SelectedAreaID != "" && SelectedClickUpID != "" && SelectedPackageID != "" && latitude != "" && Longitude != "" && SelectedEmail.includes(".com") && SelectedEmail.includes("@") && SelectedEmail.includes("gmail")) {
            const response = await AddNewSocietyPostRequest(localKeyCheck, payload)
            if (response?.data?.data) {
                toast.success("society Register Successfull")
                console.log('society post request', response?.data?.data);
            } else {
                toast.error("Pls Provide Details Accordingly")
            }
        }
        else {
            toast.error("Plz fill all fields Accordingly")
        }
    }
    // to close pop up form
    const handleClose = () => {
        PopUpSocietyBTN()
    }
    React.useEffect(() => {
        async function getCityInvoked() {
            const { data } = await GetAllCityData(localKeyCheck)
            setCity(data.data)
        }
        getCityInvoked()
    }, [])
    React.useEffect(() => {
        async function getClickUpiInvoked() {
            const { data } = await GetAllClickapiData(localKeyCheck)
            setClickUpi(data.data.lists)
        }
        getClickUpiInvoked()
    }, [])
    React.useEffect(() => {
        async function getPackageIDInvoked() {
            const { data } = await GetAllPackageIDData(localKeyCheck)
            setPackage(data.data)
        }
        getPackageIDInvoked()
    }, [])
    React.useEffect(() => {
        async function getAreaInvoked() {
            const { data } = await GetAllAreaData(localKeyCheck)
            setArea(data.data)
        }
        getAreaInvoked()
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
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => SetSelectedEmail(e.target.value)}
                            />
                        </div>
                        <GoogleAutocompleteAddress SetAddress={SetAddress} SetLatitude={SetLatitude} SetLongitude={SetLongitude}></GoogleAutocompleteAddress>
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
                    {/* ==================================================================================================== */}
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
export default AddSocietyForm
