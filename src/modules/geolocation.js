// Actions
export const GET_LOCATION = 'GET_LOCATION';

export function getLocation() {
  const geolocation = navigator.geolocation;
  
  return (dispatch) => {
      // const location = new Promise((resolve, reject) => {
      if (!geolocation) {
        console.log('Error')
      }
      
      geolocation.getCurrentPosition((position) => {
        dispatch(resolveGeolocation(position))
      }, () => {
        console.log('Error')
      });
  }
};


export function resolveGeolocation(position){
  return {
    type: GET_LOCATION,
    position
  }
}

// Reducer
const initialState = {
  position: null
}

export default (state = initialState, action) => {
  switch (action.type){
    case GET_LOCATION:
      return {
        ...state, 
        position: action.position
      }
    break;

    default:
      return state;
    break;
  }

}
