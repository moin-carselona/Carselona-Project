import { Dialog } from "@mui/material";
import AddNewJobStatusForm from "../AddNewJobStatusForm/AddNewJobStatusForm";

interface Props {
    PopUpJobStatusBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpJobStatusBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpJobStatusBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewJobStatusForm PopUpJobStatusBTN={PopUpJobStatusBTN} ></AddNewJobStatusForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
