import React from 'react';
import { shallow, mount} from 'enzyme';

import {storeFake} from '../../mocks/store'; // C'est juste un mock d'un store redux... 

import VelibList from './list'
import Items from './items'

// On a besoin du store dans plusieurs tests
// On mock les données attendues dans le state 
let store = {
  velibs: [
      {  
        address:"RUE DES CHAMPEAUX (PRES DE LA GARE ROUTIERE) - 93170 BAGNOLET",
        available_bike_stands:40,
        available_bikes:10,
        banking:true,
        bike_stands:50,
        bonus:true,
        contract_name:"Paris",
        last_update:1512547530000,
        name:"31705 - CHAMPEAUX (BAGNOLET)",
        number:31705,
        position:{
          lat: 48.8645278209514, 
          lng: 2.416170724425901
        },
        distance: 0,
        status:"OPEN"
      },
    ],
  position: {
    coords: {
      latitude: 48.8645278209514,
      longitude: 2.416170724425901
    }
  }
}

it('contains a component Items', () => {
  let wrapper = shallow(<VelibList position={store.position} velibs={store.velibs} />);
  expect(wrapper.find('h1')).toHaveLength(1)
})


it('contains a component Items', () => {
  let wrapper = shallow(<VelibList position={store.position} velibs={store.velibs} />);
  expect(wrapper.find('Items')).toHaveLength(1)
})


