const ChipsInfo = ({ Info, refs }: any) => {
    // console.log('Info', Info);
    // if(Info?.ticketcategory?.category_name){
    // console.log('Info?.ticketcategory?.category_name', Info?.ticketcategory?.category_name);
    // }
    return (
        <>
            <div className={`badge badge-light-${Info?.ticketstatus?.id == 0 && refs === "status" ? "warning" : Info?.ticketstatus?.id == 1 && refs === "status" ? "danger" : Info?.ticketstatus?.id == 2 && refs === "status" ? "warning" : Info?.ticketstatus?.id == 3 && refs === "status" ? "success" : Info?.ticketstatus?.id == 4 && refs === "status" ? "dark" : Info?.ticketstatus?.id == 5 && refs === "status" ? "secondary" : Info?.ticketstatus?.id == 6 && refs === "status" ? "primary" : "primary"} fw-bolder cursor-pointer me-lg-1`} >
                {refs === "category" ? Info?.ticketcategory?.category_name :
                    refs === "source" ? Info?.ticketsource?.name :
                        refs === "status" ? Info?.ticketstatus?.name :
                            ""
                }
            </div>
        </>
    )
}
export default ChipsInfo
