const ChipsInfos = ({ SelectedString, classes }: any) => {
    return (
        <>
            <div className={`badge badge-light-${classes} fw-bolder cursor-pointer me-lg-1`} >
                {
                    SelectedString
                }
            </div>
        </>
    )
}
export default ChipsInfos
