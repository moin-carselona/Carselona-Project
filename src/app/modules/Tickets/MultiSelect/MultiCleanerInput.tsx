import React from 'react'
import Select from "react-select"
import { colourStyles2 } from '../../../../Css';
const MultiCleanerInput = ({ setSelectedFilterCleanerID, CleanerfilterData }: any) => {
    const [showSelectedCleaner, setshowSelectedCleaner] = React.useState<any>([])
    React.useEffect(() => {
        const updateCleaner = CleanerfilterData.filter((cleaner: any) => {
            if (cleaner.first_name == null) return (cleaner.first_name = cleaner.phone, cleaner.last_name = cleaner.phone);
            return cleaner
        })
        
        const updatedDatas = updateCleaner?.map((ele: any, i: number) => {
            if (ele.first_name) {
                const newData = {
                    label: ele.first_name,
                    value: ele.id
                }
                return newData
            }
        })
        setshowSelectedCleaner(updatedDatas)
    }, [CleanerfilterData])
    const HandleSearch = (event: any) => {
      
        setSelectedFilterCleanerID(event.value)
    }
    return (
        <div>
            <Select
            placeholder="Filter by cleaner"
             
                options={showSelectedCleaner}
                onChange={HandleSearch}
                defaultValue={showSelectedCleaner}
                styles={colourStyles2}
            />
        </div>
    )
}
export default MultiCleanerInput
