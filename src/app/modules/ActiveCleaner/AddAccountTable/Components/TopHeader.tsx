import React from 'react'
// import { DataRow } from '../Interfaces'
export interface topHeaders {
    Search: any
    setSearch: any
    handleCleateAccount:any
}
const TopHeader: React.FC<topHeaders> = ({ Search, setSearch ,handleCleateAccount}) => {
    console.log('Search', Search);
    return (
        <div className='w-100 d-flex align-items-center justify-content-between mb-3  '>
            <div className='d-flex align-items-start justify-content-between '>
                <input
                    type='text'
                    placeholder='Search Here'
                    value={Search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    className='w-100 form-control me-2 align-start'
                />
                <button className='btn btn-sm btn-primary'  onClick={handleCleateAccount}>
                    Add Account
                </button>
            </div>
        </div>
    )
}
export default TopHeader
