import { Dialog } from "@mui/material";
import { attendenceStatusInterfaces } from "../Interfaces";
import EditAttendence from "../OldJobPopForms/EditAttendence";
import ImageActionPopup from "../OldJobPopForms/ImageActionPopup";
import UpdateStatusform from "../OldJobPopForms/UpdateStatusform";
interface Props {
    AttendanceID: any
    destination: string;
    handleDiloagboxform: any
    PopupUpdateStatusOpenClose: boolean
    attendancestatusList: attendenceStatusInterfaces
}
const DialogBox = ({ AttendanceID, destination, handleDiloagboxform, PopupUpdateStatusOpenClose, attendancestatusList }: Props) => {
    return (
        <>
            {
                PopupUpdateStatusOpenClose &&
                <Dialog
                    open={true}
                    onClose={handleDiloagboxform}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {destination === "updateStatus" ? <UpdateStatusform handleDiloagboxform={handleDiloagboxform}  attendancestatusList={attendancestatusList} /> : destination === "editAttendance" ? <EditAttendence AttendanceID={AttendanceID} handleDiloagboxform={handleDiloagboxform}  /> : destination === "imageAction" ? <ImageActionPopup AttendanceID={AttendanceID} handleDiloagboxform={handleDiloagboxform} ></ImageActionPopup> : ""}
                </Dialog>
            }
        </>
    )
}
export default DialogBox
