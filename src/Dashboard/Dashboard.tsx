import StatisticsDashboard from "./components/StatisticsDashboard"
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
// import {
//     MixedWidget2,
//     MixedWidget10,
//     MixedWidget11,
//     ListsWidget2,
//     ListsWidget3,
//     ListsWidget4,
//     ListsWidget5,
//     ListsWidget6,
//     TablesWidget5,
//     TablesWidget10,
//     MixedWidget8,
// } from "../_metronic/partials/widgets"
import { PageTitle } from "../_metronic/layout/core"
import { GetAllCustomerStats } from "./components/Api"
import { LocalBaseURL } from "../BaseURLmanagement"
import { useDispatch } from "react-redux"
const Dashboard: FC = () => {
   
    LocalBaseURL()
    const localKey = JSON.parse(localStorage.getItem("API") || "0")
    const [stats, setStats] = useState<any>([])
    useEffect(() => {
        async function invokedStats() {
            const response = await GetAllCustomerStats(localKey)
            setStats(response?.data?.data)
            console.log('activwe subscripton response', response.data.data);
        }
        invokedStats()
    }, [])

    return (
        <>
            {/* star::Row ================== */}
            <div className='row gy-5 g-xl-8'>
                {/* <div className='col-xl-4'>
                    <ListsWidget2 className='card-xl-stretch mb-xl-8' />
                </div> */}
                {/* <div className='col-xl-4'>
                    <ListsWidget6 className='card-xl-stretch mb-xl-8' />
                </div> */}
                {/* <div className='col-xl-6'>
                    <StatisticsDashboard Active_Subscriptions={stats[0]?.activeSubscriptions} className='card-xl-stretch mb-5 mb-xl-8' items={5} New_Vehicle_Onboards={stats[0]?.newVehicleOnboards} Reactivated_Subscription={stats[0]?.reactivateSubscription} Same_Day_Started_Subscriptions={stats[0]?.sameStartDateSubscriptions} Renewed_Subscription={stats[0]?.renewedSubscription} />
                </div>
               */}
                <div className='col-xl-12'>
                    <StatisticsDashboard Active_Subscriptions={stats[0]?.activeSubscriptions} className='card-xl-stretch mb-5 mb-xl-8' items={5} New_Vehicle_Onboards={stats[0]?.newVehicleOnboards} Reactivated_Subscription={stats[0]?.reactivateSubscription} Same_Day_Started_Subscriptions={stats[0]?.sameStartDateSubscriptions} Renewed_Subscription={stats[0]?.renewedSubscription} Upcoming_Subscriptions={stats[0]?.upcomingSubscriptions
                    } Pause_Subscriptions={stats[0]?.pauseSubscriptions} Future_Pause={stats[0]?.futurePauseSubscriptions
                    } Future_Inactive={stats[0]?.futureInactiveSubscriptions} Inactive_Subscriptions={stats[0]?.inactiveSubscriptions} />
                </div>
            </div>
            {/* end::Row ================== */}
            {/* begin::Row=================================================================================== */}
            {/* <div className='row gy-5 g-xl-8 ' >
                <div className='col-xxl-4'>
                    <StatisticsDashboard className='card-xl-stretch mb-xl-8' />
                </div>
            </div> */}
            {/* end::Row ========================================================================================= */}
            {/* begin::Row=================================================================================== */}
            {/* <div className='row gy-5 gx-xl-8'>
            <div className='col-xxl-4'>
                <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
            </div>
            <div className='col-xl-8'>
                <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
            </div>
        </div> */}
            {/* end::Row ========================================================================================= */}
            {/* begin::Row=================================================================================== */}
            {/* <div className='row g-5 gx-xxl-8'>
            <div className='col-xxl-4'>
                <MixedWidget8
                    className='card-xxl-stretch mb-xl-3'
                    chartColor='success'
                    chartHeight='150px'
                />
            </div>
            <div className='col-xxl-8'>
                <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
            </div>
        </div> */}
            {/* end::Row ========================================================================================= */}
        </>
    )
}
const DashboardWrapper: FC = () => {
    const intl = useIntl()
    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
            <Dashboard />
        </>
    )
}
export default DashboardWrapper
