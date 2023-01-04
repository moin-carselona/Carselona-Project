import React from 'react'
import { memo } from "react";
import SweetDIalogDailyJOb from '../../consts/SweetAlert/SweetDIalogDailyJOb';
import SentenceShorter from '../Old_JobList/Components/SentenceShorter';
const Body = ({hadleInfoTagshowBTN,  attendance, timeslots, trackDataNull, handleJobDetailSubmit, cleaner_details, Max, noJobClassName, servicetype1ClassName, servicetype2ClassName, attendanceids, handleCleanerDeatils, HandleJobAssignCleaner }: any) => {
    const servicetype1ClassBreaker =
        'badge badge-secondary fw-bolder mb-1 rounded d-flex justify-content-center text-align'
    const servicetype1ClassCleaner =
        'badge badge-light-primary fw-bolder rounded mb-1 d-flex justify-content-center flex-column'
    const servicetype1ClassNamename =
        'badge badge- fw-bolder rounded d-flex justify-content-center'
    const servicetype1ClassTag =
        'badge badge- fw-bolder rounded mb-1 d-flex justify-content-center'
    const localKey = JSON.parse(localStorage.getItem("API") || "0")
    const userid = JSON.parse(localStorage.getItem("user") || "0")
    const [cleanerid, setID] = React.useState(0)
    const [attendancestatus, setAttendancestatus] = React.useState(0)
    const handleChangeAttendance = (cleanerid: number, attendancestatus: number) => {
        setAttendancestatus(attendancestatus)
        setID(cleanerid)
    }
    let availibity = 4
    return (
        <>
            {<>
                {
                    attendance?.timeslot_data[timeslots?.name] && <div >
                        <div
                            onClick={(e) => handleChangeAttendance(cleaner_details?.id, Math.random())}
                            className={servicetype1ClassCleaner }
                            
                        >
                            <span className='me-1'>{cleaner_details?.first_name ? cleaner_details?.first_name : "No first name"}</span>
                            <span>{cleaner_details?.last_name && cleaner_details?.last_name}</span>
                            <SweetDIalogDailyJOb cleaner_details={cleaner_details} confirm="Yes" cancel="No" localKey={localKey} attendancestatus={attendancestatus} userids={userid} cleanerid={cleanerid} attendanceids={attendanceids} ></SweetDIalogDailyJOb>
                        </div>
                        <div
                            className={servicetype1ClassNamename}
                            style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                        >
                            <span className='me-1 badge badge-light-success fs-8 fw-bold'>  <SentenceShorter sentence={cleaner_details?.supervisors[0]?.supervisorcleaner?.first_name + cleaner_details?.supervisors[0]?.supervisorcleaner?.last_name} ></SentenceShorter> </span>  <span className='me-1 badge badge-light-success fs-8 fw-bold'>
                                {cleaner_details?.distance}
                            </span>
                        </div>
                        
                        <div
                            className={servicetype1ClassTag}
                            style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                        >
                            <span className='me-4 badge badge-light-danger fs-8 fw-bold'  onClick={(e) => hadleInfoTagshowBTN(cleaner_details?.private_tag,"Private Tag")} > PVT</span>
                            <span className='me-2 badge badge-light-warning fs-8 fw-bold' onClick={(e) => hadleInfoTagshowBTN(cleaner_details?.public_tag, "Public Tag")}> PUB </span>
                        </div>
                        {/* public_tag */}
                        {/* <div
                            className={servicetype1ClassBreaker}
                        >
                            ......................................
                        </div> */}
                        <hr style={{width:"100%"}} />
                    </div>
                }
            </>}
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
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)' : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)' : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            )}
                        </>
                    )
                })
            }
            {/* previous code   */}
            {/* {
                attendance && attendance?.timeslot_data[timeslots?.name]?.length > 1 && attendance?.timeslot_data[timeslots?.name]?.length <= 4 && attendance.timeslot_data[timeslots.name]?.map((timeslot: any) => {
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
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)' : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)' : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
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
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)' : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)' : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
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
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {cleaner_details?.name} "moin"
                                </div>
                            </>}
                            {timeslot?.servicetype === 1 ? (
                                <div
                                    className={servicetype1ClassName}
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)' : timeslot?.subscriptiondetails?.frequencyid === 4
                                                    ? ' (OD)'
                                                    : ' '}
                                </div>
                            ) : (
                                <div
                                    className={servicetype2ClassName}
                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                    onClick={() =>
                                        handleJobDetailSubmit(timeslot)
                                    }
                                >
                                    {'IN'}
                                    {timeslot?.subscriptiondetails?.frequencyid === 1
                                        ? ' (A)'
                                        : timeslot?.subscriptiondetails?.frequencyid === 2
                                            ? ' (W)'
                                            : timeslot?.subscriptiondetails?.frequencyid === 3
                                                ? ' (D)' : timeslot?.subscriptiondetails?.frequencyid === 4
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
                    : <></>
            }
            {
                attendance?.timeslot_data[timeslots?.name]?.length <= 0 && <>
                    <div
                        className={noJobClassName + "bg-secondary text-center"}
                        style={{ color: "black", padding: "5px", textAlign: "center" }}
                    >
                        NJ
                    </div>
                    <div
                        className={noJobClassName + "bg-secondary text-center"}
                        style={{ color: "black", padding: "5px", textAlign: "center" }}
                    >
                        NJ
                    </div>
                    <div
                        className={noJobClassName + "bg-secondary text-center"}
                        style={{ color: "black", padding: "5px", textAlign: "center" }}
                    >
                        NJ
                    </div>
                    <div
                        className={noJobClassName + "bg-secondary text-center"}
                        style={{ color: "black", padding: "5px", textAlign: "center" }}
                    >
                        NJ
                    </div>
                </>
            }
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
