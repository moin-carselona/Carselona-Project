const ChipCardInactive = () => {
const HandleChipActivePaid = ()=>{
console.log("Inactive", "Inactive")
}
    return (
        <>
            <div className='badge badge-light-primary fw-bolder cursor-pointer me-lg-1' onClick={HandleChipActivePaid} >
                Inactive
            </div>
        </>
    )
}
export default ChipCardInactive
