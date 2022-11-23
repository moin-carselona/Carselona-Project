import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { GetAllCleanerAttendanceData, GetAllCleanerListData } from './Components/API'
import { columns } from './Components/Columns'
import { customStyles } from './Components/CustomCss'
import SingleSelect from '../../consts/SingleSelect'
import moment from 'moment'
import './Components/styles.css'
import TopHeader from './Components/InputBox/TopHeader'
import SecondHeader from './Components/InputBox/SecondHeader'
import DetailsHeader from './Components/InputBox/DetailsHeader'
const Old_JobList = () => {
  LocalBaseURL()
  const [pending, setPending] = React.useState(true);
  const [CleanerAttendanceData, setCleanerAttendanceData] = useState<any>([])
  const [AllCleanerListData, setAllCleanerListData] = useState<any>([])
  const [Search, setSearch] = useState<any>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [filterData, setfilterData] = useState<any>([])
  const [todaysDate, setDate] = useState<any>(moment().format('YYYY-MM-DD'))
  // const [lastDate, setLastDate] = useState<any>(moment().endOf('week').format('YYYY-MM-DD'))
  const [lastDate, setLastDate] = useState<any>(moment().format('YYYY-MM-DD'))
  const [cleanerid, setSelectedData] = useState<any>(null)
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  React.useEffect(() => {
    const updatedData = CleanerAttendanceData.filter((data: any) => {
      return data.c_fname.toLowerCase().match(Search.toLowerCase())
    })
    setfilterData(updatedData)
  }, [Search])
  useEffect(() => {
    // setLoading(true)
    async function InvokedRendered() {
      const { data } = await GetAllCleanerAttendanceData(localKeyCheck, todaysDate, lastDate, cleanerid)
      setCleanerAttendanceData(data.data)
      setfilterData(data.data)
      const timeout = setTimeout(() => {
        setCleanerAttendanceData(data.data)
        setfilterData(data.data)
        setPending(false);
      }, 3000);
      return () => clearTimeout(timeout);
      // filterData && setLoading(false)
    }
    InvokedRendered()
  }, [cleanerid, todaysDate])
  useEffect(() => {
    async function InvokedRendered() {
      const { data } = await GetAllCleanerListData(localKeyCheck)
      setAllCleanerListData(data.data)
    }
    InvokedRendered()
  }, [])
  // const handleAddSocietyPopUp = () => { }
  const handleSearchSociety = async () => {
    // setLoading(true)
    setPending(true);

    const { data } = await GetAllCleanerAttendanceData(localKeyCheck, todaysDate, lastDate, cleanerid)
    const updatedList = data?.data?.sort((a: any, b: any) => a?.c_id - b?.c_id)
    console.log('updatedList', updatedList);


    const timeout = setTimeout(() => {
      setCleanerAttendanceData(updatedList)
      setfilterData(updatedList)
      setPending(false);
    }, 3000);


    data?.data && clearTimeout(timeout);
    data?.data && setPending(false);
    ;

    // setLoading(false)
    // data && setLoading(false)
  }
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    filterData && clearTimeout(timeout);
  }, [filterData]);
  return (
    <div>
      {isLoading ? (
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
          progressPending={pending}
          subHeader // to use input enable to work
          subHeaderComponent={
            <>
              <TopHeader lastDate={lastDate} setSearch={setSearch} handleSearchSociety={handleSearchSociety} Search={Search} todaysDate={todaysDate} setDate={setDate} setLastDate={setLastDate}></TopHeader>
              <SecondHeader AllCleanerListData={AllCleanerListData} setSelectedData={setSelectedData} SingleSelect={SingleSelect}   ></SecondHeader>
              <DetailsHeader AllCleanerListData={AllCleanerListData}       ></DetailsHeader>
            </>
          }
        />
      )}
      {/* {PopUpPostFormOpen && <DialogBox PopUpSocietyBTN={handleAddSocietyPopUp} PopUpPostFormOpen={PopUpPostFormOpen} />} */}
    </div>
  )
}
export default Old_JobList
// just call this to route file
