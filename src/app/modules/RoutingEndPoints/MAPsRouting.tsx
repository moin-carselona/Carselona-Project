import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import PincodeMains from '../ADDRESS/PincodeListData/PincodeMains'
import CityListMain from '../ADDRESS/CityList/CityListMain'
import CountryListMains from '../ADDRESS/CountryList/CountryListMains'
import StateListMains from '../ADDRESS/StateList/StateListMains'
import { ListViewProvider } from '../apps/user-management/users-list/core/ListViewProvider'

import AeasListMains from '../ADDRESS/AreasList/AeasListMains'
import SocietyMapMultipleLocation from '../Maps/SocietyMap/SocietyMapMultipleLocation'
const MAPsRouting = () => {
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
                        path={`/cleaner-route-map`}
                        element={
                            <>
                                <PageTitle>Areas List</PageTitle>
                                <AeasListMains></AeasListMains>
                            </>
                        }
                    />
                </Route>
                {/* services routes here*/}
                <Route element={<Outlet />}>
                    <Route
                        path={`/society-map`}
                        element={
                            <>
                                <PageTitle>Country List </PageTitle>
                                <ListViewProvider>
                                    {/* < SocietyMapMultipleLocation/> */}
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>

                {/* champ-permanent-replacement */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/cleaner-map`}
                        element={
                            <>
                                <PageTitle>State List </PageTitle>
                                <ListViewProvider>
                                    <StateListMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* champ-permanent-replacement */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/comapany-cleaner-map`}
                        element={
                            <>
                                <PageTitle>City List</PageTitle>
                                <ListViewProvider>
                                    <CityListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Cleaner List Here */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/customer-cleaner`}
                        element={
                            <>
                                <PageTitle>Pincode List</PageTitle>
                                <ListViewProvider>
                                    <PincodeMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Cleaner List Here */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/pincode-marker-map`}
                        element={
                            <>
                                <PageTitle>Pincode List</PageTitle>
                                <ListViewProvider>
                                    <PincodeMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Cleaner List Here */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/all-customer-cleaner-map`}
                        element={
                            <>
                                <PageTitle>Pincode List</PageTitle>
                                <ListViewProvider>
                                    <PincodeMains />
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
export default MAPsRouting
