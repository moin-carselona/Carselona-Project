import { useCallback } from "react"
import React from 'react'
import axios from "axios"
// functinality just copy and paste 
const [SearchTickets, setSearchTickets] = React.useState("")
// to fetch data url  
export function SearchTicketsAPI(SearchTickets: any) {
    return axios.get(`${"BaseURL_Tickets"}/admin/servergetticketallticketAdminNewPagination?search=${SearchTickets}&start=${0}&length=${10}&columns=id&orders=desc`).catch((error) => console.log('error', error.message))
}

// debouncing 
function debouncing(this: any, argument: any) {
    let timer: any
    let constest: any = this
    return function (...args: any) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(function () {
            timer = null
            argument.apply(constest, args)
        }, 1000)
    }
}



// search function

const handleRatingSearch = async (value: any) => {
    // setLoading2(true)
    async function getSearchData() {
        // const { data } = await SearchTicketsAPI(value)
        // setTicketsData(data.data.rows)
        // setLoading2(false)
    }
    getSearchData()
 
}


// to hnadle input value
const handleChange = (e: any) => {
    const { value } = e.target
    setSearchTickets(value)
    handleRatingSearch(value)
}

// to memoized
const deb = useCallback(debouncing(handleChange), [])


const ReuseDebouncingMoin = () => {
    return (
        <div>
            <input
                type='text'
                data-kt-user-table-filter='search'
                className='form-control form-control-solid'
                placeholder='Search'
                onChange={deb}
            />
        </div>
    )
}
export default ReuseDebouncingMoin
