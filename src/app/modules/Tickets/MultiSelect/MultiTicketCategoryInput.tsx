import React from 'react'
import Select from "react-select"
import { colourStyles2 } from '../../Notification/Css';
const MultiTicketCategoryInput = ({ setSelectedFilterTicketCateogryId, SelectedFilterTicketCateogryData }: any) => {
    console.log('SelectedFilterTicketCateogryData', SelectedFilterTicketCateogryData);
    const [showSelectedSourcesData, setshowSelectedSourcesData] = React.useState<any>([])
    React.useEffect(() => {
        const updateTickets = SelectedFilterTicketCateogryData.filter((Tickets: any) => {
            if (Tickets.category_name == null) return (Tickets.category_name = Tickets.phone, Tickets.last_name = Tickets.phone);
            return Tickets
        })
        const updatedDatas = updateTickets?.map((ele: any, i: number) => {
            // console.log('ele', ele);
            if (ele.category_name) {
                const newData = {
                    label: ele.category_name,
                    value: ele.id
                }
                return newData
            }
        })
        setshowSelectedSourcesData(updatedDatas)
    }, [SelectedFilterTicketCateogryData])
    const HandleSearch = (event: any) => {

        setSelectedFilterTicketCateogryId(event.value)
    }
    return (
        <div>
            <Select
                placeholder="Filter by Ticket Category"

                options={showSelectedSourcesData}
                onChange={HandleSearch}
                defaultValue={showSelectedSourcesData}
                styles={colourStyles2}
            />
        </div>
    )
}
export default MultiTicketCategoryInput
