import React from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import {ListViewProvider} from '../apps/user-management/users-list/core/ListViewProvider'
import CleanerAvailabilityRoute from '../cleaner/CleanerAvailabilityRoute'
import ActiveStatsComponent from '../ActiveAssignedCleaner/ActiveStatsComponent'
import AssignerCleanerComponent from './StatsItems/AssignerCleanerComponent'
import FutureChatComponent from './StatsItems/FutureChatComponent'
import FuturePauseComponent from './StatsItems/FuturePauseComponent'
import InactiveStatsComponent from './StatsItems/InactiveStatsComponent'
import MonthlySubscriptionComponent from './StatsItems/MonthlySubscriptionComponent'
import NewVehicleStatsComponent from './StatsItems/NewVehicleStatsComponent'
import OnboardSubscriptionComponent from './StatsItems/OnboardSubscriptionComponent'
import PausedStatsComponent from './StatsItems/PausedStatsComponent'
import ReactivatedSubscriptionComponent from './StatsItems/ReactivatedSubscriptionComponent'
import RenewedSubscriptionComponent from './StatsItems/RenewedSubscriptionComponent'
import SameDayStatsComponent from './StatsItems/SameDayStatsComponent'
import UpcomingStatsComponent from '../NotAssignedCleaner/UpcomingStatsComponent.'
import UpdateSubscriptionComponent from './StatsItems/UpdateSubscriptionComponent'

const SubscriptionsPage = () => {
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
                    onChange={(e) => setDate(e.target.value)}
                />
                <button
                    className='btn btn-sm btn-primary cursor-pointer'
                    type='button'
                    data-bs-toggle='tooltip'
                    title='Search'
                    onClick={handleClick}
                >Search</button> */}
      </div>
      {/* <div className="d-flex align-items-center justify-content-between mt-4 stat-links">
                {GET_ALL_STATS().map((item: any) => {
                    return (
                        <NavLink className="stats-link" key={item.value} to={`${item.url}`}>{item.label}</NavLink>
                    )
                })}
            </div> */}

      <Routes>
        <Route element={<Outlet />}>
          <Route
            path={`/same-day`}
            element={
              <>
                <PageTitle>Paid Active Subscriptions </PageTitle>
                <ListViewProvider>
                  <ActiveStatsComponent
                    isLoading={isLoading}
                    activeSubscriptions={data.activeSubscriptions ? data.activeSubscriptions : []}
                  />
                </ListViewProvider>
              </>
            }
          />
        </Route>
        <Route element={<Outlet />}>
          <Route
            path={`/inactive`}
            element={
              <>
                <PageTitle>Active Paid Ondemand</PageTitle>
                <SameDayStatsComponent />
              </>
            }
          />
        </Route>
        <Route element={<Outlet />}>
          <Route
            path={`/inactive`}
            element={
              <>
                <PageTitle>Inactive Subscriptions </PageTitle>
                <InactiveStatsComponent
                  isLoading={isLoading}
                  inactiveSubscriptions={
                    data.inactiveSubscriptions ? data.inactiveSubscriptions : []
                  }
                />
              </>
            }
          />
        </Route>
        <Route element={<Outlet />}>
          <Route
            path={`/paused`}
            element={
              <>
                <PageTitle>Not Paid Subscriptions</PageTitle>
                <PausedStatsComponent
                  isLoading={isLoading}
                  pauseSubscriptions={data.pauseSubscriptions ? data.pauseSubscriptions : []}
                />
              </>
            }
          />
        </Route>
        <Route element={<Outlet />}>
          <Route
            path={`/upcoming`}
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
        <Route element={<Outlet />}>
          <Route
            path={`/vehicles/new`}
            element={
              <>
                <PageTitle>Kit Subscriptions</PageTitle>
                <NewVehicleStatsComponent
                  isLoading={isLoading}
                  newVehicleOnboards={data.newVehicleOnboards ? data.newVehicleOnboards : []}
                />
              </>
            }
          />
        </Route>
        <Route element={<Outlet />}>
          <Route
            path={`/renewed`}
            element={
              <>
                <PageTitle>Inactive and Pause List</PageTitle>
                <RenewedSubscriptionComponent
                  isLoading={isLoading}
                  renewedSubscription={data.renewedSubscription ? data.renewedSubscription : []}
                />
              </>
            }
          />
        </Route>
        <Route element={<Outlet />}>
          <Route
            path={`/reactivated`}
            element={
              <>
                <PageTitle>Server Inactive and Pause List</PageTitle>
                <ReactivatedSubscriptionComponent
                  isLoading={isLoading}
                  reactivateSubscription={
                    data.reactivateSubscription ? data.reactivateSubscription : []
                  }
                />
              </>
            }
          />
        </Route>
        <Route element={<Outlet />}>
          <Route
            path={`/future-pause`}
            element={
              <>
                <PageTitle>Renewal List</PageTitle>
                <FuturePauseComponent
                  isLoading={isLoading}
                  futurePauseSubscriptions={
                    data.futurePauseSubscriptions ? data.futurePauseSubscriptions : []
                  }
                />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/monthly-onboard`}
            element={
              <>
                <PageTitle>Monthly Subscriptions</PageTitle>
                <MonthlySubscriptionComponent />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/pending-onboard`}
            element={
              <>
                <PageTitle>Onboarding Subscriptions</PageTitle>
                <OnboardSubscriptionComponent />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/same-day/assign-cleaner/:id`}
            element={
              <>
                <PageTitle>Assigner Cleaner</PageTitle>
                <AssignerCleanerComponent />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/inactive/assign-cleaner/:id`}
            element={
              <>
                <PageTitle>Assigner Cleaner - Active Paid On demand</PageTitle>
                <AssignerCleanerComponent />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/paused/assign-cleaner/:id`}
            element={
              <>
                <PageTitle>Assigner Cleaner - Not Paid Subscriptions</PageTitle>
                <AssignerCleanerComponent />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/upcoming/assign-cleaner/:id`}
            element={
              <>
                <PageTitle>Assigner Cleaner - Cleaner Not Subscriptions</PageTitle>
                <AssignerCleanerComponent />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/same-day/update-subscription/:id`}
            element={
              <>
                <PageTitle>Update Subscription</PageTitle>
                <UpdateSubscriptionComponent />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/same-day/assign-cleaner-view`}
            element={
              <>
                <PageTitle>Cleaner Availability</PageTitle>
                <CleanerAvailabilityRoute subscriptionId={11721} distenceRadius={'10'} />
              </>
            }
          />
        </Route>

        <Route element={<Outlet />}>
          <Route
            path={`/future-pause/chats/:id`}
            element={
              <>
                <PageTitle>Update Subscription</PageTitle>
                <FutureChatComponent />
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default SubscriptionsPage
