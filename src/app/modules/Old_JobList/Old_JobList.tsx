import React, { useState, useEffect } from 'react'
import DataTable , {ExpanderComponentProps } from 'react-data-table-component'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { GetAllCleanerAttendanceData, GetAllCleanerListData, GetAllSuperVisorData, GetAllCutomerData, GetAllCleanerData, getAllJobStatusActionsV2 } from './Components/API'
import { columns } from './Components/Columns'
import SingleSelect from '../../consts/SingleSelect'
import moment from 'moment'
import './Components/styles.css'
import TopHeader from './Components/InputBox/TopHeader'
import SecondHeader from './Components/InputBox/SecondHeader'
import DetailsHeader from './Components/InputBox/DetailsHeader'
import { DataRow, InputData } from './Components/Interfaces'


const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
const Old_JobList = () => {
  LocalBaseURL()
  const [pending, setPending] = React.useState(true);
  const [CleanerAttendanceData, setCleanerAttendanceData] = useState([])
  const [AllSuperListData, SetAllSupervisroList] = useState<any>([])
  const [AllCleanerList, SetAllCleanerList] = useState<any>([])
  const [AllCustomerList, SetAllCustomerList] = useState<any>([])
  const [Search, setSearch] = useState<any>('')
  const [filterData, setfilterData] = useState<any>([])
  console.log('filterData', filterData);
  const [cleanerid, setSelectedData] = useState<any>(null)
  const [StatisticsData, setStatisticsData] = useState<any>({})
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  const [payloads, setPayloads] = useState({
    attendencedatefrom: moment().format('YYYY-MM-DD'),
    attendencedateto: moment().format('YYYY-MM-DD'),
    cleanerid: 0,
    cleanerstatus: null,
    timeslotid: 2,
    jobstatus: 0,
    reportid: 0,
    customerid: 0,
    radius: 0,
    supervisorId: 0,
  })
  const handleChangeInputData = (event: InputData, name: string) => {
    if (event == null) {
      setPayloads({ ...payloads, [name]: name === "attendencedatefrom" ? moment().format('YYYY-MM-DD') : name === "attendencedateto" ? moment().format('YYYY-MM-DD') : 0 })
    }
    else {
      const { value } = event
      setPayloads({ ...payloads, [name]: name === "attendencedateto" ? value : name === "attendencedatefrom" ? value : +value })
    }
  }
  React.useEffect(() => {
    const updatedData = CleanerAttendanceData?.filter((data: DataRow) => {
      return data?.customerData?.first_name?.toLowerCase().match(Search.toLowerCase())
    })
    setfilterData(updatedData)
  }, [Search])
  useEffect(() => {
    setPending(true);
    async function InvokedRendered() {
      const { data } = await GetAllCleanerAttendanceData(localKeyCheck, payloads)
      setCleanerAttendanceData(data.data)
      setStatisticsData(data.countData)
      setfilterData(data.data)
      const timeout = setTimeout(() => {
        setCleanerAttendanceData(data.data)
        setStatisticsData(data.countData)
        setfilterData(data.data)
        setPending(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
    InvokedRendered()
  }, [])

  useEffect(() => {
    async function InvokedRendered() {
      const supervisor = await GetAllSuperVisorData(localKeyCheck)
      SetAllSupervisroList(supervisor?.data?.data)
      const cleanerlist = await GetAllCleanerData(localKeyCheck)
      SetAllCleanerList(cleanerlist?.data?.data)
      const customerlist = await GetAllCutomerData(localKeyCheck)
      SetAllCustomerList(customerlist?.data?.data)
    }
    InvokedRendered()
  }, [])
  const handleSearchJoblist = async () => {
    setPending(true)
    const { data } = await GetAllCleanerAttendanceData(localKeyCheck, payloads)
    const updatedList = data?.data?.sort((a: any, b: any) => a?.c_id - b?.c_id)
    setCleanerAttendanceData(updatedList)
    setfilterData(updatedList)
    data?.data && setPending(false)
    data?.status != 200 && setPending(false)
    data?.data?.length == 0 && data?.status == 200 && setPending(false)
    // previous code 
    // data?.data && setLoading(false)
    // data?.status != 200 && setLoading(false)
    // data?.data?.length == 0 && data?.status == 200 && setLoading(false)
  }
  // console.log('payloads', payloads);
  return (
    <div>
      {(
        <DataTable
          // customStyles={customStyles}
          columns={columns} // to set how many column will be shown
          data={filterData} // api data provided to render
          // selectableRows   // it just like check box
          // expandableRows  
          // expandableRowsComponent={ExpandedComponent}
          pagination // to get pagination
          fixedHeader // to fix navbar
          fixedHeaderScrollHeight='auto' // to manage scrolling
          selectableRowsHighlight // decide what wil be row height
          highlightOnHover // to see current position of cursur it will higlight that row
          progressPending={pending}
          subHeader // to use input enable to work
          subHeaderComponent={
            <>
              <TopHeader
                payloads={payloads}
                handleChangeInputData={handleChangeInputData}
                setSearch={setSearch}
                handleSearchJoblist={handleSearchJoblist}
                Search={Search}
              />
              {<SecondHeader
                payloads={payloads}
                handleChangeInputData={handleChangeInputData}
                filterationData={{ AllCustomerList, AllCleanerList, AllSuperListData }}
                setSelectedData={setSelectedData}
                SingleSelect={SingleSelect}
              />}
              {<DetailsHeader
                StatisticsData={StatisticsData}
              />}
            </>
          }
        />
      )}
    </div>
  )
}
// just call this to route file
export default Old_JobList
