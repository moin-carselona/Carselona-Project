import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { LocalBaseURL } from '../../../../BaseURLmanagement'
import { AddNewSocietyPostRequest, GetAllAreaData, GetAllCityData, GetAllClickapiData, GetAllPackageIDData } from '../API'
import GoogleAutocompleteAddress from '../GoogleAutocompleteAddress/GoogleAutocompleteAddress'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, HeaderCss, IdCss, ID_inputCss, Create_BtnCss, Desc_InputCss } from "./CssCom"
interface Props {
    PopUpSocietyBTN: () => void
}
let IDS:any = "";

const AddSocietyForm = ({ PopUpSocietyBTN }: Props) => {
    const [City, setCity] = useState<any[]>([])
    const [Area, setArea] = useState<any[]>([])
    const [Package, setPackage] = useState<any[]>([])
    const [ClickUpi, setClickUpi] = useState<any[]>([])
    const [address, SetAddress] = useState<any>({})
    const [SelectedCityID, SetSelectedCityID] = useState<any>('')
    const [SelectedAreaID, SetSelectedAreaID] = useState<any>('')
    const [SelectedPackageID, SetSelectedPackageID] = useState<any>('')
    console.log('SelectedPackageID', SelectedPackageID);
    const [SelectedClickUpID, SetSelectedClickUpID] = useState<any>('')
    const [SelectedEmail, SetSelectedEmail] = useState<any>('')
    const [SelectedSocietyName, SetSelectedSocietyName] = useState<any>('')
    const [SelectedPhone, SetSelectedPhone] = useState<any>('')
    const [SelectedFlatApartment, SetSelectedFlatApartment] = useState('')
    const [SelectedPinCode, SetSelectedPinCode] = useState('')
    // console.log('address add', address);
    const [latitude, SetLatitude] = useState<any>('')
    // console.log('latitude add ', latitude);
    const [Longitude, SetLongitude] = useState<any>('')
    // const 
    // console.log('Longitude add', Longitude);
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const { city, state, zip, country }: any = address
    // to store society data into server      
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
            "longitude": +Longitude,
            "total_apartments": +SelectedFlatApartment,
            "pincode": +SelectedPinCode
        }
        console.log('payload ========', payload)
        if (!SelectedEmail.includes(".com") && !SelectedEmail.includes("@") && !SelectedEmail.includes("gmail")) {
            toast.error("Email should be like : example@gmail.com")
        }
        if (SelectedPhone.length != 10) {
            toast.error("Phone Number is Incorrect")
        }
        if (SelectedSocietyName && SelectedFlatApartment && SelectedPinCode && SelectedPhone && SelectedEmail && address && SelectedCityID && SelectedAreaID && SelectedClickUpID && SelectedPackageID && latitude && Longitude && SelectedEmail.includes(".com") && SelectedEmail.includes("@") && SelectedEmail.includes("gmail")) {
            // console.log("entered")

            if (SelectedPackageID >= 0 && SelectedCityID >= 0 && SelectedClickUpID >= 0 && SelectedAreaID >= 0) {


                const response: any = await AddNewSocietyPostRequest(localKeyCheck, payload)
                console.log('response', response);
                if (response?.data?.msg == "Email already register.") {
                    toast.error("Email already register")
                }
                if (response?.data?.data) {

                    toast.success("society Register Successfull")
                    console.log('society post request', response?.data?.data);
                    SetSelectedCityID("")
                    SetSelectedAreaID("")
                    SetSelectedPackageID("")
                    SetSelectedClickUpID("")
                    SetSelectedSocietyName("")
                    SetSelectedPhone("")
                    SetLatitude("")
                    SetLongitude("")
                    SetAddress("")
                    SetSelectedFlatApartment("")
                    SetSelectedPinCode("")
                }


            }
            else if (SelectedPackageID == "") {
                toast.error(`Something Package IDis missing`)

            toast.error(`Something Package IDis missing`)


            }
            else if (SelectedAreaID == "") {
                toast.error(`Something Package IDis missing`)


            }
            else if (SelectedClickUpID == "") {
                toast.error(`Something Package ID is missing`)


            }
            else if (SelectedCityID == "") {
                toast.error(`Something Package IDis missing`)


            }
            else {
                toast.error("Id is missing")
            }
        }
        else {
            toast.error(`Something ${IDS} is missing`)
        }
    }
    // to close pop up form
    const handleClose = () => {
        PopUpSocietyBTN()
    }
    React.useEffect(() => {
        async function getCityInvoked() {
            const { data } = await GetAllCityData(localKeyCheck)
            console.log('add society city ========== city =>', data);
            setCity(data.data)
        }
        getCityInvoked()
    }, [])
    React.useEffect(() => {
        async function getClickUpiInvoked() {
            const { data } = await GetAllClickapiData(localKeyCheck)
            console.log('add society Click data ========== Click data =>', data);
            setClickUpi(data.data.lists)
        }
        getClickUpiInvoked()
    }, [])
    React.useEffect(() => {
        async function getPackageIDInvoked() {
            const { data } = await GetAllPackageIDData(localKeyCheck)
            console.log('add society Package ========== Package =>', data);
            setPackage(data.data)
        }
        getPackageIDInvoked()
    }, [])
    React.useEffect(() => {
        async function getAreaInvoked() {
            const { data } = await GetAllAreaData(localKeyCheck)
            console.log('add society Area ========== Area =>', data);
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
                    <span className='indicator-label' onClick={handleAddSocietyCreate}>Add Society</span>
                </button>
            </div>
        </div>
    )
}
export default AddSocietyForm
