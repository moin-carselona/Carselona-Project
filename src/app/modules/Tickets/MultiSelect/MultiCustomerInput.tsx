import React from 'react'
import Select from "react-select"
import { colourStyles2 } from '../../Notification/Css';
const MultiCustomerInput = ({ setSelectedFilterCsomerID, CustomerfilterData }: any) => {
    const [showSelectedCustomer, setshowSelectedCustomer] = React.useState<any>([])
    React.useEffect(() => {
        const updateTickets = CustomerfilterData.filter((Tickets: any) => {
            if (Tickets.first_name == null) return (Tickets.first_name = Tickets.phone, Tickets.last_name = Tickets.phone);
            return Tickets
        })
        
        const updatedDatas = updateTickets?.map((ele: any, i: number) => {
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
