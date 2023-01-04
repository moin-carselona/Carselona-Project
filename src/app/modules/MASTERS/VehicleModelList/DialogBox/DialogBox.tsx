import { Dialog } from "@mui/material";
import AddNewVehicleModelForm from "../AddNewVehicleModelForm/AddNewVehicleModelForm";

interface Props {
    PopUpVehicleModelBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpVehicleModelBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpVehicleModelBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewVehicleModelForm PopUpVehicleModelBTN={PopUpVehicleModelBTN} ></AddNewVehicleModelForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
