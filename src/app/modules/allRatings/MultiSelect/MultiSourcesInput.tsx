import React from 'react'
import Select from "react-select"
import { colourStyles2 } from '../../../../Css';
const MultiSourcesInput = ({ setSelectedFilterSourceID, SelectedFilterSourceData }: any) => {
    const [showSelectedSourcesData, setshowSelectedSourcesData] = React.useState<any>([])
    React.useEffect(() => {
      
        const updatedDatas = SelectedFilterSourceData?.map((ele: any, i: number) => {
            console.log('ele', ele);
            if (ele.name) {
                const newData = {
                    label: ele.name,
                    value: ele.id
                }
                return newData
            }
        })
        setshowSelectedSourcesData(updatedDatas)
    }, [SelectedFilterSourceData])
    const HandleSearch = (event: any) => {
    console.log('event', event);

        setSelectedFilterSourceID(event.value)
    }
    return (
        <div>
            <Select
                placeholder="Filter by Source"

                options={showSelectedSourcesData}
                onChange={HandleSearch}
                defaultValue={showSelectedSourcesData}
                styles={colourStyles2}
            />
        </div>
    )
}
export default MultiSourcesInput
