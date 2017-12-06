import React from 'react';
import { shallow } from 'enzyme';

import {storeFake} from '../../mocks/store'; // C'est juste un mock d'un store redux... 

import Home from './index'
import Jumbotron from '../../components/jumbotron'


it('contains a Jumbotron', () => {
  let store = storeFake({}) // On doit passer un fake store car ce component est connected

  let wrapper = shallow(<Home store={store} />).dive(); // on utilise dive pour sortir d'un HOC
  expect(wrapper.contains(<Jumbotron />)).toEqual(true)
})