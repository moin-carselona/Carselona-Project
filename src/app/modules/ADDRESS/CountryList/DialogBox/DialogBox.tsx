import { Dialog } from "@mui/material";
import AddNewCountryListForm from "../AddNewCountryListForm/AddNewCountryListForm";

interface Props {
    PopUpcountryListBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpcountryListBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpcountryListBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewCountryListForm PopUpcountryListBTN={PopUpcountryListBTN} ></AddNewCountryListForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
