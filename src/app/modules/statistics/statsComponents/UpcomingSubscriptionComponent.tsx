import { useMemo } from "react";
import { ColumnInstance, Row, useTable } from "react-table";
import { CSVLink } from "react-csv";
import { KTCardBody } from "../../../../_metronic/helpers";
import { User } from "../../apps/user-management/users-list/core/_models";
import { CustomHeaderColumn } from "../../apps/user-management/users-list/table/columns/CustomHeaderColumn";
import { CustomRow } from "../../apps/user-management/users-list/table/columns/CustomRow";
import { activeSubscriptionColumns } from "../../apps/user-management/users-list/table/columns/statsColumns/_activeSubscriptions";

const UpcomingSubscriptionsComponent = (props: any) => {
    const { statsData } = props;
    
    const data = useMemo(() => statsData, [statsData]);
    const columns = useMemo(() => activeSubscriptionColumns, []);

    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
        columns,
        data,
    })

    return (
        <KTCardBody className='py-4'>
            <CSVLink className="btn btn-primary mb-2 rounded-pill btn-sm" data={statsData}>Export as CSV</CSVLink>
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
            {/* <div className="d-flex justify-content-between">
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
            </div> */}
        </KTCardBody>
    )
}

export default UpcomingSubscriptionsComponent;