import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    const { city, selectCity } = this.props;

    selectCity(city);
  }

  render() {
    const { city } = this.props;

    return (
      <div className="list-group-item" onClick={this.handleClick}>
        {city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(
      { selectCity: selectCity },
      dispatch
    )
  )
}

export default connect(null, mapDispatchToProps)(City);
