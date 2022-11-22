import React from 'react'
import { getViewMedia } from '../../auth/core/_requests'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, HeaderCss } from "../../../../Css"
import ImageMediaTemplate from './Views/ImageMediaTemplate'
import VideoMediaTemplate from './Views/VideoMediaTemplate'
import {useMemo} from "react"
const CreateViewTemplate = ({ handleViewMedia ,ids}: any) => {
    const [ViewMediaData, SetViewMediaData] = React.useState<any>([])
    const [loading, setloading] = React.useState<boolean>(false)
    const handleCloseView = () => {
        handleViewMedia()
    }
    React.useEffect(() => {
        async function getData() {
            const { data }: any = await getViewMedia({ "Templateid": ids })
            SetViewMediaData(data.TemplateData)
            ViewMediaData && setloading(true)
        }
        getData()
    }, [])
    
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleCloseView} >X</p></div>
            {
                !loading ? <><h2 style={{textAlign:"center"}}>Wait Loadings...</h2></> :
                    <div className="p-5 mr-auto">
                        <div className='d-flex align-items-start justify-content-center mb-lg-5'  >
                            <h2 style={HeaderCss}>All Medias</h2>
                        </div>
                        {
                           ViewMediaData && ViewMediaData[0]?.medianame == "img" ?
                                <ImageMediaTemplate ViewMediaData={ViewMediaData[0]}   ></ImageMediaTemplate>
                                : <VideoMediaTemplate ViewMediaData={ViewMediaData} ></VideoMediaTemplate>
                        }
                    </div>
            }
        </div>
    )
}
export default CreateViewTemplate
