import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { Notification } from '../modules/Notification/NotificationTemplate'
import SendNotificationTemplate from '../modules/Notification/SendNotificationTemplate'
import AllTicketesList from '../modules/Tickets/AllTicketesList'
import { PageTitle } from '../../_metronic/layout/core'
import AllRatingsParents from '../modules/allRatings/AllRatingsParents'
import ReactTables from '../modules/REACT-DATA-TABLES/ReactTables'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const ProfilePage2 = lazy(() => import('../modules/DashboarCommon/ProfilePages'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const SubscriptionsPage = lazy(() => import('../modules/stats/SubscriptionsPage'));
  const StatsPage = lazy(() => import('../modules/statistics/StatsPage'));
  const CleanerPage = lazy(() => import('../modules/cleaner/CleanerPage'));

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
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
          path='crafted/pages/tickets/*'
          element={
            <SuspensedView>
              <ProfilePage2 />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/tickets/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        
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
            path='/notification/template/*'
            element={
              <SuspensedView>
              <PageTitle >Notification Template</PageTitle>

                <Notification />
              </SuspensedView>
            }
          />
          <Route
            path='/notification/send-notification/*'
            element={
              <SuspensedView>
              <PageTitle >Send Notification</PageTitle>

                <SendNotificationTemplate />
              </SuspensedView>
            }
          />\

          {/* All Ratiggs Routes  */}
          <Route
            path='/all/ratings*'
            element={
              <SuspensedView>
              <PageTitle >All Ratings</PageTitle>

                <AllRatingsParents />
              </SuspensedView>
            }
          />
          {/* All Tickets Routes  */}
          <Route
            path='/all/tickets*'
            element={
              <SuspensedView>
              <PageTitle >All Tickets</PageTitle>

                <AllTicketesList />
              </SuspensedView>
            }
            />
            {/* All Tickets Routes  */}
          {/* All react tables  Routes  */}
          <Route
            path='/all/tables*'
            element={
              <SuspensedView>
              <PageTitle >All React Tables</PageTitle>

                <ReactTables />
              </SuspensedView>
            }
            />
            {/* All Tickets Routes  */}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
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

export {PrivateRoutes}
