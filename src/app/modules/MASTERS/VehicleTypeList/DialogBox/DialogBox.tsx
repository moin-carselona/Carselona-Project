import { Dialog } from "@mui/material";
import AddNewVehicleTypeForm from "../AddNewVehicleTypeForm/AddNewVehicleTypeForm";

interface Props {
    PopUpVehicleTypeBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpVehicleTypeBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpVehicleTypeBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewVehicleTypeForm PopUpVehicleTypeBTN={PopUpVehicleTypeBTN} ></AddNewVehicleTypeForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
