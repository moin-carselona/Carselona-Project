import axios from "axios";
import React from "react";

type Props = {
    id: string,
    data: any
}

const TicketActionColumns = (props: Props) => {
    const { id, data } = props;
    let filteredData = data.filter((item: any) => item.id === id)[0];
    // https://adminapi.carselonadaily.com/api/admin/changeOnboardingStatus
    const [options] = React.useState([
        { id: "0", label: "Open" },
        { id: "3", label: "Closed" }
    ]);
    const [value, setValue] = React.useState("");

    const handleChange = (event: React.ChangeEvent) => {
        setValue(event.currentTarget.id)
        const formData = new FormData();

        axios.post('https://adminapi.carselonadaily.com/api/admin/changeOnboardingStatus')
    }

    return (
        <>
            {filteredData && filteredData.ctCustomer && filteredData.ctCustomer?.tickets.map((ticket: any) => (
                <select className="mt-1">{
                    options.map((option: any) => (
                        <option id={option.id}>{option.label}</option>
                    ))
                }</select>
            ))}
        </>
    )
}

export default TicketActionColumns;