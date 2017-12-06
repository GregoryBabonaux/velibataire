import fetch from 'isomorphic-fetch'

import {
  GOOGLE_PLACES_API_KEY,
  GOOGLE_PLACE_URL
} from '../config'

export const GET_BARS_LIST = 'GET_BARS_LIST'

export function get_bars_list(position){

  return (dispatch) => {
    let fetchBarList = `${GOOGLE_PLACE_URL}location=${position.coords.latitude},${position.coords.longitude}&radius=500&type=bar&key=${GOOGLE_PLACES_API_KEY}`
    
    return fetch(fetchBarList, {
      method  : 'GET',
    })
      .then(response => response.json())
      .then((res) => {
        dispatch(resolveBarList(res.results))
      });
  }
}

export function resolveBarList(bars){
  return {
    type: GET_BARS_LIST,
    bars
  }
}


// Reducers
const initialState = {
  bars: []
}

export default function (state = initialState, action){
  switch (action.type) {
    case GET_BARS_LIST:
      return {
        ...state, 
        bars: action.bars
      }
    break;

    default:
      return state;
    break;
  }

}