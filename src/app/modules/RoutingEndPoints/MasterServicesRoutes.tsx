import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import { ListViewProvider } from '../apps/user-management/users-list/core/ListViewProvider'
import CreditReasonsListMain from '../MASTERS/CreaditReasonsList/CreditReasonsListMain'
import FueltTypeListMain from '../MASTERS/FuelTypeList/FueltTypeListMain'
import JobSitesMain from '../MASTERS/JobsiteList/JobSitesMain'
import JobStatusMains from '../MASTERS/JobStatusList/JobStatusMains'
import JobTypesMains from '../MASTERS/JobTypeList/JobTypesMains'
import MasterOffersMainList from '../MASTERS/MasterOffersList/MasterOffersMainList'
import MasterReaonsMain from '../MASTERS/MasterReasonsList/MasterReaonsMain'
import MasterResourcesMains from '../MASTERS/MasterResourcesList/MasterResourcesMains'
import MasterTicketCategoryListMain from '../MASTERS/MasterTicketCategoryList/MasterTicketCategoryListMain'
import PackagesListMain from '../MASTERS/PackagesList/PackagesListMain'
import PointTableListMain from '../MASTERS/PointTableList/PointTableListMain'
import ProblemListMain from '../MASTERS/ProblemList/ProblemListMain'
import ProductsMains from '../MASTERS/ProductsList/ProductsMains'


import ServicePricesMain from '../MASTERS/Service Price/ServicePricesMain'
import ServicesMain from '../MASTERS/Services/ServicesMain'
import SubProblemsMain from '../MASTERS/SubProblemList/SubProblemsMain'
import TrainingtopicsMain from '../MASTERS/TrainingTopicsList/TrainingtopicsMain'
import TshirtListMain from '../MASTERS/TshirtList/TshirtListMain'
import UserListMain from '../MASTERS/UserTypeList/UserListMain'
import VehicleBrandMain from '../MASTERS/VehicleBrandList/VehicleBrandMain'
import VehicleCateforyListMain from '../MASTERS/VehicleCategoryList/VehicleCateforyListMain'
import VahicleModelMain from '../MASTERS/VehicleModelList/VahicleModelMain'
import VehicleTypeListMain from '../MASTERS/VehicleTypeList/VehicleTypeListMain'

