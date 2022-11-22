import React, { useState } from 'react';
import AssignList from './Components/AssignChangSlabs/AssignList';
function AssignChangeSlabsForm() {
    return (
        <>
            <div className=' mr-auto' style={{ width: "850px" }}>
                <AssignList></AssignList>
            </div>
            <div className=' mr-auto' style={{ width: "850px" }}>
                <div className='d-flex align-items-center justify-content-around '>
                    <select
                        className='form-select form-select-solid me-2'
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id='cleanerType'
                    // onChange={handleChange}
                    >
                        <option>Select Cleaner Type</option>
                        {[
                            { id: 0, name: 'New Schema' },
                            { id: 1, name: 'Old Schema' },
                        ].map((item: any) => {
                            return (
                                <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <br />
                <div className='d-flex align-items-start justify-content-start '>
                    <input
                        type='text'
                        placeholder='Min Earningn Week'
                        // value={Search}
                        // onChange={(e: any) => setSearch(e.target.value)}
                        className='w-100 form-control me-2 align-start'
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-warning"><i className="fa fa-plus-circle mr-2"></i>Assign</button>
        </>
    )
}
export default AssignChangeSlabsForm