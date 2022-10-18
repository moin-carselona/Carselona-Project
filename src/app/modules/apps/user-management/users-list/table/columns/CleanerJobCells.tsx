/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { MenuComponent } from '../../../../../../../_metronic/assets/ts/components'
import { ID, KTSVG, QUERIES } from '../../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { deleteUser } from '../../core/_requests'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import axios from 'axios'
import { Dialog } from "@mui/material";
import AssignerCleanerComponent from '../../../../../stats/StatsItems/AssignerCleanerComponent'
import UpdateSubscriptionComponent from '../../../../../stats/StatsItems/UpdateSubscriptionComponent'
import ChangeCleanerComponent from '../../../../../stats/StatsItems/ChangeCleanerComponent'
import CreateTaskComponent from '../../../../../stats/StatsItems/CreateTaskComponent'
import { toast } from 'react-toastify'
import UpdateStatusComponent from '../../../../../stats/StatsItems/UpdateStatusComponent'

type Props = {
    id: ID,
    data: any
}

const CleanerJobCells: FC<Props> = ({ id, data }) => {
    const { query } = useQueryResponse()
    const queryClient = useQueryClient()
    const [filteredData, setFilteredData] = React.useState<any>([]);
    const [open, setModalOpen] = React.useState(false);
    const [createTask, setCreateTaskOpen] = React.useState(false);

    const [isStatusOpen, setStatusOpen] = React.useState(false);
    const [assignCleanerOpen, setAssignCleanerOpen] = React.useState(false);
    const [timeSlotOpen, setTimeSlotOpen] = React.useState(false);

    const [selectedId, setId] = React.useState("");

    useEffect(() => {
        MenuComponent.reinitialization();
    }, [])

    const deleteItem = useMutation(() => deleteUser(id), {
        // 💡 response of the mutation is passed to onSuccess
        onSuccess: () => {
            // ✅ update detail view directly
            queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
        },
    })

    // const updateStatus = (id: ID) => {
    //     data.filter((item: any) => {
    //         if (item.id === id) {
    //             setFilteredData(item);
    //         }
    //     })
    //     let filteredData = data.filter((item: any) => item.id === id)[0];

    //     const formData = new FormData();
    //     formData.append('vehicleid', filteredData.vehicleid);
    //     formData.append('required_after_cleaning_photos', filteredData.required_after_cleaning_photos);

    //     axios.post('https://adminapi.carselonadaily.com/api/admin/updateVehicleImage', formData).then(response => {
    //         alert("Vehicle updated successfully!");
    //     }).catch(error => {
    //         console.log(error);
    //         alert("Something went wrong!");
    //     })
    // }

    // const handleEditModal = (id: any) => {
    //     setModalOpen(true)
    //     setId(id);
    // }

    // const handleAssignCleanerOpen = (id: any) => {
    //     setAssignCleanerOpen(true)
    //     setId(id);
    // }

    // const handleStatusOpen = (id: any) => {
    //     setStatusOpen(true);
    //     setId(id)
    // }

    const handleTimeSlotOpen = (id: any) => {
        setTimeSlotOpen(true);
        setId(id)
    }

    const handleCreateTask = (id: any) => {
        setId(id);
        setCreateTaskOpen(true);
        
    }

    const handleEditAttendance = (id: any) => {
        const formData = new FormData();
        formData.append("attendanceid", id);
        axios.post("https://adminapi.carselonadaily.com/api/admin/cleanerattendencebyid", formData)
            .then(response => {
                toast.success("Submitted")
            })
            .catch(error => {
                console.log(error)
                toast.error("Something went wrong")
            })
    }

    const handleChangeDate = (id: any) => {
        // https://adminapi.carselonadaily.com/api/admin/cleanerattendencebyid
        const formData = new FormData();
        formData.append("attendanceid", id);
        axios.post("https://adminapi.carselonadaily.com/api/admin/cleanerattendencebyid", formData)
            .then(response => {
                toast.success("Submitted")
            })
            .catch(error => {
                console.log(error)
                toast.error("Something went wrong")
            })
    }

    const handleReportAttendance = (id: any) => {
        // https://adminapi.carselonadaily.com/api/admin/getAttendenncePointCollections
        const formData = new FormData();
        formData.append("attendanceid", id);
        axios.post("https://adminapi.carselonadaily.com/api/admin/getAttendenncePointCollections", formData)
            .then(response => {
                toast.success("Submitted")
            })
            .catch(error => {
                console.log(error)
                toast.error("Something went wrong")
            })
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        setStatusOpen(false)
        setAssignCleanerOpen(false)
        setTimeSlotOpen(false)
        setCreateTaskOpen(false)
    }

    return (
        <>
            <a
                href='#'
                className='btn btn-light btn-active-light-primary btn-sm'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
            >
                Actions
                <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
            </a>
            {/* begin::Menu */}
            <div
                className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                data-kt-menu='true'
            >
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                    <a className='menu-link px-3 bg-danger text-white'
                        onClick={() => handleCreateTask(id)}>
                        Create Task
                    </a>
                </div>
                {/* end::Menu item */}

                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                    <a
                        className='menu-link px-3 text-white bg-warning'
                        data-kt-users-table-filter='delete_row'
                        onClick={() => handleEditAttendance(id)}
                    >
                        Edit Attendance
                    </a>
                </div>

                <div className='menu-item px-3'>
                    <a
                        className='menu-link px-3 text-white bg-success'
                        data-kt-users-table-filter='delete_row'
                        onClick={() => handleChangeDate(id)}
                    >
                        Change Date
                    </a>
                </div>

                <div className='menu-item px-3'>
                    <a
                        className='menu-link px-3 text-white bg-danger'
                        data-kt-users-table-filter='delete_row'
                        onClick={() => handleReportAttendance(id)}
                    >
                        Report Attendance
                    </a>
                </div>

                <div className='menu-item px-3'>
                    <a
                        className='menu-link px-3 text-white bg-warning'
                        data-kt-users-table-filter='delete_row'
                        onClick={() => handleTimeSlotOpen(id)}
                    >
                        Update Status
                    </a>
                </div>

                {/* end::Menu item */}
            </div>
            {/* end::Menu */}

            {createTask && <Dialog
                open={true}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <CreateTaskComponent selectedId={selectedId} data={data} />
            </Dialog>}

            {open && <Dialog
                open={true}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <AssignerCleanerComponent selectedId={selectedId} />
            </Dialog>}

            {isStatusOpen && <Dialog
                open={true}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <UpdateSubscriptionComponent selectedId={selectedId} />
            </Dialog>}

            {assignCleanerOpen && <Dialog
                open={true}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <ChangeCleanerComponent selectedId={selectedId} />
            </Dialog>}

            {timeSlotOpen && <Dialog
                open={true}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <UpdateStatusComponent selectedId={selectedId} data={data} />
            </Dialog>}
        </>
    )
}

export { CleanerJobCells }
