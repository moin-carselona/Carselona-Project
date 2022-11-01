import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { FC, useEffect, useMemo } from 'react'
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import { ColumnInstance, Row, useTable } from 'react-table'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../../apiGlobally'
import { KTCardBody, KTSVG } from '../../../../_metronic/helpers'
import { UsersListLoading } from '../../apps/user-management/users-list/components/loading/UsersListLoading'
import { UsersListPagination } from '../../apps/user-management/users-list/components/pagination/UsersListPagination'
import {
  useQueryResponseData,
  useQueryResponseLoading,
} from '../../apps/user-management/users-list/core/QueryResponseProvider'
import { User } from '../../apps/user-management/users-list/core/_models'
import { Stats } from '../../apps/user-management/users-list/core/_stats'
import { CustomHeaderColumn } from '../../apps/user-management/users-list/table/columns/CustomHeaderColumn'
import { CustomRow } from '../../apps/user-management/users-list/table/columns/CustomRow'
import {
  muiColumns,
  statsColumn,
} from '../../apps/user-management/users-list/table/columns/statsColumns'
import { usersColumns } from '../../apps/user-management/users-list/table/columns/_columns'
import Paginations from './Paginations'
type Props = {
  activeSubscriptions: any
  isLoading: boolean
}
const ActiveStatsComponent: FC<Props> = (props: Props) => {
  const [query, setQuery] = React.useState('')
  const [superVisor, setSuperVisor] = React.useState([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [packageList, setPackageList] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [CurrentStatus, SetCurrentStatus] = React.useState('')
  const [start, setPageStart] = React.useState<any>(1)
  const [customerStats, setCustomerStats] = React.useState<any>([])
  const users = useQueryResponseData()
  // const isLoading = useQueryResponseLoading()
  const data = useMemo(() => customerStats, [customerStats])
  console.log('data', data);
  const columns = useMemo(() => usersColumns, [])
  const [pageSize, setPageSize] = React.useState(10)
  const [pageIndex, setPageIndex] = React.useState(0)
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })

  
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "")
  console.log('localKeyS from active', localKeyCheck);

  // console.log('headers', headers);
  const API = `${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/allactivesubscriptionswithpaymentDatatablepagination`
  React.useEffect(() => {
    setLoading(true)
    axios
      .get(`${API}?start=0&length=10&orders=desc&columns=id`)
      .then((response) => {
        setCustomerStats(response.data.data)
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getSupervisorList`)
      .then((response) => {
        setSuperVisor(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('ERROR', error)
        setLoading(false)
      })
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`)
      .then((response) => {
        setCleanerList(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('ERROR', error)
        setLoading(false)
      })
    axios
      .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getActivePackageDetails`)
      .then((response) => {
        setPackageList(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('ERROR', error)
        setLoading(false)
      })
  }, [])
  const handleChange = (event: any) => {
    setLoading(true)
    setQuery(`?supervisor=${event.currentTarget.value}`)
    axios
      .get(`${API}?start=0&length=10&${event.currentTarget.id}=${event.currentTarget.value}`)
      .then((response) => {
        setLoading(false)
        setCustomerStats(response.data.data)
      })
      .catch((error) => {
        setLoading(false)
        console.log('ERROR', error)
      })
  }
  const handleChangePageSize = (e: any) => {
    setLoading(true)
    setPageSize(e.target.value)
    axios
      .get(`${API}?start=0&length=${e.target.value}`)
      .then((response) => {
        setLoading(false)
        setCustomerStats(response.data.data)
      })
      .catch((error) => {
        setLoading(false)
        console.log('ERROR', error)
      })
  }

  React.useEffect(() => {
    axios
      .get(`${API}?start=${start}&length=10&orders=desc&columns=id`)
      .then((response) => {
        setLoading(false)
        setCustomerStats(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log('ERROR', error)
      })
  }, [start])
  const handlePaginationBTN = (value: any) => {
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

  }
  const handleSearch = (e: any) => {
    setSearchValue(e.target.value)
  
    const params = new URLSearchParams()
    params.append('search[value]', e.target.value)
    params.append('search[regex]', 'false')
    params.append('columns[6][data]', 'name')
    params.append('columns[6][name]', '')
    params.append('columns[6][searchable]', 'true')
    params.append('columns[6][orderable]', 'true')
    params.append('columns[6][search][value]', '')
    params.append('columns[6][search][regex]', 'false')
    params.append('columns[0][data]', 'id')
    params.append('columns[0][name]', '')
    params.append('columns[0][searchable]', 'true')
    params.append('columns[0][orderable]', 'true')
    params.append('columns[0][search][value]', '')
    params.append('columns[0][search][regex]', 'false')
    params.append('columns[19][data]', 'email')
    params.append('columns[19][name]', '')
    params.append('columns[19][searchable]', 'true')
    params.append('columns[19][orderable]', 'true')
    params.append('columns[19][search][value]', '')
    params.append('columns[19][search][regex]', 'false')
    params.append('draw', '3')
    setTimeout(() => {
      axios
        .get(`${API}?start=${0}&length=${pageSize}`, { params })
        .then((response) => {
          setCustomerStats(response.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, 1000)
  }
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
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <div className='d-flex align-items-center justify-content-center my-2'>
          <select
            className='form-select form-select-solid me-2'
            data-kt-select2='true'
            data-placeholder='Select option'
            data-allow-clear='true'
            id='packageId'
            onChange={handleChange}
          >
            <option>Select Package</option>
            {packageList?.map((item: any) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              )
            })}
          </select>
          <select
            className='form-select form-select-solid me-2'
            data-kt-select2='true'
            data-placeholder='Select option'
            data-allow-clear='true'
            id='cleanerid'
            onChange={handleChange}
          >
            <option>Select Cleaner</option>
            {cleanerList?.map((item: any) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.first_name} {item.last_name}
                </option>
              )
            })}
          </select>
          <select
            className='form-select form-select-solid'
            data-kt-select2='true'
            data-placeholder='Select option'
            data-allow-clear='true'
            id='supervisorid'
            onChange={handleChange}
          >
            <option>Select Supervisor</option>
            {superVisor?.map((item: any) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.first_name} {item.last_name}
                </option>
              )
            })}
          </select>
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
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows?.length > 0 ? (
              rows?.map((row: Row<User>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row?.id}`} />
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
      <div className='d-flex justify-content-end my-3'>
        
        <Paginations handlePaginationBTN={handlePaginationBTN} CurrentStatus={CurrentStatus}></Paginations>
      </div>
      <UsersListPagination />
      {isLoading && <UsersListLoading />}
    </KTCardBody>
  )
}
export default ActiveStatsComponent
