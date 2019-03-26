import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import City from './city';
import { setCities, selectCity } from '../actions'

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    const { cities } = this.props;

    return (
      <div className="list-group cities">
        {cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCities: setCities,
      selectCity: selectCity
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
