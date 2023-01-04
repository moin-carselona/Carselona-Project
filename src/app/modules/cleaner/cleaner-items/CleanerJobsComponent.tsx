/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React from 'react'
import { useMemo } from 'react'
import { ColumnInstance, Row, useTable } from 'react-table'
import { User } from '../../apps/user-management/users-list/core/_models'
import { CustomHeaderColumn } from '../../apps/user-management/users-list/table/columns/CustomHeaderColumn'
import { CustomRow } from '../../apps/user-management/users-list/table/columns/CustomRow'
import { cleanerJobColumns } from '../../apps/user-management/users-list/table/columns/_cleanerJobColumns'
const CleanerJobsComponent = () => {
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  console.log('cleanerStats FROM NEW JOBS', cleanerStats);
  const [superVisor, setSuperVisor] = React.useState([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [countData, setCountData] = React.useState<any>(Object)
  const [pageIndex, setPageIndex] = React.useState(0)
  const [pageLength, setPageLength] = React.useState(10)
  const [recordsTotal, setRecordsTotal] = React.useState('')
  const [attendencedatefrom, setAttendencedatefrom] = React.useState('2022-08-26')
  const [attendencedateto, setAttendencedateto] = React.useState('2022-08-26')
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const columns = useMemo(() => cleanerJobColumns, [])
  const API = 'https://adminapi.carselonadaily.com/api/admin/allCleanerJobs'
  const API2 = 'https://api.carselonadaily.com/api/admin/allCleanerJobs'
  // ?start=0&length=10&attendencedatefrom=2022-08-26&attendencedateto=2022-08-26
  React.useEffect(() => {
    axios
      .get(
        `${API}?start=${pageIndex}&length=${pageLength}&attendencedatefrom=${attendencedatefrom}&attendencedateto=${attendencedateto}`
      )
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setRecordsTotal(String(response.data.recordsTotal / 10))
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get('https://adminapi.carselonadaily.com/api/admin/getSupervisorList')
      .then((response) => {
        setSuperVisor(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
    axios
      .get('https://adminapi.carselonadaily.com/api/admin/getCleanerList')
      .then((response) => {
        setCleanerList(response.data.data)
      })
      .catch((error) => {
        console.error('ERROR', error)
      })
  }, [])
  const handleChangePageSize = (e: any) => {
    setPageIndex(e.target.value)
    axios
      .get(
        `${API}?start=${e.target.value
        }&length=${10}&attendencedatefrom=${attendencedatefrom}&attendencedateto=${attendencedateto}`
      )
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  }
  const handlePagination = (e: any) => {
    if (e.currentTarget.id === 'next') {
      setPageIndex(pageIndex + 1)
      console.log('pageIndex : ', pageIndex)
      axios
        .get(
          `${API}?start=${pageIndex}&length=${10}&attendencedatefrom=${attendencedatefrom}&attendencedateto=${attendencedateto}`
        )
        .then((response) => {
          setCleanerStats(response.data.data)
          setCountData(response.data.countData)
          setRecordsTotal(String(response.data.recordsTotal / 10))
        })
        .catch((error) => {
          console.log('ERROR', error)
        })
    } else if (e.currentTarget.id === 'prev' && pageIndex > 0) {
      setPageIndex(pageIndex - 1)
      axios
        .get(
          `${API}?start=${pageIndex}&length=${pageLength}&attendencedatefrom=${attendencedatefrom}&attendencedateto=${attendencedateto}`
        )
        .then((response) => {
          setCleanerStats(response.data.data)
          setCountData(response.data.countData)
          setRecordsTotal(String(response.data.recordsTotal / 10))
        })
        .catch((error) => {
          console.log('ERROR', error)
        })
    }
  }
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  const handleFromDateChange = (e: any) => {
    setAttendencedatefrom(e.target.value)
  }
  const handleToDateChange = (e: any) => {
    setAttendencedateto(e.target.value)
  }
  const handleClick = () => {
    axios
      .get(
        `${API}?start=${0}&length=${pageLength}&attendencedatefrom=${attendencedatefrom}&attendencedateto=${attendencedateto}`
      )
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setRecordsTotal(String(response.data.recordsTotal / 10))
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleSupervisorChange = (e: any) => {
    axios
      .get(
        `${API}?start=${0}&length=${pageLength}&attendencedatefrom=${attendencedatefrom}&attendencedateto=${attendencedateto}&cleanerselectedId=${e.target.value
        }`
      )
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setRecordsTotal(String(response.data.recordsTotal / 10))
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleCleanerChange = (e: any) => {
    axios
      .get(
        `${API}?start=${0}&length=${pageLength}&attendencedatefrom=${attendencedatefrom}&attendencedateto=${attendencedateto}&supervisorId=${e.target.value
        }`
      )
      .then((response) => {
        setCleanerStats(response.data.data)
        setCountData(response.data.countData)
        setRecordsTotal(String(response.data.recordsTotal / 10))
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleSearch = (e: any) => {
    setSearchValue(e.target.value)
    // const formData = new FormData();
    // formData.append("search[value]", searchValue);
    const params = new URLSearchParams()
    params.append('search[value]', e.target.value)
    params.append('search[regex]', 'false')
    params.append('columns[2][data]', 'cleaner_fulldetial')
    params.append('columns[2][name]', '')
    params.append('columns[2][searchable]', 'true')
    params.append('columns[2][orderable]', 'true')
    params.append('columns[2][search][value]', '')
    params.append('columns[2][search][regex]', 'false')
    params.append('columns[0][data]', 'id')
    params.append('columns[0][name]', '')
    params.append('columns[0][searchable]', 'true')
    params.append('columns[0][orderable]', 'true')
    params.append('columns[0][search][value]', '')
    params.append('columns[0][search][regex]', 'false')
    params.append('columns[3][data]', 'customer_fulldetial')
    params.append('columns[3][name]', '')
    params.append('columns[3][searchable]', 'true')
    params.append('columns[3][orderable]', 'true')
    params.append('columns[3][search][value]', '')
    params.append('columns[3][search][regex]', 'false')
    params.append('draw', '8')
    // columns[2][data]: cleaner_fulldetial
    // columns[2][name]:
    // columns[2][searchable]: true
    // columns[2][orderable]: true
    // columns[2][search][value]:
    // columns[2][search][regex]: false
    setTimeout(() => {
      axios
        .get(
          `${API}?start=${0}&length=${pageLength}&attendencedatefrom=${attendencedatefrom}&attendencedateto=${attendencedateto}`,
          { params }
        )
        .then((response) => {
          setCleanerStats(response.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, 1000)
  }
  console.log('recordsTotal : ', recordsTotal.split('.')[0])
  const result = new Array(Number(recordsTotal?.split('.')[0])).fill(0).map((item, i) => {
    return i + 1
  })
  console.log('result : ', result)
  console.log('result : ', result.slice(-1)[0])
  //   const pageCount = []
  //   for (let i = 1; i < Number(recordsTotal?.split('.')[0]); i++) {
  //     console.log(i, 'iiiiiiiii')
  //     pageCount.push(i)
  //   }
  //   console.log(pageCount, 'pageCount')
  return (
    <>
      <div className='d-flex justify-content-between'>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-success'>
          <span className='text-white'>Active Cleaners: {countData.activeCleanersCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-warning'>
          <span className='text-white'>Early Jobs: {countData.earlyJobsCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-success'>
          <span className='text-white'>In Radius: {countData.inRadiusCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-danger'>
          <span className='text-white'>Inactive: {countData.inactiveCleanersCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-primary'>
          <span className='text-white'>Late Jobs: {countData.lateJobsCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-danger'>
          <span className='text-white'>Not at Home: {countData.notAtHomeCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-success'>
          <span className='text-white'>On Time: {countData.ontimeJobsCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-danger'>
          <span className='text-white'>Outside Radius: {countData.outRadiusCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-danger'>
          <span className='text-white'>Overdue Jobs: {countData.overdueJobsCount}</span>
        </div>
        <div className='col-1 p-3 rounded d-flex justify-content-center align-items-center text-center bg-danger'>
          <span className='text-white'>Reported: {countData.reportedStatusCount}</span>
        </div>
      </div>
      <div className='card mt-9'>
        <div className='d-flex mb-3 justify-content-between align-items-center flex-wrap px-3'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-4 d-flex align-items-center mt-3 '>
            <input
              type='date'
              className='form-select form-select-solid me-2'
              onChange={handleFromDateChange}
              value={attendencedatefrom}
            />
            <input
              type='date'
              className='form-select form-select-solid me-2'
              onChange={handleToDateChange}
              value={attendencedateto}
            />
            <div>
              <button className='btn btn-sm btn-warning' onClick={handleClick}>
                Search
              </button>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-4 d-flex mt-3'>
            <select
              className='form-select form-select-solid me-2'
              onChange={handleSupervisorChange}
            >
              <option value=''>Select Supervisor</option>
              {superVisor?.map((item: any) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.first_name} {item.last_name}
                  </option>
                )
              })}
            </select>
            <select className='form-select form-select-solid me-2' onChange={handleCleanerChange}>
              <option value=''>Select Cleaner</option>
              {cleanerList?.map((item: any) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.first_name} {item.last_name}
                  </option>
                )
              })}
            </select>
            <input
              className='form-select form-select-solid'
              value={searchValue}
              placeholder='Search Cleaner'
              onChange={handleSearch}
            />
          </div>
        </div>
        {/* <div className='d-flex justify-content-between px-3'>
          <input
            className='form-select form-select-solid'
            value={searchValue}
            placeholder='Search Cleaner'
            onChange={handleSearch}
          />
        </div> */}
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
      </div>
      <div className='d-flex justify-content-end my-3'>
        {/* <select
          onChange={handleChangePageSize}
          className='form-select form-select-solid w-25'
          value={pageLength}
        >
          <option>Select Row Size</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select> */}
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            {pageIndex !== 0 && <li className='page-item previous'>
              <a
                onClick={handlePagination}
                className={`page-link page-text me-5 ${pageIndex === 0 ? 'disabled' : ''}`}
                style={{ cursor: 'pointer' }}
                id='prev'
              >
                Previous
              </a>
            </li>}
            {/* {result.map((i) => { */}
            {/* console.log('i : ', i); */}
            {/* return ( */}
            {pageIndex !== 0 && (
              <li className='page-item active'>
                <button className='page-link'>
                  {pageIndex}
                </button>
              </li>
            )}
            {/* ) */}
            {/* })} */}
            {/* <li className='page-item'>
              <button className='page-link' value={2} onClick={handleChangePageSize}>
                2
              </button>
            </li> */}
            <li className='page-item next'>
              <button
                onClick={handlePagination}
                className='page-link page-text'
                style={{ cursor: 'pointer' }}
                id='next'
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className='row'>
        <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
        <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
          <div id='kt_table_users_paginate'>
            <ul className='pagination'>
              <li className='page-item previous'>
                <button className='page-link page-text me-5' onClick={handlePagination}>
                  Previous
                </button>
              </li>
              <li className='page-item'>
                <a className='page-link'>1</a>
              </li>
              c
              <li className='page-item active'>
                <a className='page-link'>3</a>
              </li>
              <li className='page-item next'>
                <a className='page-link page-text'>Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  )
}
export default CleanerJobsComponent
