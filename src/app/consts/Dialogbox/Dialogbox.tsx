import { Dialog } from "@mui/material";
import AddNewAccountForm from "../../modules/ActiveCleaner/AddAccountTable/Components/AddNewAccountForm";
import AddNewTags from "../../modules/ActiveCleaner/Forms/AddNewTags";
import { AddNewTagsInterfaces } from "../Inerfaces4az/AddNewTagsInterfaces";
import ShowInformation from "../PopUp/ShowInformation";
interface Props {
    handleCloseForm: () => void
    PopUpPostFormOpen: boolean
    ParentData: AddNewTagsInterfaces | null
    reference: string
}
// ChatGlobal
const Dialogbox = ({ handleCloseForm, PopUpPostFormOpen, ParentData, reference }: Props) => {
    return (
        <>
            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={handleCloseForm}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {reference === "ActiveCleanerDropDownAddNewTag" ? <AddNewTags handleCloseForm={handleCloseForm} ParentData={ParentData} /> : reference === "ActiveCleanerTagShow" ? <ShowInformation handleCloseModal={handleCloseForm} HeaderTitle={"TAGS"} SelectedData={ParentData} /> : reference === "AddBankAccount" ? <AddNewAccountForm ParentData={ParentData} DynamicHeaderinfo={"AddBankAccount"} handleCloseModal={handleCloseForm} reference={reference} /> : ""}
                </Dialog>
            }
        </>
    )
}
export default Dialogbox
