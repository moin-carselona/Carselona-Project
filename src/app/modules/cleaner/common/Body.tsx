import React from 'react'
import { memo } from "react";
const Body = ({ attendance, timeslots, noJobClassName, servicetype1ClassName, servicetype2ClassName, cleanerStat, handleJobDetailSubmit }: any) => {
    // console.log('timeslots', timeslots);
    // console.log('attendance body', attendance);
    // console.log('timeslots', timeslots.name);
    // console.log('attendance', attendance?.timeslot_data["06AM-07AM"]);
    // const filters = attendance?.timeslot_data?.filter((ele: any) => ele.timeslot_name === timeslots.name)
    // console.log('filters', filters);
    let availibity = 4
    // let trackAvailibilytySingle = 0
    // let trackAvailibilytyDouble = 0
    // console.log('availibity', availibity);
    // console.log('attendance', attendance.timeslot_data);
    // console.log('========================test block===========================')
    // console.log(attendance?.timeslot_data[timeslots.name][0]?.timeslot_name)
    // console.log(timeslots?.name)
    return (
        <>
            {
                attendance && attendance?.timeslot_data[timeslots?.name]?.length > 1 && attendance?.timeslot_data[timeslots?.name]?.length <= 4   && attendance?.timeslot_data[timeslots.name][0]?.timeslot_name == timeslots?.name && attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
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
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details?.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {
                attendance?.timeslot_data && attendance?.timeslot_data[timeslots?.name]?.length == 1 && attendance?.timeslot_data[timeslots.name][0]?.timeslot_name == timeslots?.name && attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
                    // console.log("moin hurrayn   ======================================================")
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    // console.log("moin hurrayn   ===============", availibity)
                    // console.log(timeslot.customer_data.society_details.name && timeslot.customer_data.society_details.name.split(" ")[0][0] + timeslot.customer_data.society_details.name.split(" ")[1][0])
                    return (
                        <>
                            {timeslot?.servicetype === 1 ? (
                                <div
                                    className={servicetype1ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details?.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {
                attendance?.timeslot_data && attendance?.timeslot_data[timeslots?.name]?.length >= 4 && attendance?.timeslot_data[timeslots.name][0]?.timeslot_name == timeslots?.name && attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
                    // console.log("moin hurrayn 444444444   ======================================================")
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    // console.log("moin hurrayn 44444   ===============", availibity)
                    // console.log(timeslot.customer_data.society_details.name && timeslot.customer_data.society_details.name.split(" ")[0][0] + timeslot.customer_data.society_details.name.split(" ")[1][0])
                    return (
                        <>
                            {timeslot?.servicetype === 1 ? (
                                <div
                                    className={servicetype1ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    onClick={() =>
                                        handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
                                    }
                                    style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
                                >
                                    {timeslot?.customer_data?.society_details?.name && timeslot?.customer_data?.society_details?.name.split(" ")[0][0]?.toUpperCase() + timeslot?.customer_data?.society_details?.name.split(" ")[1][0]?.toUpperCase() || 'IN'}
                                    {timeslot?.subscriptiondetails.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {
                availibity == 3 ? <>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ - 3
                    </div>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ - 3
                    </div>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ - 3
                    </div>
                </> : availibity == 2 ? <>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ - 2
                    </div>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ - 2
                    </div>
                </> : availibity == 1 ? <>
                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                        NJ - 1
                    </div>
                </> 
                // :availibity < 0 ? <>
                //     <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                //         NJ - ADV
                //     </div>
                // </> 
                
                : <></>


                // if (availibity == 1) {
                //     trackAvailibilytySingle = trackAvailibilytySingle + 1
                //     if (trackAvailibilytySingle == 1) {
                //             <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                //                 NJ2                                   </div>
                //     }
                // } else if (availibity == 2) {
                //     trackAvailibilytyDouble = trackAvailibilytyDouble + 1
                //     if (trackAvailibilytyDouble <= 2) {
                //             <>
                //                 <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                //                     NJ2                                       </div>
                //             </>
                //     }
                // }
                // else if (availibity == 3) {
                //     <>
                //         <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                //             NJ  3                              </div>
                //         <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                //             NJ3
                //         </div>
                //     </>
            }





            {/* ===============================================================================================different job ============================================================= */}
            {/* {
                attendance && attendance?.timeslot_data[timeslots?.name]?.length != 0 && attendance?.timeslot_data[timeslots.name][0].timeslot_name == timeslots.name && [1, 2, 3, 4].map((ele: any) => {
                    if (ele > attendance?.timeslot_data[timeslots.name].length) {
                        if (availibity == 1) {
                            trackAvailibilytySingle = trackAvailibilytySingle + 1
                            if (trackAvailibilytySingle == 1) {
                                return (
                                    <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                                        NJ2                                   </div>
                                )
                            }
                        } else if (availibity == 2) {
                            trackAvailibilytyDouble = trackAvailibilytyDouble + 1
                            if (trackAvailibilytyDouble <= 2) {
                                return (
                                    <>
                                        <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                                            NJ2                                       </div>
                                    </>
                                )
                            }
                        }
                        else if (availibity == 3) {
                            <>
                                <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                                    NJ  3                              </div>
                                <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
                                    NJ3
                                </div>
                            </>
                        }
                    }
                })
            } */}
        </>
        // <>
        //     {attendance.timeslot_data?.length >= 4 &&
        //         attendance.timeslot_data?.map((timeslot: any) => {
        //             return (
        //                 <>
        //                     {timeslot.timeslot_name == timeslots.name &&
        //                         <>
        //                             {timeslot.servicetype === 1 ? (
        //                                 <div
        //                                     className={servicetype1ClassName}
        //                                     onClick={() =>
        //                                         handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
        //                                     }
        //                                     style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
        //                                 >
        //                                     {timeslot.customer_data.society_details.name  || 'Individual'}
        //                                     {timeslot.subscriptiondetails.frequencyid === 1
        //                                         ? ' (A)'
        //                                         : timeslot.subscriptiondetails.frequencyid === 2
        //                                             ? ' (W)'
        //                                             : timeslot.subscriptiondetails.frequencyid === 3
        //                                                 ? ' (D)'
        //                                                 : ' '}
        //                                 </div>
        //                             ) : (
        //                                 <div
        //                                     className={servicetype2ClassName}
        //                                     onClick={() =>
        //                                         handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
        //                                     }
        //                                     style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
        //                                 >
        //                                     {timeslot.customer_data.society_details.name || 'Individual'}
        //                                     {timeslot.subscriptiondetails.frequencyid === 1
        //                                         ? ' (A)'
        //                                         : timeslot.subscriptiondetails.frequencyid === 2
        //                                             ? ' (W)'
        //                                             : timeslot.subscriptiondetails.frequencyid === 3
        //                                                 ? ' (D)'
        //                                                 : ' '}
        //                                 </div>
        //                             )}
        //                         </>
        //                     }
        //                 </>
        //             )
        //         })}
        //     {attendance.timeslot_data?.length === 3 && (
        //         <>
        //             {attendance.timeslot_data?.map((timeslot: any) => {
        //                 return (
        //                     <>
        //                         {
        //                             timeslot.timeslot_name == timeslots.name ?
        //                                 <>
        //                                     {timeslot.servicetype === 1 ? (
        //                                         <div
        //                                             className={servicetype1ClassName}
        //                                             onClick={() =>
        //                                                 handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
        //                                             }
        //                                             style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
        //                                         >
        //                                             {timeslot.customer_data.society_details.name || 'Individual'}
        //                                             {timeslot.subscriptiondetails.frequencyid === 1
        //                                                 ? ' (A)'
        //                                                 : timeslot.subscriptiondetails.frequencyid === 2
        //                                                     ? ' (W)'
        //                                                     : timeslot.subscriptiondetails.frequencyid === 3
        //                                                         ? ' (D)'
        //                                                         : ' '}
        //                                         </div>
        //                                     ) : (
        //                                         <div
        //                                             className={servicetype2ClassName}
        //                                             onClick={() =>
        //                                                 handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
        //                                             }
        //                                             style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
        //                                         >
        //                                             {timeslot.customer_data.society_details.name || 'Individual'}
        //                                             {timeslot.subscriptiondetails.frequencyid === 1
        //                                                 ? ' (A)'
        //                                                 : timeslot.subscriptiondetails.frequencyid === 2
        //                                                     ? ' (W)'
        //                                                     : timeslot.subscriptiondetails.frequencyid === 3
        //                                                         ? ' (D)'
        //                                                         : ' '}
        //                                         </div>
        //                                     )}
        //                                 </> : <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
        //                                     No Job 6-7
        //                                 </div>
        //                         }
        //                     </>
        //                 )
        //             })}
        //             {
        //                 <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
        //                     No Job 6-7
        //                 </div>
        //             }
        //         </>
        //     )}
        //     {attendance.timeslot_data?.length === 2 && (
        //         <>
        //             {attendance.timeslot_data?.map((timeslot: any) => {
        //                 return (
        //                     <>
        //                         {
        //                             timeslot.timeslot_name == timeslots.name && <>
        //                                 {timeslot.servicetype === 1 ? (
        //                                     <div
        //                                         className={servicetype1ClassName}
        //                                         onClick={() =>
        //                                             handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
        //                                         }
        //                                         style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
        //                                     >
        //                                         {timeslot.customer_data.society_details.name || 'Individual'}
        //                                         {timeslot.subscriptiondetails.frequencyid === 1
        //                                             ? ' (A)'
        //                                             : timeslot.subscriptiondetails.frequencyid === 2
        //                                                 ? ' (W)'
        //                                                 : timeslot.subscriptiondetails.frequencyid === 3
        //                                                     ? ' (D)'
        //                                                     : ' '}
        //                                     </div>
        //                                 ) : (
        //                                     <div
        //                                         className={servicetype2ClassName}
        //                                         onClick={() =>
        //                                             handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
        //                                         }
        //                                         style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
        //                                     >
        //                                         {timeslot.customer_data.society_details.name || 'Individual'}
        //                                         {timeslot.subscriptiondetails.frequencyid === 1
        //                                             ? ' (A)'
        //                                             : timeslot.subscriptiondetails.frequencyid === 2
        //                                                 ? ' (W)'
        //                                                 : timeslot.subscriptiondetails.frequencyid === 3
        //                                                     ? ' (D)'
        //                                                     : ' '}
        //                                     </div>
        //                                 )}
        //                             </>
        //                         }
        //                     </>
        //                 )
        //             })}
        //             {
        //                 <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
        //                     No Job 7-8
        //                 </div>
        //             }
        //             {
        //                 <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
        //                     No Job
        //                 </div>
        //             }
        //         </>
        //     )}
        //     {attendance.timeslot_data?.length === 1 && (
        //         <>
        //             {attendance.timeslot_data?.map((timeslot: any) => {
        //                 return (
        //                     <>
        //                         {
        //                             timeslot.timeslot_name == timeslots.name && <>
        //                                 {timeslot.servicetype === 1 ? (
        //                                     <div
        //                                         className={servicetype1ClassName}
        //                                         onClick={() =>
        //                                             handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
        //                                         }
        //                                         style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
        //                                     >
        //                                         {timeslot.customer_data.society_details.name || 'Individual'}
        //                                         {timeslot.subscriptiondetails.frequencyid === 1
        //                                             ? ' (A)'
        //                                             : timeslot.subscriptiondetails.frequencyid === 2
        //                                                 ? ' (W)'
        //                                                 : timeslot.subscriptiondetails.frequencyid === 3
        //                                                     ? ' (D)'
        //                                                     : ' '}
        //                                     </div>
        //                                 ) : (
        //                                     <div
        //                                         className={servicetype2ClassName}
        //                                         onClick={() =>
        //                                             handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
        //                                         }
        //                                         style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
        //                                     >
        //                                         {timeslot.customer_data.society_details.name || 'Individual'}
        //                                         {timeslot.subscriptiondetails.frequencyid === 1
        //                                             ? ' (A)'
        //                                             : timeslot.subscriptiondetails.frequencyid === 2
        //                                                 ? ' (W)'
        //                                                 : timeslot.subscriptiondetails.frequencyid === 3
        //                                                     ? ' (D)'
        //                                                     : ' '}
        //                                     </div>
        //                                 )}
        //                             </>
        //                         }
        //                     </>
        //                 )
        //             })}
        //             {
        //                 <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
        //                     No Job
        //                 </div>
        //             }
        //             {
        //                 <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
        //                     No Job
        //                 </div>
        //             }
        //             {
        //                 <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
        //                     No Job
        //                 </div>
        //             }
        //         </>
        //     )}
        // </>
    )
}
export default memo(Body)
// {/* =============================================here are some importants =============================================== */}
//             {/* {
//                 attendance?.timeslot_data[timeslots.name].length != 0 && attendance?.timeslot_data[timeslots.name][0].timeslot_name == timeslots.name && [1, 2, 3, 4].map((ele: any) => {
//                     if (ele > attendance?.timeslot_data[timeslots.name].length) {
//                         return (
//                             <div className={noJobClassName} style={{ cursor: ' not-allowed' }}>
//                                 No Job
//                             </div>
//                         )
//                     }
//                 })
//             } */}
//             {/* all important data are below for reuse dont delet below data  */}
//             {/* {
//                 attendance?.timeslot_data["07AM-08AM"].length != 0 && attendance?.timeslot_data["07AM-08AM"][0].timeslot_name == timeslots.name && attendance.timeslot_data["07AM-08AM"].map((timeslot: any) => {
//                     console.log('timeslot', timeslot);
//                     return (
//                         <>
//                             {timeslot.servicetype === 1 ? (
//                                 <div
//                                     className={servicetype1ClassName}
//                                     onClick={() =>
//                                         handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
//                                     }
//                                     style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
//                                 >
//                                     {timeslot.customer_data?.society_details?.name || 'Individual'}
//                                     {timeslot.subscriptiondetails.frequencyid === 1
//                                         ? ' (A)'
//                                         : timeslot.subscriptiondetails.frequencyid === 2
//                                             ? ' (W)'
//                                             : timeslot.subscriptiondetails.frequencyid === 3
//                                                 ? ' (D)'
//                                                 : ' '}
//                                 </div>
//                             ) : (
//                                 <div
//                                     className={servicetype2ClassName}
//                                     onClick={() =>
//                                         handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
//                                     }
//                                     style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
//                                 >
//                                     {timeslot.customer_data.society_details?.name || 'Individual'}
//                                     {timeslot.subscriptiondetails.frequencyid === 1
//                                         ? ' (A)'
//                                         : timeslot.subscriptiondetails.frequencyid === 2
//                                             ? ' (W)'
//                                             : timeslot.subscriptiondetails.frequencyid === 3
//                                                 ? ' (D)'
//                                                 : ' '}
//                                 </div>
//                             )}
//                         </>
//                     )
//                 })
//             }
//             {
//                 attendance?.timeslot_data["08AM-09AM"].length != 0 && attendance?.timeslot_data["08AM-09AM"][0].timeslot_name == timeslots.name && attendance.timeslot_data["08AM-09AM"].map((timeslot: any) => {
//                     console.log('timeslot', timeslot);
//                     return (
//                         <>
//                             {timeslot.servicetype === 1 ? (
//                                 <div
//                                     className={servicetype1ClassName}
//                                     onClick={() =>
//                                         handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
//                                     }
//                                     style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
//                                 >
//                                     {timeslot.customer_data.society_details.name || 'Individual'}
//                                     {timeslot.subscriptiondetails.frequencyid === 1
//                                         ? ' (A)'
//                                         : timeslot.subscriptiondetails.frequencyid === 2
//                                             ? ' (W)'
//                                             : timeslot.subscriptiondetails.frequencyid === 3
//                                                 ? ' (D)'
//                                                 : ' '}
//                                 </div>
//                             ) : (
//                                 <div
//                                     className={servicetype2ClassName}
//                                     onClick={() =>
//                                         handleJobDetailSubmit(cleanerStat?.cleaner_details?.id)
//                                     }
//                                     style={{ cursor: 'pointer', whiteSpace: 'pre-wrap' }}
//                                 >
//                                     {timeslot.customer_data.society_details.name || 'Individual'}
//                                     {timeslot.subscriptiondetails.frequencyid === 1
//                                         ? ' (A)'
//                                         : timeslot.subscriptiondetails.frequencyid === 2
//                                             ? ' (W)'
//                                             : timeslot.subscriptiondetails.frequencyid === 3
//                                                 ? ' (D)'
//                                                 : ' '}
//                                 </div>
//                             )}
//                         </>
//                     )
//                 })
//             } */}