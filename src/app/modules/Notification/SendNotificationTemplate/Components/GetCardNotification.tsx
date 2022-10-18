import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../../_metronic/helpers'
import DialogBox from '../../DialogBox/DialogBox'

import CardChipData from './CardChipData'
import { CardCustomContext } from "../../SendNotificationTemplate"
type Props = {
  className: string
  image: string
  title: string
  time: string
  description: string
  id: number
}
const GetCardNotification: React.FC<Props> = ({ className, image, title, description, id }) => {
  const Redux = React.useContext(CardCustomContext)
  const [subTitle, setSubTitle] = React.useState<any>("en")
  const [PopOpenClose, setPopOpenClose] = React.useState(false)

  const SelectedLanguage = (language: any) => {
    setSubTitle(language)
  }
  const SendNotificationBTN = () => {
    setPopOpenClose(!PopOpenClose)
    const SelectedTemplateTitiles = subTitle == "hi hn" ? title[subTitle.split(" ")[0]] || title[subTitle.split(" ")[1]] : title[subTitle]
    Redux.dispatch({ type: "Selected_Template", payload: { titles: SelectedTemplateTitiles, subTitles: subTitle, viewMediaPushID: id } })
  }
  const [ViewMediaPopupToggle, setViewMediaPopupToggle] = React.useState(false)
  const ViewMediaPushNotify = () => {
      setViewMediaPopupToggle(!ViewMediaPopupToggle)
  }
  return (
    <>
      <div
        className={`card bgi-no-repeat ${className} `}
        style={{
          backgroundPosition: 'right top',
          backgroundSize: '30% auto',
          backgroundImage: `url(${toAbsoluteUrl('/media/svg/shapes/' + image)})`,
        }}
      >
        {/* begin::Body */}
        <div className='card-body'>
          <div className='fw-bold text-primary my-6'>
            <CardChipData SelectedLanguage={SelectedLanguage} title={title} ></CardChipData>
          </div>
          <a href='#' className='card-title fw-bold text-muted text-hover-primary fs-4'>
            {subTitle == "hi hn" ? title[subTitle.split(" ")[0]] || title[subTitle.split(" ")[1]] : title[subTitle]}
          </a>
          <p
            className='text-dark-75 fw-semibold fs-5 m-0'
          >
            {subTitle == "hi hn" ? description[subTitle.split(" ")[0]] || description[subTitle.split(" ")[1]] : description[subTitle]}
          </p>
        </div>
        {/* end::Body */}
      <div className='container d-flex '>
      <div
          className='card-toolbar d-flex justify-content-start mb-4  col-4'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'

        >
    
          <a
            href='#'
            className='btn btn-sm  bi bi-eye-fill badge-light-primary '
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_invite_friends'
            onClick={() => ViewMediaPushNotify()}
            >
            <KTSVG path='#' className='svg-icon-3' />
            View

          </a>
        </div>
        <div
          className='card-toolbar d-flex justify-content-end mb-4  col-8'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'

        >
    
          <a
            href='#'
            className='btn btn-sm  bi bi-send-fill badge-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_invite_friends'
            onClick={() => SendNotificationBTN()}
          >
            <KTSVG path='#' className='svg-icon-3' />
            {"Send Notificartion"}

          </a>
        </div>
      </div>
       


      </div>
      {ViewMediaPopupToggle && <DialogBox ViewMediaPushNotify={ViewMediaPushNotify} ViewMediaPopupToggle={ViewMediaPopupToggle} />}

      {PopOpenClose && <DialogBox SendNotificationBTN={SendNotificationBTN} PopOpenClose={PopOpenClose} />}

    </>
  )
}
export default GetCardNotification
{/* <button style={Create_BtnCssView} onClick={ViewMediaPushNotify}>View</button> */ }
