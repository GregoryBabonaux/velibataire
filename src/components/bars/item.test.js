import React from 'react';
import { shallow } from 'enzyme';

import BarItem from './item';

let barProps = {
  name: 'Test', 
  vicinity: 'Test address',
  icon: 'Whatever'
}

it('contains a h5', () => {
  let wrapper = shallow(<BarItem bar={barProps} />)
  expect(wrapper.find('h5')).toHaveLength(1)
})

it('contains the right title', () => {
  let wrapper = shallow(<BarItem bar={barProps} />)
  expect(wrapper.find('h5').contains('Test')).toEqual(true)
})

it('contains the right address', () => {
  let wrapper = shallow(<BarItem bar={barProps} />)
  expect(wrapper.find('p').contains('Test address')).toEqual(true)
})

it('contains a link', () => {
  let wrapper = shallow(<BarItem bar={barProps} />)
  expect(wrapper.find('a')).toHaveLength(1)
})