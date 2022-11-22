import React, { useMemo } from "react";
import { FC } from "react";
import { useCallback } from "react"
import { useQueryResponseData } from "../apps/user-management/users-list/core/QueryResponseProvider";
import { ColumnInstance, Row, useTable } from "react-table";
import axios from "axios";
import { KTCardBody } from "../../../_metronic/helpers";
import { User } from "../apps/user-management/users-list/core/_models";
import { CustomHeaderColumn } from "../apps/user-management/users-list/table/columns/CustomHeaderColumn";
import { notAssignedColumns } from "./_notAssignedColumns";
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from "../../../apiGlobally";
import { Paginations } from "./Paginations";
import { LocalBaseURL } from "../../../BaseURLmanagement";
import { NotCustomeRow } from "./NotCustomeRow";
type Props = {
    upcomingSubscriptions: any,
    isLoading: boolean
}
const UpcomingStatsComponent: FC<Props> = (props: Props) => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const [Searchs, setSearch] = React.useState("")
    const [packageList, setPackageList] = React.useState([]);
    const [isLoading, setLoading] = React.useState(false);
    const [isLoadingBody, setisLoadingBody] = React.useState(false);
    const [customerStats, setCustomerStats] = React.useState<any>([]);
    const [RecordsTotal, setRecordsTotal] = React.useState<any>([]);
    console.log('RecordsTotal', RecordsTotal);
    const [RecordsFiltered, setRecordsFiltered] = React.useState<any>([]);
    const [start, setPageStart] = React.useState<any>([]);
    const data = useMemo(() => customerStats, [customerStats]);
    const columns = useMemo(() => notAssignedColumns, [])
    const [pageSize, setPageSize] = React.useState(2);
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
            setCustomerStats(response?.data?.data);
            setRecordsTotal(response?.data?.recordsTotal)
            setRecordsFiltered(response?.data?.recordsFiltered)
        }).catch(error => {
            console.log("ERROR", error);
        });
        axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getActivePackageDetails`).then((response) => {
            setPackageList(response?.data?.data);
            setRecordsTotal(response?.data?.recordsTotal)
            setRecordsFiltered(response?.data?.recordsFiltered)
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
            setCustomerStats(response?.data?.data);
            setRecordsTotal(response?.data?.recordsTotal)
            setRecordsFiltered(response?.data?.recordsFiltered)
        }).catch(error => {
            setLoading(false);
            console.log("ERROR", error);
        });
    }
    React.useEffect(() => {
        axios.get(`${API}?start=${start}&length=10&orders=desc&columns=id`).then((response) => {
            setCustomerStats(response?.data?.data);
            setRecordsTotal(response?.data?.recordsTotal)
            setRecordsFiltered(response?.data?.recordsFiltered)
            setisLoadingBody(false);
        })
    }, [start])
    const handlePaginationBTN = (value: any) => {
        setisLoadingBody(true);
        setPageStart((value * 10) + 1)
    }
    const handleChange = (event: any) => {
        setLoading(true);
        setQuery(`?supervisor=${event.currentTarget.value}`);
        axios.get(`${API}?start=0&length=10&${event.currentTarget.id}=${event.currentTarget.value}`).then((response) => {
            setLoading(false);
            setCustomerStats(response?.data?.data);
            setRecordsTotal(response?.data?.recordsTotal)
            setRecordsFiltered(response?.data?.recordsFiltered)
        }).catch(error => {
            setLoading(false);
            console.log("ERROR", error);
        });
    };
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
    const handleSearchs = async (value: any) => {
        setisLoadingBody(true)
        async function getSearchData() {
            axios.get(`${API}?search=${value}&start=0&length=10&orders=desc&columns=id`).then((response) => {
                setCustomerStats(response?.data?.data);
                setRecordsTotal(response?.data?.recordsTotal)
                setRecordsFiltered(response?.data?.recordsFiltered)
        setisLoadingBody(false)
            }).catch(error => {
                console.log("ERROR", error);
            });
        }
        getSearchData()
    }
    // to hnadle input value
    const handleChangeSearch = (e: any) => {
        const { value } = e.target
        setSearch(value)
        handleSearchs(value)
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
            {
                isLoadingBody ? <div className="d-flex align-items-center justify-content-center h-75 flex-column">
                    <div className="spinner-border mr-15" role="status">
                    </div>
                    <h4 className="fw-bold">Loading...</h4>
                </div>
                    :
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
                                        return <NotCustomeRow row={row} key={`row-${i}-${row.id}`} />
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
            <div className='d-flex justify-content-end my-3'>
                <Paginations handlePaginationBTN={handlePaginationBTN} RecordsTotal={RecordsTotal} ></Paginations>
            </div>
        </KTCardBody>
    )
}
export default UpcomingStatsComponent;