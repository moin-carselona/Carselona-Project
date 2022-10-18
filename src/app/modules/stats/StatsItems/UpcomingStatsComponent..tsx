import { DataGrid } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { FC } from "react";
import { useQueryResponseData } from "../../apps/user-management/users-list/core/QueryResponseProvider";
import { muiColumns } from "../../apps/user-management/users-list/table/columns/statsColumns";
import { usersColumns } from "../../apps/user-management/users-list/table/columns/_columns";
import { ColumnInstance, Row, useTable } from "react-table";
import axios from "axios";
import { KTCardBody } from "../../../../_metronic/helpers";
import { User } from "../../apps/user-management/users-list/core/_models";
import { CustomHeaderColumn } from "../../apps/user-management/users-list/table/columns/CustomHeaderColumn";
import { CustomRow } from "../../apps/user-management/users-list/table/columns/CustomRow";
import { notAssignedColumns } from "../../apps/user-management/users-list/table/columns/_notAssignedColumns";

type Props = {
    upcomingSubscriptions: any,
    isLoading: boolean
}

const UpcomingStatsComponent: FC<Props> = (props: Props) => {
    const [superVisor, setSuperVisor] = React.useState([]);
    const [cleanerList, setCleanerList] = React.useState([]);
    const [packageList, setPackageList] = React.useState([]);
    const [isLoading, setLoading] = React.useState(false);

    const [customerStats, setCustomerStats] = React.useState<any>([]);
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

    const API = "https://adminapi.carselonadaily.com/api/admin/allNotAssignedSubscriptions";

    React.useEffect(() => {
        setLoading(true);
        axios.get(`${API}?start=0&length=10`).then((response) => {
            setCustomerStats(response.data.data);
        }).catch(error => {
            console.log("ERROR", error);
        });

        axios.get('https://adminapi.carselonadaily.com/api/admin/getActivePackageDetails').then((response) => {
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
        axios.get(`${API}?start=0&length=${e.target.value}`).then((response) => {
            setLoading(false);
            setCustomerStats(response.data.data);
        }).catch(error => {
            setLoading(false);
            console.log("ERROR", error);
        });
    }

    const handlePagination = (e: any) => {
        setLoading(true);
        if (e.currentTarget.id === 'next') {
            axios.get(`${API}?start=${pageIndex}&length=${pageSize}`).then((response) => {
                setLoading(false);
                setCustomerStats(response.data.data);
                setPageIndex(pageIndex + 1)
            }).catch(error => {
                setLoading(false);
                console.log("ERROR", error);
            });
        } else if (e.currentTarget.id === 'prev') {
            axios.get(`${API}?start=${pageIndex}&length=${pageSize}`).then((response) => {
                setLoading(false);
                setCustomerStats(response.data.data);
                setPageIndex(pageIndex - 1)
            }).catch(error => {
                setLoading(false);
                console.log("ERROR", error);
            });
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
                        className='form-control form-control-solid bg-white'
                        placeholder='Search user'
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
                <select onChange={handleChangePageSize} className='form-select form-select-solid w-25 bg-white' value={pageSize}>
                    <option>Select Row Size</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a onClick={handlePagination} className={`page-link ${pageIndex == 0 ? 'disabled' : ''}`} id="prev">Previous</a></li>
                        <li className="page-item"><a className="page-link">1</a></li>
                        <li className="page-item"><a className="page-link">2</a></li>
                        <li className="page-item"><a className="page-link">3</a></li>
                        <li className="page-item"><a onClick={handlePagination} className="page-link" id="next">Next</a></li>
                    </ul>
                </nav>
            </div>
        </KTCardBody>
    )
}

export default UpcomingStatsComponent;