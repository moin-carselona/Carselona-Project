import { Dialog } from "@mui/material";
import RolesModuleNewform from "../ActiveCustomer/ActiveCustomer";

interface Props {
    PopUpActiveCustomerBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpActiveCustomerBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpActiveCustomerBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <RolesModuleNewform PopUpActiveCustomerBTN={PopUpActiveCustomerBTN} ></RolesModuleNewform>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
