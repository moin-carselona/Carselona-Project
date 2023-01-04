import Typography from '@mui/material/Typography';
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { FC, useMemo } from 'react'
import { ColumnInstance, Row, useTable } from 'react-table'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { KTCardBody, KTSVG } from '../../../_metronic/helpers'
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
  const [superVisor, setSuperVisor] = React.useState([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [packageList, setPackageList] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [start, setPageStart] = React.useState<any>(0)
  const [endPage, setEndPage] = React.useState<any>(10)
  const [customerStats, setCustomerStats] = React.useState<any>([])
  const [RecordsTotal, setRecordsTotal] = React.useState<any>([]);
  const data = useMemo(() => customerStats, [customerStats])
  const [isLoadingBody, setisLoadingBody] = React.useState(false);
  const columns = useMemo(() => ActiveUserColumn, [])
  const [totalFilterData, SettotalFilterData] = React.useState(1)
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  const packageids = JSON.parse(sessionStorage.getItem("active_assigened_filtered_data") || "0") || {}
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const API = `${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/allactivesubscriptionswithpaymentDatatablepagination`
  React.useEffect(() => {
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
        setLoading(false)
      })
      .catch((error) => {
        console.error('ERROR', error)
        setLoading(false)
      })
  }, [localKeyCheck])
  React.useEffect(() => {
    setisLoadingBody(true)
    !packageids?.id && axios
      .get(`${API}?start=${start}&length=${10}&orders=desc&columns=id`)
      .then((response) => {
        setCustomerStats(response.data.data)
        setRecordsTotal(response?.data?.recordsTotal)
        setisLoadingBody(false)
      })
      .catch((error) => {
        console.log('ERROR', error)
        setisLoadingBody(false)
      })
    packageids?.id && start > 0 && axios.get(`${API}?start=${start}&length=${10}&orders=desc&columns=startdate&packageId=${packageids.id}`)
      .then((response) => {
        // console.log('response', response);
        setCustomerStats(response.data.data)
        setRecordsTotal(response?.data?.recordsTotal)
        setisLoadingBody(false)
      })
      .catch((error) => {
        setisLoadingBody(false)
        console.log('ERROR', error)
      })
    packageids?.id && start === 0 && axios.get(`${API}?start=${start}&length=${10}&orders=desc&columns=id&packageId=${packageids.id}`)
      .then((response) => {
        setCustomerStats(response.data.data)
        setRecordsTotal(response?.data?.recordsTotal)
        setisLoadingBody(false)
      })
      .catch((error) => {
        setisLoadingBody(false)
        console.log('ERROR', error)
      })
  }, [packageids?.id, start])
  const handleChange = (event: any) => {
    if (event.target.value) {
      setisLoadingBody(true)
      axios
        .get(`${API}?start=${start}&length=${10}&orders=desc&columns=id&packageId=${event.target.value}`)
        .then((response) => {
          setisLoadingBody(false)
          setCustomerStats(response.data.data)
          setRecordsTotal(response?.data?.recordsTotal)
        })
        .catch((error) => {
          setisLoadingBody(false)
          console.log('ERROR', error)
        })
      const filteredPackages: any = packageList?.filter((packagess: any) => +packagess.id == +event.target.value)[0]
      sessionStorage.setItem('active_assigened_filtered_data', JSON.stringify(filteredPackages) || JSON.stringify({}))
    }
    else {
      sessionStorage.removeItem("active_assigened_filtered_data")
      setisLoadingBody(true)
      axios.get(`${API}?start=${start}&length=${10}&orders=desc&columns=id`).then((response) => {
        setCustomerStats(response?.data?.data);
        setRecordsTotal(response?.data?.recordsTotal)
        setisLoadingBody(false)
      }).catch(error => {
        setisLoadingBody(false)
        console.log("ERROR", error);
      });
    }
  }
  const handlePaginationBTN = (value: any) => {
    SettotalFilterData(value)
    let endVAle = (value * 10)-10
    console.log('endVAle', endVAle);

    // let startValue = endVAle - 10
    // console.log("start", startValue, "End", endVAle);
    // setEndPage(endVAle)
    setPageStart(endVAle)
    setisLoadingBody(true);
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
      axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/allactivesubscriptionswithpaymentDatatablepagination?search=${value}&start=${start}&length=${endPage}&columns=id&orders=desc`).then((res) => {
        setCustomerStats(res.data.data)
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
            id='packageid'
            onChange={handleChange}
          >
            <option>{packageids?.name ? packageids?.name : "Select Packages"}</option>
            {packageList?.map((item: any, index: number) => {
              if (index == 0) {
                return <option value={"default"}
                  key={item.id}>{"Select Dafault"}</option>
              }
              else {
                return <option value={item.id}
                  key={item.id}>{item.name}</option>
              }
            })}
          </select>
          {/* <select
            className='form-select form-select-solid me-2'
            data-kt-select2='true'
            data-placeholder='Select option'
            data-allow-clear='true'
            id='cleanerid'
          >
            <option>Select Cleaner</option>
            {cleanerList?.map((item: any) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.first_name} {item.last_name}
                </option>
              )
            })}
          </select> */}
          <select
            className='form-select form-select-solid'
            data-kt-select2='true'
            data-placeholder='Select option'
            data-allow-clear='true'
            id='supervisorid'
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
          <Typography>Showing {((totalFilterData - 1) * 10) + " to " + (((totalFilterData) * 10)) + " out of " + (RecordsTotal?.length)}</Typography>
          <Paginations handlePaginationBTN={handlePaginationBTN} RecordsTotal={RecordsTotal}></Paginations>
        </div>
      }
    </KTCardBody>
  )
}
export default ActiveStatsComponent
