import { Dialog } from "@mui/material";
import AddNewJobSitesForm from "../AddNewJobSitesForm/AddNewJobSitesForm";

interface Props {
    PopUpJobSiteBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpJobSiteBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpJobSiteBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewJobSitesForm PopUpJobSiteBTN={PopUpJobSiteBTN} ></AddNewJobSitesForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
