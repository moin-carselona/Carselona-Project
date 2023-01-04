import { Dialog } from "@mui/material";
import AddNewVehicleCategoryForm from "../AddNewVehicleCategoryForm/AddNewVehicleCategoryForm";

interface Props {
    PopUpVehicleategoryBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpVehicleategoryBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpVehicleategoryBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewVehicleCategoryForm PopUpVehicleategoryBTN={PopUpVehicleategoryBTN} ></AddNewVehicleCategoryForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
