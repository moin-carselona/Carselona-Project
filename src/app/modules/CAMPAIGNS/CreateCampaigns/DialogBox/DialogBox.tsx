import { Dialog } from "@mui/material";
import AddNewCampaignsForm from "../AddNewCampaignsForm/AddNewCampaignsForm";

interface Props {
    PopUpCampaignsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpCampaignsBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpCampaignsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AddNewCampaignsForm PopUpCampaignsBTN={PopUpCampaignsBTN} ></AddNewCampaignsForm>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
