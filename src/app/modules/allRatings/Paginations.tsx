import React from 'react'
type Props ={
    handlePaginationBTN:(value:any)=>void
    setLengths: (event:any)=>void
    setPageStart:(event:any)=>void
    SetCurrentStatus:(event:any)=>void
    CurrentStatus:any
}
const Paginations = ({handlePaginationBTN,setLengths,SetCurrentStatus, CurrentStatus,setPageStart}:Props) => {
    // console.log('CurrentStatus pages', CurrentStatus);
    return (
        <div>
        <nav aria-label="Page navigation example" id='kt_table_users_paginate'>
            <ul className="pagination justify-content-end me-5 pagination">
                {/* <li className="page-item active" ><input className="page-link" value={1} /></li> */}

                <li className={CurrentStatus == "prev" ? "page-item active " : "page-item"} >
                    {CurrentStatus == "prev" ? <a className="page-link" href="#" aria-label="Previous" >
                        {/* <span aria-hidden="true">&laquo;</span> */}
                        <span className='' >Prev</span>
                    </a> : <a className="page-link" href="#" aria-label="Previous" onClick={() => handlePaginationBTN("prev")} >
                        {/* <span aria-hidden="true">&laquo;</span> */}
                        <span className='' >Prev</span>
                    </a>}
                </li>
                <li className={CurrentStatus == 1 ? "page-item active" : "page-item"}><a className="page-link" href="#" onClick={() => handlePaginationBTN(1)}  >1</a></li>
                <li className={CurrentStatus == 2 ? "page-item active" : "page-item"}><a className="page-link" href="#" onClick={() => handlePaginationBTN(2)} >2</a></li>
                <li className={CurrentStatus == 3 ? "page-item active" : "page-item"}><a className="page-link" href="#" onClick={() => handlePaginationBTN(3)} >3</a></li>
                <li className={CurrentStatus == "next" ? "page-item active" : "page-item fs-8"}>
                    {/* <a className="page-link" href="#" onClick={() => handlePaginationBTN("next")}  >Next</a> */}
                    <a className="page-link" href="#" aria-label="next" onClick={() => handlePaginationBTN("next")} >
                        {/* <span aria-hidden="true" className='fw-12'>&raquo;</span> */}
                        <span >Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Paginations
