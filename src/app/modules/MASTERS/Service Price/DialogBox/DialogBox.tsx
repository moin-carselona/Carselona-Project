import { Dialog } from "@mui/material";
import AddNewServicePricesForm from "../addNewServicePricesForm/AddNewServicePricesForm";

interface Props {
    PopUpServicePrices: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpServicePrices, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpServicePrices}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewServicePricesForm PopUpServicePrices={PopUpServicePrices} ></AddNewServicePricesForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
