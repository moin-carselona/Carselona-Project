import React from 'react'
import Select from "react-select"
import { colourStyles } from '../../../../../Css';
const Multiselect = () => {
    const [ShowUser, setShowUSer] = React.useState<any>([])
    const [SelectedUser, setSelectedUser] = React.useState<any>([])
 


    const userList = [
        { name: "Paritesh" },
        { name: "Moin" },
        { name: "Paritosh" },
        { name: "Zack" },
        { name: "Co-Founder" },
    ]
    React.useEffect(() => {
        const updatedUser = userList.map((ele, i) => {
            if (ele.name) {
                const newUser = {
                    label: ele.name,
                    value: i
                }
                return newUser
            }
        })
        setShowUSer(updatedUser)
    }, [])
    const HandleSearch = (event: any) => {
        setSelectedUser(event)
    }
    return (
        <div>
            <Select
                isMulti
                options={ShowUser}
                onChange={HandleSearch}
                defaultValue={ShowUser[0]}
                styles={colourStyles}
            />
        </div>
    )
}
export default Multiselect
