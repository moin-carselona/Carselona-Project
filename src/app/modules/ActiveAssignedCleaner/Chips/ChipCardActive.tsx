const ChipCardActive = () => {
    const HandleChipActivePaid = () => {
        console.log("active", "active")
    }
    return (
        <>
            <div className='badge badge-light-primary fw-bolder cursor-pointer me-lg-1' onClick={HandleChipActivePaid} >
                Active
            </div>
        </>
    )
}
export default ChipCardActive