const MasterServicesRoutes = () => {
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
                    // onChange={(e) => setDate(e.target.value)}
                />
                <button
                    className='btn btn-sm btn-primary cursor-pointer'
                    type='button'
                    data-bs-toggle='tooltip'
                    title='Search'
                    // onClick={handleClick}
                >Search</button> */}
            </div>
            {/* <div className="d-flex align-items-center justify-content-between mt-4 stat-links">
                {GET_ALL_STATS().map((item: any) => {
                    return (
                        <NavLink className="stats-link" key={item.value} to={`${item.url}`}>{item.label}</NavLink>
                    )
                })}
            </div> */}

            {/* champ-permanent-replacement */}
            <Routes>
                <Route element={<Outlet />}>
                    <Route
                        path={`/service-price`}
                        element={
                            <>
                                <PageTitle>Service Price List</PageTitle>
                                <ServicePricesMain></ServicePricesMain>
                            </>
                        }
                    />
                </Route>
                {/* services routes here*/}
                <Route element={<Outlet />}>
                    <Route
                        path={`/services`}
                        element={
                            <>
                                <PageTitle>Services List </PageTitle>
                                <ListViewProvider>
                                    <ServicesMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* champ-permanent-replacement */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/products`}
                        element={
                            <>
                                <PageTitle>Products List </PageTitle>
                                <ListViewProvider>
                                    <ProductsMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* champ-permanent-replacement */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/packages`}
                        element={
                            <>
                                <PageTitle>Packages List</PageTitle>
                                <ListViewProvider>
                                    <PackagesListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Cleaner List Here */}
                {/* Cleaner List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/fueltype`}
                        element={
                            <>
                                <PageTitle>Fuel Type List</PageTitle>
                                <ListViewProvider>
                                    <FueltTypeListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Cleaner List Here */}
                {/* vehicle-type List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/vehicle-type`}
                        element={
                            <>
                                <PageTitle>vehicle-type List</PageTitle>
                                <ListViewProvider>
                                    <VehicleTypeListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* vehicle-type List Here */}
                {/* vehicle-category List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/vehicle-category`}
                        element={
                            <>
                                <PageTitle>Vehicle Categorye List</PageTitle>
                                <ListViewProvider>
                                    <VehicleCateforyListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* vehicle-category List Here */}
                {/* vehicle-brand List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/vehicle-brand`}
                        element={
                            <>
                                <PageTitle>Vehicle Brand List</PageTitle>
                                <ListViewProvider>
                                    <VehicleBrandMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* vehicle-brand List Here */}
                {/* vehicle-model List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/vehicle-model`}
                        element={
                            <>
                                <PageTitle>Vehicle Model List</PageTitle>
                                <ListViewProvider>
                                    <VahicleModelMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* vehicle-model List Here */}
                {/* problem List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/problem`}
                        element={
                            <>
                                <PageTitle>Problem List</PageTitle>
                                <ListViewProvider>
                                    <ProblemListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* problem List Here */}
                {/* sub-problem List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/sub-problem`}
                        element={
                            <>
                                <PageTitle>Sub Problem List</PageTitle>
                                <ListViewProvider>
                                    <SubProblemsMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* sub-problem List Here */}
                {/* t-shirt List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/t-shirt`}
                        element={
                            <>
                                <PageTitle>T-Shirts List</PageTitle>
                                <ListViewProvider>
                                    <TshirtListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* t-shirt List Here */}
                {/* training-topics List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/training-topics`}
                        element={
                            <>
                                <PageTitle>Training Topics List</PageTitle>
                                <ListViewProvider>
                                    <TrainingtopicsMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* training-topics List Here */}
                {/* job-sites List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/job-sites`}
                        element={
                            <>
                                <PageTitle>Job Sites List</PageTitle>
                                <ListViewProvider>
                                    <JobSitesMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* job-sites List Here */}
                {/* job-type List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/job-type`}
                        element={
                            <>
                                <PageTitle>Job Types List</PageTitle>
                                <ListViewProvider>
                                    <JobTypesMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* job-type List Here */}
                {/* user-type List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/user-type`}
                        element={
                            <>
                                <PageTitle>User Types List</PageTitle>
                                <ListViewProvider>
                                    <UserListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* user-type List Here */}
                {/* user-type List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/points-table`}
                        element={
                            <>
                                <PageTitle>Point Table List</PageTitle>
                                <ListViewProvider>
                                    <PointTableListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* user-type List Here */}
                {/* credit-reasons List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/credit-reasons`}
                        element={
                            <>
                                <PageTitle>Credit Reasons List</PageTitle>
                                <ListViewProvider>
                                    <CreditReasonsListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* credit-reasons List Here */}
                {/* job-status List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/job-status`}
                        element={
                            <>
                                <PageTitle>Job Status List</PageTitle>
                                <ListViewProvider>
                                    <JobStatusMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* job-status List Here */}
                {/* master-reasons List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/master-reasons`}
                        element={
                            <>
                                <PageTitle>Master Reasons List</PageTitle>
                                <ListViewProvider>
                                    <MasterReaonsMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* master-reasons List Here */}
                {/* master-ticket-category List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/master-ticket-category`}
                        element={
                            <>
                                <PageTitle>Master Tickets List</PageTitle>
                                <ListViewProvider>
                                    <MasterTicketCategoryListMain />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* master-ticket-category List Here */}
                {/* master-resources List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/master-resources`}
                        element={
                            <>
                                <PageTitle>Master Resources List</PageTitle>
                                <ListViewProvider>
                                    <MasterResourcesMains />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* master-resources List Here */}
                {/* master-offers List Here */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/master-offers`}
                        element={
                            <>
                                <PageTitle>Master Offers List</PageTitle>
                                <ListViewProvider>
                                    <MasterOffersMainList />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* master-offers List Here */}




            </Routes>
        </div>
    )
}
export default MasterServicesRoutes
