import { DataGrid } from '@mui/x-data-grid'
import Typography from '@mui/material/Typography';
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { FC, useMemo } from 'react'
import { ColumnInstance, Row, useTable } from 'react-table'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { KTCardBody, KTSVG } from '../../../_metronic/helpers'
import {
  useQueryResponseData,
} from '../apps/user-management/users-list/core/QueryResponseProvider'
import { User } from '../apps/user-management/users-list/core/_models'
import { CustomHeaderColumn } from '../apps/user-management/users-list/table/columns/CustomHeaderColumn'

import { AciveCustomRow } from './AciveCustomRow'
import { Paginations } from './Paginations'
import { ActiveUserColumn } from './_columns'
type Props = {
  activeSubscriptions: any
  isLoading: boolean
}
const ActiveStatsComponent: FC<Props> = (props: Props) => {
  LocalBaseURL()
  const [query, setQuery] = React.useState('')
  const [superVisor, setSuperVisor] = React.useState([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [packageList, setPackageList] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [start, setPageStart] = React.useState<any>(1)
  const [customerStats, setCustomerStats] = React.useState<any>([])
  console.log('customerStats', customerStats);
  const [RecordsTotal, setRecordsTotal] = React.useState<any>([]);
  const [limit, setlimit] = React.useState<number>(10);
  console.log('limit', limit);
  console.log('RecordsTotal', RecordsTotal);
  const [RecordsFiltered, setRecordsFiltered] = React.useState<any>([]);
  console.log('RecordsFiltered', RecordsFiltered);
  const users = useQueryResponseData()
  const data = useMemo(() => customerStats, [customerStats])
  const [isLoadingBody, setisLoadingBody] = React.useState(false);
  const columns = useMemo(() => ActiveUserColumn, [])
  const [pageSize, setPageSize] = React.useState(10)
  const [totalFilterData, SettotalFilterData] = React.useState(1)
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const API = `${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/allactivesubscriptionswithpaymentDatatablepagination`
  React.useEffect(() => {
    setLoading(true)
    axios
      .get(`${API}?start=0&length=10&orders=desc&columns=id`)
      .then((response) => {
        setCustomerStats(response.data.data)
        setRecordsTotal(response?.data?.recordsTotal)
        setRecordsFiltered(response?.data?.recordsFiltered)
        setlimit(response?.data?.limit)
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
        setRecordsTotal(response?.data?.recordsTotal)
        setRecordsFiltered(response?.data?.recordsFiltered)
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
        setRecordsTotal(response?.data?.recordsTotal)
        setRecordsFiltered(response?.data?.recordsFiltered)
        setLoading(false)
      })
      .catch((error) => {
        console.error('ERROR', error)
        setLoading(false)
      })
  }, [localKeyCheck])
  const handleChange = (event: any) => {
    setLoading(true)
    setQuery(`?supervisor=${event.currentTarget.value}`)
    axios
      .get(`${API}?start=0&length=10&${event.currentTarget.id}=${event.currentTarget.value}`)
      .then((response) => {
        setLoading(false)
        setCustomerStats(response.data.data)
        setRecordsTotal(response?.data?.recordsTotal)
        setRecordsFiltered(response?.data?.recordsFiltered)
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
        setCustomerStats(response.data.data)
        setRecordsTotal(response?.data?.recordsTotal)
        setRecordsFiltered(response?.data?.recordsFiltered)
        setisLoadingBody(false);
      })
      .catch((error) => {
        setLoading(false)
        console.log('ERROR', error)
      })
  }, [start])
  const handlePaginationBTN = (value: any) => {
    setisLoadingBody(true);
    SettotalFilterData(value)
    setPageStart((value * 10) + 1)
  }
  // search functinality here  
  // debouncing 
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
    setisLoadingBody(true)
    async function getSearchData() {
      axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/allactivesubscriptionswithpaymentDatatablepagination?search=${value}&start=${0}&length=${10}&columns=id&orders=desc`).then((res) => {
        setCustomerStats(res.data.data)
        setRecordsFiltered(res?.data?.recordsFiltered)
        setRecordsTotal(res?.data?.recordsTotal)
        setisLoadingBody(false)
      }).catch((error) => {
        console.log('error', error.message)
        setisLoadingBody(false)
      })
    }
    getSearchData()
  }
  // to hnadle input value
  const handleChangeInput = (e: any) => {
    const { value } = e.target
    setSearchValue(value)
    handleRatingSearch(value)
  }
  // to memoized
  const deb = useCallback(debouncing(handleChangeInput), [])
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
            onChange={deb}
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
      {
        isLoadingBody ? <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
          <div className='spinner-border mr-15' role='status'></div>
          <h4 className='fw-bold'>Loading...</h4>
        </div>
          :
          <>
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
                      return <AciveCustomRow row={row} key={`row-${i}-${row?.id}`} />
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

          </>
      }
      <br />
      {
        <div className='d-flex justify-content-between'>
        
        <Typography>Showing {((totalFilterData -1) * 10) + " to " + (((totalFilterData ) * 10)+1) + " out of " +( RecordsTotal?.length)}</Typography>
          <Paginations handlePaginationBTN={handlePaginationBTN} RecordsTotal={RecordsTotal}></Paginations>
        </div>
      }

    </KTCardBody>

  )
}
export default ActiveStatsComponent
