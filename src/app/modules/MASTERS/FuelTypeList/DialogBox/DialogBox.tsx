import { Dialog } from "@mui/material";
import AddNewFueltypeForm from "../AddNewFueltypeForm/AddNewFueltypeForm";

interface Props {
    PopUpFuelTypeBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpFuelTypeBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpFuelTypeBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewFueltypeForm PopUpFuelTypeBTN={PopUpFuelTypeBTN} ></AddNewFueltypeForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
