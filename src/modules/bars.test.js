import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

import {
  resolveBarList,
  get_bars_list
} from './bars'

// On test une action et le payload que l'on attend en retour
it('should dispatch action resolveBarList', () => {
  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(resolveBarList())

  const actions = store.getActions()
  const expectedPayload = { type: 'GET_BARS_LIST' }
  expect(actions).toEqual([expectedPayload])
});

// On teste ici une action asynchrone qui fait appel à une API
it('should dispatch an async action get_bars_list', () => {
  const store = mockStore({})

  return store.dispatch(get_bars_list({coords: {latitude: 123, longitude: 456}}))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(resolveBarList([]))
    })
});