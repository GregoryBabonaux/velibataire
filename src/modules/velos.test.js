import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

import {
  resolveVelibList,
  getVelibs
} from './velos'

// On test une action et le payload que l'on attend en retour
it('should dispatch action resolveVelibList', () => {
  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(resolveVelibList())

  const actions = store.getActions()
  const expectedPayload = { type: 'GET_VELIBS' }
  expect(actions).toEqual([expectedPayload])
});
