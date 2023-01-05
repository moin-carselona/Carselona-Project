import moment from 'moment';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../BaseURLmanagement';
import { AllTicketsAPI, allTicketsFilterAPI, getTicketCategories, getTicketSubCategories, getTicketSources, getSupervisorList, getAdminList } from './API';
import { columns } from './Columns';
import { customStyles } from './CustomCss';
import DialogBox from './DialogBox/DialogBox';
import DateSearchBOX from './InputBoxes/DateSearchBOX';
import Filteration from './InputBoxes/Filteration';
import { AdminListDataApi, cleanerDataApi, CustomerDataApi, inputEventChanger, payloadsInterfaces, SuperVisorDataApi, ticektInterfaces, TicektSourcesDataApi, TicektSubCategoryDataApi, ticketCategoryDataApi } from './TicketInterface';
const TicketListMain = () => {
  LocalBaseURL()
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const [pending, setPending] = React.useState(true);
  const [PopUpPostFormOpen, setPopUpPostFormOpen] = useState(false)
  const [filterData, setfilterData] = useState<ticektInterfaces[]>([])
  const [TicketsData, setTicketsData] = React.useState<ticektInterfaces[]>([])
  const [CleanerfilterData, setCleanerfilterData] = React.useState<cleanerDataApi[]>([])
  const [CustomerfilterData, setCustomerfilterData] = React.useState<CustomerDataApi[]>([])
  const [SelectedFilterTicketCateogryData, setSelectedFilterTicketCateogryData] = React.useState<any>([])
  const [TicketCategoryData, setTicketCategoryData] = React.useState<ticketCategoryDataApi[]>([])
  const [ticektSubCategoryData, setticektSubCategoryData] = React.useState<TicektSubCategoryDataApi[]>([])
  const [TicketSources, setTicketSources] = React.useState<TicektSourcesDataApi[]>([])
  const [AdminListData, setAdminListData] = React.useState<AdminListDataApi[]>([])
  const [SupervisorsListData, setSupervisorsListData] = React.useState<SuperVisorDataApi[]>([])
  const [payloads, setPayloads] = React.useState<payloadsInterfaces>(
    {
      attendencedatefrom: moment().add(-5, "days").format("YYYY-MM-DD"),
      attendencedateto: moment().add(1, "days").format("YYYY-MM-DD"),
      cleanerid: null,
      customerid: null,
      ticketidcategory: null,
      supervisor: null,
      searchs: "",
    }
  )
  // console.log('payloads', payloads);
  const handleChangeInput = (event: inputEventChanger, name: string) => {
    if (event === null) {
      setPayloads({ ...payloads, [name]: name === "searchs" ? "" : 0 })
    }
    else {
      setPayloads({ ...payloads, [name]: name === "searchs" ? event.value : +event.value })
    }
  }
  // fetch all data and also search data by cleaner or cusomer name  ................................................
  useEffect(() => {
    setPending(true)
    async function invokedRatFil() {
      const { data } = await allTicketsFilterAPI(localKeyCheck)
      setCleanerfilterData(data.cleanerdata)
      setCustomerfilterData(data.customerdata as CustomerDataApi[])
      setSelectedFilterTicketCateogryData(data.ticketcategorydata)
    }
    invokedRatFil()
    async function invoked() {
      const { data } = await AllTicketsAPI(localKeyCheck, setPending, "default", payloads)
      setTicketsData(data.data)
      setfilterData(data.data)
      setPending(false)
      data?.data && setPending(false)
      data?.status != 200 && setPending(false)
      data?.data?.length == 0 && data?.status == 200 && setPending(false)
    }
    invoked()
    async function invokedFilterAPI() {
      const getTicketCategoriesData = await getTicketCategories(localKeyCheck)
      setTicketCategoryData(getTicketCategoriesData?.data?.data)
      const getTicketSubCategoriesData = await getTicketSubCategories(localKeyCheck)
      setticektSubCategoryData(getTicketSubCategoriesData?.data?.data)
      const getTicketSourcesData = await getTicketSources(localKeyCheck)
      setTicketSources(getTicketSourcesData?.data?.data)
      const getSupervisorListData = await getSupervisorList(localKeyCheck)
      setSupervisorsListData(getSupervisorListData?.data?.data)
      const getAdminListData = await getAdminList(localKeyCheck)
      setAdminListData(getAdminListData?.data?.data)
      // setPending(false)
    }
    invokedFilterAPI()
  }, [])
  // to search data here 
  React.useEffect(() => {
    const updatedData = TicketsData.filter((data: any) => {
      return data?.customername?.toLowerCase().match(payloads?.searchs.toLowerCase())
    })
    setfilterData(updatedData)
  }, [payloads?.searchs])
  // to open add service form  
  const handleTicketlistPopform = () => {
    setPopUpPostFormOpen(!PopUpPostFormOpen)
  }
  // search here .............  
  const searchOnclick = async () => {
    setPending(true)
    const { data } = await AllTicketsAPI(localKeyCheck, setPending, "onclick", payloads)
    setTicketsData(data.data)
    setfilterData(data.data)
    setPending(false)
    data?.data && setPending(false)
    data?.status != 200 && setPending(false)
    data?.data?.length == 0 && data?.status == 200 && setPending(false)
  }
  //  to fetch data on first time rendering 
  return (
    <div>
      {
        <DataTable
          // title="Get Societies"
          // sortIcon={<SortIcon />}
          customStyles={customStyles}
          columns={columns} // to set how many column will be shown
          data={filterData}   // api data provided to render
          // selectableRows   // it just like check box
          progressPending={pending}
          pagination   // to get pagination 
          fixedHeader   // to fix navbar 
          fixedHeaderScrollHeight='auto'   // to manage scrolling
          selectableRowsHighlight // decide what wil be row height
          highlightOnHover   // to see current position of cursur it will higlight that row
          actions={
            <>
              <DateSearchBOX
                payloads={payloads} handleChangeInput={handleChangeInput} searchOnclick={searchOnclick}
              />
              <button className="btn btn-sm btn-primary" onClick={(row) => handleTicketlistPopform()}><i className="fa fa-plus-circle mr-2"></i>Add New Tickets</button>
            </>
          }
          subHeader  // to use input enable to work
          subHeaderComponent={
            <>
              <Filteration
                handleChangeInput={handleChangeInput}
                CleanerfilterData={CleanerfilterData}
                CustomerfilterData={CustomerfilterData}
                SelectedFilterTicketCateogryData={SelectedFilterTicketCateogryData}
                SupervisorsListData={SupervisorsListData}
              />
            </>
          }
        />
      }
      {PopUpPostFormOpen && <DialogBox handleTicketlistPopform={handleTicketlistPopform} PopUpPostFormOpen={PopUpPostFormOpen} ParentData={
        {
          localKeyCheck,
          filterData,
          TicketsData,
          CleanerfilterData,
          CustomerfilterData,
          SelectedFilterTicketCateogryData,
          TicketCategoryData,
          ticektSubCategoryData,
          TicketSources,
          AdminListData,
          SupervisorsListData,
          payloads,
        }
      } reference={"ticketParent"} />}
    </div>
  )
}
export default TicketListMain
// just call this to route file
