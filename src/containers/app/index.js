import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../home';
import Velos from '../velos';
import Bars from '../bars';

import Header from '../../components/header';
import Footer from '../../components/footer';

const App = () => (
  <div>
    
    <Header />

    <div className="row marketing">
      <Route exact path="/" component={Home} />
      <Route exact path="/velos" component={Velos} />
      <Route exact path="/bars" component={Bars} />
    </div>

    <Footer />
  
  </div>
)

export default App
