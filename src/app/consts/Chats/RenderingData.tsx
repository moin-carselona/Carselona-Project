import React from 'react'
const RenderingData = ({ ticketid, ticketID, backgroundColors, HandleChipActivePaid }: any) => {
    return (
        <div id='kt_drawer_chat2_toggle2' className={`badge badge-${backgroundColors === ticketid?.id ? "primary" : "light-primary"} fw-bolder cursor-pointer me-lg-1`} onClick={() => HandleChipActivePaid(ticketID?.id)} >
            <button className={`btn btn-sm btn-${backgroundColors === ticketid?.id ? "primary" : "light-primary"} fw-bolder`} >
                Chat
            </button>
        </div>
    )
}
export default RenderingData