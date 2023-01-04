import React from 'react'
import Select from "react-select"
import { colourStyles2 } from '../../../../Css'
const MultiSelect = ({ setSelectedTimingMultiSelect, setTimingslots, timeSlotsfilter }: any) => {
    const [showSelectedTimings, setshowSelectedTimings] = React.useState<any>([])
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
        setshowSelectedTimings(updatedUser)
    }, [])
    const HandleSearch = (event: any) => {
        setTimingslots(event.map((ele: any) => ele.label))
        setSelectedTimingMultiSelect(event.map((ele: any) => ele.value))
    }
    return (
        <div>
            <Select
                isClearable
                isSearchable
                isMulti
                options={showSelectedTimings}
                onChange={HandleSearch}
                defaultValue={showSelectedTimings}
                styles={colourStyles2}
            />
        </div>
    )
}
export default MultiSelect
