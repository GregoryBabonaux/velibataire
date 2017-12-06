import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import BarItem from '../../components/bars/item'

import {
  get_bars_list
} from '../../modules/bars'

import {
  getLocation
} from '../../modules/geolocation'

import Loader from '../../images/loader.svg';

class Bars extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.getLocation();
  }

  componentDidUpdate(){
    if( this.props.position != null && this.props.bars.length === 0){
      this.props.get_bars_list(this.props.position)
    }
  }

  render(){
    let bars;
    if( this.props.bars.length > 0 ){
      bars = this.props.bars.map( (bar, index) => 
                    <BarItem bar={bar} key={index} />
                  )
    } else {
      bars = <img src={Loader} alt="loading..." style={{margin:'auto', width: '75px', display: 'block'}}/>
    }

    return (
      <div>
        <h1>Les bars proches de moi</h1>
        <div className="row marketing col-md-12">
          {bars}
        </div>
      </div>
    )
  }
} 

Bars.PropTypes = {
  bars: PropTypes.array,
  position: PropTypes.object
}


const mapStateToProps = state => ({
  bars: state.bars.bars,
  position: state.geolocation.position
})

const mapDispatchToProps = dispatch => bindActionCreators({
  get_bars_list,
  getLocation,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bars)
