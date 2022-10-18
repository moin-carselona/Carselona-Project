import { useEffect, useState } from "react";

const MapSupervisorsName = (props: any) => {
    const { data, id } = props;

    const [filtered, setFilteredData] = useState(Object)

    useEffect(() => {
        data.filter((item: any) => {
            if (item.id === id) {
                setFilteredData(item);
            }
        })
        let filteredData = data.filter((item: any) => item.id === id)[0];
    }, [])

    return (
        <>
            <p>{filtered?.supervisorname?.map((supervisor: any) => (
                <p>{supervisor.supervisorcleaner.first_name},</p>
            ))}</p>
        </>
    )
}

export default MapSupervisorsName;