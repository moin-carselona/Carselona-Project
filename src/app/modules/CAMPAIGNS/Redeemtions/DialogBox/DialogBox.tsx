import { Dialog } from "@mui/material";
import AddRedeemtionsForm from "../AddRedeemtionsForm/AddRedeemtionsForm";

interface Props {
    PopUpRedeemptionsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpRedeemptionsBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpRedeemptionsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddRedeemtionsForm PopUpRedeemptionsBTN={PopUpRedeemptionsBTN} ></AddRedeemtionsForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
