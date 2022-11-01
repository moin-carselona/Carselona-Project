

const ChipChat = ({ ticketID, HandleChipActivePaid }: any) => {



    return (
        <>

            <div className='badge badge-light-primary fw-bolder cursor-pointer me-lg-1' onClick={() => HandleChipActivePaid(ticketID)} >
                <button className='btn btn-sm btn-light-primary fw-bolder' id='kt_drawer_chat_toggle'>
                    Chat
                </button>
            </div>
        </>
    )
}
export default ChipChat
