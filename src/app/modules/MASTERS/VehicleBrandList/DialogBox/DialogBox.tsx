import { Dialog } from "@mui/material";
import AddNewVehicleBrandsForm from "../AddNewVehicleBrandsForm/AddNewVehicleBrandsForm";

interface Props {
    PopUpVehcileBrandBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpVehcileBrandBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpVehcileBrandBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewVehicleBrandsForm PopUpVehcileBrandBTN={PopUpVehcileBrandBTN} ></AddNewVehicleBrandsForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
