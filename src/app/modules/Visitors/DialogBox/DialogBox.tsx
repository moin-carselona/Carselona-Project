import { Dialog } from "@mui/material";
import VisitorsAddNewForms from "../VisitorsAddNewForms/VisitorsAddNewForms";

interface Props {
    PopUpVisitoreBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpVisitoreBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpVisitoreBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <VisitorsAddNewForms PopUpVisitoreBTN={PopUpVisitoreBTN} ></VisitorsAddNewForms>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
