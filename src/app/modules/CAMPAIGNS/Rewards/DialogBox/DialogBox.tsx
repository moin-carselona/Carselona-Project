import { Dialog } from "@mui/material";
import AddNewRewardsForm from "../AddNewRewardsForm/AddNewRewardsForm";

interface Props {
    PopUpRewardsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpRewardsBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpRewardsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewRewardsForm PopUpRewardsBTN={PopUpRewardsBTN} ></AddNewRewardsForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
