import { Dialog } from "@mui/material";
import AddNewCityForm from "../AddNewCityForm/AddNewCityForm";

interface Props {
    PopUpCityBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpCityBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpCityBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewCityForm PopUpCityBTN={PopUpCityBTN} ></AddNewCityForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
