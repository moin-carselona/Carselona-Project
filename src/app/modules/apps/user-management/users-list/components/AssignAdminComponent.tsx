import { useState } from "react";

import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import { toast } from "react-toastify";
import { InputLabel } from "@mui/material";

const AssignAdminComponent = (props: {
    supervisorsList: any, adminList: any, ticketreplies: any,
    tickets: any, userData: any
}) => {
    const { supervisorsList, adminList, ticketreplies, tickets, userData } = props;

    const [inputField, setInputField] = useState({
        ticketid: tickets.id,
        last_date_resolution: '',
        last_date_feedback: '',
        admins: [],
        cleaners: [],
        userid: userData.id
    })


    const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }

    const [personName, setPersonName] = React.useState<string[]>([]);
    const [admins, setAdmins] = React.useState<any[]>([]);

    const handleAssignSubmit = () => {
        // ticketid
        // admins[] 1,3,7
        // cleaners[] 489
        // last_date_resolution
        // last_date_feedback
        const formData = new FormData();
        formData.append("ticketid", inputField.ticketid)
        formData.append("last_date_resolution", inputField.last_date_feedback)
        formData.append("last_date_resolution", inputField.last_date_resolution)
        formData.append("cleaners", JSON.stringify(personName))
        formData.append("admins", JSON.stringify(admins))
        formData.append("userid", inputField.userid)

        axios.post('https://adminapi.carselonadaily.com/api/admin/updateAssignedUsers', formData)
            .then(response => {
                toast.success("Submitted")
            })
            .catch(error => {
                console.log(error)
                toast.error("Something went wrong")
            })
    }

    const handleChangeMultiSelect = (event: SelectChangeEvent<typeof personName>) => {
        const { value } = event.target;

        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    
    const handleAdminSelect = (event: SelectChangeEvent<typeof admins>) => {
        const { value } = event.target;
        setAdmins(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className="p-2">
            <h2>Assign To</h2>
            {/* <select
                className='form-select form-select-solid my-2'
                onChange={handleChange}>
                <option>Select Supervisors</option>
                {supervisorsList?.map((option: any) => (
                    <option id={option.id}>{option.first_name} {option.last_name}</option>
                ))}
            </select>
            <select
                className='form-select form-select-solid my-2'
                onChange={handleChange}>
                <option>Select Admin Users</option>
                {adminList?.map((option: any) => (
                    <option id={option.id}>{option.first_name} {option.last_name}</option>
                ))}
            </select> */}

            <input
                type='date'
                data-kt-user-table-filter='search'
                id='last_date_resolution'
                className='form-control form-control-solid bg-white my-2'
                placeholder='Start Date'
                onChange={handleChange} />

            <input
                type='date'
                data-kt-user-table-filter='search'
                id='last_date_feedback'
                className='form-control form-control-solid bg-white my-2'
                placeholder='Start Date'
                onChange={handleChange} />

            <FormControl fullWidth className="my-2">
                <InputLabel id="demo-simple-select-label">Admin Users</InputLabel>
                <Select
                    multiple
                    labelId="demo-simple-select-label"
                    displayEmpty
                    onChange={handleAdminSelect}
                    input={<OutlinedInput />}
                    value={admins}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Select Admin Users</em>;
                        }

                        return selected.join(', ');
                    }}
                    inputProps={{ 'aria-label': 'Without label' }}
                    label="Admin Users"
                >
                    <MenuItem disabled value="">
                        <em>Select Admin Users</em>
                    </MenuItem>
                    {adminList.map((admin: any) => (
                        <MenuItem
                            key={admin.id}
                            value={admin.id}
                            className={admin.first_name}
                        >
                            {admin.first_name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            
            <FormControl fullWidth className="my-2">
                <InputLabel id="demo-simple-select-label1">Supervisor</InputLabel>
                <Select
                    labelId="demo-simple-select-label1"
                    multiple
                    displayEmpty
                    onChange={handleChangeMultiSelect}
                    input={<OutlinedInput />}
                    value={personName}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Select Supervisor</em>;
                        }

                        return selected.join(', ');
                    }}
                    inputProps={{ 'aria-label': 'Without label' }}
                    label="Supervisor"
                >
                    <MenuItem disabled value="">
                        <em>Select Supervisor</em>
                    </MenuItem>
                    {supervisorsList.map((supervisor: any) => (
                        <MenuItem
                            key={supervisor.id}
                            value={supervisor.id}
                        >
                            {supervisor.first_name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div>
                <button className="btn btn-warning btn-sm"
                    onClick={handleAssignSubmit}>
                    Assign
                </button>
            </div>
        </div>
    )
}

export default AssignAdminComponent;