import axios from 'axios'
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally'
export const baseURL = 'https://api.carselonadaily.com/api/admin/'
export const adminBaseURL = 'https://adminapi.carselonadaily.com/api/admin/'
export const adminBaseCleanerAvailibilityURL = 'https://adminapi.carselonadaily.com/api'
export const onBordingPendingCleanerList = async () => {
  try {
    const result = await axios.get(`${baseURL}onboardingPendingCleanerlist`)
    return result.data.data
  } catch (error) {
    console.log('error onBordingPendingCleanerList : ', error)
  }
}
export const makeActiveCleaner = async (id: any) => {
  try {
    const result = await axios.post(`${baseURL}makeactivecleaner`, { cleanerid: id })
    return result.data
  } catch (error) {
    console.log('makeActiveCleaner : ', error)
  }
}
export const onBordingGetProfile = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getprofile/55`)
    return result.data.data
  } catch (error) {
    console.log('error onBordingGetProfile : ', error)
  }
}
export const getCleanerProfile = async (id: any, createdAtId: any) => {
  try {
    const result = await axios.get(`${adminBaseURL}getprofile/${id}`)
    return result.data.data
  } catch (error) {
    console.log('error getCleanerProfile : ', error)
  }
}
// de activated Cleaner list api
export const deactivatedCleanerList = async () => {
  try {
    const result = await axios.get(`${baseURL}deactivatedCleanerlist`)
    return result.data.data
  } catch (error) {
    console.log('error deactivatedCleanerList : ', error)
  }
}
export const deactivatedCleanerProfile = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getprofile/55`)
    return result.data.data
  } catch (error) {
    console.log('error deactivatedCleanerProfile : ', error)
  }
}
// Cleaner Attendance api
export const getCleanerAttendanceList = async () => {
  try {
    const result = await axios.get(`${baseURL}getCleanerAttendance?date=2022-09-30`)
    return result.data.data
  } catch (error) {
    console.log('error getCleanerAttendanceList : ', error)
  }
}
export const getActiveCleanerByCity = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getactivecleanerbycity`)
    return result.data.data
  } catch (error) {
    console.log('error getActiveCleanerByCity : ', error)
  }
}
export const getActiveCleanerProfile = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getprofile/55`)
    return result.data.data
  } catch (error) {
    console.log('error getActiveCleanerProfile : ', error)
  }
}
// old job list
export const getPointCollectionsReasons = async () => {
  try {
    const result = await axios.get(`${baseURL}getPointCollectionsReasons`)
    return result.data.data
  } catch (error) {
    console.log('error getPointCollectionsReasons : ', error)
  }
}
export const getActiveCleanerByCity2 = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getactivecleanerbycity`)
    return result.data.data
  } catch (error) {
    console.log('error getActiveCleanerByCity2 : ', error)
  }
}
export const getActiveCustomerList = async () => {
  try {
    const result = await axios.get(`${baseURL}getActiveCustomerlist`)
    return result.data.data
  } catch (error) {
    console.log('error getActiveCustomerList : ', error)
  }
}
export const getAllJobStatusActionsV2 = async () => {
  try {
    const result = await axios.get(`${baseURL}getAllJobStatusActionsV2`)
    return result.data.data
  } catch (error) {
    console.log('error getAllJobStatusActionsV2 : ', error)
  }
}
export const allCleanerAttendence = async () => {
  try {
    const result = await axios.post(`${baseURL}allcleanerattendence`, {
      attendencedatefrom: '2022-10-05',
      attendencedateto: '2022-10-05',
      cleanerid: 0,
      cleaner_status: '',
      job_status: 0,
      customerid: 0,
      radius: 0,
    })
    return result.data.data
  } catch (error) {
    console.log('error allCleanerAttendence : ', error)
  }
}
export const cleanergetprofile = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getprofile/55`)
    return result.data.data
  } catch (error) {
    console.log('error cleanergetprofile : ', error)
  }
}
export const genApi = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getprofile/55`)
    return result.data.data
  } catch (error) {
    console.log('error genApi : ', error)
  }
}
export const getProfileCleaner = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getprofile/55`)
    return result.data.data
  } catch (error) {
    console.log('error getProfileCleaner : ', error)
  }
}
export const getProfileCleanerData = async () => {
  try {
    const result = await axios.get(`${adminBaseURL}getprofile/55`)
    return result.data.data
  } catch (error) {
    console.log('error getProfileCleanerData : ', error)
  }
}
// weeklysummery
export const getAllCleanerWeeklyReports = async () => {
  try {
    const result = await axios.get(`${baseURL}getAllCleanerWeeklyReports`, {
      params: { startDate: '2022-09-19' },
    })
    return result.data.data
  } catch (error) {
    console.log('error getAllCleanerWeeklyReports : ', error)
  }
}
// leads api
export const cleanerLeads = async () => {
  try {
    const result = await axios.get(`${baseURL}cleanerLeads`)
    return result.data.data
  } catch (error) {
    console.log('error cleanerLeads : ', error)
  }
}
//leagues api
export const getCleanerLeagues = async () => {
  try {
    const result = await axios.get(`${baseURL}getCleanerLeagues`, {
      params: {
        from_date: '07/10/2022',
        to_date: '07/10/2022',
      },
    })
    return result.data.data
  } catch (error) {
    console.log('error getCleanerLeagues : ', error)
  }
}
//active api
export const activeCleanerlist = async () => {
  try {
    const result = await axios.get(`${baseURL}cleanerlist`)
    return result.data.data
  } catch (error) {
    console.log('error activeCleanerlist : ', error)
  }
}
// ================================-------------------------------------------------------------==============

