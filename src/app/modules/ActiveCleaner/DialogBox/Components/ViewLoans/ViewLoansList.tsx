import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'
import { LocalBaseURL } from '../../../../../../BaseURLmanagement'
import { customStyles } from '../../../CustomCss'
import { getCleanerAllowance } from './API'
import { columns } from './Columns'

import './styles.css'
const ViewLoansList = () => {
  LocalBaseURL()
  const [AllActiveCleaner, setAllActiveCleaner] = useState<any>([])
  const [filterData, setfilterData] = useState<any>([])
  const [Search, setSearch] = useState<any>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  const cleanerid = useSelector((store: any) => store?.ActiveStatsReducer?.listDrawerids)

  React.useEffect(() => {
    const updatedData = AllActiveCleaner.filter((data: any) => {
      return data.master_allowance?.name.toLowerCase().match(Search.toLowerCase())
    })
    setfilterData(updatedData)
  }, [Search])

  useEffect(() => {
    setLoading(true)
    async function InvokedRendered() {
      const { data } = await getCleanerAllowance(localKeyCheck, cleanerid)
      console.log('Allowance Assign', data.data);
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
                    className='form-control form-control-solid'

                  />
                </div>
                
              </div>
            </>
          }
        />
      )}
    </div>
  )
}
export default ViewLoansList
// just call this to route file
