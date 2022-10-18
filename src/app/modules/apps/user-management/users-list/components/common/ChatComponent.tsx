import { Button, Dialog, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { KTSVG } from "../../../../../../../_metronic/helpers";
import { ChatInner } from "../../../../../../../_metronic/partials";
import AssignAdminComponent from "../AssignAdminComponent";
import DueDateComponent from "../DueDateComponent";

const ChatComponent = (props: { chatData: any, userData: any }) => {
    const { chatData, userData } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isAssignAdmin, setAssignAdmin] = useState(false);
    const [isAssignDueDate, setAssignDueDate] = useState(false);
    const [adminList, setAdminList] = useState([]);
    const [supervisorsList, setSupervisorsList] = useState([]);
    const open = Boolean(anchorEl);

    useEffect(() => {
        // https://adminapi.carselonadaily.com/api/admin/getAdminList
        // https://adminapi.carselonadaily.com/api/admin/getSupervisorList
        axios.all([
            axios.get('https://adminapi.carselonadaily.com/api/admin/getAdminList'),
            axios.get('https://adminapi.carselonadaily.com/api/admin/getSupervisorList')
        ]).then(axios.spread((res1, res2) => {
            setAdminList(res1.data.data)
            setSupervisorsList(res2.data.data)
        }))
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleCloseModal = () => {
        setAssignAdmin(false);
        setAssignDueDate(false);
    }

    const handleModalOpen = () => {
        // isAssignAdmin
        setAssignAdmin(true);
    }

    const handleDueDateModalOpen = () => {
        // isAssignAdmin
        setAssignDueDate(true);
    }

    return (
        <>
            <div className='card w-100 rounded-0' id='kt_drawer_chat_messenger'>
                <div className='card-header pe-5' id='kt_drawer_chat_messenger_header'>
                    <div className='card-title'>
                        <div className='d-flex justify-content-center flex-column me-3'>
                            <a href='#' className='fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1'>
                                {userData.name}
                            </a>

                            <div className='mb-0 lh-1'>
                                <span className='badge badge-success badge-circle w-10px h-10px me-1'></span>
                                <span className='fs-7 fw-bold text-gray-400'>Active</span>
                            </div>
                        </div>
                    </div>

                    <div className='card-toolbar'>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <i className='bi bi-three-dots fs-3'></i>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleModalOpen}>Assign</MenuItem>
                                <MenuItem onClick={handleDueDateModalOpen}>Due Date</MenuItem>
                            </Menu>
                        </div>


                        <div className='btn btn-sm btn-icon btn-active-light-primary' id='kt_drawer_chat_close'>
                            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
                        </div>
                    </div>
                </div>

                {isAssignAdmin && <Dialog
                    open={true}
                    onClose={handleCloseModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <AssignAdminComponent adminList={adminList}
                        supervisorsList={supervisorsList}
                        ticketreplies={chatData && chatData.data}
                        tickets={chatData && chatData.ticket}
                        userData={userData} />
                </Dialog>}

                {isAssignDueDate && <Dialog
                    open={true}
                    onClose={handleCloseModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DueDateComponent tickets={chatData && chatData.ticket} />
                </Dialog>}
                <ChatInner isDrawer={true} ticketreplies={chatData && chatData} tickets={chatData && chatData.ticket} userData={userData} />
            </div>
        </>
    )
}

export default ChatComponent;