import { Dialog } from "@mui/material";
import AllCampaignsnewforms from "../AllCampaignsnewforms/AllCampaignsnewforms";

interface Props {
    PopUpallCampaignsBTN: () => void
    PopUpPostFormOpen: boolean
}
const DialogBox = ({ PopUpallCampaignsBTN, PopUpPostFormOpen }: Props) => {
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
    return (
        <>

            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={PopUpallCampaignsBTN}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AllCampaignsnewforms PopUpallCampaignsBTN={PopUpallCampaignsBTN} ></AllCampaignsnewforms>
                </Dialog>

            }
        </>
    )
}
export default DialogBox
