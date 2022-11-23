import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import { ListViewProvider } from '../apps/user-management/users-list/core/ListViewProvider'
// import CleanerAvailabilityRoute from '../cleaner/CleanerAvailabilityRoute'
import ActiveStatsComponent from '../ActiveAssignedCleaner/ActiveStatsComponent'
import CleanerAvailabilityRoute from '../cleaner/CleanerAvailabilityRoute'
import PausedStatsComponent from '../stats/StatsItems/PausedStatsComponent'
import Old_JobList from '../Old_JobList/Old_JobList'
import ChampAvailabilityRoute from '../ChampPermanentReplacements/ChampAvailabilityRoute'
import ActiveCleanerRoute from '../ActiveCleaner/ActiveCleanerRoute'
import AreaWiseAvailabilityRoute from '../AreaCleanerAvailibiltybyAddress/AreaWiseAvailabilityRoute'
import UpcomingStatsComponent from '../NotAssignedCleaner/UpcomingStatsComponent.'
// import AssignerCleanerComponent from './StatsItems/AssignerCleanerComponent'
// import FutureChatComponent from './StatsItems/FutureChatComponent'
// import FuturePauseComponent from './StatsItems/FuturePauseComponent'
// import InactiveStatsComponent from './StatsItems/InactiveStatsComponent'
// import MonthlySubscriptionComponent from './StatsItems/MonthlySubscriptionComponent'
// import NewVehicleStatsComponent from './StatsItems/NewVehicleStatsComponent'
// import OnboardSubscriptionComponent from './StatsItems/OnboardSubscriptionComponent'
// import PausedStatsComponent from './StatsItems/PausedStatsComponent'
// import ReactivatedSubscriptionComponent from './StatsItems/ReactivatedSubscriptionComponent'
// import RenewedSubscriptionComponent from './StatsItems/RenewedSubscriptionComponent'
// import SameDayStatsComponent from './StatsItems/SameDayStatsComponent'
// import UpcomingStatsComponent from '../NotAssignedCleaner/UpcomingStatsComponent.'
// import UpdateSubscriptionComponent from './StatsItems/UpdateSubscriptionComponent'
const SchedulesRoutes = () => {
    const [data] = React.useState(Object)
    const [isLoading, setLoading] = React.useState(false)
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className='row'>
            <div className='d-flex'>
                {/* <input
                    type='date'
                    className='form-control border-0 w-50'
                    // onChange={(e) => setDate(e.target.value)}
                />
                <button
                    className='btn btn-sm btn-primary cursor-pointer'
                    type='button'
                    data-bs-toggle='tooltip'
                    title='Search'
                    // onClick={handleClick}
                >Search</button> */}
            </div>
            {/* <div className="d-flex align-items-center justify-content-between mt-4 stat-links">
                {GET_ALL_STATS().map((item: any) => {
                    return (
                        <NavLink className="stats-link" key={item.value} to={`${item.url}`}>{item.label}</NavLink>
                    )
                })}
            </div> */}

{/* champ-permanent-replacement */}
            <Routes>
                <Route element={<Outlet />}>
                    <Route
                        path={`/not-assigned`}
                        element={
                            <>
                                <PageTitle>Cleaner Not Subscriptions</PageTitle>
                                <UpcomingStatsComponent
                                  isLoading={isLoading}
                                  upcomingSubscriptions={
                                    data.upcomingSubscriptions ? data.upcomingSubscriptions : []
                                  }
                                />
                            </>
                        }
                    />
                </Route>
                {/* champ-permanent-replacement */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/old-job`}
                        element={
                            <>
                                <PageTitle>Old Job List </PageTitle>
                                <ListViewProvider>
                                    <Old_JobList
                                    />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* champ-permanent-replacement */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/champ-permanent-replacement`}
                        element={
                            <>
                                <PageTitle>Champ Permanent Replacemnet </PageTitle>
                                <ListViewProvider>
                                    <ChampAvailabilityRoute/>
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* champ-permanent-replacement */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/cleanerlist`}
                        element={
                            <>
                                <PageTitle>Cleaner List </PageTitle>
                                <ListViewProvider>
                                    <ActiveCleanerRoute
                                    />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Cleaner List Here */}
                {/* AreaWiseAvailabilityRoute */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/area-wise-cleaner`}
                        element={
                            <>
                                <PageTitle>Cleaner List </PageTitle>
                                <ListViewProvider>
                                    <AreaWiseAvailabilityRoute
                                    />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* AreaWiseAvailabilityRoute */}

            </Routes>
        </div>
    )
}
export default SchedulesRoutes
