import { Dialog } from "@mui/material";
import AddNewSubProblemForm from "../AddNewSubProblemForm/AddNewSubProblemForm";

interface Props {
    PopUpSubProblemsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpSubProblemsBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpSubProblemsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewSubProblemForm PopUpSubProblemsBTN={PopUpSubProblemsBTN} ></AddNewSubProblemForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
