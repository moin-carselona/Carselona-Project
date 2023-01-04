import { Dialog } from "@mui/material";
import AddNewServiceForm from "../AddNewServiceForm/AddNewServiceForm";

interface Props {
    handleServicessBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ handleServicessBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={handleServicessBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewServiceForm handleServicessBTN={handleServicessBTN} ></AddNewServiceForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
