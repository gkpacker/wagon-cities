import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions';

const City = ({ city, selectCity }) => {
  return (
    <div className="list-group-item" onClick={() => selectCity(city)}>
      {city.name}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(
      { selectCity },
      dispatch
    )
  );
}

export default connect(null, mapDispatchToProps)(City);
