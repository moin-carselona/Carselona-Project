import { applyMiddleware, compose, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { NotificationActionReducer } from "./Reducer/Notification/NotificationCreateReducer"
import { ChatReducers } from "./Reducer/Chat/ChatReducer"
import { ActivePaidSubscriptionReducer } from "./Reducer/ActivePaidSubscription/ActivePaidSubscriptionReducer"
import { ActiveStatsReducer } from './Reducer/ActiveStatsReducer/ActiveStatsReducer'
import { DailyReAssignments } from './Reducer/DailyReAssignments/DailyReAssignments'
const rootReducer = combineReducers({
  NotificationActionReducer,
  ChatReducers,
  ActivePaidSubscriptionReducer,
  DailyReAssignments,
  ActiveStatsReducer
})
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware))
export const store = legacy_createStore(rootReducer, enhancer)


// DailyReAssignments.DailyReAssign

