import { Dialog } from "@mui/material";
import AddNewPointTableForm from "../AddNewPointTableForm/AddNewPointTableForm";

interface Props {
    PopUpPointTableBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpPointTableBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpPointTableBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewPointTableForm PopUpPointTableBTN={PopUpPointTableBTN} ></AddNewPointTableForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
