import React, { useState } from 'react'
import { LocalBaseURL } from '../../../../../BaseURLmanagement';
import { GetAllImage } from '../API';
interface Props {
    AttendanceID: any
    handleDiloagboxform: any
}
const ImageActionPopup = ({ AttendanceID, handleDiloagboxform }: Props) => {
    const imageStartPoint = "https://carselona-img.s3.ap-south-1.amazonaws.com/"
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const [ImageArr, SetImageArray] = useState<any>([0, 1])
    React.useEffect(() => {
        async function getCityInvoked() {
            const response = await GetAllImage(localKeyCheck, AttendanceID)
            SetImageArray(response?.data?.data)
        }
        getCityInvoked()
    }, [])
    return (
        <div className="p-2">
            {/* <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div> */}
            <h4 className='text-center'>Gallary : {AttendanceID}</h4>
            {ImageArr.length != 0 ? ImageArr?.map((image: any) => {
                return (
                    <div className="p-5 mr-auto">
                        {image?.image && <img src={`${imageStartPoint}` + `${image.image}`}
                            className="img-fluid" alt="Responsive image" />}
                    </div>
                )
            })
                : <div className="p-5 mr-auto">
                    {<img src="https://banksrl.co.za/wp-content/uploads/2019/10/NoProductImage_600.jpg"
                        className="img-fluid" alt="Responsive image" />}
                </div>
            }
            {/* <div className="p-5 mr-auto">
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-sm btn-primary  p-3'
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleEditAttenddanceForm}>Next</span>
                </button>
            </div> */}
        </div>
    )
}
export default ImageActionPopup
