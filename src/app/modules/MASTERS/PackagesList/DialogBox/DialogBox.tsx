import { Dialog } from "@mui/material";
import AddNewPackagesForm from "../AddNewPackagesForm/AddNewPackagesForm";

interface Props {
    PopUpPackagesList: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpPackagesList, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpPackagesList}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewPackagesForm PopUpPackagesList={PopUpPackagesList} ></AddNewPackagesForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
