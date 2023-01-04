import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
// import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { Notification } from '../modules/Notification/NotificationTemplate'
import SendNotificationTemplate from '../modules/Notification/SendNotificationTemplate'
import AllTicketesList from '../modules/Tickets/AllTicketesList'
import { PageTitle } from '../../_metronic/layout/core'
import AllRatingsParents from '../modules/allRatings/AllRatingsParents'
import ControllerRoute from '../modules/All Societies/ControllerRoute'
import CleanerAbsenteeism from '../modules/CleanerAbsenteeism/CleanerAbsenteeism'
import DailyJobAssignment from '../modules/DailyJobAssignment/DailyJobAssignment'
import Old_JobList from '../modules/Old_JobList/Old_JobList'
import ActiveCleanerRoute from '../../app/modules/ActiveCleaner/ActiveCleanerRoute'
import { MasterLayoutDrawer } from '../../MasterDrawerListCommon/MasterLayoutDrawer'
import ChampAvailabilityRoute from '../modules/ChampPermanentReplacements/ChampAvailabilityRoute'
import AreaWiseAvailabilityRoute from '../modules/AreaCleanerAvailibiltybyAddress/AreaWiseAvailabilityRoute'
import DateChangeAvailibiltyroutes from '../modules/ChangeDateAvailibillityRoutes/DateChangeAvailibiltyroutes'
import MasterServicesRoutes from '../modules/RoutingEndPoints/MasterServicesRoutes'
import ControllerRouteRoles from '../modules/RoleModules/ControllerRouteRoles'
import ControllerRouteActive from '../modules/ActiveCustomer/ControllerRouteActive'
import ControllerRouteVisitors from '../modules/Visitors/ControllerRouteVisitors'
import DashboardRoute from '../../Dashboard/components/DashboardRoute'
import ControllerRouteTickets from '../modules/TicketsList/ControllerRouteTickets'
import TicketListMain from '../modules/TicketsList/TicketListMain'
// import MAPsRouting from '../modules/RoutingEndPoints/MAPsRouting'
// import ControllerRoute from '../../Reuse/All Societies/ControllerRoute'
const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const ProfilePage2 = lazy(() => import('../modules/DashboarCommon/ProfilePages'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const SubscriptionsPage = lazy(() => import('../modules/stats/SubscriptionsPage'))
  const SchedulesRoutes = lazy(() => import('../modules/RoutingEndPoints/SchedulesRoutes'))
  const MAPsRouting = lazy(() => import('../modules/RoutingEndPoints/MAPsRouting'))
  const AddressRouting = lazy(() => import('../modules/RoutingEndPoints/AddressRouting'))
  const CampainsRouting = lazy(() => import('../modules/RoutingEndPoints/CampainsRouting'))
  const StatsPage = lazy(() => import('../modules/statistics/StatsPage'))
  const CleanerPage = lazy(() => import('../modules/cleaner/CleanerPage'))
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route
          // path='crafted/pages/tickets/*'
          element={
            // <SuspensedView>
              <MasterLayoutDrawer />
            // </SuspensedView>
          }
        />
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardRoute />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='admin/*'
          element={
            <SuspensedView>
              <ControllerRouteTickets />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/tickets/*'
          element={
            <SuspensedView>
              <ProfilePage2 />
            </SuspensedView>
          }
        />
        {/* <Route
          path='crafted/pages/tickets/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        /> */}
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/statistics/*'
          element={
            <SuspensedView>
              <SubscriptionsPage />
            </SuspensedView>
          }
        />
        <Route
          path='schedule/cleaner/*'
          element={
            <SuspensedView>
              <SchedulesRoutes />
            </SuspensedView>
          }
        />
        <Route
          path='apps/stats/*'
          element={
            <SuspensedView>
              <StatsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/cleaner/*'
          element={
            <SuspensedView>
              <CleanerPage />
            </SuspensedView>
          }
        />
        <Route
          path='master/*'
          element={
            <SuspensedView>
              <MasterServicesRoutes />
            </SuspensedView>
          }
        />
        <Route
          path='address/*'
          element={
            <SuspensedView>
              <AddressRouting />
            </SuspensedView>
          }
        />
        <Route
          path='maps/*'
          element={
            <SuspensedView>
              <MAPsRouting />
            </SuspensedView>
          }
        />
        <Route
          path='campaigns/*'
          element={
            <SuspensedView>
              <CampainsRouting />
            </SuspensedView>
          }
        />
        {/* simple routing here ============================================== */}
        <Route
          path='/notification/template/*'
          element={
            <SuspensedView>
              <PageTitle>Notification Template</PageTitle>
              <Notification />
            </SuspensedView> 
          }
        />
        <Route
          path='/notification/send-notification/*'
          element={
            <SuspensedView>
              <PageTitle>Send Notification</PageTitle>
              <SendNotificationTemplate />
            </SuspensedView>
          }
        />
        \{/* All Ratiggs Routes  */}
        <Route
          path='/all/ratings*'
          element={
            <SuspensedView>
              <PageTitle>All Ratings</PageTitle>
              <AllRatingsParents />
            </SuspensedView>
          }
        />
        {/* All Tickets Routes  */}
        {/* <Route
          path='/all/tickets*'
          element={
            <SuspensedView>
              <PageTitle>All Tickets</PageTitle>
              <ControllerRouteTickets />
            </SuspensedView>
          }
        /> */}
  
        {/* All Tickets Routes  */}
        {/* All react tables  Routes  */}
        <Route
          path='/all/Societies*'
          element={
            <SuspensedView>
              <PageTitle>All Societies</PageTitle>
              <ControllerRoute />
            </SuspensedView>
          }
        />
        {/* All Tickets Routes  */}
        {/* All daily/job/assign  */}
        <Route
          path='/absent/cleanerList*'
          element={
            <SuspensedView>
              <PageTitle>Absent Cleaner List</PageTitle>
              <CleanerAbsenteeism />
            </SuspensedView>
          }
        />
        {/* All daily/job/assign  */}
        {/* All daily/job/assign  */}
        <Route
          path='/daily/job/assign/oldjob/:id*'
          element={
            <SuspensedView>
              <PageTitle>Champ Temporary Reassign</PageTitle>
              <DailyJobAssignment />
            </SuspensedView>
          }
        />
        <Route
          path='/datechange/:id/:id/:id:id/:id/:id/*'
          element={
            <SuspensedView>
              <PageTitle>Date Change</PageTitle>
              <DateChangeAvailibiltyroutes subscriptionId={24064} distenceRadius={'3'} />
            </SuspensedView>
          }
        />
        {/* All daily/job/assign  */}
        {/* old job list /job/assign  */}
        <Route
          path='/old/jobList*'
          element={
            <SuspensedView>
              <PageTitle>Old Cleaner List</PageTitle>
              <Old_JobList />
            </SuspensedView>
          }
        />
        <Route
          path='/activecleaners*'
          element={
            <SuspensedView>
              <PageTitle>Active Cleaner</PageTitle>
              <ActiveCleanerRoute />
            </SuspensedView>
          }
        />
        {/* Champ Absent customer list permanent replacemments  */}
        <Route
          path='/champ-permanent-replacement/active_assined_champ/:id*'
          element={
            <SuspensedView>
              <PageTitle> Champ Permanent Replacement </PageTitle>
              <ChampAvailabilityRoute />
            </SuspensedView>
          }
        />

        <Route
          path='/champ-permanent-replacement/active_cleaner_champ/:id*'
          element={
            <SuspensedView>
              <PageTitle> Champ Permanent Replacement </PageTitle>
              <ChampAvailabilityRoute />
            </SuspensedView>
          }
        />
             {/* Area for Sales */}
             <Route
          path='/areawisecleaner*'
          element={
            <SuspensedView>
              <PageTitle>Area Wise Cleaner For Sales </PageTitle>
              <AreaWiseAvailabilityRoute />
            </SuspensedView>
          }
        />
        {/* Area for Sales */}
        <Route
          path='/role-module*'
          element={
            <SuspensedView>
              <PageTitle>Roles Module List </PageTitle>
              <ControllerRouteRoles />
            </SuspensedView>
          }
        />
        {/* Area for Sales */}
        <Route
          path='/active-customer*'
          element={
            <SuspensedView>
              <PageTitle>Active Customers List</PageTitle>
              <ControllerRouteActive />
            </SuspensedView>
          }
        />
   
        {/* Area for Sales */}
        <Route
          path='/visitors*'
          element={
            <SuspensedView>
              <PageTitle>Visitors List </PageTitle>
              <ControllerRouteVisitors />
            </SuspensedView>
          }
        />

    
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}
const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}
export { PrivateRoutes }
