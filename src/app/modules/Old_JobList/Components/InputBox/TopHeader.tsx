import React from 'react'
import { DataRow } from '../Interfaces'
export interface topHeaders {
    Search: any
    todaysDate: any
    setDate: any
    setLastDate: any
    setSearch: any
    lastDate: any
    handleSearchSociety: any
}
const TopHeader: React.FC<topHeaders> = ({ Search, todaysDate, setDate, setLastDate, setSearch, lastDate , handleSearchSociety}) => {
    return (
        <div className='w-100 d-flex align-items-center justify-content-between mb-3  '>
            <div className='d-flex align-items-start justify-content-start '>
                <input
                    type='text'
                    placeholder='Search Here'
                    value={Search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    className='w-100 form-control me-2 align-start'
                />
            </div>
            <div className='d-flex align-items-center justify-content-end '>
                <input
                    type='date'
                    value={todaysDate}
                    onChange={(e: any) => setDate(e.target.value)}
                    className='w-100  height-100 form-control me-2 align-start'
                />
                <h4 className=' me-2  mt-4 '>to </h4>
                <input
                    type='date'
                    value={lastDate}
                    onChange={(e: any) => setLastDate(e.target.value)}
                    className='w-100 form-control me-2 align-start'
                />
                {/* <button  className='w-100 form-control me-2 align-start btn-primary' >Submit</button> */}
                <a className="btn btn-sm btn-primary  cursor-pointer" id="kt_toolbar_primary_button" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app"  onClick={handleSearchSociety}>Search</a>
            </div>
        </div>
    )
}
export default TopHeader
