import React from 'react';
import { shallow, mount} from 'enzyme';

import {storeFake} from '../../mocks/store'; // C'est juste un mock d'un store redux... 

import Velos from './index'

let store = storeFake({
  velos: {
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
  },
  geolocation:{
    position: {
        coords: {
        latitude: 48.8645278209514,
        longitude: 2.416170724425901
      }
    }
  }
})

it('calls componentDidMount', () => {
  let spy = jest.spyOn(Velos.prototype, 'componentDidMount');
  let wrapper = mount(<Velos store={store} />);
  wrapper.instance().componentDidMount();
  expect(spy).toHaveBeenCalled();
})






