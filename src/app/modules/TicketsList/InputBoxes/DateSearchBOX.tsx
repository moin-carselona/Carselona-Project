import React from 'react'
const DateSearchBOX = ({ payloads, handleChangeInput, searchOnclick }: any) => {
    return (
            <div className='d-flex align-items-center justify-content-start me-12   ' >
                <input
                    type='text'
                    data-kt-user-table-filter='search'
                    className='form-control form-control-solid w-50 me-2'
                    style={{ height: "38px" }}
                    placeholder='Search'
                    onChange={(event: any) => handleChangeInput(event.target, "searchs")}
                />
                <div className='d-flex align-items-center justify-content-end w-50 '>
                    <input
                        type='date'
                        style={{ height: "38px" }}
                        value={payloads.attendencedatefrom}
                        name="attendencedatefrom"
                        onChange={(event: any) => handleChangeInput(event.target, "attendencedatefrom")}
                        className='w-100  height-100 form-control me-2 align-start'
                    />
                    <h4 className=' me-2  mt-4 '>to </h4>
                    <input
                        type='date'
                        style={{ height: "38px" }}
                        name="attendencedateto"
                        value={payloads.attendencedateto}
                        onChange={(event: any) => handleChangeInput(event.target, "attendencedateto")}
                        className='w-100 form-control me-2 align-start'
                    />
                </div>
                <button className="btn btn-sm btn-primary w-25" onClick={searchOnclick}>Search</button>
            </div>
    )
}
export default DateSearchBOX