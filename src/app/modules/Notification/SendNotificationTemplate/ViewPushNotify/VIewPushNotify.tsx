import React from 'react'
import { getViewMedia } from '../../../auth/core/_requests'
import { ContainerCss, HeaderCss, PopCloseFormNotification, PopCloseFormNotificationPtag } from '../../../../../Css'
import { CardCustomContext } from '../../SendNotificationTemplate'
import ImageMediaTemplate from '../../Templates/Views/ImageMediaTemplate'
import VideoMediaTemplate from '../../Templates/Views/VideoMediaTemplate'
type functions = {
  ViewMediaPushNotify:()=>void
}
const VIewPushNotify = ({ViewMediaPushNotify}:functions) => {
  const Redux = React.useContext(CardCustomContext)
  const [ViewMediaData, SetViewMediaData] = React.useState<any>([])
  const [loading, setloading] = React.useState<boolean>(false)

const handleCloseViewPushNotify = ()=>{
  ViewMediaPushNotify()
}
React.useEffect(() => {
  async function getData() {
      const { data }: any = await getViewMedia({ "Templateid": Redux?.state?.viewMediaPushID })
      SetViewMediaData(data.TemplateData)
      ViewMediaData && setloading(true)
  }
  getData()
}, [])
  return (
       <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleCloseViewPushNotify} >X</p></div>
            {
                !loading ? <><h2 style={{textAlign:"center"}}>Wait Loadings...</h2></> :
                    <div className="p-5 mr-auto">
                        <div className='d-flex align-items-start justify-content-center mb-lg-5'  >
                            <h2 style={HeaderCss}>All Medias</h2>
                        </div>
                        {
                           ViewMediaData && ViewMediaData[0]?.medianame == "img" ?
                                <ImageMediaTemplate ViewMediaData={ViewMediaData[0]} push = {true}  ></ImageMediaTemplate>
                                : <VideoMediaTemplate ViewMediaData={ViewMediaData} ></VideoMediaTemplate>
                        }
                    </div>
            }
        </div>
  )
}

export default VIewPushNotify
