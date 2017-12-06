import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MapWithAMarker from '../../components/gmap';
import Items from '../../components/velibs/items'

import {GOOGLE_MAP_URL} from '../../config.js'

var geolib = require('geolib');

class List extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      value: 500
    };
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  render(){

    let velibs = [];

    /**
     * On passe les velibs en boucle pour garder ceux proches de nous
     */
    this.props.velibs.forEach( (velib, index) => {
      /**
       * Calcul de la distance entre deux points
       */
      let distance = geolib.getDistance(
          {latitude: this.props.position.coords.latitude, longitude: this.props.position.coords.longitude},
          {latitude: velib.position.lat, longitude: velib.position.lng}
      );

      if( distance < this.state.value){
        let params = {
          lat: velib.position.lat,
          lng: velib.position.lng,
          name: velib.address,
          distance: distance,
          address: velib.address,
          available_bikes: velib.available_bikes
        }
        velibs.push(params);
      } 
    });

    /**
     * Reorder les velibs par distance
     */
    velibs = velibs.sort( (a, b) => {
      return a.distance - b.distance
    });

    return (
      <div className="col-lg-12">
        <h1>Les vélos dans un rayon de {this.state.value} mètres</h1>

        <select className="form-control" value={this.state.value} onChange={this.handleChange.bind(this)}>
          <option value="500">500 mètres</option>
          <option value="1000">1000 mètres</option>
          <option value="1500">1500 mètres</option>
          <option value="2000">2000 mètres</option>
          <option value="2500">2500 mètres</option>
          
        </select>

        <MapWithAMarker 
            googleMapURL={GOOGLE_MAP_URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            positions={velibs}
            currentPosition={{
              lat: this.props.position.coords.latitude,
              lng: this.props.position.coords.longitude
            }}
          />

        <Items orderedVelibs={velibs} />
      </div>
    )
  }
}

List.propTypes = {
  velibs: PropTypes.array,
  position: PropTypes.object
};

export default List;
