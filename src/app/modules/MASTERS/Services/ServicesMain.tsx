import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../../BaseURLmanagement';
import { GetAllServicesOnly } from './API';
import { columns } from './Columns';
import { customStyles } from './CustomCss';
import DialogBox from './DialogBox/DialogBox';

const ServicesMain = () => {
  LocalBaseURL()
  const [Search, setSearch] = useState<any>("")
  const [isLoading, setLoading] = useState<boolean>(false)
  const [filterData, setfilterData] = useState<any>([])
  const [PopUpPostFormOpen, setPopUpPostFormOpen] = useState(false)

  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  // React.useEffect(() => {
  //   const updatedData = SocietyData.filter((data: any) => {
  //     return data.name.toLowerCase().match(Search.toLowerCase())
  //   })
  //   setfilterData(updatedData)
  // }, [Search])
  const handleServicessBTN = () => {
    setPopUpPostFormOpen(!PopUpPostFormOpen)
    console.log('PopUpPostFormOpen', PopUpPostFormOpen);
  }
  useEffect(() => {
    setLoading(true)
    async function InvokedRendered() {
      const { data } = await GetAllServicesOnly(localKeyCheck)
      console.log('all services data', data.data);
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

                <button onClick={(row) => handleServicessBTN()} className="btn btn-sm btn-primary"><i className="fa fa-plus-circle mr-2"></i>Create Services</button>
              </>
            }
            subHeader  // to use input enable to work

          />

      }
      {PopUpPostFormOpen && <DialogBox handleServicessBTN={handleServicessBTN} PopUpPostFormOpen={PopUpPostFormOpen} />}

    </div>
  )
}
export default ServicesMain



// just call this to route file 
