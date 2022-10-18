import { applyMiddleware, compose, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { NotificationActionReducer } from "./Reducer/Notification/NotificationCreateReducer"
const rootReducer = combineReducers({
  NotificationActionReducer
})
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware))
export const store = legacy_createStore(rootReducer, enhancer)