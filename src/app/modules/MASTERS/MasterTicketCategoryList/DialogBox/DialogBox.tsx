import { Dialog } from "@mui/material";
import AddNewMasterTicketCategoryForm from "../AddNewMasterTicketCategoryForm/AddNewMasterTicketCategoryForm";

interface Props {
    PopUpMasterTicketCategoryBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpMasterTicketCategoryBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpMasterTicketCategoryBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewMasterTicketCategoryForm PopUpMasterTicketCategoryBTN={PopUpMasterTicketCategoryBTN} ></AddNewMasterTicketCategoryForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
