import React from 'react'
export interface topHeaders {
    Search: any
    setSearch: any
    handleSearchJoblist: any
    handleChangeInputData: any
    payloads: {
        attendencedatefrom: any,
        attendencedateto:  any,
        cleanerid: number | string,
        cleanerstatus: number | string | null,
        timeslotid: number | string | null,
        jobstatus: number | string,
        reportid : number | string,
        customerid: number | string,
        radius: number | string,
        supervisorId: number | string,
    }
}
const TopHeader: React.FC<topHeaders> = ({ payloads, handleChangeInputData, Search, setSearch, handleSearchJoblist }) => {
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
                    value={payloads.attendencedatefrom}
                    onChange={(event) => handleChangeInputData(event.target, "attendencedatefrom")}
                    className='w-100  height-100 form-control me-2 align-start'
                />
                <h4 className=' me-2  mt-4 '>to </h4>
                <input
                    type='date'
                    value={payloads.attendencedateto}
                    onChange={(event) => handleChangeInputData(event.target, "attendencedateto")}
                    className='w-100 form-control me-2 align-start'
                />
                <a className="btn btn-sm btn-primary  cursor-pointer" id="kt_toolbar_primary_button" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" onClick={handleSearchJoblist}>Search</a>
            </div>
        </div>
    )
}
export default TopHeader
