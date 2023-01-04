import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import PincodeMains from '../ADDRESS/PincodeListData/PincodeMains'
import CityListMain from '../ADDRESS/CityList/CityListMain'
import CountryListMains from '../ADDRESS/CountryList/CountryListMains'
import StateListMains from '../ADDRESS/StateList/StateListMains'
import { ListViewProvider } from '../apps/user-management/users-list/core/ListViewProvider'

import AeasListMains from '../ADDRESS/AreasList/AeasListMains'
import AllCampaignsMain from '../CAMPAIGNS/AllCampaigns/AllCampaignsMain'
import RewardsMains from '../CAMPAIGNS/Rewards/RewardsMains'
import RedeemtpionsMains from '../CAMPAIGNS/Redeemtions/RedeemtpionsMains'
const CampainsRouting = () => {
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
                        path={`/dashboard`}
                        element={
                            <>
                                <PageTitle>Dashboards</PageTitle>
                                <AeasListMains></AeasListMains>
                            </>
                        }
                    />
                </Route>
                {/* services routes here*/}
                <Route element={<Outlet />}>
                    <Route
                        path={`/create-campaign`}
                        element={
                            <>
                                <PageTitle>Create Campaigns </PageTitle>
                                <ListViewProvider>
                                    <CountryListMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>

                {/* champ-permanent-replacement */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/all-campaign`}
                        element={
                            <>
                                <PageTitle>All Campaigns </PageTitle>
                                <ListViewProvider>
                                    <AllCampaignsMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* champ-permanent-replacement */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/reward`}
                        element={
                            <>
                                <PageTitle>Rewards List</PageTitle>
                                <ListViewProvider>
                                    <RewardsMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Cleaner List Here */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/redeemtions`}
                        element={
                            <>
                                <PageTitle>Redeemtions Lists</PageTitle>
                                <ListViewProvider>
                                    <RedeemtpionsMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Cleaner List Here */}
            </Routes>
        </div>
    )
}
export default CampainsRouting
