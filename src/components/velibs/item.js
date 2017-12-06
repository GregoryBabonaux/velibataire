import React from 'react'
import PropTypes from 'prop-types';

const Item = props => (
    <tr>
      <th>{props.velib.available_bikes}</th>
      <td>{props.velib.address}</td>
      <td>{props.velib.distance} mètres</td>
      <td><a href={'http://maps.google.com/maps?q='+props.velib.lat+','+props.velib.lng} target="_blank" className="btn btn-success">Y aller</a></td>
    </tr>
)

Item.propTypes = {
  velib: PropTypes.object
};

export default Item;