import moment from 'moment'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from "react-redux"
import { ColumnInstance, Row, useTable } from 'react-table'
import { ChatTicketID } from '../../../Redux/Action/Chats/ChatAction'
import { KTCardBody } from '../../../_metronic/helpers'
import { User } from '../apps/user-management/users-list/core/_models'
import { CustomHeaderColumn } from '../apps/user-management/users-list/table/columns/CustomHeaderColumn'
import { AllTicketsAPI, allTicketsFilterAPI, filterbyCleanerID, SearchTicketsAPI, filterbyCustomerID, filterbySourceID } from './ApisURL'
import { CustomRowTable } from './CustomRowTable'
import DateSearchBOX from './InputBoxes/DateSearchBOX'
import Filteration from './InputBoxes/Filteration'
import SingleSelectInput from './MultiSelect/SingleSelectInput'
import { TicketsColumns } from './TicketsColumns'
interface inputEventChanger {
    lable: string | number
    value: number | number
}
interface payloadsInterfaces {
    attendencedatefrom: any
    attendencedateto: any
    cleanerid: number | string
    customerid: number | string
    ticketidcategory: number | string
    supervisor: number | string
}
const AllTicketesList: FC = () => {
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const [isLoading, setLoading] = React.useState(false)
    const [TicketsData, setTicketsData] = React.useState([])
    const [CleanerfilterData, setCleanerfilterData] = React.useState<any>([])
    const [CustomerfilterData, setCustomerfilterData] = React.useState<any>([])
    const [SelectedFilterTicketCateogryData, setSelectedFilterTicketCateogryData] = React.useState<any>([])
    const [payloads, setPayloads] = React.useState<payloadsInterfaces>(
        {
            attendencedatefrom:  moment().format('YYYY-MM-DD'),
            attendencedateto: moment().format('YYYY-MM-DD'),
            cleanerid: "",
            customerid: "",
            ticketidcategory: "",
            supervisor: "",
        }
    )
    const data = useMemo(() => TicketsData, [TicketsData])
    const columns = useMemo(() => TicketsColumns, [TicketsColumns])
    const dispatch = useDispatch()
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
        columns,
        data,
    })
    const [loading2, setLoading2] = useState(false)
    const handleChangeInput = (event: inputEventChanger, name: string) => {
        // console.log('name', name);
        // console.log('event', event);
        // console.log('name', name);
        if (event === null) {
            setPayloads({ ...payloads, [name]: "" })
        }
        else {
            // console.log('event', event);
            setPayloads({ ...payloads, [name]: event.value })
        }
    }
    console.log('payloads', payloads);
    // // filter by cleaner id here ................................................
    React.useEffect(() => {
        async function invokefilter() {
            setLoading2(true)
            const { data } = await filterbyCleanerID(payloads.cleanerid, "cleanerid", localKeyCheck)
            // console.log('data', data);
            setTicketsData(data.data.rows)
            setLoading2(false)
        }
        payloads.cleanerid && invokefilter()
    }, [payloads.cleanerid])
    // filter by customer id here ................................................
    React.useEffect(() => {
        async function invokefilter() {
            setLoading2(true)
            const { data } = await filterbyCustomerID(payloads.customerid, "customerid", localKeyCheck)
            // console.log('data', data);
            setTicketsData(data.data.rows)
            setLoading2(false)
        }
        payloads.customerid && invokefilter()
    }, [payloads.customerid])
    // filter by source id here ................................................
    React.useEffect(() => {
        async function invokefilter() {
            setLoading2(true)
            const { data } = await filterbySourceID(payloads.ticketidcategory, "sourceid", localKeyCheck)
            // console.log('data', data);
            setTicketsData(data.data.rows)
            setLoading2(false)
        }
        payloads.ticketidcategory && invokefilter()
        return () => {
            return
        }
    }, [payloads.ticketidcategory])
    // fetch all data and also search data by cleaner or cusomer name  ................................................
    useEffect(() => {
        setLoading(true)
        async function invokedRatFil() {
            const { data } = await allTicketsFilterAPI(localKeyCheck)
            // console.log('data', data);
            setCleanerfilterData(data.cleanerdata)
            setCustomerfilterData(data.customerdata)
            setSelectedFilterTicketCateogryData(data.ticketcategorydata)
        }
        invokedRatFil()
        async function invoked() {
            const { data } = await AllTicketsAPI(localKeyCheck)
            setTicketsData(data.data.rows)
            setLoading(false)
        }
        invoked()
    }, [])
    //pagination useEffect 
    // React.useEffect(() => {
    //     async function GetpaginationData() {
    //         const { data } = await allTicketsPagination(start, lengths, order, columnsApi)
    //         setTicketsData(data.data.rows)
    //         setLoading2(false)
    //     }
    //     GetpaginationData()
    // }, [start])
    // Search BTN
    const handleSearchTicket = async (value: any) => {
        console.log('value', value);
        async function getSearchData() {
            setLoading2(true)
            const { data } = await SearchTicketsAPI(value, localKeyCheck)
            setTicketsData(data.data.rows)
            setLoading2(false)
        }
        getSearchData()
        setLoading2(true)
    }
    // Pagination BTN
    const handlePaginationBTN = async (value: any,) => {
    }
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
    const handleChange = (e: any) => {
        const { value } = e.target
        handleSearchTicket(value)
    }
    const deb = useCallback(debouncing(handleChange), [])
    if (isLoading) {
        return (
            <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
                <div className='spinner-border mr-15' role='status'></div>
                <h4 className='fw-bold'>Loading...</h4>
            </div>
        )
    }
    const HandleChipActivePaid = (ticketids: any) => {
        // console.log('ticketid from parent', ticketids);
        dispatch(ChatTicketID(ticketids))
    }
    return (
        <>
            <KTCardBody className='card py-4'>
                <DateSearchBOX
                    deb={deb} payloads={payloads} handleChangeInput={handleChangeInput}
                />
                <Filteration
                    SingleSelectInput={SingleSelectInput}
                    handleChangeInput={handleChangeInput}
                    CleanerfilterData={CleanerfilterData}
                    CustomerfilterData={CustomerfilterData}
                    SelectedFilterTicketCateogryData={SelectedFilterTicketCateogryData}
                />
                {
                    loading2 ?
                        <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
                            <div className='spinner-border mr-15' role='status'></div>
                            <h4 className='fw-bold'>Loading...</h4>
                        </div>
                        :
                        <div className='table-responsive px-4'>
                            <table
                                id='kt_table_users'
                                className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
                                {...getTableProps()}
                            >
                                <thead>
                                    <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                                        {headers.map((column: ColumnInstance<User>) => (
                                            <CustomHeaderColumn key={column.id} column={column} />
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='text-gray-600 fw-bold'
                                    {...getTableBodyProps()}
                                >
                                    {rows.length > 0 ? (
                                        rows.map((row: Row<User>, i) => {
                                            prepareRow(row)
                                            return <CustomRowTable HandleChipActivePaid={HandleChipActivePaid} row={row} key={`row-${i}-${row.id}`} />
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={7}>
                                                <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                                                    No matching records found
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                }
                {/* {
                !loading2 &&
                <Paginations SetCurrentStatus={SetCurrentStatus} CurrentStatus={CurrentStatus} handlePaginationBTN={handlePaginationBTN} setLengths={setLengths} setPageStart={setPageStart} />
            } */}
            </KTCardBody>
        </>
    )
}
export default AllTicketesList
