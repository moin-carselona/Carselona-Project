import { CREATE_NOTIFICATION_TEMPLATE } from "../../ActionTypes/ActionTypes";
const initState = {
  CreatTemplate: "",
}
export const NotificationActionReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case CREATE_NOTIFICATION_TEMPLATE:
      return { ...state, CreatTemplate: payload }
    default:
      return state
  }
}