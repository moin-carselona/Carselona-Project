/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
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
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItemWithSub
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
      </AsideMenuItemWithSub>

      {/* tickets ========================================================= */}
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Tickets'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/tickets' title='All Tickets' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/tickets/Address' title='Address' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/tickets/subscription' title='subscription' hasBullet={true} />
  
        </AsideMenuItemWithSub>
  
      </AsideMenuItemWithSub>

      {/* tickets =========================================================== */}
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
        <AsideMenuItem to='/apps/statistics/upcoming' title='Not Assigned' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/vehicles/new' title='Kit Subscriptions' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/renewed' title='Inactive' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/reactivated' title='Server Inactive' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/future-pause' title='Renewal List' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/monthly-onboard' title='Date wise Onboarding' hasBullet={true} />
        <AsideMenuItem to='/apps/statistics/pending-onboard' title='Onboarding Subscriptions' hasBullet={true} />
      </AsideMenuItemWithSub>
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
        <AsideMenuItem to='/apps/cleaner/availabilities' title='Cleaner Availability' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/onboardingpendingcleanerlist' title='Onboarding Pending' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/deactivatedcleanerlist' title='Deactivated' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/cleanerattendance' title='Attendance' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/cleanerjobs_old' title='Old Jobs List' hasBullet={true} />
        <AsideMenuItem to='/apps/cleaner/weeklysummery' title='Weekly Payout Report' hasBullet={true} />
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
        <AsideMenuItem to='/notification/send-notification' title='Send Notification' hasBullet={true} />
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
        to='/Tables'
        title='React-table'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/all/tables' title='React Tables' hasBullet={true} />
      </AsideMenuItemWithSub>
    {/* react-table side menu   */}

    </>
  )
}
