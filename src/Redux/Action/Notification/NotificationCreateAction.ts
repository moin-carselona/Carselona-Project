
import axios from 'axios'
import { CREATE_NOTIFICATION_TEMPLATE } from '../../ActionTypes/ActionTypes';


export const NotificationActionCreate = (create_notify_template :any) =>  {
    
    return {type:CREATE_NOTIFICATION_TEMPLATE, payload:create_notify_template}
  
    
  }
