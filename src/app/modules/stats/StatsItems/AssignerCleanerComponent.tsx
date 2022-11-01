import { FC, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import clsx from 'clsx'
import { useListView } from '../../apps/user-management/users-list/core/ListViewProvider'
import { useQueryResponse } from '../../apps/user-management/users-list/core/QueryResponseProvider'
import { User } from '../../apps/user-management/users-list/core/_models'
import { isNotEmpty, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { createUser, updateUser } from '../../apps/user-management/users-list/core/_requests'
import { UsersListLoading } from '../../apps/user-management/users-list/components/loading/UsersListLoading'
import React from 'react'
import axios from 'axios'
import { useParams, useNavigate, useLocation } from "react-router-dom";

type Props = {
    isUserLoading?: boolean
    user?: User
    selectedId?: any
}

const editUserSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    cleaner: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Cleaner is required'),
})

const AssignerCleanerComponent: FC<Props> = ({ user, isUserLoading, selectedId }) => {
    const { setItemIdForUpdate } = useListView()
    const { refetch } = useQueryResponse()
    const [responseData, setResponseData] = React.useState(Object);
    const [isLoading, setLoading] = React.useState(false);


    const location = useLocation();

    const [days, setDays] = React.useState([
        {id: "1", name: 'Sunday'},
        {id: "2", name: 'Monday'},
        {id: "3", name: 'Tuesday'},
        {id: "4", name: 'Wednesday'},
        {id: "5", name: 'Friday'},
        {id: "6", name: 'Saturday'},
    ]);
    const navigate = useNavigate();

    const [userForEdit] = useState<User>({
        ...user,
        avatar: user?.avatar,
        role: user?.role,
        position: user?.position,
        name: user?.name,
        email: user?.email,
    })

    const [inputField, setInputField] = useState({
        orderid: selectedId,
        newordercleanerid: '',
        fullcleaningday: '',
        frequencyid: '',
        timeslotid: '',
        jobsiteid: '',
    })

    const inputsHandler: any = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setInputField((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }

    React.useEffect(() => {
        const formData = new FormData();
        formData.append('city', '6');
        axios.post('https://testadminapi.carselonadaily.com/api/admin/getactivecleanerforneworder', formData).then((response) => {
            setResponseData(response.data);
            setLoading(false);
        }).catch(error => {
            console.error("ERROR", error);
            setLoading(false);
        });
    }, []);

    const cancel = (withRefresh?: boolean) => {
        if (withRefresh) {
            refetch()
        }
        setItemIdForUpdate(undefined)
    }

    const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
    const userAvatarImg = toAbsoluteUrl(`/media/${userForEdit.avatar}`)

    const formik = useFormik({
        initialValues: userForEdit,
        validationSchema: editUserSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true)
            try {
                if (isNotEmpty(values.id)) {
                    await updateUser(values)
                } else {
                    await createUser(values)
                }
            } catch (ex) {
                console.error(ex)
            } finally {
                setSubmitting(true)
                cancel(true)
            }
        },
    })

    const handleFormSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('orderid', inputField.orderid);
        formData.append('newordercleanerid', inputField.newordercleanerid);
        formData.append('fullcleaningday', inputField.fullcleaningday);
        formData.append('frequencyid', inputField.frequencyid);
        formData.append('timeslotid', inputField.timeslotid);
        formData.append('jobsiteid', inputField.jobsiteid);

        axios.post('https://testadminapi.carselonadaily.com/api/admin/assigncleanertoneworder', formData).
        then((response) => {
            console.log("das", response.data)
            alert("Cleaner Assigned Successfully");
        }).catch(error => {
            console.error("RESPONSE ERROR", error);
        });
    }
    


    if (isLoading)
        return (
            <h1>Loading...</h1>
        )

    return (
        <>
            <form id='kt_modal_add_user_form' className='form mt-4 p-2' onSubmit={handleFormSubmit} noValidate>
                {/* begin::Scroll */}
                <div
                    className='d-flex flex-column scroll-y me-n7 pe-7'
                    id='kt_modal_add_user_scroll'
                    data-kt-scroll='true'
                    data-kt-scroll-activate='{default: false, lg: true}'
                    data-kt-scroll-max-height='auto'
                    data-kt-scroll-dependencies='#kt_modal_add_user_header'
                    data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
                    data-kt-scroll-offset='300px'
                >
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Select Cleaner</label>
                        <select
                            data-kt-select2='true'
                            data-placeholder='Select option'
                            data-allow-clear='true'
                            id="newordercleanerid"
                            onChange={inputsHandler}
                            className={clsx(
                                'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                                { 'is-invalid': formik.touched.name && formik.errors.name },
                                {
                                    'is-valid': formik.touched.name && !formik.errors.name,
                                }
                            )}
                            value={inputField.newordercleanerid}
                        >
                            <option>Select Cleaner</option>
                            {responseData.cleanerlist?.map((item: any) => {
                                return <option value={item.id}
                                    key={item.id}>{item.first_name} {item.last_name}</option>
                            })}
                        </select>
                        {formik.touched.name && formik.errors.name && (
                            <div className='fv-plugins-message-container'>
                                <div className='fv-help-block'>
                                    <span role='alert'>{formik.errors.name}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Select Frequency</label>
                        <select
                            data-kt-select2='true'
                            data-placeholder='Select option'
                            data-allow-clear='true'
                            id="frequencyid"
                            onChange={inputsHandler}
                            className={clsx(
                                'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                                { 'is-invalid': formik.touched.name && formik.errors.name },
                                {
                                    'is-valid': formik.touched.name && !formik.errors.name,
                                }
                            )}
                        >
                            <option value="">Select Frequency</option>
                            {responseData.frequencylist?.map((item: any) => {
                                return <option value={item.id}
                                    key={item.id}>{item.name}</option>
                            })}
                        </select>
                        {formik.touched.name && formik.errors.name && (
                            <div className='fv-plugins-message-container'>
                                <div className='fv-help-block'>
                                    <span role='alert'>{formik.errors.name}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    
                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Select Interior Cleaning</label>
                        <select
                            data-kt-select2='true'
                            data-placeholder='Select option'
                            data-allow-clear='true'
                            id="fullcleaningday"
                            onChange={inputsHandler}
                            className={clsx(
                                'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                                { 'is-invalid': formik.touched.name && formik.errors.name },
                                {
                                    'is-valid': formik.touched.name && !formik.errors.name,
                                }
                            )}
                        >
                            <option value="">Select Interior Cleaning</option>
                            {days.map((item: any) => {
                                return <option value={item.id}
                                    key={item.id}>{item.name}</option>
                            })}
                        </select>
                        {formik.touched.name && formik.errors.name && (
                            <div className='fv-plugins-message-container'>
                                <div className='fv-help-block'>
                                    <span role='alert'>{formik.errors.name}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Select Time Slot</label>
                        <select
                            data-kt-select2='true'
                            data-placeholder='Select option'
                            data-allow-clear='true'
                            id="timeslotid"
                            onChange={inputsHandler}
                            className={clsx(
                                'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                                { 'is-invalid': formik.touched.name && formik.errors.name },
                                {
                                    'is-valid': formik.touched.name && !formik.errors.name,
                                }
                            )}
                        >
                            <option value="">Select Time Slot</option>
                            {responseData.timeslotlist?.map((item: any) => {
                                return <option value={item.id}
                                    key={item.id}>{item.name}</option>
                            })}
                        </select>
                        {formik.touched.name && formik.errors.name && (
                            <div className='fv-plugins-message-container'>
                                <div className='fv-help-block'>
                                    <span role='alert'>{formik.errors.name}</span>
                                </div>
                            </div>
                        )}
                    </div>


                    <div className='fv-row mb-7'>
                        <label className='required fw-bold fs-6 mb-2'>Select Job Site</label>
                        <select
                            data-kt-select2='true'
                            data-placeholder='Select option'
                            data-allow-clear='true'
                            id="jobsiteid"
                            onChange={inputsHandler}
                            className={clsx(
                                'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                                { 'is-invalid': formik.touched.name && formik.errors.name },
                                {
                                    'is-valid': formik.touched.name && !formik.errors.name,
                                }
                            )}
                        >
                            <option value="">Select Job Site</option>
                            {responseData.jobsitelist?.map((item: any) => {
                                return <option value={item.id}
                                    key={item.id}>{item.name}</option>
                            })}
                        </select>
                        {formik.touched.name && formik.errors.name && (
                            <div className='fv-plugins-message-container'>
                                <div className='fv-help-block'>
                                    <span role='alert'>{formik.errors.name}</span>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className='text-center pt-15'>
                    <button
                        type='reset'
                        onClick={() => navigate(-1)}
                        className='btn btn-light me-3'
                        data-kt-users-modal-action='cancel'
                        disabled={formik.isSubmitting || isUserLoading}
                    >
                        Discard
                    </button>

                    <button
                        type='submit'
                        className='btn btn-primary'
                        data-kt-users-modal-action='submit'
                        disabled={isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
                    >
                        <span className='indicator-label'>Submit</span>
                        {(formik.isSubmitting || isUserLoading) && (
                            <span className='indicator-progress'>
                                Please wait...{' '}
                                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                            </span>
                        )}
                    </button>
                </div>
                {/* end::Actions */}
            </form>
            {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
        </>
    )
}

export default AssignerCleanerComponent;
