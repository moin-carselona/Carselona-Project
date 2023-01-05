import React from 'react'
const BankForm = ({ handleChangeInputData, PayloadsBank }: any) => {
    return (
        <>
           
            <div className="col-12  mb-3">
                <h5>Account Holder Name </h5>
                <input
                    placeholder='Account Holder Name Here...'
                    name='holder_name'
                    type='text'
                    value={PayloadsBank?.holder_name}
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    autoComplete='off'
                    onChange={(e) => handleChangeInputData(e.target, "bank")}
                />
            </div>
            <div className="col-12 mb-3">
                <h5>Account Number</h5>
                <input
                    placeholder='Account Number Here...'
                    name='account_no'
                    type='text'
                    value={PayloadsBank?.account_no}
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    autoComplete='off'
                    onChange={(e) => handleChangeInputData(e.target, "bank")}
                />
            </div>
            <div className="col-12 mb-3">
                <h5>IFSC CODE</h5>
                <input
                    placeholder='IFSC Number Here...'
                    name='ifsc'
                    type='text'
                    value={PayloadsBank?.ifsc}
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    autoComplete='off'
                    onChange={(e) => handleChangeInputData(e.target, "bank")}
                />
            </div>
            <div className="col-12  mb-3">
                <h5>Status </h5>
                <select
                    className='form-select form-select-solid me-2'
                    // data-kt-select2='true'
                    // data-placeholder='Select option'
                    // data-allow-clear='true'
                    name='status'
                    onChange={(e) => handleChangeInputData(e.target, "bank")}
                >
                    <option>Select Status</option>
                    <option value={"1"}>Yes, aleady have any  account</option>
                    <option value={"0"}> No, already do Not have account</option>
                </select>
            </div>
        </>
    )
}
export default BankForm