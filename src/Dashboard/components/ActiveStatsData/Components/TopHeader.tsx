import React from 'react'
// import { DataRow } from '../Interfaces'
export interface topHeaders {
    Search: any
    setSearch: any
}
const TopHeader: React.FC<topHeaders> = ({ Search,  setSearch  }) => {
    console.log('Search', Search);
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
        
        </div>
    )
}
export default TopHeader
