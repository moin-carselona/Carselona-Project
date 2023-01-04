import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import PincodeMains from '../ADDRESS/PincodeListData/PincodeMains'
import CityListMain from '../ADDRESS/CityList/CityListMain'
import CountryListMains from '../ADDRESS/CountryList/CountryListMains'
import StateListMains from '../ADDRESS/StateList/StateListMains'
import { ListViewProvider } from '../apps/user-management/users-list/core/ListViewProvider'

import AeasListMains from '../ADDRESS/AreasList/AeasListMains'
const AddressRouting = () => {
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
                        path={`/areas`}
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
                        path={`/country`}
                        element={
                            <>
                                <PageTitle>Country List </PageTitle>
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
                        path={`/state`}
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
                        path={`/city`}
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
                        path={`/pincode`}
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
export default AddressRouting
