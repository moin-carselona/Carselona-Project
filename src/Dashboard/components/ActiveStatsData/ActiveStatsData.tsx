import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { columns } from './Components/Columns'
import { customStyles } from './Components/CustomCss'
import './Components/styles.css'
import { useSelector } from 'react-redux'
import TopHeader from './Components/TopHeader'
const ActiveStatsData = () => {
  // const [CleanerAttendanceData, setCleanerAttendanceData] = useState<any>([])
  const ActiveStatsData = useSelector((store: any) => store.ActiveStatsReducer.ActiveStats)
  console.log('ActiveStatsData', ActiveStatsData);
  // console.log('activeSubscriptions', ActiveStatsData);
  const [Search, setSearch] = useState<any>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [filterData, setfilterData] = useState<any>(ActiveStatsData)
  console.log('filterData', filterData);
  // const [todaysDate, setDate] = useState<any>(moment().startOf('week').format('YYYY-MM-DD'))
  // useEffect(()=>{
  //   setfilterData
  //   refs == "activeSubs" ? "" :""
  // },[refs])
  React.useEffect(() => {
    const updatedData = ActiveStatsData.filter((data: any) => {
      return data.name.toLowerCase().match(Search.toLowerCase())
    })
    setfilterData(updatedData)
  }, [Search])
  React.useEffect(() => {
    setLoading(true)
    ActiveStatsData && setfilterData(ActiveStatsData)
    ActiveStatsData && setLoading(false)
  }, [ActiveStatsData])
  return (
    <div>
      {isLoading && filterData.length != 0 ? (
        <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
          <div className='spinner-border mr-15' role='status'></div>
          <h4 className='fw-bold'>Loading...</h4>
        </div>
      ) : (
        <DataTable
          // title='Old Job List'     
          // sortIcon={<SortIcon />}
          customStyles={customStyles}
          columns={columns} // to set how many column will be shown
          data={filterData} // api data provided to render
          // selectableRows   // it just like check box
          pagination // to get pagination
          fixedHeader // to fix navbar
          fixedHeaderScrollHeight='auto' // to manage scrolling
          selectableRowsHighlight // decide what wil be row height
          highlightOnHover // to see current position of cursur it will higlight that row
          // actions={
          //   <>
          //     <button className='btn btn-sm btn-primary' onClick={(row) => handleAddSocietyPopUp()}>
          //       Add Society
          //     </button>
          //   </>
          // }
          subHeader // to use input enable to work
          subHeaderComponent={
            <>
              <TopHeader setSearch={setSearch} Search={Search} ></TopHeader>
            </>
          }
        />
      )}
    </div>
  )
}
export default ActiveStatsData
// just call this to route file
