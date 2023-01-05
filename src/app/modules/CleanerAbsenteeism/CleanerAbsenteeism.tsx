import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { GetAllCleanerAttendanceData, GetAllCleanerListData } from './Components/API'
import { columns } from './Components/Columns'
import { customStyles } from './Components/CustomCss'
import moment from 'moment'
const CleanerAbsenteeism = () => {
  LocalBaseURL()
  const [CleanerAttendanceData, setCleanerAttendanceData] = useState<any>([])
  const [AllCleanerListData, setAllCleanerListData] = useState<any>([])
  const [Search, setSearch] = useState<any>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [filterData, setfilterData] = useState<any>([])
  const [todaysDate, setDate] = useState<any>(moment().format('YYYY-MM-DD'))
  const [cleanerid, setSelectedData] = useState<any>(null)
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  React.useEffect(() => {

    
    const updatedData = CleanerAttendanceData.filter((obj: any) => Object.values(obj).some((val: any) => {
      if (typeof (val) == typeof ("str")) {
        console.log()
        return val.includes(Search)
      } else {
        return Object.values(val).some((val1: any) => {
          if (val1 !== null) {
            return val1.toString().includes(Search)
          }
        })
      }
    }))
 
    // const updatedData = CleanerAttendanceData.filter((data: any) => {
    //   // return data.cleaner.first_name.toLowerCase().match(Search.toLowerCase())
    // })
    console.log('updatedData', updatedData);
    setfilterData(updatedData)
  }, [Search])
  useEffect(() => {
    // setLoading(true)
    async function InvokedRendered() {
      const { data } = await GetAllCleanerAttendanceData(localKeyCheck, todaysDate, cleanerid)
      setCleanerAttendanceData(data.data)
      setfilterData(data.data)
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
  const handleAddSocietyPopUp = () => { }
  return (
    <div>
      {isLoading ? (
        <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
          <div className='spinner-border mr-15' role='status'></div>
          <h4 className='fw-bold'>Loading...</h4>
        </div>
      ) : (
        <DataTable
          title='claner Availibility List'
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
              <div className='w-100 d-flex justify-content-between mb-3 '>
                <div className='d-flex align-items-start justify-content-start '>
                  <input
                    type='text'
                    placeholder='Search Here'
                    value={Search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    className='w-100 form-control me-2 align-start'
                  />
                </div>
                <div className='d-flex align-items-center justify-content-end '>
                  {/* {AllCleanerListData && (
                    <SingleSelect
                      refrence="Select cleaner"
                      setSelectedData={setSelectedData}
                      allDatafilter={AllCleanerListData}
                    ></SingleSelect>
                  )} */}
                  <input
                    type='date'
                    value={todaysDate}
                    onChange={(e: any) => setDate(e.target.value)}
                    className='w-100 form-control me-2 align-start'
                  />
                </div>
              </div>
            </>
          }
        />
      )}
      {/* {PopUpPostFormOpen && <DialogBox PopUpSocietyBTN={handleAddSocietyPopUp} PopUpPostFormOpen={PopUpPostFormOpen} />} */}
    </div>
  )
}
export default CleanerAbsenteeism
// just call this to route file
