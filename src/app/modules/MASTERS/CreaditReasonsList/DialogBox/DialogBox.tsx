import { Dialog } from "@mui/material";
import AddNewCreditReasonsForm from "../AddNewCreditReasonsForm/AddNewCreditReasonsForm";

interface Props {
    PopUpCreditReasonBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpCreditReasonBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpCreditReasonBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewCreditReasonsForm PopUpCreditReasonBTN={PopUpCreditReasonBTN} ></AddNewCreditReasonsForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
