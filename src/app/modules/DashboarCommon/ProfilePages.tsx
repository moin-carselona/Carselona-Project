import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import Address from '../DashboarCommon/Address'
import { ProfileHeaders } from './ProfileHeaders'
import Subscription from './Subscription'
const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Tickets',
    path: '/tickets/details',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]
const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeaders />
          <Outlet />
        </>
      }
    >
      <Route
        path='tickets'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Tickets</PageTitle>
            <Address />
          </>
        }
      />
      <Route
        path='subscription'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Subscription</PageTitle>
            <Subscription />
          </>
        }
      />
      {/* <Route index element={<Navigate to='/crafted/pages/profile/overview' />} /> */}
      <Route index element={<Navigate to='/tickets/details/address' />} />
    </Route>
  </Routes>
)
export default ProfilePage
