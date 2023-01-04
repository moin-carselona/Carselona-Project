import { Dialog } from "@mui/material";
import AddNewTshirtForm from "../AddNewTshirtForm/AddNewTshirtForm";

interface Props {
    PopUpTshirtBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpTshirtBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpTshirtBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewTshirtForm PopUpTshirtBTN={PopUpTshirtBTN} ></AddNewTshirtForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
