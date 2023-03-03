const BreweryReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_BREWERIES':
      return {
        ...state,
        breweries: action.payload,
        heading: 'Search Results',
      };
    case 'GET_BREWERY':
      return {
        ...state,
        brewery: action.payload,
        heading: 'Brewery Details',
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default BreweryReducer;