import React, {useState, useEffect, useMemo} from "react"
import { useTable, usePagination, useSortBy } from "react-table"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import axios from 'axios'
import SortIcon from 'mdi-react/SortIcon'
import SortAscendingIcon from 'mdi-react/SortAscendingIcon'
import SortDescendingIcon from 'mdi-react/SortDescendingIcon'
import ReactTablePagination from '../modules/Ratings/ReactTablePagination'
import RatingFilter  from "../modules/Ratings/RatingFilter"

const ServerSideDataTable = (props) => {

    const queryClient = new QueryClient()
    const apiName = props.apiName
    const column = props.column

    const initialState = {
        queryPageIndex: 0,
        queryPageSize: 10,
        totalCount: 0,
        queryPageFilter: "",
        queryPageSortBy: [],
    };

    const PAGE_CHANGED = 'PAGE_CHANGED';
    const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED';
    const PAGE_SORT_CHANGED = 'PAGE_SORT_CHANGED';
    const PAGE_FILTER_CHANGED = 'PAGE_FILTER_CHANGED';
    const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED';

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case PAGE_CHANGED:
                return {
                    ...state,
                    queryPageIndex: payload,
                };
            case PAGE_SIZE_CHANGED:
                return {
                    ...state,
                    queryPageSize: payload,
                };
            case PAGE_SORT_CHANGED:
                return {
                    ...state,
                    queryPageSortBy: payload,
                };
            case PAGE_FILTER_CHANGED:
                return {
                    ...state,
                    queryPageFilter: payload,
                };
            case TOTAL_COUNT_CHANGED:
                return {
                    ...state,
                    totalCount: payload,
                };
            default:
                throw new Error(`Unhandled action type: ${type}`);
        }
    };

    const fetchUsersData = async (page, pageSize, pageFilter, pageSortBy) => {
        let paramStr = ''
        if (pageFilter.trim().length > 1) {
            paramStr = `&search=${pageFilter}`
        }
        if (pageSortBy.length > 0) {
            const sortParams = pageSortBy[0];
            const sortyByDir = sortParams.desc ? 'desc' : 'asc'
            paramStr = `${paramStr}&sortby=${sortParams.id}&direction=${sortyByDir}`
        }
        try {
            const response = await axios.get(
                `${apiName}?start=${page}&length=${pageSize}${paramStr}`
            );
            const results = response.data.data;
            console.log(results[0]);
            const data = {
                results: results,
                count: response.data.recordsTotal
            };
            return data;
        } catch (e) {
            throw new Error(`API error:${e?.message}`);
        }
    };

    const DataTable = () => {
        const [keyword, setKeyword] = useState('');
        const [useFilter, setUseFilter] = useState(false);
        const onClickFilterCallback = (filter) => {
            if (filter.trim() === "") {
                alert('Please enter a keyword to search!')
                return
            }
            if (filter === keyword) {
                alert('No change in search')
                return
            }
            setUseFilter(true)
            setKeyword(filter)
        }

        let columns = useMemo(() => column, [])

        const [{ queryPageIndex, queryPageSize, totalCount, queryPageFilter, queryPageSortBy }, dispatch] =
            React.useReducer(reducer, initialState);
        console.log(queryPageSortBy);
        const { isLoading, error, data, isSuccess } = useQuery(
            ['users', queryPageIndex, queryPageSize, queryPageFilter, queryPageSortBy],
            () => fetchUsersData(queryPageIndex, queryPageSize, queryPageFilter, queryPageSortBy),
            {
                keepPreviousData: false,
                staleTime: Infinity,
            }
        );

        const totalPageCount = Math.ceil(totalCount / queryPageSize)

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            page,
            pageCount,
            pageOptions,
            gotoPage,
            previousPage,
            canPreviousPage,
            nextPage,
            canNextPage,
            setPageSize,
            state: { pageIndex, pageSize, sortBy }
        } = useTable({
            columns,
            data: data?.results || [],
            initialState: {
                pageIndex: queryPageIndex,
                pageSize: queryPageSize,
                sortBy: queryPageSortBy,
            },
            manualPagination: true,
            pageCount: data ? totalPageCount : null,
            autoResetSortBy: false,
            autoResetExpanded: false,
            autoResetPage: false
        },
            useSortBy,
            usePagination,
        );
        const manualPageSize = []

        useEffect(() => {
            dispatch({ type: PAGE_CHANGED, payload: pageIndex });
        }, [pageIndex]);

        useEffect(() => {
            dispatch({ type: PAGE_SIZE_CHANGED, payload: pageSize });
            gotoPage(0);
        }, [pageSize, gotoPage]);

        useEffect(() => {
            dispatch({ type: PAGE_SORT_CHANGED, payload: sortBy });
            gotoPage(0);
        }, [sortBy, gotoPage]);

        useEffect(() => {
            if (useFilter) {
                dispatch({ type: PAGE_FILTER_CHANGED, payload: keyword });
                gotoPage(0);
            }
        }, [keyword, gotoPage, useFilter]);

        React.useEffect(() => {
            if (data?.count) {
                dispatch({
                    type: TOTAL_COUNT_CHANGED,
                    payload: data.count,
                });
            }
        }, [data?.count]);

        if (error) {
            return <p>Error</p>;
        }

        if (isLoading) {
            return (
                <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
                    <div className='spinner-border mr-15' role='status'></div>
                    <h4 className='fw-bold'>Loading...</h4>
                </div>
            )
        }
        if (isSuccess)
            return (
                <>
                    <div className='table react-table'>
                        <form className="form form--horizontal">
                            <div className="form__form-group">
                                <div className="col-md-12">
                                    <RatingFilter onClickFilterCallback={onClickFilterCallback} defaultKeyword={keyword} />
                                </div>
                                <div className="col-md-3 col-lg-3 text-right pr-0">
                                    {/* <Link style={{maxWidth:'200px'}}
                                className="btn btn-primary account__btn account__btn--small"
                                to="/users/add"
                                >Add new user
                                </Link> */}
                                </div>
                            </div>
                        </form>
                        {
                            typeof data?.count === 'undefined' && <p>No results found</p>
                        }
                        {data?.count &&
                            <>
                                <table {...getTableProps()} className="table table-hover table-rounded table-striped border gy-7 gs-7">
                                    <thead>
                                        {headerGroups.map((headerGroup) => (
                                            <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-20"
                                                {...headerGroup.getHeaderGroupProps()}>
                                                {headerGroup.headers.map(column => (
                                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                        {column.render('Header')}
                                                        {column.isSorted ? <Sorting column={column} /> : ''}
                                                    </th>
                                                ))}
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody className="table table--bordered" {...getTableBodyProps()}>
                                        {page.map(row => {
                                            prepareRow(row);
                                            return (
                                                <tr {...row.getRowProps()}>
                                                    {
                                                        row.cells.map(cell => {
                                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </>
                        }
                    </div>
                    {(rows.length > 0) && (
                        <>
                            <ReactTablePagination
                                page={page}
                                gotoPage={gotoPage}
                                previousPage={previousPage}
                                nextPage={nextPage}
                                canPreviousPage={canPreviousPage}
                                canNextPage={canNextPage}
                                pageOptions={pageOptions}
                                pageSize={pageSize}
                                pageIndex={pageIndex}
                                pageCount={pageCount}
                                setPageSize={setPageSize}
                                manualPageSize={manualPageSize}
                                dataLength={totalCount}
                            />
                            {/* <div className="pagination justify-content-end mt-2">
                                <span>
                                    Go to page:{' '}
                                    <input
                                        type="number"
                                        value={pageIndex + 1}
                                        onChange={(e) => {
                                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                            gotoPage(page);
                                        }}
                                        style={{ width: '100px' }}
                                    />
                                </span>{' '}
                                <select
                                    value={pageSize}
                                    onChange={(e) => {
                                        setPageSize(Number(e.target.value));
                                    }}
                                >
                                    {[10, 20, 30, 40, 50].map((pageSize) => (
                                        <option key={pageSize} value={pageSize}>
                                            Show {pageSize}
                                        </option>
                                    ))}
                                </select>
                            </div> */}
                        </>
                    )}
                </>
            )
    }

    const Sorting = ({ column }) => (
        <span className="react-table__column-header sortable">
            {column.isSortedDesc === undefined ? (
                <SortIcon />
            ) : (
                <span>
                    {column.isSortedDesc
                        ? <SortAscendingIcon />
                        : <SortDescendingIcon />}
                </span>
            )}
        </span>
    );

    return (
        <QueryClientProvider client={queryClient}>
            <DataTable />
        </QueryClientProvider>
    )
    
}

export default ServerSideDataTable