// ================================================getTimeslotsDataAPI=============================================


export const getAvalabilitybySubscription :any= async (localKeyCheck: string, payloads : any, setLoading :any) => {
  try {
    const result = await    axios
    .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
    setLoading(false)
    return result
  } catch (error) {
    setLoading(false)
    console.log('error getAvalabilitybySubscription : ', error)
  }
}

export const getAvalabilitybySubscriptionOnlcik :any= async (localKeyCheck: string, payloads : any, setloading2 :any) => {
  try {
    const result = await    axios
    .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
    setloading2(false)
    return result
  } catch (error) {
    setloading2(false)
    console.log('error getAvalabilitybySubscription : ', error)
  }
}
// ================================================getTimeslotsDataAPI=============================================


export const getTimeslotsDataAPI = async (localKeyCheck: string) => {

  try {
  const result =   await axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
    return result.data.data
   
  } catch (error) {

    console.log('error getTimeslotsDataAPI : ', error)
  }
}
// ================================================getCleanerList=============================================


export const getCleanerList = async (localKeyCheck: string) => {

  try {
    const result = await axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`)
    return result.data.data
  } catch (error) {

    console.log('error getCleanerList : ', error)
  }
}







        // axios
    //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
    //   .then((response) => {
    //     setDates(response.data.dates)
    //     settimeSlotsfilter(response.data.timeslots)
    //     let filterdataCleanerStats = response?.data?.data?.filter((filter: any) => filter?.cleaner_details?.id == +cleanerid)
    //     console.log('filterdataCleanerStats', filterdataCleanerStats);
    //     let datasss = response?.data?.data
    //     for (let i = 0; i < datasss.length; i++) {
    //       if (datasss[i].cleaner_details?.id !== +cleanerid) {
    //         filterdataCleanerStats.push(datasss[i])
    //       }
    //     }
    //     setCleanerStats(filterdataCleanerStats)
    //     setsubscriptionData(response.data.subscriptionData)
    //     setLoading(false)
    //   })
    //   .catch((error) => {
    //     setLoading(false)
    //   })
    // axios
    //   .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
    //   .then((response) => {
    //     setTimeSlots(response.data.data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // axios
    //   .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`)
    //   .then((response) => {
    //     setCleanerList(response.data.data)
    //   })
    //   .catch((error) => {
    //     console.error('ERROR', error)
    //   })