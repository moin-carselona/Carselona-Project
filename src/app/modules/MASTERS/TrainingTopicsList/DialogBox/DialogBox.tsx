import { Dialog } from "@mui/material";
import AddNewTrainingtopicsForm from "../AddNewTrainingtopicsForm/AddNewTrainingtopicsForm";

interface Props {
    PopUpTrainingtopicsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpTrainingtopicsBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpTrainingtopicsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewTrainingtopicsForm PopUpTrainingtopicsBTN={PopUpTrainingtopicsBTN} ></AddNewTrainingtopicsForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
