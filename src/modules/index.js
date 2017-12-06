import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import bars from './bars'
import geolocation from './geolocation'
import velos from './velos'

export default combineReducers({
  router: routerReducer,
  bars,
  geolocation,
  velos
})
