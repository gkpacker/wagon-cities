import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = ({ activeCity }) => {
  const { name, address, slug } = activeCity;

  return (
    <div className="active-city">
      <h3>{name}</h3>
      <p>{address}</p>
      <img src={`https://kitt.lewagon.com/placeholder/cities/${slug}`} alt={name} width="100%" />
    </div>
  );
};

function mapStateToProps(state) {
  return ({
    activeCity: state.activeCity
  });
}

export default connect(mapStateToProps)(ActiveCity);
