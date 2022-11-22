import React, { useState } from 'react';
import SelectDropdownForms from './Components/AssignAllowanceChange/SelectDropdownForms';
import ViewLoansList from './Components/ViewLoans/ViewLoansList';
function ViewLoans() {
    const [updateCheckSwitch, setupdateCheckSwitch] = useState(false)
    // console.log('updateCheckSwitch ======== allowanceAssign', updateCheckSwitch);
    return (
        <>
            <div className=' mr-auto mb-10' style={{ width: "850px" }}>
                <ViewLoansList></ViewLoansList>
            </div>
            <div className=' mr-auto' style={{ width: "850px" }}>
                <div className='d-flex align-items-center justify-content-around  mb-3'>
                    <input
                        type='text'
                        placeholder='Amounts'
                        // value={Search}
                        // onChange={(e: any) => setSearch(e.target.value)}
                        className='form-control form-control-solid me-2'
                    />
                    <input
                        type='text'
                        placeholder='Loan Tenor'
                        // value={Search}
                        // onChange={(e: any) => setSearch(e.target.value)}
                        className='form-control form-control-solid me-2'
                    />
                </div>
                <div className='d-flex align-items-center justify-content-around mb-3'>
                    <select
                        className='form-select form-select-solid me-2'
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id='cleanerType'
                    // onChange={handleChange}
                    >
                        <option>Select Loan Tenor Type</option>
                        {[
                            { id: 0, name: 'Fuel Allowance ' },
                            { id: 1, name: 'No Fuel Allowance' },
                        ].map((item: any) => {
                            return (
                                <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                            )
                        })}
                    </select>
                    <input
                        type='text'
                        placeholder='Amounts'
                        // value={Search}
                        // onChange={(e: any) => setSearch(e.target.value)}
                        className='form-control form-control-solid me-2'
                    />
                </div>
                <div className='d-flex align-items-center justify-content-around  mb-3'>
                    <input
                        type='text'
                        placeholder='Rate Of Intrest'
                        // value={Search}
                        // onChange={(e: any) => setSearch(e.target.value)}
                        className='form-control form-control-solid me-2'
                    />
                    <input
                        type='text'
                        placeholder='EMI Amount'
                        // value={Search}
                        // onChange={(e: any) => setSearch(e.target.value)}
                        className='form-control form-control-solid me-2'
                    />
                </div>
                <div className='d-flex align-items-center justify-content-around mb-3'>
                    <SelectDropdownForms></SelectDropdownForms>
                </div>
                <div className='d-flex align-items-center justify-content-around  mb-5'>
                    <input
                        type='text'
                        placeholder='Status'
                        // value={Search}
                        // onChange={(e: any) => setSearch(e.target.value)}
                        className='form-control form-control-solid me-2'
                    />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-warning"><i className="fa fa-plus-circle mr-2"></i>Create
                    LOAN</button>
            </div>
            {/* <button type="submit" className="btn btn-warning"><i className="fa fa-plus-circle mr-2"></i>Assign</button> */}
        </>
    )
}
export default ViewLoans