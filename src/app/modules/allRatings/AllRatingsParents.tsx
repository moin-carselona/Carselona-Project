import React, { FC, useCallback, useEffect, useMemo } from 'react'
import { ColumnInstance, Row, useTable } from 'react-table'
import { User } from '../apps/user-management/users-list/core/_models'
import { CustomHeaderColumn } from '../apps/user-management/users-list/table/columns/CustomHeaderColumn'
import { CustomRow } from '../apps/user-management/users-list/table/columns/CustomRow'
import { KTCardBody, useDebounce } from '../../../_metronic/helpers'
import { AllRatingAPI, AllRatingPagination, SearchRatingAPI, AllRatingFilterAPI, filterbyCleanerID, filterbySourceID, filterbyCustomerID } from './Apis'
import Paginations from './Paginations'
import { RatingsColumns } from './RatingColumns'
import MultiCleanerInput from './MultiSelect/MultiCleanerInput'
import MultiCustomerInput from './MultiSelect/MultiCustomerInput'
import MultiSourcesInput from './MultiSelect/MultiSourcesInput'
const AllRatingsParents: FC = () => {
    const [isLoading, setLoading] = React.useState(false)
    const [CleanerData, setCleanerData] = React.useState([])
    // console.log('CleanerData', CleanerData);
    const [SearchRating, setSearchRating] = React.useState("")
    const [lengths, setLengths] = React.useState<any>(10)
    const [start, setPageStart] = React.useState<any>(0)
    const [order, setOrder] = React.useState("DESC")
    const [columnsApi, setcolumnsApi] = React.useState("customerid")
    const [CleanerfilterData, setCleanerfilterData] = React.useState<any>([])
    const [SelectedFilterCleanerID, setSelectedFilterCleanerID] = React.useState<any>(0)
    const [CustomerfilterData, setCustomerfilterData] = React.useState<any>([])
    const [SelectedFilterCsomerID, setSelectedFilterCsomerID] = React.useState<any>(0)
    const [SelectedFilterSourceData, setSelectedFilterSourceData] = React.useState<any>([])
    const [SelectedFilterSourceID, setSelectedFilterSourceID] = React.useState<any>(0)
    // console.log('SelectedFilterSourceID', SelectedFilterSourceID);
    const [CurrentStatus, SetCurrentStatus] = React.useState<any>(1)
    const data = useMemo(() => CleanerData, [CleanerData])
    const columns = useMemo(() => RatingsColumns, [RatingsColumns])
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
        columns,
        data,
    })

    React.useEffect(() => {
        async function invokefilter() {
            const { data } = await filterbyCleanerID(SelectedFilterCleanerID, "cleanerid")
            setCleanerData(data.data.rows)
        }
        invokefilter()
        return () => {
            return
        }
    }, [SelectedFilterCleanerID])
    // filter by customer id here ................................................
    React.useEffect(() => {
        async function invokefilter() {
            const { data } = await filterbyCustomerID(SelectedFilterCsomerID, "customerid ")
            setCleanerData(data.data.rows)
        }
        invokefilter()
        return () => {
            return
        }
    }, [SelectedFilterCsomerID])
    // filter by source id here ................................................
    React.useEffect(() => {
        async function invokefilter() {
            const { data } = await filterbySourceID(SelectedFilterSourceID, "sourceid ")
            setCleanerData(data.data.rows)
        }
        invokefilter()
        return () => {
            return
        }
    }, [SelectedFilterSourceID])
    // fetch all data and also search data by cleaner or cusomer name  ................................................
    useEffect(() => {
        setLoading(true)
        async function invokedRatFil() {
            const { data } = await AllRatingFilterAPI()
            // console.log('data Filter api', data);
            setCleanerfilterData(data.cleanerdata)
            setCustomerfilterData(data.customerdata)
            setSelectedFilterSourceData(data.masterrratingsourcedata)
        }
        invokedRatFil()
        async function invoked() {
            const { data } = await AllRatingAPI()
            setCleanerData(data.data.rows)
            setLoading(false)
        }
        invoked()
        return () => {
            return
        }
    }, [])
    // Search BTN
    const handleRatingSearch = async (value: any) => {
        setLoading(true)
        // setTimeout(() => {
        async function getSearchData() {
            const { data } = await SearchRatingAPI(value)
            // console.log('search rating api', data);
            setCleanerData(data.data.rows)
            setLoading(false)
        }
        getSearchData()
        // }, 2000)
    }
    // Pagination BTN
    const handlePaginationBTN = async (value: any) => {
        setLoading(true)
        console.log('value', value);
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
            const { data } = await AllRatingPagination(start, lengths, order, columnsApi)
            setCleanerData(data.data.rows)
            setLoading(false)
        }
        GetpaginationData()
    }, [start])
    // //onkeyDown
    // const handleOnclickEnter = (event: any) => {
    //     if (event.key === 'Enter') {
    //         // handleRatingSearch()
    //     }
    // }
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
        setSearchRating(value)
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
    return (
        <KTCardBody className='card py-4'>
            <div className='d-flex justify-content-between mb-3'>
                <div className='align-items-center justify-content-center my-2'>
                    <input
                        type='text'
                        data-kt-user-table-filter='search'
                        className='form-control form-control-solid'
                        placeholder='Search'
                        // value={searchValue}
                        // onChange={(e) => setSearchRating(e.target.value)}
                        onChange={deb}
                    // onKeyDown={handleOnclickEnter}
                    />
                </div>
                <div className='d-flex align-items-center justify-content-center my-2'>
                    {/* <select
                        className='form-select form-select-solid me-2'
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id='packageId'
                    // onChange={handleChange}
                    >
                        <option>Filter by Cleaner</option>
                        {CleanerfilterData?.map((cleaner: any) => {
                            return (
                                <option value={cleaner.id} key={cleaner.id}>
                                    {cleaner.first_name}
                                </option>
                            )
                        })}
                    </select> */}
                    {/* cleaner id  */}
                    {CleanerfilterData &&
                        <MultiCleanerInput setSelectedFilterCleanerID={setSelectedFilterCleanerID} CleanerfilterData={CleanerfilterData} ></MultiCleanerInput>
                    }
                    {/* cleaner id  */}
                    {/* Customer id MultiSelect  */}
                    <MultiCustomerInput setSelectedFilterCsomerID={setSelectedFilterCsomerID} CustomerfilterData={CustomerfilterData} ></MultiCustomerInput>
                    {/* Customer id MultiSelect  */}
                    {/* Source id MultiSelect  */}
                    <MultiSourcesInput setSelectedFilterSourceID={setSelectedFilterSourceID} SelectedFilterSourceData={SelectedFilterSourceData} ></MultiSourcesInput>
                    {/* Customer id MultiSelect  */}
                </div>
            </div>
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
                                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
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
            <Paginations SetCurrentStatus={SetCurrentStatus} CurrentStatus={CurrentStatus} handlePaginationBTN={handlePaginationBTN} setLengths={setLengths} setPageStart={setPageStart} />
        </KTCardBody>
    )
}
export default AllRatingsParents
