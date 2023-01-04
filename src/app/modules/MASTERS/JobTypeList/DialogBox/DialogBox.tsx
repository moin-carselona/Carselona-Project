import { Dialog } from "@mui/material";
import AddNewJobTypesForm from "../AddNewJobTypesForm/AddNewJobTypesForm";

interface Props {
    PopUpJobTypesBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpJobTypesBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpJobTypesBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewJobTypesForm PopUpJobTypesBTN={PopUpJobTypesBTN} ></AddNewJobTypesForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
