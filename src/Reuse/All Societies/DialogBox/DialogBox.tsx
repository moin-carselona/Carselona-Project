import { Dialog } from "@mui/material";
import Customer_Information from "../addSocietyForm/AddSocietyForm";
interface Props {
    PopUpSocietyBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpSocietyBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpSocietyBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Customer_Information PopUpSocietyBTN={PopUpSocietyBTN} ></Customer_Information>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
