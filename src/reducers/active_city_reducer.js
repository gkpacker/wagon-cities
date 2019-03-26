const saoPaulo = {
  name: "São Paulo",
  address: "Rua Mourato Coelho, 1404 – Vila Madalena, São Paulo - SP",
  slug: "sao-paulo"
}

const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return saoPaulo;
  }

  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
}

export default activeCityReducer
