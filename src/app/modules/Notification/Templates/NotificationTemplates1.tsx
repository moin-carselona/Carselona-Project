import { random } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import { getNotification, getViewMedia } from '../../auth/core/_requests'
import CardTemlateHeader from './CardTemplateHeader'
import CardTemplateTbody from './CardTemplateTbody'
import CardTemplateThead from './CardTemplateThead'
type Props = {
  className: string
  isDataAvailable?: string
  start?: string
  end?: string
  Header?: string
}
const NotificationTemplates1: React.FC<Props> = ({ className, isDataAvailable, start, end, Header }) => {
  const [Notification, setNotification] = useState([])
  const [subTitle, setSubTitle] = useState("en")




  useEffect(() => {
    async function getData() {
      const { data } = await getNotification()
      setNotification(data.TemplateData)
    }
    getData()
  }, [])
  const onchangeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubTitle(event.target.value)
  }

  return (
    <>
      <div className={`card ${className}`}>
        <CardTemlateHeader isDataAvailable={isDataAvailable} start={start} end={end} length={Notification?.length} Header={Header} onchangeValue={onchangeValue}></CardTemlateHeader>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              <CardTemplateThead ></CardTemplateThead>
              {/* start::Table body */}
              {
                Notification?.map((notify) => {
                  return (
                    <CardTemplateTbody notify={notify} key={Math.random()} subTitle={subTitle} />
                  )
                })
              }
              {/* end::Table body */}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default NotificationTemplates1
