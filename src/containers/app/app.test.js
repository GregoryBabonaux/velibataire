import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

import Header from '../../components/header'
import Footer from '../../components/footer'
import Route from 'react-router-dom'

import Home from '../home'

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains a header', () => {
  let wrapper = shallow(<App/>);
  expect(wrapper.contains(<Header />)).toEqual(true);
})

it('contains 3 routes', () => {
  let wrapper = shallow(<App />);
  expect(wrapper.find('Route')).toHaveLength(3);
})

it('contains a footer', () => {
  let wrapper = shallow(<App/>);
  expect(wrapper.contains(<Footer />)).toEqual(true);
})