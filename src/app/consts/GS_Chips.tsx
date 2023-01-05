import React from 'react'
interface Props {
    row: any
    reference: string
}
const GS_Chips: React.FC<Props> = ({ row, reference }) => {
    return (
        <div className='text-left'>
            <span className='badge badge-light-success fs-8 fw-bold'>{reference === "vehicle-info" ?  row?.vehicle_info : ""}</span>
       
        </div>
    )
}
export default GS_Chips