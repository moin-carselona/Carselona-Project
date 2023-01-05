const ShowInformation = ({ infoData, DynamicHeaderinfo, handleCloseModal, reference }: any) => {
  console.log('infoData', infoData);
  const servicetype1ClassTag =
    'badge badge- fw-bolder rounded mb-1 d-flex justify-content-center'
  return (
    <div className='p-10 card' style={{ width: '600px' }}                                                                                                                                                                                                                                        >
      <div className='modal-content ' >
        {/* ==================================================================================================== */}
        <div className="row mb-5">
          <div className="col-6">
            <h4 className="text-center text-success">{"Private Tags"}</h4>
            <div className='modal-content'>
              < div
                className={servicetype1ClassTag}
                style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }
                }
              >
                {
                  infoData?.private_tag === "" ? <span className='me-1 badge badge-light-danger fs-8 fw-bold'> No Tags Are Available </span> : infoData?.private_tag.split(",").map((ele: any, index: number) => {
                    return (
                      <span className='me-1 badge badge-light-danger fs-8 fw-bold'> {ele} </span>
                    )
                  })
                }
              </div >
            </div>
          </div>
          <div className="col-5">
            <h4 className="text-center text-success">{"Public Tags"}</h4>
            <div className='modal-content'>
              < div
                className={servicetype1ClassTag}
                style={{ whiteSpace: 'pre-wrap', cursor: "pointer" }
                }
              >
                {
                  infoData?.public_tag === "" ? <span className='me-1 badge badge-light-danger fs-8 fw-bold'> No Tags Are Available </span> : infoData?.public_tag.split(",").map((ele: any, index: number) => {
                    return (
                      <span className='me-1 badge badge-light-danger fs-8 fw-bold'> {ele} </span>
                    )
                  })
                }
              </div >
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowInformation
