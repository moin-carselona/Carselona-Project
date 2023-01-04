import { Dialog } from "@mui/material";
import AddNewProblemForm from "../AddNewProblemForm/AddNewProblemForm";

interface Props {
    PopUpProblemBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpProblemBTN, PopUpPostFormOpen }: Props) => {
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpProblemBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewProblemForm PopUpProblemBTN={PopUpProblemBTN} ></AddNewProblemForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
