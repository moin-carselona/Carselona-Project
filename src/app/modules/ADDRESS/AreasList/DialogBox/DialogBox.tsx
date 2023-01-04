import { Dialog } from "@mui/material";
import AddNewAreasForm from "../AddNewAreasForm/AddNewAreasForm";

interface Props {
    PopUpAreasBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpAreasBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpAreasBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewAreasForm PopUpAreasBTN={PopUpAreasBTN} ></AddNewAreasForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
