import { Dialog } from "@mui/material";
import RolesModuleNewform from "../RolesModuleNewform/RolesModuleNewform";

interface Props {
    PopUpRoleModulelsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpRoleModulelsBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpRoleModulelsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <RolesModuleNewform PopUpRoleModulelsBTN={PopUpRoleModulelsBTN} ></RolesModuleNewform>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
