import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../../BaseURLmanagement';
import { GetAllVehicleData } from './API';
import { columns } from './Columns';
import { customStyles } from './CustomCss';
import DialogBox from './DialogBox/DialogBox';

const VehicleBrandMain = () => {
  LocalBaseURL()
  // const [Search, setSearch] = useState<any>("")
  const [isLoading, setLoading] = useState<boolean>(false)
  const [filterData, setfilterData] = useState<any>([])
  const [PopUpPostFormOpen, setPopUpPostFormOpen] = useState(false)
  
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")


  // to search data here 
  // React.useEffect(() => {
  //   const updatedData = SocietyData.filter((data: any) => {
  //     return data?.name?.toLowerCase().match(Search.toLowerCase())
  //   })
  //   setfilterData(updatedData)
  // }, [Search])


// to open add service form  
  const PopUpVehcileBrandBTN = () => {
    setPopUpPostFormOpen(!PopUpPostFormOpen)
    console.log('PopUpPostFormOpen', PopUpPostFormOpen);
  }

//  to fetch data on first time rendering 

  useEffect(() => {
    setLoading(true)
    async function InvokedRendered() {
      const { data } = await GetAllVehicleData(localKeyCheck)
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
            // title="Get Societies"
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
              <button className="btn btn-sm btn-primary" onClick={(row) => PopUpVehcileBrandBTN()}><i className="fa fa-plus-circle mr-2"></i>Add Service Price</button>
              
              </>
            }
            subHeader  // to use input enable to work
            subHeaderComponent={
              <>
                <div className='w-100 d-flex justify-content-between mb-3 '>
                  {/* <div className='d-flex align-items-start justify-content-start '>
                    <input
                      type="text"
                      placeholder='Search Here'
                      value={Search}
                      onChange={(e: any) => setSearch(e.target.value)}
                      className='w-100 form-control me-2 align-start'
                    />
                  </div> */}
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
 {PopUpPostFormOpen && <DialogBox PopUpVehcileBrandBTN={PopUpVehcileBrandBTN} PopUpPostFormOpen={PopUpPostFormOpen} />}
      
    </div>
  )
}
export default VehicleBrandMain



// just call this to route file 
