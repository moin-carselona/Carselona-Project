import React from 'react'
import { memo } from "react";
import { useSelector } from 'react-redux';
const Body = ({ attendance, timeslots, jobID, noJobClassName, dateChangeClassNameserviceType1, dateChangeClassNameserviceType2, HightListDateChange, servicetype1ClassName, servicetype2ClassName, cleanerStat, handleJobDetailSubmit, handlDateChangeAssign, timingSlotid, subscriptionStatus, localKey, indexID, randomValue, toggle, trackIDAssigningCanceled }: any) => {
    const CheckedAssining = useSelector((store: any) => store?.DailyReAssignments?.trackIDAssigning)
    let availibity = 4
    return (
        <>
            {
                attendance.timeslot_data[timeslots.name]?.map((timeslot: any, childIndexID: number) => {
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    return (
                        <>
                            {
                                timeslot?.id === +jobID ?
                                    <>
                                        {timeslot?.servicetype === 1 ? (
                                            <div
                                                className={HightListDateChange}
                                                onClick={() =>
                                                    handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                className={HightListDateChange}
                                                onClick={() =>
                                                    handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                    :
                                    <>
                                        {timeslot?.date_changed_from && timeslot?.date_changed_from != timeslot?.attendencedate ?
                                            <>
                                                {timeslot?.servicetype === 1 ? (
                                                    <div
                                                        className={dateChangeClassNameserviceType1}
                                                        onClick={() =>
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                        className={dateChangeClassNameserviceType2}
                                                        onClick={() =>
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                            : timeslot?.date_changed_from !== "" && timeslot?.date_changed_from === timeslot?.attendencedate ?
                                                <>
                                                    {timeslot?.servicetype === 1 ? (
                                                        <div
                                                            className={servicetype1ClassName}
                                                            onClick={() =>
                                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                :
                                                <>
                                                    {timeslot?.servicetype === 1 ? (
                                                        <div
                                                            className={servicetype1ClassName}
                                                            onClick={() =>
                                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                        }
                                    </>
                            }
                        </>
                    )
                })
            }



            {/* previoues  */}
            {/* {
                attendance && attendance?.timeslot_data[timeslots?.name]?.length > 1 && attendance?.timeslot_data[timeslots?.name]?.length <= 4 && attendance?.timeslot_data[timeslots.name][0]?.timeslot_name == timeslots?.name && attendance.timeslot_data[timeslots.name]?.map((timeslot: any, childIndexID: number) => {
                    if (timeslot?.servicetype == 1) {
                        availibity = availibity - 1
                    } else {
                        availibity = availibity - 2
                    }
                    return (
                        <>
                            {
                                timeslot?.id === +jobID ?
                                    <>
                                        {timeslot?.servicetype === 1 ? (
                                            <div
                                                className={HightListDateChange}
                                                onClick={() =>
                                                    handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                className={HightListDateChange}
                                                onClick={() =>
                                                    handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                    :
                                    <>
                                        {timeslot?.date_changed_from && timeslot?.date_changed_from != timeslot?.attendencedate ?
                                            <>
                                                {timeslot?.servicetype === 1 ? (
                                                    <div
                                                        className={dateChangeClassNameserviceType1}
                                                        onClick={() =>
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                        className={dateChangeClassNameserviceType2}
                                                        onClick={() =>
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                            : timeslot?.date_changed_from !== "" && timeslot?.date_changed_from === timeslot?.attendencedate ?
                                                <>
                                                    {timeslot?.servicetype === 1 ? (
                                                        <div
                                                            className={servicetype1ClassName}
                                                            onClick={() =>
                                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                :
                                                <>
                                                    {timeslot?.servicetype === 1 ? (
                                                        <div
                                                            className={servicetype1ClassName}
                                                            onClick={() =>
                                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                        }
                                    </>
                            }
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
                            {
                                timeslot?.id === +jobID ? <>
                                    {timeslot?.servicetype === 1 ? (
                                        <div
                                            className={HightListDateChange}
                                            onClick={() =>
                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                            className={HightListDateChange}
                                            onClick={() =>
                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                </> : <>
                                    {timeslot?.date_changed_from && timeslot?.date_changed_from != timeslot?.attendencedate ?
                                        <>
                                            {timeslot?.servicetype === 1 ? (
                                                <div
                                                    className={dateChangeClassNameserviceType1}
                                                    onClick={() =>
                                                        handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                    className={dateChangeClassNameserviceType2}
                                                    onClick={() =>
                                                        handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                        : timeslot?.date_changed_from !== "" && timeslot?.date_changed_from === timeslot?.attendencedate ?
                                            <>
                                                {timeslot?.servicetype === 1 ? (
                                                    <div
                                                        className={servicetype1ClassName}
                                                        onClick={() =>
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                            </> :
                                            <>
                                                {timeslot?.servicetype === 1 ? (
                                                    <div
                                                        className={servicetype1ClassName}
                                                        onClick={() =>
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                    }
                                </>
                            }
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
                            {
                                timeslot?.id === +jobID ? <>
                                    {timeslot?.servicetype === 1 ? (
                                        <div
                                            className={HightListDateChange}
                                            onClick={() =>
                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                            className={HightListDateChange}
                                            onClick={() =>
                                                handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                </> : <>
                                    {timeslot?.date_changed_from && timeslot?.date_changed_from != timeslot?.attendencedate ? <>
                                        {timeslot?.servicetype === 1 ? (
                                            <div
                                                className={dateChangeClassNameserviceType1}
                                                onClick={() =>
                                                    handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                className={dateChangeClassNameserviceType2}
                                                onClick={() =>
                                                    handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                        : timeslot?.date_changed_from !== "" && timeslot?.date_changed_from === timeslot?.attendencedate ? <>
                                            {timeslot?.servicetype === 1 ? (
                                                <div
                                                    className={servicetype1ClassName}
                                                    onClick={() =>
                                                        handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                        handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                        </> :
                                            <>
                                                {timeslot?.servicetype === 1 ? (
                                                    <div
                                                        className={servicetype1ClassName}
                                                        onClick={() =>
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                                            handleJobDetailSubmit(timeslot, timeslots?.name, timeslot?.id,)
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
                                    }
                                </>
                            }
                        </>
                    )
                })
            } */}
            {
                availibity == 3 ? <>
                    <div className={noJobClassName} onClick={() => handlDateChangeAssign(indexID + 1, attendance.cleanerid, timeslots, attendance.date)} style={{ cursor: 'pointer', background: CheckedAssining === indexID + 1 ? "yellow" : randomValue === indexID + 1 ? "yellow" : "", color: CheckedAssining === indexID + 1 ? "white" : randomValue === indexID + 1 ? "black" : "blue" }}>
                        {trackIDAssigningCanceled === indexID + 1 ? "CANCELED" : CheckedAssining === indexID + 1 ? "ASSIGNED" : randomValue == indexID + 1 ? "ASSIGNING...." : "NJ"}
                    </div>
                    <div className={noJobClassName} onClick={() => handlDateChangeAssign(indexID + 2, attendance.cleanerid, timeslots, attendance.date)} style={{ cursor: 'pointer', background: CheckedAssining === indexID + 2 ? "yellow" : randomValue === indexID + 2 ? "yellow" : "", color: CheckedAssining === indexID + 2 ? "white" : randomValue === indexID + 2 ? "black" : "blue" }}>
                        {trackIDAssigningCanceled === indexID + 2 ? "CANCELED" : CheckedAssining === indexID + 2 ? "ASSIGNED" : randomValue == indexID + 2 ? "ASSIGNING...." : "NJ"}
                    </div>
                    <div className={noJobClassName} onClick={() => handlDateChangeAssign(indexID + 3, attendance.cleanerid, timeslots, attendance.date)} style={{ cursor: 'pointer', background: CheckedAssining === indexID + 3 ? "yellow" : randomValue === indexID + 3 ? "yellow" : "", color: CheckedAssining === indexID + 3 ? "black" : randomValue === indexID + 3 ? "black" : "blue" }}>
                        {trackIDAssigningCanceled === indexID + 3 ? "CANCELED" : CheckedAssining === indexID + 3 ? "ASSIGNED" : randomValue == indexID + 3 ? "ASSIGNING...." : "NJ"}
                    </div>
                </> : availibity == 2 ? <>
                    <div className={noJobClassName} onClick={() => handlDateChangeAssign(indexID + 4, attendance.cleanerid, timeslots, attendance.date)} style={{ cursor: 'pointer', background: CheckedAssining === indexID + 4 ? "yellow" : randomValue === indexID + 4 ? "yellow" : "", color: CheckedAssining === indexID + 4 ? "black" : randomValue === indexID + 4 ? "black" : "blue" }}>
                        {trackIDAssigningCanceled === indexID + 4 ? "CANCELED" : CheckedAssining === indexID + 4 ? "ASSIGNED" : randomValue == indexID + 4 ? "ASSIGNING...." : "NJ"}
                    </div>
                    <div className={noJobClassName} onClick={() => handlDateChangeAssign(indexID + 5, attendance.cleanerid, timeslots, attendance.date)} style={{ cursor: 'pointer', background: CheckedAssining === indexID + 5 ? "yellow" : randomValue === indexID + 5 ? "yellow" : "", color: CheckedAssining === indexID + 5 ? "black" : randomValue === indexID + 5 ? "black" : "blue" }}>
                        {trackIDAssigningCanceled === indexID + 5 ? "CANCELED" : CheckedAssining === indexID + 5 ? "ASSIGNED" : randomValue == indexID + 5 ? "ASSIGNING...." : "NJ"}
                    </div>
                </> : availibity == 1 ? <>
                    <div className={noJobClassName} onClick={() => handlDateChangeAssign(indexID + 6, attendance.cleanerid, timeslots, attendance.date)} style={{ cursor: 'pointer', background: CheckedAssining === indexID + 6 ? "yellow" : randomValue === indexID + 6 ? "yellow" : "", color: CheckedAssining === indexID + 6 ? "black" : randomValue === indexID + 6 ? "black" : "blue" }}>
                        {trackIDAssigningCanceled === indexID + 6 ? "CANCELED" : CheckedAssining === indexID + 6 ? "ASSIGNED" : randomValue == indexID + 6 ? "ASSIGNING...." : "NJ"}
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
{/* <SweetDateChangeAssignment confirm="Yes" cancel="No" localKey={localKey} subscriptionStatus={subscriptionStatus} cleanerid={attendance?.cleanerid} cleanerTimeSlotid = { timeslots.name} cleanerDateSlotID = { attendance?.date} attendaceids={jobID}  ></SweetDateChangeAssignment> */ }