import React from 'react'
import Select from "react-select"
import { colourStyles2 } from '../../../../Css';
const MultiCustomerInput = ({ setSelectedFilterCsomerID, CustomerfilterData }: any) => {
    const [showSelectedCustomer, setshowSelectedCustomer] = React.useState<any>([])
    React.useEffect(() => {
        const updateCleaner = CustomerfilterData.filter((cleaner: any) => {
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
        setshowSelectedCustomer(updatedDatas)
    }, [CustomerfilterData])
    const HandleSearch = (event: any) => {
      
        setSelectedFilterCsomerID(event.value)
    }
    return (
        <div>
            <Select
            placeholder="Filter by customer"
             
                options={showSelectedCustomer}
                onChange={HandleSearch}
                defaultValue={showSelectedCustomer}
                styles={colourStyles2}
            />
        </div>
    )
}
export default MultiCustomerInput
