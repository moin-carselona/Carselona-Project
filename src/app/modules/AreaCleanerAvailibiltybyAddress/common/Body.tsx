import React from 'react'
import { memo } from "react";
const Body = ({ attendance, timeslots, noJobClassName, servicetype1ClassName, servicetype2ClassName, cleanerStat, handleJobDetailSubmit }: any) => {
    let availibity = 4
    return (
        <>
            {
                attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    return (
                        <>
                            {timeslot?.servicetype === 1 ? (
                                <div
                                    className={servicetype1ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details?.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {/* previous code  */}
            {/* {
                attendance && attendance?.timeslot_data[timeslots?.name]?.length > 1 && attendance?.timeslot_data[timeslots?.name]?.length <= 4 && attendance?.timeslot_data[timeslots.name][0]?.timeslot_name == timeslots?.name && attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    // console.log(timeslot.customer_data.society_details.name && timeslot.customer_data.society_details.name.split(" ")[0][0] + timeslot.customer_data.society_details.name.split(" ")[1][0])
                    return (
                        <>
                            {timeslot?.servicetype === 1 ? (
                                <div
                                    className={servicetype1ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details?.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {
                attendance?.timeslot_data && attendance?.timeslot_data[timeslots?.name]?.length == 1 && attendance?.timeslot_data[timeslots.name][0]?.timeslot_name == timeslots?.name && attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    return (
                        <>
                            {timeslot?.servicetype === 1 ? (
                                <div
                                    className={servicetype1ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details?.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {
                attendance?.timeslot_data && attendance?.timeslot_data[timeslots?.name]?.length >= 4 && attendance?.timeslot_data[timeslots.name][0]?.timeslot_name == timeslots?.name && attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    return (
                        <>
                            {timeslot?.servicetype === 1 ? (
                                <div
                                    className={servicetype1ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details?.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            } */}
            {
                availibity == 3 ? <>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ
                    </div>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ
                    </div>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ
                    </div>
                </> : availibity == 2 ? <>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ
                    </div>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ
                    </div>
                </> : availibity == 1 ? <>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ
                    </div>
                </>
                    // :availibity < 0 ? <>
                    //     <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                    //         NJ - ADV
                    //     </div>
                    // </> 
                    : <></>
            }
        </>
    )
}
export default memo(Body)
