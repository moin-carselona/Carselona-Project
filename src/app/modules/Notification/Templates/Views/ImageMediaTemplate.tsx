import React from 'react'
const ImageMediaTemplate = ({ViewMediaData, push}:any) => {
  console.log('push', push);
  // console.log('ViewMediaData', ViewMediaData);
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' >
      {ViewMediaData?.medianame=="img" ? "Images" : "Images"}
      <img className="p-2" src={ViewMediaData?.medialink} alt="" />
    </div>
  )
}
export default ImageMediaTemplate
