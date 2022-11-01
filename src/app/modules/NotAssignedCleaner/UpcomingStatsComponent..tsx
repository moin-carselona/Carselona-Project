import { DataGrid } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { FC } from "react";
import { useCallback } from "react"

import { useQueryResponseData } from "../apps/user-management/users-list/core/QueryResponseProvider";
import { muiColumns } from "../apps/user-management/users-list/table/columns/statsColumns";
import { usersColumns } from "../apps/user-management/users-list/table/columns/_columns";
import { ColumnInstance, Row, useTable } from "react-table";
import axios from "axios";
import { KTCardBody } from "../../../_metronic/helpers";
import { User } from "../apps/user-management/users-list/core/_models";
import { CustomHeaderColumn } from "../apps/user-management/users-list/table/columns/CustomHeaderColumn";
import { CustomRow } from "../apps/user-management/users-list/table/columns/CustomRow";
import { notAssignedColumns } from "./_notAssignedColumns";
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from "../../../apiGlobally";
import Paginations from "./Paginations";
import moment from "moment";
import { LocalBaseURL } from "../../../BaseURLmanagement";

type Props = {
    upcomingSubscriptions: any,
    isLoading: boolean
}
const UpcomingStatsComponent: FC<Props> = (props: Props) => {
    LocalBaseURL()
    const [superVisor, setSuperVisor] = React.useState([]);
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    // console.log('localKeyS from upcoming', localKeyCheck);

const [SearchTickets, setSearchTickets] = React.useState("")

    // console.log('localKeyS', localKeyS);
    const [cleanerList, setCleanerList] = React.useState([]);
    const [packageList, setPackageList] = React.useState([]);
    const [isLoading, setLoading] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [CurrentStatus, SetCurrentStatus] = React.useState("");
    const [customerStats, setCustomerStats] = React.useState<any>([]);
    const [start, setPageStart] = React.useState<any>([]);
    const users = useQueryResponseData()
    // const isLoading = useQueryResponseLoading()
    const data = useMemo(() => customerStats, [customerStats]);
    const columns = useMemo(() => notAssignedColumns, [])
    const [pageSize, setPageSize] = React.useState(10);
    const [pageIndex, setPageIndex] = React.useState(0);
    const [query, setQuery] = React.useState("");
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
        columns,
        data,
    })
    const API = `${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAllNotAssingedSubscription`;
    // console.log('BaseURL ============================ baseURL', API);
    React.useEffect(() => {
        
        setLoading(true);
        console.log('BaseURL ============================ baseURL', API);
        axios.get(`${API}?start=0&length=10&orders=desc&columns=id`).then((response) => {
            setCustomerStats(response.data.data);
        }).catch(error => {
            console.log("ERROR", error);
        });
        axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getActivePackageDetails`).then((response) => {
            setPackageList(response.data.data);
            setLoading(false);
        }).catch(error => {
            console.error("ERROR", error);
            setLoading(false);
        });
    }, [])
    const handleChangePageSize = (e: any) => {
        setLoading(true);
        setPageSize(e.target.value);
        axios.get(`${API}?start=0&length=${e.target.value}&orders=desc&columns=id`).then((response) => {
            setLoading(false);
            setCustomerStats(response.data.data);
        }).catch(error => {
            setLoading(false);
            console.log("ERROR", error);
        });
    }
    React.useEffect(() => {
        axios.get(`${API}?start=${start}&length=10&orders=desc&columns=id`).then((response) => {
            setCustomerStats(response.data.data);
            setLoading(false);
        })
    }, [start])
    const handlePaginationBTN = (value: any) => {
        setLoading(true);
        setLoading(true)
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
        setLoading(false);
    }
    const handleChange = (event: any) => {
        setLoading(true);
        setQuery(`?supervisor=${event.currentTarget.value}`);
        axios.get(`${API}?start=0&length=10&${event.currentTarget.id}=${event.currentTarget.value}`).then((response) => {
            setLoading(false);
            setCustomerStats(response.data.data);
        }).catch(error => {
            setLoading(false);
            console.log("ERROR", error);
        });
    };

    //  ====================================================search ===================================================
    // export function SearchTicketsAPI(SearchTickets: any) {
    //     return axios.get(`${"BaseURL_Tickets"}/admin/servergetticketallticketAdminNewPagination?search=${SearchTickets}&start=${0}&length=${10}&columns=id&orders=desc`)
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
const handleChangeSearch = (e: any) => {
    const { value } = e.target
    setSearchTickets(value)
    handleRatingSearch(value)
}

// to memoized
const deb = useCallback(debouncing(handleChangeSearch), [])
    //  ====================================================search ===================================================


    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center h-75 flex-column">
                <div className="spinner-border mr-15" role="status">
                </div>
                <h4 className="fw-bold">Loading...</h4>
            </div>
        )
    }
    return (
        <KTCardBody className='py-4'>
            <div className="d-flex justify-content-between my-2">
                <div className='align-items-center justify-content-center my-2'>
                    <input
                        type='text'
                        data-kt-user-table-filter='search'
                        className='form-control form-control-solid'
                        placeholder='Search'
                        value={searchValue}
                        onChange={deb}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <select
                        className='form-select form-select-solid bg-white'
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-allow-clear='true'
                        id="packageId"
                        onChange={handleChange}
                    >
                        <option>Select Package</option>
                        {packageList?.map((item: any) => {
                            return <option value={item.id}
                                key={item.id}>{item.name}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='table-responsive bg-white px-4'>
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
                    <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
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
            <div className="d-flex justify-content-between">
                <Paginations handlePaginationBTN={handlePaginationBTN} CurrentStatus={CurrentStatus} ></Paginations>
            </div>
        </KTCardBody>
    )
}
export default UpcomingStatsComponent;