import { Dialog } from "@mui/material";
import AddNewMasterReasonsForm from "../AddNewMasterReasonsForm/AddNewMasterReasonsForm";

interface Props {
    PopUpMasterReasonsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpMasterReasonsBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpMasterReasonsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewMasterReasonsForm PopUpMasterReasonsBTN={PopUpMasterReasonsBTN} ></AddNewMasterReasonsForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
