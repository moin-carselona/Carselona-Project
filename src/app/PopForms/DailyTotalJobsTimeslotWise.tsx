import React from 'react'
const DailyTotalJobsTimeslotWise = ({ TimseSlotsData }: any) => {
    // console.log('TimseSlotsData', TimseSlotsData);
    let TimeSlotarr = Object.keys(TimseSlotsData)
    // console.log('TimeSlotarr', TimeSlotarr);
    const servicetype1ClassName =
        'badge badge-light-success fw-bolder mb-2 rounded d-flex justify-content-center text-center'
    const servicetype2ClassName =
        'badge badge-light-danger fw-bolder mb-2 rounded d-flex justify-content-center text-center'
    const noJobClassName =
        'badge badge-light-info fw-bolder mb-2 rounded d-flex justify-content-center text-center'
    return (
        <>
            <tbody className='p-5 me-3' >
                {
                    TimeSlotarr?.map((timing: any, index: number) => {
                        // console.log('timing', timing);
                        return (
                            <>
                                <tr className="   mb-5  me-5" >
                                    <>
                                        <td style={{ maxWidth: '230px', width: '130px' }} className=" me-7"  >
                                            <div
                                                className='bg-secondary p-2 text-center rounded text-black'
                                                style={{ whiteSpace: 'nowrap', marginRight: "20px", width: "150px" }}
                                            >
                                                {timing}
                                            </div>
                                        </td>
                                        {<>
                                            {
                                                TimseSlotsData[timing].length > 4 ?
                                                    <>
                                                        {
                                                            TimseSlotsData[timing].map((timeslot: any) => {
                                                                // console.log('timeslot', timeslot);
                                                                return (<>
                                                                    {/* <div
                                                                        className={servicetype1ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                    >
                                                                        IN
                                                                    </div> */}
                                                                    {timeslot?.servicetype === 1 ? (
                                                                        <div
                                                                            className={servicetype1ClassName}
                                                                            style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
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
                                                                </>)
                                                            })
                                                        }
                                                    </> :
                                                    TimseSlotsData[timing].length == 1 ?
                                                        <>
                                                            { TimseSlotsData[timing][0]?.servicetype === 1 ? (
                                                                <div
                                                                    className={servicetype1ClassName}
                                                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                                                >
                                                                    {'IN'}
                                                                    {TimseSlotsData[timing][0]?.subscriptiondetails?.frequencyid === 1
                                                                        ? ' (A)'
                                                                        : TimseSlotsData[timing][0]?.subscriptiondetails?.frequencyid === 2
                                                                            ? ' (W)'
                                                                            : TimseSlotsData[timing][0]?.subscriptiondetails?.frequencyid === 3
                                                                                ? ' (D)' : TimseSlotsData[timing][0]?.subscriptiondetails?.frequencyid === 4
                                                                                    ? ' (OD)'
                                                                                    : ' '}
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    className={servicetype2ClassName}
                                                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
                                                                >
                                                                    {'IN'}
                                                                    {TimseSlotsData[timing][0]?.subscriptiondetails?.frequencyid === 1
                                                                        ? ' (A)'
                                                                        : TimseSlotsData[timing][0]?.subscriptiondetails?.frequencyid === 2
                                                                            ? ' (W)'
                                                                            : TimseSlotsData[timing][0]?.subscriptiondetails?.frequencyid === 3
                                                                                ? ' (D)' : TimseSlotsData[timing][0]?.subscriptiondetails?.frequencyid === 4
                                                                                    ? ' (OD)'
                                                                                    : ' '}
                                                                </div>
                                                            )}
                                                            <div
                                                                className={noJobClassName + "bg-secondary text-center"}
                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                            >
                                                                NJ
                                                            </div>
                                                            <div
                                                                className={noJobClassName + "bg-secondary text-center"}
                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                            >
                                                                NJ
                                                            </div>
                                                            <div
                                                                className={noJobClassName + "bg-secondary text-center"}
                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                            >
                                                                NJ
                                                            </div>
                                                        </>
                                                        :
                                                        TimseSlotsData[timing].length == 2 ?
                                                            <>
                                                                {
                                                                    TimseSlotsData[timing].map((timeslot: any) => {
                                                                        // console.log('timeslot', timeslot);
                                                                        return (<>
                                                                            {/* <div
                                                                        className={servicetype1ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                    >
                                                                        IN
                                                                    </div> */}
                                                                            {timeslot?.servicetype === 1 ? (
                                                                                <div
                                                                                    className={servicetype1ClassName}
                                                                                    style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
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
                                                                        </>)
                                                                    })
                                                                }
                                                                <div
                                                                    className={noJobClassName + "bg-secondary text-center"}
                                                                    style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                >
                                                                    NJ
                                                                </div>
                                                                <div
                                                                    className={noJobClassName + "bg-secondary text-center"}
                                                                    style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                >
                                                                    NJ
                                                                </div>
                                                            </> :
                                                            TimseSlotsData[timing].length == 3 ?
                                                                <>
                                                                    {
                                                                        TimseSlotsData[timing].map((timeslot: any) => {
                                                                            // console.log('timeslot', timeslot);
                                                                            return (<>
                                                                                {/* <div
                                                                        className={servicetype1ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                    >
                                                                        IN
                                                                    </div> */}
                                                                                {timeslot?.servicetype === 1 ? (
                                                                                    <div
                                                                                        className={servicetype1ClassName}
                                                                                        style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
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
                                                                            </>)
                                                                        })
                                                                    }
                                                                    <div
                                                                        className={noJobClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                    >
                                                                        NJ
                                                                    </div>
                                                                </> :
                                                                TimseSlotsData[timing].length == 4 ?
                                                                    <>
                                                                        {
                                                                            TimseSlotsData[timing].map((timeslot: any) => {
                                                                                // console.log('timeslot', timeslot);
                                                                                return (<>
                                                                                    {/* <div
                                                                        className={servicetype1ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                    >
                                                                        IN
                                                                    </div> */}
                                                                                    {timeslot?.servicetype === 1 ? (
                                                                                        <div
                                                                                            className={servicetype1ClassName}
                                                                                            style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }}
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
                                                                                </>)
                                                                            })
                                                                        }
                                                                    </> :
                                                                    TimseSlotsData[timing].length == 0 ?
                                                                        <>
                                                                            <div
                                                                                className={noJobClassName + "bg-secondary text-center"}
                                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                            >
                                                                                NJ
                                                                            </div>
                                                                            <div
                                                                                className={noJobClassName + "bg-secondary text-center"}
                                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                            >
                                                                                NJ
                                                                            </div>
                                                                            <div
                                                                                className={noJobClassName + "bg-secondary text-center"}
                                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                            >
                                                                                NJ
                                                                            </div>
                                                                            <div
                                                                                className={noJobClassName + "bg-secondary text-center"}
                                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                            >
                                                                                NJ
                                                                            </div>
                                                                        </> : ""
                                            }
                                        </>}
                                    </>
                                </tr>
                                <br />
                            </>
                        )
                    })
                }
            </tbody>
        </>
    )
}
export default DailyTotalJobsTimeslotWise
