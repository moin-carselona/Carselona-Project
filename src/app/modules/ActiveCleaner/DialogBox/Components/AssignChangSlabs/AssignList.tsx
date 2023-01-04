import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'
import { LocalBaseURL } from '../../../../../../BaseURLmanagement'
import { customStyles } from '../../../CustomCss'
import { getSchemeRecord } from './API'
import { columns } from './Columns'
import './styles.css'
const AssignList = () => {
  LocalBaseURL()
  const [AllActiveCleaner, setAllActiveCleaner] = useState<any>([])
  const [Search, setSearch] = useState<any>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [filterData, setfilterData] = useState<any>([])
  const [PopUpPostFormOpen, setPopUpPostFormOpen] = useState(false)
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  const cleanerid = useSelector((store: any) => store?.ActiveStatsReducer?.listDrawerids)
  React.useEffect(() => {
    const updatedData = AllActiveCleaner.filter((data: any) => {
      return data.cleanerPayoutScheme?.scheme_name.toLowerCase().match(Search.toLowerCase())
    })
    setfilterData(updatedData)
  }, [Search])
  const handleAddCleanerPopUp = () => {
    setPopUpPostFormOpen(!PopUpPostFormOpen)
  }
  useEffect(() => {
    setLoading(true)
    async function InvokedRendered() {
      const { data } = await getSchemeRecord(localKeyCheck, cleanerid)
      console.log('change slabs', data.data);
      setAllActiveCleaner(data.data)
      setfilterData(data.data)
      filterData && setLoading(false)
    }
    InvokedRendered()
  }, [])
  return (
    <div>
      {isLoading ? (
        <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
          <div className='spinner-border mr-15' role='status'></div>
          <h4 className='fw-bold'>Loading...</h4>
        </div>
      ) : (
        <DataTable
          // title='Active Cleaner'
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
          //     <button className='btn btn-sm btn-primary' onClick={(row) => handleAddCleanerPopUp()}>
          //       Add Cleaner
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
                {/* <div className='d-flex align-items-center justify-content-end '>
                  <select
                    className='form-select form-select-solid me-2'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    id='cleanerType'
                  // onChange={handleChange}
                  >
                    <option>Select Cleaner Type</option>
                    {[
                      { id: 0, name: 'Part Time Cleaner' },
                      { id: 1, name: 'Full Time Cleaner' },
                    ].map((item: any) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      )
                    })}
                  </select>
                </div> */}
              </div>
            </>
          }
        />
      )}
    </div>
  )
}
export default AssignList
// just call this to route file
