const CardChipData = ({ SelectedLanguage, title }: any) => {
    const AllLanguage = Object.keys(title)
    return (
        <>
            {
                AllLanguage.map((ele) => {
                    return (
                        <div className='badge badge-light-primary fw-bolder cursor-pointer me-lg-1' onClick={() => SelectedLanguage(ele)} >
                            {
                                ele == "en" ? "English"
                                    : ele == "hi" || ele == "hn" ? "Hindi"
                                        : ele == "kn" ? "Kanada"
                                            : null
                            }
                        </div>
                    )
                })
            }
        </>
    )
}
export default CardChipData
