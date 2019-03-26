import cities from '../data/cities';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function selectCity(city) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  };
}
