/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'
export function AsideMenuMain() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />
      {/* <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      /> */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Daily</span>
        </div>
      </div>
      {/* pages section   */}
      {/* <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub> */}
      {/* pages section   */}
      {/* tickets ========================================================= */}
      {/* <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Tickets'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/tickets' title='All Tickets' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/tickets/Address' title='Address' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/tickets/subscription'
            title='subscription'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Tickets'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      > */}
      {/* <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub> */}



      {/* tickets DIRECT ROUTE =========================================================== */}
      <AsideMenuItem to='/admin/tickets' title='Tickets' hasBullet={true} />
      {/* tickets =========================================================== */}
      {/* tickets DIRECT ROUTE =========================================================== */}
      {/* <AsideMenuItem to='/admin/tickets' title='Tickets' hasBullet={true} /> */}
      {/* tickets =========================================================== */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/statistics/same-day'
        title='Subscriptions'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/statistics/same-day' title='Active Paid' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/inactive' title='On Demand' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/paused' title='Renewal' hasBullet={true} />
        <AsideMenuItem
          to='/apps/statistics/vehicles/new'
          title='Kit Subscriptions'
          hasBullet={true}
        />
        <AsideMenuItem to='/apps/statistics/renewed' title='Inactive' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/reactivated' title='Server Inactive' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/future-pause' title='Renewal List' hasBullet={true} />
        <AsideMenuItem
          to='/apps/statistics/monthly-onboard'
          title='Date wise Onboarding'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/apps/statistics/pending-onboard'
          title='Onboarding Subscriptions'
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      {/* schedule here start ===================================================== */}
      <AsideMenuItemWithSub
        to='/schedule/cleaner'
        title='Schedules'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/schedule/cleaner/not-assigned' title='Un-Assigned' hasBullet={true} />
        <AsideMenuItem to='/schedule/cleaner/job-list' title='Job List' hasBullet={true} />
        <AsideMenuItem to='/schedule/cleaner/area-wise-cleaner' title='Search Availibility' hasBullet={true} />
        {/* <AsideMenuItem to='/schedule/cleaner/champ-permanent-replacement' title='Champ Permanent Replacement' hasBullet={true} /> */}
        <AsideMenuItem to='/schedule/cleaner/cleanerlist' title='Champs List' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* schedule here start ===================================================== */}
      {/* Master  here start ===================================================== */}
      <AsideMenuItemWithSub
        to='/master'
        title='Masters'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/master/service-price' title='Service Prices' hasBullet={true} />
        <AsideMenuItem to='/master/services' title='Services' hasBullet={true} />
        <AsideMenuItem to='/master/products' title='Products' hasBullet={true} />
        <AsideMenuItem to='/master/packages' title='Packages' hasBullet={true} />
        <AsideMenuItem to='/master/fueltype' title='Fuel Type' hasBullet={true} />
        <AsideMenuItem to='/master/vehicle-type' title='Vehicle Type' hasBullet={true} />
        <AsideMenuItem to='/master/vehicle-category' title='Vehicle Category' hasBullet={true} />
        <AsideMenuItem to='/master/vehicle-brand' title='Vehicle Brand' hasBullet={true} />
        <AsideMenuItem to='/master/vehicle-model' title='Vehicle Model' hasBullet={true} />
        <AsideMenuItem to='/master/problem' title='Problem' hasBullet={true} />
        <AsideMenuItem to='/master/sub-problem' title='Sub Problem' hasBullet={true} />
        <AsideMenuItem to='/master/t-shirt' title='T-Shirt ' hasBullet={true} />
        <AsideMenuItem to='/master/training-topics' title='Training Topics' hasBullet={true} />
        <AsideMenuItem to='/master/job-sites' title='Job Sites' hasBullet={true} />
        <AsideMenuItem to='/master/job-type' title='Job Type' hasBullet={true} />
        <AsideMenuItem to='/master/user-type' title='User Type' hasBullet={true} />
        <AsideMenuItem to='/master/points-table' title='Point-Table' hasBullet={true} />
        <AsideMenuItem to='/master/credit-reasons' title='Credit Reasons' hasBullet={true} />
        <AsideMenuItem to='/master/job-status' title='Job Status' hasBullet={true} />
        <AsideMenuItem to='/master/master-reasons' title='Master Reasons' hasBullet={true} />
        <AsideMenuItem to='/master/master-ticket-category' title='Master Tickets Category ' hasBullet={true} />
        <AsideMenuItem to='/master/master-resources' title='Master Resources' hasBullet={true} />
        <AsideMenuItem to='/master/master-offers' title='Master Offers' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* Master here start ===================================================== */}
      {/* Address here start ===================================================== */}
      <AsideMenuItemWithSub
        to='/address'
        title='Address'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/address/areas' title='Areas' hasBullet={true} />
        <AsideMenuItem to='/address/country' title='Country' hasBullet={true} />
        <AsideMenuItem to='/address/state' title='State' hasBullet={true} />
        <AsideMenuItem to='/address/city' title='City' hasBullet={true} />
        <AsideMenuItem to='/address/pincode' title='Pincode' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* Address here start ===================================================== */}
      {/* Campaign sections here start ===================================================== */}
      <AsideMenuItemWithSub
        to='/campaigns'
        title='Campaign'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/campaigns/dashboard' title='Dashboard' hasBullet={true} />
        <AsideMenuItem to='/campaigns/create-campaign' title='Create Campaign' hasBullet={true} />
        <AsideMenuItem to='/campaigns/all-campaign' title='All Campaigns' hasBullet={true} />
        <AsideMenuItem to='/campaigns/reward' title='Rewards' hasBullet={true} />
        <AsideMenuItem to='/campaigns/redeemtions' title='Redeemtions' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* Campaign sections here start ===================================================== */}
      {/* MAPs sections here start ===================================================== */}
      <AsideMenuItemWithSub
        to='/maps'
        title='MAPs'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/maps/cleaner-route-map' title='Cleaner Routes MAPs' hasBullet={true} />
        <AsideMenuItem to='/maps/society-map' title='Society MAPs' hasBullet={true} />
        <AsideMenuItem to='/maps/cleaner-map' title='Cleaner MAPs' hasBullet={true} />
        <AsideMenuItem to='/maps/comapany-cleaner-map' title='Company Cleaner MAPs' hasBullet={true} />
        <AsideMenuItem to='/maps/customer-cleaner' title='Customer Cleaner MAPs' hasBullet={true} />
        <AsideMenuItem to='/maps/pincode-marker-map' title='Pincode Marker MAPs' hasBullet={true} />
        <AsideMenuItem to='/maps/all-customer-cleaner-map' title='All Customer Cleaner MAPs' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* MAPs sections here start ===================================================== */}
      <AsideMenuItemWithSub
        to='/apps/admin/stats'
        title='Statistics'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/stats/customers' title='Customer Stats' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/apps/admin/cleaner'
        title='Cleaner'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/cleaner/cleanerjobs' title='New Job List' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/cleaners' title='Active' hasBullet={true} />
        <AsideMenuItem
          to='/apps/cleaner/availabilities'
          title='Cleaner Availability'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/apps/cleaner/onboardingpendingcleanerlist'
          title='Onboarding Pending'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/apps/cleaner/deactivatedcleanerlist'
          title='Deactivated'
          hasBullet={true}
        />
        <AsideMenuItem to='/apps/cleaner/cleanerattendance' title='Attendance' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/cleanerjobs_old' title='Old Jobs List' hasBullet={true} />
        <AsideMenuItem
          to='/apps/cleaner/weeklysummery'
          title='Weekly Payout Report'
          hasBullet={true}
        />
        <AsideMenuItem to='/apps/cleaner/cleanersemergencyleaves' title='Leaves' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/leads' title='Leads' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/leagues' title='League' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
        fontIcon='bi-layers'
      />
      {/* <AsideMenuItem
        to='/apps/statistics'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Stats'
        fontIcon='bi-layers'
      /> */}
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
      {/* notifications menu  */}
      <AsideMenuItemWithSub
        to='/apps/notification/same-day'
        title='Notifications'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/notification/template' title='Template' hasBullet={true} />
        <AsideMenuItem
          to='/notification/send-notification'
          title='Send Notification'
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      {/* all rating side menu   */}
      <AsideMenuItemWithSub
        to='/ratings'
        title='All Ratings'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/all/ratings' title='Ratings' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* all tickets side menu   */}
      <AsideMenuItemWithSub
        to='/Tickets'
        title='All Tickets'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/all/tickets' title='Tickets' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* react-table side menu   */}
      <AsideMenuItemWithSub
        to='/Society'
        title='Add Society'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/all/Societies' title='All Society' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* react-table side menu   */}
      {/* react-table side menu   */}
      <AsideMenuItemWithSub
        to='/absentCleanerList'
        title='Absent Cleaner List'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/absent/cleanerList' title='Absent cleaner List' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* react-table side menu   */}
      <AsideMenuItemWithSub
        to='/DailyJob'
        title='Daily Job Assign'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/daily/job/assign' title='Daily Job Assign' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* react-table side menu   */}
      {/* Old Cleaner Job List side menu   */}
      <AsideMenuItemWithSub
        to='/datechange'
        title='Date Change'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/datechange' title='Date Change' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* services-price  */}
      <AsideMenuItemWithSub
        to='/services-price'
        title='Services Price'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/services-price' title='Services Price' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* role modules  */}
      <AsideMenuItemWithSub
        to='/role-module'
        title='Role Modules'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/role-module' title='Role Modules' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* role modules  */}
      <AsideMenuItemWithSub
        to='/active-customer'
        title='Active customer'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/active-customer' title='Active Customer' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* role modules  */}
      <AsideMenuItemWithSub
        to='/visitors'
        title='Visitors'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/visitors' title='Visitors' hasBullet={true} />
      </AsideMenuItemWithSub>
    </>
  )
}
