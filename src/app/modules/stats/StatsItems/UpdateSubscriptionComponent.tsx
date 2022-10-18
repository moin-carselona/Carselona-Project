import axios from "axios";
import React, { FC, useState } from "react";
import { User } from "../../apps/user-management/users-list/core/_models";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { isNotEmpty } from "../../../../_metronic/helpers";
import { createUser, updateUser } from "../../apps/user-management/users-list/core/_requests";
import clsx from "clsx";
import { useParams } from "react-router-dom";

type Props = {
    isUserLoading?: boolean
    user?: User
    selectedId?: any
}

const UpdateSubscriptionComponent: FC<Props> = ({ user, isUserLoading, selectedId}) => {
    const [responseData, setResponseData] = React.useState(Object);
    const [isLoading, setLoading] = React.useState(false);
    const [stopType, setStopType] = React.useState([{ id: "1", name: "Inactive" }, { id: "2", name: "Pause" }]);
    const { id }: any = useParams() || "";

    React.useEffect(() => {
        axios.post('https://adminapi.carselonadaily.com/api/admin/getMasterReasonsForSubscription').then((response) => {
            setResponseData(response.data);
            setLoading(false);
        }).catch(error => {
            console.error("ERROR", error);
            setLoading(false);
        });
    }, []);

    const [inputField, setInputField] = useState({
        subscription_id: id,
        isactivestatus: '',
        reason_id: '',
        startdate: '',
        enddate: '',
        refund: '',
        refund_amount: '',

        // subscription_id: 12740
        // isactivestatus: 2
        // reason_id: 10
        // startdate: 2022-08-01
        // enddate: 2022-08-27
        // refund: 0
        // refund_amount: 100
    })

    const [userForEdit] = useState<User>({
        ...user,
        avatar: user?.avatar,
        role: user?.role,
        position: user?.position,
        name: user?.name,
        email: user?.email,
    })

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
            }
        },
    })

    const inputsHandler: any = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        if (id === "refund") {
            if (event.target.checked === true) {
                setInputField((prevState) => ({
                    ...prevState,
                    ['refund']: "1",
                }));
            } else {
                setInputField((prevState) => ({
                    ...prevState,
                    ['refund']: "0",
                }));
            }
        } else {
            console.log(id, value, event.target.checked);
            setInputField((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        }
    }

    const handleSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('subscription_id', selectedId);
        formData.append('isactivestatus', inputField.isactivestatus);
        formData.append('reason_id', inputField.reason_id);
        formData.append('startdate', inputField.startdate);
        formData.append('enddate', inputField.enddate);
        formData.append('refund', inputField.refund);
        formData.append('refund_amount', inputField.refund_amount);

        axios.post('https://adminapi.carselonadaily.com/api/admin/newpauseSubscription', formData).then((response) => {
            alert("Subscription updated successfully");
        }).catch(error => {
            console.error("ERROR", error);
        });
    }

    if (isLoading)
        return (
            <h1>Loading...</h1>
        )

    return (
        <form id='kt_modal_add_user_form' className='form mt-4 p-3' onSubmit={handleSubmit} noValidate>
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
                    <label className='required fw-bold fs-6 mb-2'>Select Reason</label>
                    <select
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id="reason_id"
                        onChange={inputsHandler}
                        className={clsx(
                            'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                            { 'is-invalid': formik.touched.name && formik.errors.name },
                            {
                                'is-valid': formik.touched.name && !formik.errors.name,
                            }
                        )}
                    >
                        <option>Select Reason</option>
                        {responseData.data?.map((item: any) => {
                            return <option value={item.id}
                                key={item.id}>{item.reason}</option>
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
                    <label className='required fw-bold fs-6 mb-2'>Start Date</label>
                    <input
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id="startdate"
                        type="date"
                        onChange={inputsHandler}
                        className={clsx(
                            'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                            { 'is-invalid': formik.touched.name && formik.errors.name },
                            {
                                'is-valid': formik.touched.name && !formik.errors.name,
                            }
                        )}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{formik.errors.name}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>End Date</label>
                    <input
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id="enddate"
                        type="date"
                        onChange={inputsHandler}
                        className={clsx(
                            'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                            { 'is-invalid': formik.touched.name && formik.errors.name },
                            {
                                'is-valid': formik.touched.name && !formik.errors.name,
                            }
                        )}
                    >
                    </input>
                    {formik.touched.name && formik.errors.name && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{formik.errors.name}</span>
                            </div>
                        </div>
                    )}
                </div>


                <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>Stop Type</label>
                    <select
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id="isactivestatus"
                        onChange={inputsHandler}
                        className={clsx(
                            'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                            { 'is-invalid': formik.touched.name && formik.errors.name },
                            {
                                'is-valid': formik.touched.name && !formik.errors.name,
                            }
                        )}
                    >
                        <option value="">Stop Type</option>
                        {stopType.map((item: any) => {
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
                    <label className='required fw-bold fs-6 mb-2'>Initiate Refund</label>
                    <input
                        data-placeholder='Initiate Refund'
                        id="refund"
                        type="checkbox"
                        onChange={inputsHandler}

                    />
                </div>

                {inputField.refund === "1" && <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>Enter Refund Amount</label>
                    <input
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id="refund_amount"
                        type="text"
                        onChange={inputsHandler}
                        className={clsx(
                            'form-select form-select-solid bg-white form-control form-control-solid mb-3 mb-lg-0',
                            { 'is-invalid': formik.touched.name && formik.errors.name },
                            {
                                'is-valid': formik.touched.name && !formik.errors.name,
                            }
                        )}
                    />
                </div>}

            </div>
            <div className='text-center pt-15'>
                <button
                    type='reset'
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
    )
}

export default UpdateSubscriptionComponent;