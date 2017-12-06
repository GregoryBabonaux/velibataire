import React from 'react'
import PropTypes from 'prop-types';

const Item = props => (
    <div className="col-md-6">
      <h5>{props.bar.name}</h5>
      <p>{props.bar.vicinity}</p>
      
      <a href={'https://www.google.fr/maps/place/'+props.bar.vicinity} target="_blank" className="btn btn-primary">
        <img src={props.bar.icon} width="20" align="absmiddle" alt={props.bar.name}/> Y aller !
      </a>

      <hr />
    </div>
  )

Item.propTypes = {
  bar: PropTypes.object
};

export default Item;