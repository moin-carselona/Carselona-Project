import { Dialog } from "@mui/material";
import Customer_Information from "../PopupCust_Information/Customer_Information";

const DialogBox = ({ TicketCustomerInformationPopupBTN, PopOpenClose }: any) => {
    // console.log('PopOpenClose', PopOpenClose);
    return (
        <>

            {
                PopOpenClose &&
                <Dialog
                    open={true}
                    onClose={TicketCustomerInformationPopupBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Customer_Information ></Customer_Information>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
