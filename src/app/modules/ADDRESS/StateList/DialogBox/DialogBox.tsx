import { Dialog } from "@mui/material";
import AddNewStatesForm from "../AddNewStatesForm/AddNewStatesForm";

interface Props {
    PopUpStatesBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpStatesBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpStatesBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewStatesForm PopUpStatesBTN={PopUpStatesBTN} ></AddNewStatesForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
