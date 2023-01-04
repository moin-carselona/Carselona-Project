import { Dialog } from "@mui/material";
import AddNewMasterOffersForm from "../AddNewMasterOffersForm/AddNewMasterOffersForm";

interface Props {
    PopUpMasterBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpMasterBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpMasterBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewMasterOffersForm PopUpMasterBTN={PopUpMasterBTN} ></AddNewMasterOffersForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
