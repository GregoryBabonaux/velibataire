import React from 'react';
import PropTypes from 'prop-types';
import Velib from '../../components/velibs/item';

const Items = props => {
    return (
      <table className="table" style={{fontSize: '12px'}}>
        <thead>
          <tr>
            <th scope="col">Vélos dispo</th>
            <th scope="col">Adresse</th>
            <th scope="col">Distance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { props.orderedVelibs.map((velib, index) => {return (<Velib velib={velib} key={index} /> )} ) }
        </tbody>
      </table>
    )
}

Items.propTypes = {
  orderedVelibs: PropTypes.array
};

export default Items;