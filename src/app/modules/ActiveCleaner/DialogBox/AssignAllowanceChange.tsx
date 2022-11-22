import React, { useState } from 'react';
import AssignAllowance from './Components/AssignAllowanceChange/AssignAllowance';
import SelectDropdownForms from './Components/AssignAllowanceChange/SelectDropdownForms';
function AssignAllowanceChange() {
    const [updateCheckSwitch, setupdateCheckSwitch] = useState(false)
    // console.log('updateCheckSwitch ======== allowanceAssign', updateCheckSwitch);
    return (
        <>
            <div className=' mr-auto' style={{ width: "850px" }}>
                <AssignAllowance></AssignAllowance>
            </div>
            <div className=' mr-auto' style={{ width: "850px" }}>
                <div className='d-flex align-items-center justify-content-around '>
                    <SelectDropdownForms></SelectDropdownForms>
                </div>
                <br />
                <div className='d-flex align-items-start justify-content-start '>
                    <input
                        type='text'
                        placeholder='amounts'
                        // value={Search}
                        // onChange={(e: any) => setSearch(e.target.value)}
                        className='w-100 form-control me-2 align-start'
                    />
                </div>
                <br />
                <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                        <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                name='layout-builder[layout][aside][minimize]'
                                checked={updateCheckSwitch}
                                onChange={() =>
                                    setupdateCheckSwitch(!updateCheckSwitch)
                                }
                            />
                        </div>
                    </div>
                    {/* <div className='form-text text-muted'>Enable aside minimization</div> */}
                </div>
            </div>
            <button type="submit" className="btn btn-warning"><i className="fa fa-plus-circle mr-2"></i>Assign</button>
        </>
    )
}
export default AssignAllowanceChange