import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import { ListViewProvider } from '../apps/user-management/users-list/core/ListViewProvider'
import Old_JobList from '../Old_JobList/Old_JobList'
import ChampAvailabilityRoute from '../ChampPermanentReplacements/ChampAvailabilityRoute'
import ActiveCleanerRoute from '../ActiveCleaner/ActiveCleanerRoute'
import AreaWiseAvailabilityRoute from '../AreaCleanerAvailibiltybyAddress/AreaWiseAvailabilityRoute'
import UpcomingStatsComponent from '../NotAssignedCleaner/UpcomingStatsComponent.'
const SchedulesRoutes = () => {
    const [data] = React.useState(Object)
    const [isLoading, setLoading] = React.useState(false)
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className='row'>
            <Routes>
                <Route element={<Outlet />}>
                    <Route
                        path={`/not-assigned`}
                        element={
                            <>
                                <PageTitle>Un-Assigned</PageTitle>
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
                        path={`/job-list`}
                        element={
                            <>
                                <PageTitle>Job List </PageTitle>
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
                                <PageTitle>Champ Permanent Ressign </PageTitle>
                                <ListViewProvider>
                                    <ChampAvailabilityRoute />
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
                                <PageTitle>Champ List </PageTitle>
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
                                <PageTitle>Search Avaibility </PageTitle>
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
