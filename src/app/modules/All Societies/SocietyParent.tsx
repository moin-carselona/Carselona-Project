import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../BaseURLmanagement';
import { GetAllSocietyData } from './API';
import { columns } from './Columns';
import { customStyles } from './CustomCss';
import DialogBox from './DialogBox/DialogBox';

const ReactDataTable = () => {
  LocalBaseURL()
  const [SocietyData, setSocietyData] = useState<any>([])
  const [Search, setSearch] = useState<any>("")
  const [isLoading, setLoading] = useState<boolean>(false)
  const [filterData, setfilterData] = useState<any>([])
  const [PopUpPostFormOpen, setPopUpPostFormOpen] = useState(false)
  
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  React.useEffect(() => {
    const updatedData = SocietyData.filter((data: any) => {
      return data.name.toLowerCase().match(Search.toLowerCase())
    })
    setfilterData(updatedData)
  }, [Search])
  const handleAddSocietyPopUp = () => {
    setPopUpPostFormOpen(!PopUpPostFormOpen)
    // console.log('PopUpPostFormOpen', PopUpPostFormOpen);
  }
  useEffect(() => {
    setLoading(true)
    async function InvokedRendered() {
      const { data } = await GetAllSocietyData(localKeyCheck)
      // console.log('all society data', data.data);
      setSocietyData(data.data)
      setfilterData(data.data)
      filterData && setLoading(false)
    }
    InvokedRendered()
  }, [])
  return (
    <div>
      {
        isLoading ?
          <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
            <div className='spinner-border mr-15' role='status'></div>
            <h4 className='fw-bold'>Loading...</h4>
          </div>
          :
          <DataTable
            title="Get Societies"
            // sortIcon={<SortIcon />}
            customStyles={customStyles}
            columns={columns} // to set how many column will be shown
            data={filterData}   // api data provided to render
            // selectableRows   // it just like check box
            pagination   // to get pagination 
            fixedHeader   // to fix navbar 
            fixedHeaderScrollHeight='auto'   // to manage scrolling
            selectableRowsHighlight // decide what wil be row height
            highlightOnHover   // to see current position of cursur it will higlight that row
            actions={
              <>
                <button className='btn btn-sm btn-primary' onClick={(row) => handleAddSocietyPopUp()}>Add Society</button>
              </>
            }
            subHeader  // to use input enable to work
            subHeaderComponent={
              <>
                <div className='w-100 d-flex justify-content-between mb-3 '>
                  <div className='d-flex align-items-start justify-content-start '>
                    <input
                      type="text"
                      placeholder='Search Here'
                      value={Search}
                      onChange={(e: any) => setSearch(e.target.value)}
                      className='w-100 form-control me-2 align-start'
                    />
                  </div>
                  <div className='d-flex align-items-center justify-content-end '>
                    {/* <select
                      className='form-select form-select-solid me-2'
                      data-kt-select2='true'
                      data-placeholder='Select option'
                      data-allow-clear='true'
                      id='supervisorid'
                    // onChange={handleChange}
                    >
                      <option>Select Supervisor</option>
                      {[1, 2, 3, 4].map((item: any) => {
                        return (
                          <option value={item} key={item}>
                            {item} {item}
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
                    // onChange={handleChange}
                    >
                      <option>Select Supervisor</option>
                      {[1, 2, 3, 4].map((item: any) => {
                        return (
                          <option value={item} key={item}>
                            {item} {item}
                          </option>
                        )
                      })}
                    </select> */}
                  </div>
                </div>
              </>
            }
          />
          
      }
 {PopUpPostFormOpen && <DialogBox PopUpSocietyBTN={handleAddSocietyPopUp} PopUpPostFormOpen={PopUpPostFormOpen} />}
      
    </div>
  )
}
export default ReactDataTable



// just call this to route file 
