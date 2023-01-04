import { Dialog } from "@mui/material";
import AddNewproductsPricesForm from "../AddNewproductsPricesForm/AddNewproductsPricesForm";

interface Props {
    PopUpProductsListsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpProductsListsBTN, PopUpPostFormOpen }: Props) => {
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpProductsListsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewproductsPricesForm PopUpProductsListsBTN={PopUpProductsListsBTN} ></AddNewproductsPricesForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
