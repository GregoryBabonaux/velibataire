import React from 'react';
import { shallow, mount} from 'enzyme';

import {storeFake} from '../../mocks/store'; // C'est juste un mock d'un store redux... 

import Bars from './index'
import BarItem from '../../components/bars/item'


// On a besoin du store dans plusieurs tests
// On mock les données attendues dans le state 
let store = storeFake({
  bars: {
    bars: [{
      name: 'Chez Pépète',
      vicinity: '1 rue de la paix, Paris',
      icon: 'icon.png'
    },
    {
      name: 'Le balto',
      vicinity: '9 rue de la gloire, Rouen',
      icon: 'icon.png'
    }],
  },
  geolocation:{
    position: false
  }
})

it('contains a title (h1)', () => {
  let wrapper = shallow(<Bars store={store} />).dive(); // le dive permet de sortir du HOC
  expect(wrapper.find('h1')).toHaveLength(1)
})

it('renders some BarItem(s) ', () => {
  let wrapper = mount(<Bars store={store} />) // On a besoin de mount pour tester les children components 
  let state = store.getState(); // On accède au state de l'application (mocké)

  // On test l'injection de dump components tel que ça devrait tourner dans la vie réelle
  state.bars.bars.map( (bar, index) => {
    expect(wrapper.contains(<BarItem bar={bar} key={index} />)).toEqual(true)
  })
})
