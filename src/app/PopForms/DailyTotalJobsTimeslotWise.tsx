import React from 'react'
const DailyTotalJobsTimeslotWise = ({ TimseSlotsData }: any) => {
    // console.log('TimseSlotsData ddddddddddddddddddddd', TimseSlotsData);
    let TimeSlotarr = Object.keys(TimseSlotsData)
    // console.log('TimeSlotarr ===================== converted into arr ', TimeSlotarr);
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
                                                            TimseSlotsData[timing].map((ele: any) => {
                                                                return (<>
                                                                    <div
                                                                        className={servicetype1ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                    >
                                                                        IN
                                                                    </div>
                                                                </>)
                                                            })
                                                        }
                                                    </> :
                                                    TimseSlotsData[timing].length == 1 ?
                                                        <>
                                                            <div
                                                                className={servicetype1ClassName + "bg-secondary text-center"}
                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                            >
                                                                IN
                                                            </div>
                                                            <div
                                                                className={servicetype2ClassName + "bg-secondary text-center"}
                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                            >
                                                                NJ - 1
                                                            </div>
                                                            <div
                                                                className={servicetype2ClassName + "bg-secondary text-center"}
                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                            >
                                                                NJ - 1
                                                            </div>
                                                            <div
                                                                className={servicetype2ClassName + "bg-secondary text-center"}
                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                            >
                                                                NJ - 1
                                                            </div>
                                                        </>
                                                        :
                                                        TimseSlotsData[timing].length == 2 ?
                                                            <>
                                                                <div
                                                                    className={servicetype1ClassName + "bg-secondary text-center"}
                                                                    style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                >
                                                                    IN
                                                                </div>
                                                                <div
                                                                    className={servicetype1ClassName + "bg-secondary text-center"}
                                                                    style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                >
                                                                    IN
                                                                </div>
                                                                <div
                                                                    className={servicetype2ClassName + "bg-secondary text-center"}
                                                                    style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                >
                                                                    NJ - 1
                                                                </div>
                                                                <div
                                                                    className={servicetype2ClassName + "bg-secondary text-center"}
                                                                    style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                >
                                                                    NJ - 1
                                                                </div>
                                                            </> :
                                                            TimseSlotsData[timing].length == 3 ?
                                                                <>
                                                                    <div
                                                                        className={servicetype1ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                    >
                                                                        IN
                                                                    </div>
                                                                    <div
                                                                        className={servicetype1ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                    >
                                                                        IN
                                                                    </div>
                                                                    <div
                                                                        className={servicetype1ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                    >
                                                                        IN
                                                                    </div>
                                                                    <div
                                                                        className={servicetype2ClassName + "bg-secondary text-center"}
                                                                        style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                    >
                                                                        NJ - 1
                                                                    </div>
                                                                </> :
                                                                TimseSlotsData[timing].length == 4 ?
                                                                    <>
                                                                        <div
                                                                            className={servicetype1ClassName + "bg-secondary text-center"}
                                                                            style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                        >
                                                                            IN
                                                                        </div>
                                                                        <div
                                                                            className={servicetype1ClassName + "bg-secondary text-center"}
                                                                            style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                        >
                                                                            IN
                                                                        </div>
                                                                        <div
                                                                            className={servicetype1ClassName + "bg-secondary text-center"}
                                                                            style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                        >
                                                                            IN
                                                                        </div>
                                                                        <div
                                                                            className={servicetype1ClassName + "bg-secondary text-center"}
                                                                            style={{ cursor: 'pointer', color: "black", padding: "5px", width: "100px", textAlign: "center" }}
                                                                        >
                                                                            IN
                                                                        </div>
                                                                    </> :
                                                                    TimseSlotsData[timing].length == 0 ?
                                                                        <>
                                                                            <div
                                                                                className={servicetype2ClassName + "bg-secondary text-center"}
                                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                            >
                                                                                NJ - 1
                                                                            </div>
                                                                            <div
                                                                                className={servicetype2ClassName + "bg-secondary text-center"}
                                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                            >
                                                                                NJ - 1
                                                                            </div>
                                                                            <div
                                                                                className={servicetype2ClassName + "bg-secondary text-center"}
                                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                            >
                                                                                NJ - 1
                                                                            </div>
                                                                            <div
                                                                                className={servicetype2ClassName + "bg-secondary text-center"}
                                                                                style={{ cursor: 'pointer', color: "black", padding: "5px", textAlign: "center", width: "100px" }}
                                                                            >
                                                                                NJ - 1
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
