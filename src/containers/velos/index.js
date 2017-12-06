import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loader from '../../images/loader.svg';

import {
  getVelibs
} from '../../modules/velos'

import {
  getLocation
} from '../../modules/geolocation'

import VelibList from '../../components/velibs/list'

/**
 * Velos component
 */
class Velos extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getLocation();
  }

  componentDidUpdate(){
    if( this.props.position != null && this.props.velibs.length === 0){
      this.props.getVelibs();
    }
  }

  render(){
    let renderingVelibs;

    if( this.props.velibs.length > 0 ) {
      renderingVelibs = <VelibList 
                            velibs={this.props.velibs}
                            position={this.props.position}
                        />
    } else {
      renderingVelibs = <img src={Loader} alt="loading..." style={{margin:'auto', width: '75px', display: 'block'}}/>
    }

    return (
      <div className="col-lg-12">{renderingVelibs}</div>
    )
  }
}

Velos.propTypes = {
  velibs: PropTypes.array,
  position: PropTypes.object
};


const mapStateToProps = state => ({
  velibs: state.velos.velibs,
  position: state.geolocation.position
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getVelibs,
  getLocation,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Velos)
