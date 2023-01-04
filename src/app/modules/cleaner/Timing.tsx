import React from 'react'
const Timing = ({SubscriptionData}: any) => {
    console.log('SubscriptionData', SubscriptionData);
    const timesstmp = SubscriptionData?.timeslot == "2" ? "06AM-07AM"
        : SubscriptionData?.timeslot == "3" ? "07AM-08AM"
            : SubscriptionData?.timeslot == "4" ? "08AM-09AM"
                : SubscriptionData?.timeslot == "5" ? "09AM-109AM"
                    : SubscriptionData?.timeslot == "6" ? "10AM-11AM"
                        : SubscriptionData?.timeslot == "7" ? "11AM-12AM"
                            : SubscriptionData?.timeslot == "7" ? "12PM-01PM"
                                : SubscriptionData?.timeslot == "8" ? "01PM-02PM"
                                    : SubscriptionData?.timeslot == "9" ? "02PM-03PM"
                                        : SubscriptionData?.timeslot == "2" ? "03PM-04PM"
                                            : SubscriptionData?.timeslot == "10" ? "04PM-05PM"
                                                : SubscriptionData?.timeslot == "11" ? "05PM-06PM"
                                                    : SubscriptionData?.timeslot == "12" ? "06PM-07PM"
                                                        : " Not Availble"

                                                        
    return (
       <>
       {timesstmp}
       </>
    )
}
export default Timing