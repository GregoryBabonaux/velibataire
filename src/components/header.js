import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../images/logo.png';

// On décore le composant avec un HOC (high order component) pour récupérer les props du router 
export default withRouter((props) => {
  let currentLocation = props.location.pathname; // yeah, on a récupéré le pathname, on va s'en servir pour les liens actifs dans le header <3

  return (
    <div className="header clearfix">
      <nav>
        <ul className="nav nav-pills float-right">

          <li className="nav-item">
            <Link to="/" className={(currentLocation === '/') ? 'nav-link active' : 'nav-link'}>Home</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/velos" className={(currentLocation === '/velos') ? 'nav-link active' : 'nav-link'}>Vélos</Link>
          </li>

          <li className="nav-item">
            <Link to="/bars" className={(currentLocation === '/bars') ? 'nav-link active' : 'nav-link'}>Bars</Link>
          </li>

        </ul>
      </nav>
      <h3 className="text-muted"> <Link to="/"><img src={Logo} alt="Velibataire" width="50"/></Link> Vélibataire</h3>
    </div>
  )
})

withRouter.propTypes = {
  location: PropTypes.object
};