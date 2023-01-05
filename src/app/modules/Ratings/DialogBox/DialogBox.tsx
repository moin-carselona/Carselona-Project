import { Dialog } from "@mui/material";
import AddRatingForm from "../AddRatingForm/AddRatingForm";
interface Props {
    PopUpSocietyBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpSocietyBTN, PopUpPostFormOpen }: any) => {
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
                    <AddRatingForm PopUpSocietyBTN={PopUpSocietyBTN} ></AddRatingForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
