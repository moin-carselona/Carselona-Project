import {url} from 'inspector'
import React, {FC} from 'react'
import dummyProfile from '../../../../../_metronic/assets/image/dummyProfile.png'

type Props = {
  handleCloseModal: () => void
  isProfileData: any
}
const OnBoardingCleanerProfileView: FC<Props> = (props: Props) => {
  const {handleCloseModal, isProfileData} = props
  console.log(isProfileData, 'isProfileData')

  return (
    <div>
      <div className='modal-dialog modal-dialog-centered mw-800px m-3'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2 className='fw-bolder'>Add User</h2>
            <div
              className='btn btn-icon btn-sm btn-active-icon-primary'
              data-kt-users-modal-action='close'
              style={{cursor: 'pointer'}}
              onClick={handleCloseModal}
            >
              <span className='svg-icon svg-icon-1'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mh-50px'
                >
                  <rect
                    opacity='0.5'
                    x='6'
                    y='17.3137'
                    width='16'
                    height='2'
                    rx='1'
                    transform='rotate(-45 6 17.3137)'
                    fill='currentColor'
                  />
                  <rect
                    x='7.41422'
                    y='6'
                    width='16'
                    height='2'
                    rx='1'
                    transform='rotate(45 7.41422 6)'
                    fill='currentColor'
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className='modal-body'>
            <form id='kt_modal_add_user_form' className='form' noValidate>
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
                <div className='fv-row mb-7 mt-8'>
                  <div
                    className='image-input image-input-outline'
                    data-kt-image-input='true'
                    // style={{
                    //   backgroundImage: "../../../../../_metronic/assets/image/dummyProfile.png",
                    // }}
                  >
                    <div
                      className='ms-5 image-input-wrapper w-125px h-125px'
                      // style={{
                      //   backgroundImage: url('dummyProfile'),
                      // }}
                    ></div>
                  </div>
                </div>
                <div className='d-flex'>
                  <div className='fv-row mb-7 me-2'>
                    <label className='required fw-bold fs-6 mb-2'>First Name</label>
                    <input
                      placeholder='First name'
                      name='name'
                      type='text'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      autoComplete='off'
                      value=''
                    />
                  </div>
                  <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>Last Name</label>
                    <input
                      placeholder='Last name'
                      name='name'
                      type='text'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      autoComplete='off'
                    />
                  </div>
                </div>
                <div className='d-flex'>
                  <div className='fv-row mb-7 me-2'>
                    <label className='required fw-bold fs-6 mb-2'>Email</label>
                    <input
                      placeholder='Email'
                      name='email'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      type='email'
                      autoComplete='off'
                    />
                  </div>
                  <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>Phone</label>
                    <input
                      placeholder='Phone'
                      name='Phone'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      type='text'
                      autoComplete='off'
                    />
                  </div>
                </div>
                <div className='fv-row mb-7'>
                  <label className='required fw-bold fs-6 mb-2'>Address</label>
                  <input
                    placeholder='address'
                    name='address'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    type='text'
                    autoComplete='off'
                  />
                </div>
                <div className='mb-7'>
                  <label className='required fw-bold fs-6 mb-5'>Role</label>
                  <div className='d-flex fv-row'>
                    <div className='form-check form-check-custom form-check-solid'>
                      <input
                        className='form-check-input me-3'
                        name='role'
                        type='checkbox'
                        id='kt_modal_update_role_option_0'
                        value='Administrator'
                      />
                      <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                        <div className='fw-bolder text-gray-800'>Active</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center pt-15'>
                <button
                  type='reset'
                  className='btn btn-light me-3'
                  data-kt-users-modal-action='cancel'
                >
                  Discard
                </button>
                <button
                  type='submit'
                  className='btn btn-primary'
                  data-kt-users-modal-action='submit'
                >
                  <span className='indicator-label'>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnBoardingCleanerProfileView
