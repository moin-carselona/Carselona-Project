import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { PageTitle } from "../../../_metronic/layout/core";
import ActiveSubscriptionsComponent from "./statsComponents/ActiveSubscriptionsComponent";
import InactiveSubscriptionsComponent from "./statsComponents/InactiveSubscriptionsComponent";
import UpcomingSubscriptionsComponent from "./statsComponents/UpcomingSubscriptionComponent";

const StatsPage = () => {
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
    const [statsData, setStatsData] = useState(Object);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const formData = new FormData();
        formData.append("startDate", date);
        axios.post("https://adminapi.carselonadaily.com/api/admin/getCustomerStats", formData)
            .then(response => {
                setLoading(false);
                setStatsData(response.data.data[0])
            })
            .catch(error => {
                setLoading(false);
                console.log(error)
            })
    }, [])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value)
    }

    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center h-75 flex-column">
                <div className="spinner-border mr-15" role="status">
                </div>
                <h4 className="fw-bold">Loading...</h4>
            </div>
        )
    }
    
    return (
        <>
            <div>
                <div className="date-input d-flex col-6">
                    <input
                        className='form-control form-control-lg form-control-solid bg-white'
                        type="date"
                        value={date}
                        onChange={handleChange}
                    />
                    <button className="btn btn-warning">Search</button>
                </div>
            </div>
            
            <div className="row mt-2">
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Active Subscriptions - {statsData && statsData.activeSubscriptions && statsData.activeSubscriptions.length}</h6>
                    <NavLink to="/apps/stats/customers">View</NavLink>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Same Day Started Subscriptions - {statsData && statsData.sameStartDateSubscriptions && statsData.sameStartDateSubscriptions.length}</h6>
                    <NavLink to="/apps/stats/same-day-subscriptions">View</NavLink>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Inactive Subscriptions - {statsData && statsData.inactiveSubscriptions && statsData.inactiveSubscriptions.length}</h6>
                    <NavLink to="/apps/stats/inactive-subscriptions">View</NavLink>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Pause Subscriptions - {statsData && statsData.pauseSubscriptions && statsData.pauseSubscriptions.length}</h6>
                    <NavLink to="/apps/stats/pause-subscriptions">View</NavLink>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Upcoming Subscriptions - {statsData && statsData.upcomingSubscriptions && statsData.upcomingSubscriptions.length}</h6>
                    <NavLink to="/apps/stats/upcoming-subscriptions">View</NavLink>
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>New Vehicle Onboard - {statsData && statsData.newVehicleOnboards && statsData.newVehicleOnboards.length}</h6>
                    <NavLink to="/apps/stats/new-vehicle">View</NavLink>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Renewed Subscriptions - {statsData && statsData.renewedSubscription && statsData.renewedSubscription.length}</h6>
                    <NavLink to="/apps/stats/renewed">View</NavLink>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Reactivated Subscriptions - {statsData && statsData.reactivateSubscription && statsData.reactivateSubscription.length}</h6>
                    <NavLink to="/apps/stats/reactivated">View</NavLink>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Future Pause Subscriptions - {statsData && statsData.futurePauseSubscriptions && statsData.futurePauseSubscriptions.length}</h6>
                    <NavLink to="/apps/stats/future-pause">View</NavLink>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center bg-white m-2 col-3 p-4">
                    <h6>Future Inactive Subscriptions - {statsData && statsData.futureInactiveSubscriptions && statsData.futureInactiveSubscriptions.length}</h6>
                    <NavLink to="/apps/stats/future-inactive">View</NavLink>
                </div>
            </div>
            <Routes>
                <Route element={<Outlet />}>
                    <Route path={`/customers`} element={<>
                        <PageTitle>Active Subscriptions</PageTitle>
                        <ActiveSubscriptionsComponent statsData={statsData && statsData.activeSubscriptions} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/same-day-subscriptions`} element={<>
                        <PageTitle>Same Day Started Subscriptions</PageTitle>
                        <ActiveSubscriptionsComponent statsData={statsData && statsData.sameStartDateSubscriptions} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/inactive-subscriptions`} element={<>
                        <PageTitle>Inactive Subscriptions</PageTitle>
                        <InactiveSubscriptionsComponent statsData={statsData && statsData.inactiveSubscriptions} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/pause-subscriptions`} element={<>
                        <PageTitle>Pause Subscriptions</PageTitle>
                        <InactiveSubscriptionsComponent statsData={statsData && statsData.pauseSubscriptions} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/upcoming-subscriptions`} element={<>
                        <PageTitle>Upcoming Subscriptions</PageTitle>
                        <UpcomingSubscriptionsComponent statsData={statsData && statsData.upcomingSubscriptions} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/new-vehicle`} element={<>
                        <PageTitle>New Vehicle Onboard</PageTitle>
                        <UpcomingSubscriptionsComponent statsData={statsData && statsData.newVehicleOnboards} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/renewed`} element={<>
                        <PageTitle>Renewed Subscription</PageTitle>
                        <UpcomingSubscriptionsComponent statsData={statsData && statsData.renewedSubscription} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/reactivated`} element={<>
                        <PageTitle>Reactivated Subscription</PageTitle>
                        <UpcomingSubscriptionsComponent statsData={statsData && statsData.reactivateSubscription} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/future-pause`} element={<>
                        <PageTitle>Future Pause</PageTitle>
                        <UpcomingSubscriptionsComponent statsData={statsData && statsData.futurePauseSubscriptions} />
                    </>} />
                </Route>
                <Route element={<Outlet />}>
                    <Route path={`/future-inactive`} element={<>
                        <PageTitle>Future Inactive</PageTitle>
                        <UpcomingSubscriptionsComponent statsData={statsData && statsData.futureInactiveSubscriptions} />
                    </>} />
                </Route>
            </Routes>
        </>
    )
}

export default StatsPage;