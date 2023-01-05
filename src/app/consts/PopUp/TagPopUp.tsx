const TagPopUp = (props: any) => {
    const { infoData, DynamicHeaderinfo, handleCloseModal, reference } = props
    const servicetype1ClassTag =
        'badge badge- fw-bolder rounded mb-1 d-flex justify-content-center'
    return (
        <div className={`p-5 card`} style={{ width: '600px' }} >
            <>
                <h4 className="text-center text-success">{DynamicHeaderinfo}</h4>
                <hr />
                <div className='modal-content'>
                    < div
                        className={servicetype1ClassTag}
                        style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }
                        }
                    >
                        {
                            infoData === "" ? <span className='me-1 badge badge-light-danger fs-8 fw-bold'> No Tags Are Available </span> : infoData?.split(",").map((ele: any, index: number) => {
                                return (
                                    <span className='me-1 badge badge-light-danger fs-8 fw-bold'> {ele} </span>
                                )
                            })
                        }
                    </div >
                </div>
            </>
        </div>
    )
}
export default TagPopUp
