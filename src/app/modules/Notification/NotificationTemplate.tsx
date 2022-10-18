import React, { FC } from 'react'
import { NotificationActionCreate } from '../../../Redux/Action/Notification/NotificationCreateAction'
import { initialState, reducer } from './Redux/Reducer'
import { CardCustomContext } from './SendNotificationTemplate'
import NotificationTemplates1 from './Templates/NotificationTemplates1'
import {  useDispatch } from 'react-redux'
const Notification: FC = () => {
  const [state, dispatchs] = React.useReducer(reducer, initialState)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(NotificationActionCreate("create_notify_template"))
    return ()=>{
    dispatch(NotificationActionCreate("removed"))
    console.log("unmounted now")
    }
  }, [])
 
  return (
    <>
      <CardCustomContext.Provider value={{ state: state, dispatchs: dispatchs }}>
        <NotificationTemplates1 className='mb-5 mb-xl-8' isDataAvailable="notification" start="Over" end="Templates" Header="Notification Templates" />
      </CardCustomContext.Provider>
    </>
  )
}
export { Notification }
