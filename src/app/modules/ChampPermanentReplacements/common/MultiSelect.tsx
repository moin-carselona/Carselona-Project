import axios from 'axios';
import React from 'react'
import Select from "react-select"
import { colourStyles2 } from '../../../../Css'
const MultiSelect = ({ defaultVal, SelectedTimingMultiSelect, setSelectedTimingMultiSelect, setTimingslots, timeSlotsfilter }: any) => {
    // console.log('timeSlotsfilter', timeSlotsfilter);
    // console.log('SelectedTimingMultiSelect', SelectedTimingMultiSelect);
    // console.log('defaultVal', defaultVal);
    // console.log('defaultVal', defaultVal);
    const [showSelectedTimings, setshowSelectedTimings] = React.useState<any>([])
    const [valuetiming, setValueTime] = React.useState<any>([])
    React.useEffect(() => {
        const updatedUser = timeSlotsfilter.map((ele: any, i: number) => {
            if (ele.name) {
                const newUser = {
                    label: ele.name,
                    value: ele.id
                }
                return newUser
            }
        })
        let data = []
        for (let i = 0; i < SelectedTimingMultiSelect.length; i++) {
            for (let j = 0; j < timeSlotsfilter.length; j++) {
                if (SelectedTimingMultiSelect[i].label == timeSlotsfilter[j].name) {
                    const newTime = {
                        label: timeSlotsfilter[j].name,
                        value: timeSlotsfilter[j].id
                    }
                    data.push(newTime)
                }
            }
        }
        setValueTime(data)
        const filtereed = updatedUser.filter((ele: any, i: number) => ele?.label === defaultVal)
        for (let i = 0; i < updatedUser.length; i++) {
            if (updatedUser[i].label !== defaultVal) {
                filtereed.push(updatedUser[i])
            }
        }
        setshowSelectedTimings(filtereed)
    }, [SelectedTimingMultiSelect])
    const HandleSearch = (event: any) => {
        setTimingslots(event.map((ele: any) => ele.label))
        setSelectedTimingMultiSelect(event)
    }
    return (
        <div>
            <Select
                isClearable
                isSearchable
                isMulti
                options={showSelectedTimings}
                onChange={HandleSearch}
                defaultValue={showSelectedTimings[0]}
                value={SelectedTimingMultiSelect.length == 1 && SelectedTimingMultiSelect[0].track == 'render' ? showSelectedTimings[0] : valuetiming}
                styles={colourStyles2}
            />
        </div>
    )
}
export default MultiSelect
