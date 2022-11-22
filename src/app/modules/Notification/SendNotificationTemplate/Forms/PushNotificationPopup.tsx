import { ContainerCss, PushNotifyCssBTNChceckBox,PushNotifyCssBTNChceckBoxParent,PushNotifyCssBTN, PushNotifyCssBTNPush, Create_BtnCss, HeaderCss, PopCloseFormNotification, PopCloseFormNotificationPtag } from '../../../../../Css'
import Multiselect from './Multiselect'
import SelectTemplates from './SelectTemplates'
const PushNotificationPopup = ({ SendNotificationBTN }: any) => {

    const sendMessageToUser = () => {


    }
    const HandeClosePopNotify = () => {
        SendNotificationBTN()
    }
    return (
        <div className="p-8 overflow-auto" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={HandeClosePopNotify} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='d-flex align-items-start justify-content-center mb-lg-5'  >
                    <h2 style={HeaderCss}>Push Notification</h2>
                </div>
                {/* send Notification to user  */}
                <div className='d-flex align-items-center justify-content-center' >
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Select Users</label>
                        <Multiselect></Multiselect>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center' >
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Selected Template</label>
                        <SelectTemplates  className='mb-5 mb-xl-8' image='abstract-4.svg'></SelectTemplates>
                    </div>
                </div>
                <div className='p-4' style={PushNotifyCssBTN}>
                    <div style={PushNotifyCssBTNPush}>
                        <div style={PushNotifyCssBTNChceckBoxParent} >
                            <input type="checkbox"  style={PushNotifyCssBTNChceckBox}/>
                            <p>Notificartion</p>
                        </div>
                        <div style={PushNotifyCssBTNChceckBoxParent}>
                            <input type="checkbox"  style={PushNotifyCssBTNChceckBox} />
                            <p>Push Notificartion</p>
                        </div>
                    </div>
                    <button
                        style={Create_BtnCss}
                        type='submit'
                        className='btn btn-primary '
                        data-kt-users-modal-action='submit'
                    >
                        <span className='indicator-label' onClick={sendMessageToUser}>Send Now</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default PushNotificationPopup
