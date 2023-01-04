import { Dialog } from "@mui/material";
import AddNewMasterResourcesForm from "../AddNewMasterResourcesForm/AddNewMasterResourcesForm";

interface Props {
    PopUpMasterResourceBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpMasterResourceBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpMasterResourceBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewMasterResourcesForm PopUpMasterResourceBTN={PopUpMasterResourceBTN} ></AddNewMasterResourcesForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
