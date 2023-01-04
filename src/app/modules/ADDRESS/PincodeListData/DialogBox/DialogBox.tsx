import { Dialog } from "@mui/material";
import AddNewAreasForm from "../AddNewPincodeForm/AddNewPincodeForm";

interface Props {
    PopUpPincodeListBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpPincodeListBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpPincodeListBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewAreasForm PopUpPincodeListBTN={PopUpPincodeListBTN} ></AddNewAreasForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
