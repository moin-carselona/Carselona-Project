import React from 'react'
import { memo } from "react";
import SweetDIalogDailyJOb from '../../consts/SweetAlert/SweetDIalogDailyJOb';
const Body = ({ attendance, timeslots, trackDataNull, cleaner_details, Max, noJobClassName, servicetype1ClassName, servicetype2ClassName, attendanceids, handleCleanerDeatils, HandleJobAssignCleaner }: any) => {
    // console.log('attendance', attendance);
    // console.log('timeslots', timeslots);
    // console.log('attendance', attendance);
    // console.log('cleaner_details', cleaner_details);
    // console.log('trackDataNull', trackDataNull);
    // console.log('Max', Max?.length);
    const localKey = JSON.parse(localStorage.getItem("API") || "0")
    const userid = JSON.parse(localStorage.getItem("user") || "0")
    const [cleanerid, setID] = React.useState(0)
    const [attendancestatus, setAttendancestatus] = React.useState(0)
    const handleChangeAttendance = (cleanerid: number, attendancestatus: number) => {
        setAttendancestatus(attendancestatus)
        setID(cleanerid)
    }
    // console.log('attendance daliy', attendance);
    let availibity = 4
    // attendance?.timeslot_data[timeslots?.name]?.length > 1 && attendance?.timeslot_data[timeslots?.name]?.length <= 4 && attendance?.timeslot_data[timeslots.name][0]?.timeslot_name == timeslots?.name &&
    return (
        <>
            {<>
                {
                    attendance?.timeslot_data[timeslots?.name] && <>
                        {/* ASSIGN BTN HERE  */}
                        <div
                            onClick={(e) => handleChangeAttendance(cleaner_details?.id, Math.random())}
                            className={servicetype1ClassName + "bg-secondary text-center"}
                            style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center" }}
                        >
                            {cleaner_details?.first_name ? cleaner_details?.first_name : "No Name"} <br /> {cleaner_details?.distance}
                            <SweetDIalogDailyJOb cleaner_details={cleaner_details} confirm="Yes"  cancel="No" localKey={localKey} attendancestatus={attendancestatus} userids = {userid} cleanerid = {cleanerid} attendanceids={attendanceids} ></SweetDIalogDailyJOb>
                        </div>
                    </>
                }
            </>}
            {
                attendance && attendance?.timeslot_data[timeslots?.name]?.length > 1 && attendance?.timeslot_data[timeslots?.name]?.length <= 4 && attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
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
                                    style={{ whiteSpace: 'pre-wrap' }}
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    style={{ whiteSpace: 'pre-wrap' }}
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {
                attendance && attendance?.timeslot_data[timeslots?.name]?.length == 1 && attendance.timeslot_data[timeslots.name]?.map((timeslot: any, index: number) => {
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
                                    style={{ whiteSpace: 'pre-wrap' }}
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    style={{ whiteSpace: 'pre-wrap' }}
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {
                attendance?.timeslot_data && attendance?.timeslot_data[timeslots?.name]?.length >= 4 && attendance.timeslot_data[timeslots?.name]?.map((timeslot: any) => {
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    return (
                        <>
                            {<>
                                <div
                                    className={servicetype1ClassName}
                                    style={{ whiteSpace: 'pre-wrap' }}
                                >
                                    {cleaner_details?.name} "moin"
                                </div>
                            </>}
                            {timeslot?.servicetype === 1 ? (
                                <div
                                    className={servicetype1ClassName}
                                    style={{ whiteSpace: 'pre-wrap' }}
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)'
                                                : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    style={{ whiteSpace: 'pre-wrap' }}
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
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
                    : <></>
            }
            {
                attendance?.timeslot_data[timeslots?.name]?.length <= 0 && <>
                    <div
                        className={noJobClassName + "bg-secondary text-center"}
                        style={{ color: "black", padding: "5px", textAlign: "center" }}
                    >
                        NJ-1
                    </div>
                    <div
                        className={noJobClassName + "bg-secondary text-center"}
                        style={{ color: "black", padding: "5px", textAlign: "center" }}
                    >
                        NJ-1
                    </div>
                    <div
                        className={noJobClassName + "bg-secondary text-center"}
                        style={{ color: "black", padding: "5px", textAlign: "center" }}
                    >
                        NJ-1
                    </div>
                    <div
                        className={noJobClassName + "bg-secondary text-center"}
                        style={{ color: "black", padding: "5px", textAlign: "center" }}
                    >
                        NJ-1
                    </div>
                </>
            }
            {/* {
                attendance?.timeslot_data[timeslots?.name]?.length == 0 && Max?.map((timeslot: any, index: number) => {
                    if (index > trackDataNull) return (
                        <>
                            <div
                                className={noJobClassName + "bg-secondary text-center"}
                                style={{ color: "black", padding: "5px", textAlign: "center" }}
                            >
                                {cleaner_details?.first_name ? cleaner_details?.first_name : "No Name"}
                            </div>
                        </>
                    )
                })
            } */}
            {/* SEE DETAILS BTN  */}
            {
                <>
                    <div
                        className={noJobClassName + "bg-seondary text-center"}
                        onClick={() =>
                            handleCleanerDeatils(attendance?.timeslot_data)
                        }
                        style={{ cursor: "pointer", color: "white", padding: "5px", textAlign: "center", backgroundColor: "#519ff7" }}
                    >
                        More......
                    </div>
                </>
            }
        </>
    )
}
export default memo(Body)
