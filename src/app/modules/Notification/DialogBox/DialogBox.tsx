import { Dialog } from "@mui/material";
import CreateTemplates from '../Templates/Forms/CreateTemplates';
import CreateViewTemplate from '../Templates/CreateViewTemplate';
import PushNotificationPopup from '../SendNotificationTemplate/Forms/PushNotificationPopup';
import VIewPushNotify from '../SendNotificationTemplate/ViewPushNotify/VIewPushNotify';
const DialogBox = ({ handleCreateTemplatesPop, handleViewMedia, toggle, SendNotificationBTN, PopOpenClose, ViewMediaPopupToggle,ViewMediaPushNotify,ids }: any) => {
    // console.log('PopOpenClose', PopOpenClose);
    return (
        <>
            {
                toggle == true ?
                    <Dialog
                        open={true}
                        onClose={handleViewMedia}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <CreateViewTemplate handleViewMedia={handleViewMedia} ids={ids}></CreateViewTemplate>
                    </Dialog>
                    :
                    PopOpenClose ? <Dialog
                        open={true}
                        onClose={SendNotificationBTN}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <PushNotificationPopup SendNotificationBTN={SendNotificationBTN} />
                    </Dialog>
                        :
                        ViewMediaPopupToggle ? <Dialog
                            open={true}
                            onClose={ViewMediaPushNotify}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <VIewPushNotify ViewMediaPushNotify={ViewMediaPushNotify} />
                        </Dialog>
                        :
                        <Dialog
                            open={true}
                            onClose={handleCreateTemplatesPop}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <CreateTemplates handleCreateTemplatesPop={handleCreateTemplatesPop} />
                        </Dialog>
            }
        </>
    )
}
export default DialogBox
