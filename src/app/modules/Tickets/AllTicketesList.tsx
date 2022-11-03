import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { ColumnInstance, Row, useTable } from 'react-table'
import { User } from '../apps/user-management/users-list/core/_models'
import { CustomHeaderColumn } from '../apps/user-management/users-list/table/columns/CustomHeaderColumn'
import { CustomRow } from '../apps/user-management/users-list/table/columns/CustomRow'
import { KTCardBody } from '../../../_metronic/helpers'
import { AllTicketsAPI, allTicketsPagination, SearchTicketsAPI, allTicketsFilterAPI, filterbyCleanerID, filterbySourceID, filterbyCustomerID } from './ApisURL'
import Paginations from './Paginations'
import { TicketsColumns } from './TicketsColumns'
import MultiCleanerInput from './MultiSelect/MultiCleanerInput'
import MultiCustomerInput from './MultiSelect/MultiCustomerInput'
import MultiTicketCategoryInput from './MultiSelect/MultiTicketCategoryInput'
import { useDispatch, useSelector } from "react-redux"
import { CustomRowTable } from './CustomRowTable'
import { ChatTicketID } from '../../../Redux/Action/Chats/ChatAction'
import Tables from '../TablesGeneral/Tables'
const AllTicketesList: FC = () => {
    const [isLoading, setLoading] = React.useState(false)
    const [TicketsData, setTicketsData] = React.useState([])
    console.log('TicketsData', TicketsData);
    const [SearchTickets, setSearchTickets] = React.useState("")
    const [lengths, setLengths] = React.useState<any>(10)
    const [start, setPageStart] = React.useState<any>(1)
    console.log('start', start);
    const [order, setOrder] = React.useState("DESC")
    const [columnsApi, setcolumnsApi] = React.useState("customerid")
    const [CleanerfilterData, setCleanerfilterData] = React.useState<any>([])
    const [SelectedFilterCleanerID, setSelectedFilterCleanerID] = React.useState<any>(0)
    console.log('SelectedFilterCleanerID', SelectedFilterCleanerID);
    const [CustomerfilterData, setCustomerfilterData] = React.useState<any>([])
    const [SelectedFilterCsomerID, setSelectedFilterCsomerID] = React.useState<any>(0)
    console.log('SelectedFilterCsomerID', SelectedFilterCsomerID);
    const [SelectedFilterTicketCateogryData, setSelectedFilterTicketCateogryData] = React.useState<any>([])
    const [SelectedFilterTicketCateogryId, setSelectedFilterTicketCateogryId] = React.useState<any>(0)
    console.log('SelectedFilterTicketCateogryId', SelectedFilterTicketCateogryId);
    const [SelectedFilterSuperVisor, setSelectedFilterSuperVisor] = React.useState<any>([])
    const [SelectedFilterSuperID, setSelectedFilterSuperID] = React.useState<any>(0)
    const [CurrentStatus, SetCurrentStatus] = React.useState<any>(1)
    const data = useMemo(() => TicketsData, [TicketsData])
    const columns = useMemo(() => TicketsColumns, [TicketsColumns])
    const dispatch = useDispatch()
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
        columns,
        data,
    })
    const [loading2, setLoading2] = useState(false)
    // filter by cleaner id here ................................................
    React.useEffect(() => {
        setLoading2(true)
        async function invokefilter() {
            const { data } = await filterbyCleanerID(SelectedFilterCleanerID, "cleanerid")
            // console.log('data', 1);
            setTicketsData(data.data.rows)
            setLoading2(false)
        }
        SelectedFilterCleanerID && invokefilter()
        return () => {
            return
        }
    }, [SelectedFilterCleanerID])
    // filter by customer id here ................................................
    React.useEffect(() => {
        setLoading2(true)
        async function invokefilter() {
            const { data } = await filterbyCustomerID(SelectedFilterCsomerID, "customerid ")
            setTicketsData(data.data.rows)
            // console.log('data', 2);
            setLoading2(false)
        }
        SelectedFilterCsomerID && invokefilter()
        return () => {
            return
        }
    }, [SelectedFilterCsomerID])
    // filter by source id here ................................................
    React.useEffect(() => {
        setLoading2(true)
        async function invokefilter() {
            const { data } = await filterbySourceID(SelectedFilterTicketCateogryId, "sourceid ")
            setTicketsData(data.data.rows)
            // console.log('data', 3);
            setLoading2(false)
        }
        SelectedFilterTicketCateogryId && invokefilter()
        return () => {
            return
        }
    }, [SelectedFilterTicketCateogryId])
    // fetch all data and also search data by cleaner or cusomer name  ................................................
    useEffect(() => {
        setLoading(true)
        async function invokedRatFil() {
            const { data } = await allTicketsFilterAPI()
            // console.log('data Filter api', data);
            setCleanerfilterData(data.cleanerdata)
            setCustomerfilterData(data.customerdata)
            setSelectedFilterTicketCateogryData(data.ticketcategorydata)
            // console.log('data', 0);
            // setSelectedFilterSuperVisor(data.supervisordata)
        }
        invokedRatFil()
        async function invoked() {
            const { data } = await AllTicketsAPI()
            // console.log('data', data);
            setTicketsData(data.data.rows)
            setLoading(false)
            // console.log('data', 0);
        }
        invoked()
        return () => {
            return
        }
    }, [])
    // Search BTN
    const handleRatingSearch = async (value: any) => {
        setLoading2(true)
        // setTimeout(() => {
        async function getSearchData() {
            const { data } = await SearchTicketsAPI(value)
            // console.log('search rating api', data);
            setTicketsData(data.data.rows)
            setLoading2(false)
        }
        getSearchData()
        // }, 2000)
    }
    // Pagination BTN
    const handlePaginationBTN = async (value: any,) => {
        console.log('value', value);
        setLoading2(true)
        if (value == "prev") {
            SetCurrentStatus("prev")
            value >= 11 ? setPageStart((prev: any) => prev - 10) : setPageStart(1)
        }
        else if (value == "next") {
            SetCurrentStatus("next")
            setPageStart((next: any) => next + 10)
        }
        else if (value == 1) {
            SetCurrentStatus(value)
            setPageStart(11)
        }
        else if (value == 2) {
            SetCurrentStatus(value)
            setPageStart(21)
        }
        else if (value == 3) {
            SetCurrentStatus(value)
            setPageStart(31)
        }
    }
    //pagination useEffect 
    React.useEffect(() => {
        async function GetpaginationData() {
            const { data } = await allTicketsPagination(start, lengths, order, columnsApi)
            setTicketsData(data.data.rows)
            setLoading2(false)
        }
        GetpaginationData()
    }, [start])
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
        // console.log('value', value);
        setSearchTickets(value)
        handleRatingSearch(value)
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
        console.log('ticketid from parent', ticketids);
        dispatch(ChatTicketID(ticketids))
    }
    return (
        <>
 
 <KTCardBody className='card py-4'>
            <div className='d-flex justify-content-between mb-3'>
                <div className='align-items-center justify-content-center my-2'>
                    <input
                        type='text'
                        data-kt-user-table-filter='search'
                        className='form-control form-control-solid'
                        placeholder='Search'
                        
                        onChange={deb}
                    />
                </div>
                <div className='d-flex align-items-center justify-content-center my-2'>
                    {/* cleaner id  */}
                    {CleanerfilterData &&
                        <MultiCleanerInput setSelectedFilterCleanerID={setSelectedFilterCleanerID} CleanerfilterData={CleanerfilterData} ></MultiCleanerInput>
                    }
                    {/* cleaner id  */}
                    {/* Customer id MultiSelect  */}
                    <MultiCustomerInput setSelectedFilterCsomerID={setSelectedFilterCsomerID} CustomerfilterData={CustomerfilterData} ></MultiCustomerInput>
                    {/* Customer id MultiSelect  */}
                    {/* Source id MultiSelect  */}
                    <MultiTicketCategoryInput setSelectedFilterTicketCateogryId={setSelectedFilterTicketCateogryId} SelectedFilterTicketCateogryData={SelectedFilterTicketCateogryData} ></MultiTicketCategoryInput>
                    {/* Customer id MultiSelect  */}
                </div>
            </div>
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
            {
                !loading2 &&
                <Paginations SetCurrentStatus={SetCurrentStatus} CurrentStatus={CurrentStatus} handlePaginationBTN={handlePaginationBTN} setLengths={setLengths} setPageStart={setPageStart} />
            }
            
        </KTCardBody>
            </>
    )
}
export default AllTicketesList







