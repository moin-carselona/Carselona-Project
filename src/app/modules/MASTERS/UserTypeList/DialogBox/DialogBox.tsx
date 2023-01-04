import { Dialog } from "@mui/material";
import AddNewUsertypeForm from "../AddNewUsertypeForm/AddNewUsertypeForm";

interface Props {
    PopUpUserTypeBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpUserTypeBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpUserTypeBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewUsertypeForm PopUpUserTypeBTN={PopUpUserTypeBTN} ></AddNewUsertypeForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
