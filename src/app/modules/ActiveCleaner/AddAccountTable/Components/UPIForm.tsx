import React from 'react'
const UPIForm = ({ handleChangeInputData, PayloadsUPI }: any) => {
    return (
        <>
          
            <div className="col-12  mb-3">
                <h5>UPI ID </h5>
                <input
                    placeholder='UPI id Here...'
                    name='upi_id'
                    type='text'
                    value={PayloadsUPI?.upi_id}
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    autoComplete='off'
                    onChange={(e) => handleChangeInputData(e.target, "upi")}
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
                    onChange={(e) => handleChangeInputData(e.target, "upi")}
                >
                    <option>Select Status</option>
                    <option value={"1"}>Yes, aleady have any account</option>
                    <option value={"0"}> No, already do Not have account</option>
                </select>
            </div>
        </>
    )
}
export default UPIForm