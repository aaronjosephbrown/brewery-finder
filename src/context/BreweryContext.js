import { createContext, useEffect, useReducer } from 'react'
import BreweryReducer from './BreweryReducer'
import axios from 'axios'
import  handleListEngines from "../context/openai";

export const BreweryContext = createContext()

const BreweryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BreweryReducer, {
    query: '',
    searchValue: '',
    breweries: [],
    brewery: {},
    heading: 'Breweries',
    loading: true,
  })

  useEffect(() => {
    getRandomBreweries()
  }, [])

  const getRandomBreweries = () => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/random?size=21`)
      .then((res) => {
        dispatch({
          type: 'GET_RANDOM_BREWERIES',
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChange = (e) => {
    dispatch({
      type: 'SET_SEARCH_VALUE',
      payload: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await handleListEngines(state.searchValue);
    dispatch({
      type: 'SET_QUERY',
      payload: response.choices[0].text,
    })
    console.log(response)
    searchBreweries(response.choices[0].text)
  }

  const searchBreweries = (query) => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then((res) => {
        dispatch({
          type: 'GET_BREWERIES',
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getBrewery = (id) => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((res) => {
        dispatch({
          type: 'GET_BREWERY',
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <BreweryContext.Provider
      value={{
        handleChange,
        handleSubmit,
        breweries: state.breweries,
        loading: state.loading,
        brewery: state.brewery,
        getBrewery,
        getRandomBreweries,
      }}
    >
      {children}
    </BreweryContext.Provider>
  )
}

export default BreweryContextProvider
