/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react'
import { ColumnInstance, Row, useTable } from 'react-table'
import { MenuComponent } from '../../../../../../../_metronic/assets/ts/components/MenuComponent'
import { initialQueryState, KTCardBody, KTSVG, useDebounce } from '../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponseData, useQueryResponseLoading } from '../../core/QueryResponseProvider'
import { User } from '../../core/_models'
import { Stats } from '../../core/_stats'
import { CustomHeaderColumn } from '../../table/columns/CustomHeaderColumn'
import { CustomRow } from '../../table/columns/CustomRow'
import { statsColumn } from '../../table/columns/statsColumns'
import { usersColumns } from '../../table/columns/_columns'
import { UsersListLoading } from '../loading/UsersListLoading'
import { UsersListPagination } from '../pagination/UsersListPagination'

const SupportTicketComponent = () => {
    const { updateState } = useQueryRequest()
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debouncedSearchTerm = useDebounce(searchTerm, 150)

    useEffect(
        () => {
            if (debouncedSearchTerm !== undefined && searchTerm !== undefined) {
                updateState({ search: debouncedSearchTerm, ...initialQueryState })
            }
        },
        [debouncedSearchTerm]
    )

    const users = useQueryResponseData()
    const isLoading = useQueryResponseLoading()
    const data = useMemo(() => users, [users])
    const columns = useMemo(() => statsColumn, [])
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
        columns,
        data,
    })
    const [role, setRole] = useState<string | undefined>()
    const [lastLogin, setLastLogin] = useState<string | undefined>()

    useEffect(() => {
        MenuComponent.reinitialization()
    }, [])

    const resetData = () => {
        updateState({ filter: undefined, ...initialQueryState })
    }

    const filterData = () => {
        updateState({
            filter: { role, last_login: lastLogin },
            ...initialQueryState,
        })
    }
    return (
        <div className='card-title d-flex flex-column'>
            <div className='d-flex align-items-center position-relative my-1'>
                <KTSVG
                    path='/media/icons/duotune/general/gen021.svg'
                    className='svg-icon-1 position-absolute ms-6'
                />
                <input
                    type='text'
                    data-kt-user-table-filter='search'
                    className='form-control form-control-solid w-250px ps-14'
                    placeholder='Search user'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <>
                    <button
                        disabled={isLoading}
                        type='button'
                        className='btn btn-light-primary me-3'
                        data-kt-menu-trigger='click'
                        data-kt-menu-placement='bottom-end'
                    >
                        <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-2' />
                        Filter
                    </button>
                    <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
                        <div className='px-7 py-5'>
                            <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                        </div>
                        <div className='separator border-gray-200'></div>
                        <div className='px-7 py-5' data-kt-user-table-filter='form'>

                            <div className='mb-10'>
                                <label className='form-label fs-6 fw-bold'>Role:</label>
                                <select
                                    className='form-select form-select-solid fw-bolder'
                                    data-kt-select2='true'
                                    data-placeholder='Select option'
                                    data-allow-clear='true'
                                    data-kt-user-table-filter='role'
                                    data-hide-search='true'
                                    onChange={(e) => setRole(e.target.value)}
                                    value={role}
                                >
                                    <option value=''></option>
                                    <option value='Administrator'>Administrator</option>
                                    <option value='Analyst'>Analyst</option>
                                    <option value='Developer'>Developer</option>
                                    <option value='Support'>Support</option>
                                    <option value='Trial'>Trial</option>
                                </select>
                            </div>
                            <div className='mb-10'>
                                <label className='form-label fs-6 fw-bold'>Last login:</label>
                                <select
                                    className='form-select form-select-solid fw-bolder'
                                    data-kt-select2='true'
                                    data-placeholder='Select option'
                                    data-allow-clear='true'
                                    data-kt-user-table-filter='two-step'
                                    data-hide-search='true'
                                    onChange={(e) => setLastLogin(e.target.value)}
                                    value={lastLogin}
                                >
                                    <option value=''></option>
                                    <option value='Yesterday'>Yesterday</option>
                                    <option value='20 mins ago'>20 mins ago</option>
                                    <option value='5 hours ago'>5 hours ago</option>
                                    <option value='2 days ago'>2 days ago</option>
                                </select>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button
                                    type='button'
                                    disabled={isLoading}
                                    onClick={resetData}
                                    className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'
                                    data-kt-menu-dismiss='true'
                                    data-kt-user-table-filter='reset'
                                >
                                    Reset
                                </button>
                                <button
                                    disabled={isLoading}
                                    type='button'
                                    onClick={filterData}
                                    className='btn btn-primary fw-bold px-6'
                                    data-kt-menu-dismiss='true'
                                    data-kt-user-table-filter='filter'
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            </div>

            <KTCardBody className='py-4'>
                <div className='table-responsive'>
                    <table
                        id=''
                        className='table '
                        {...getTableProps()}
                    >
                        <thead>
                            <tr className='text-start text-muted text-uppercase '>
                                {headers.map((column: ColumnInstance<Stats>) => (
                                    <CustomHeaderColumn key={column.id} column={column} />
                                ))}
                            </tr>
                        </thead>
                        <tbody className=' fw-bold' {...getTableBodyProps()}>
                            {rows?.length > 0 ? (
                                rows?.map((row: Row<Stats>, i) => {
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
                <UsersListPagination />
                {isLoading && <UsersListLoading />}
            </KTCardBody>
        </div>
    )
}

export { SupportTicketComponent }
