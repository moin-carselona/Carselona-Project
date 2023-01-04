import { time } from "console";
export const TimingValue = (defaultTimings: any) => {
    const timingformat = defaultTimings == "2" ? "06AM-07AM"
        : defaultTimings == "3" ? "07AM-08AM"
            : defaultTimings == "4" ? "08AM-09AM"
                : defaultTimings == "5" ? "09AM-109AM"
                    : defaultTimings == "6" ? "10AM-11AM"
                        : defaultTimings == "7" ? "11AM-12AM"
                            : defaultTimings == "7" ? "12PM-01PM"
                                : defaultTimings == "8" ? "01PM-02PM"
                                    : defaultTimings == "9" ? "02PM-03PM"
                                        : defaultTimings == "2" ? "03PM-04PM"
                                            : defaultTimings == "10" ? "04PM-05PM"
                                                : defaultTimings == "11" ? "05PM-06PM"
                                                    : defaultTimings == "12" ? "06PM-07PM"
                                                        : ""
    const timeArr = []
    timeArr.push(defaultTimings, timingformat)

    return timeArr
}