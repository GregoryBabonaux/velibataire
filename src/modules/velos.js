import fetch from 'isomorphic-fetch'
import {
  VELIB_URL
} from '../config'


export const GET_VELIBS = 'GET_VELIBS'
export const GET_VELOS = 'GET_VELOS'

export function getVelibs(){

  return (dispatch) => {
    return fetch(VELIB_URL, {
      method  : 'GET',
    })
      .then(response => response.json())
      .then((res) => {
        dispatch(resolveVelibList(res))
      });
  }
}

export function resolveVelibList(velibs){
  return {
    type: GET_VELIBS,
    velibs
  }
}

// Reducers
const initialState = {
  velibs: []
}

export default function (state = initialState, action){
  switch (action.type) {
    case GET_VELIBS:
      return {
        ...state, 
        velibs: action.velibs
      }
    break;

    default:
      return state;
    break;
  }
}