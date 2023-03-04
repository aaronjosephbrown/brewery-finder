const BreweryReducer = (state, action) => {
  switch (action.type) {
    case 'GET_RANDOM_BREWERIES':
      return {
        ...state,
        breweries: action.payload,
        loading: false,
      }
    case 'GET_BREWERY':
      return {
        ...state,
        brewery: action.payload,
        loading: false
      }
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload,
      }
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload,
      }
    case 'GET_BREWERIES':
      return {
        ...state,
        breweries: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default BreweryReducer
