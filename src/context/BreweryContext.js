import { createContext, useState, useEffect } from 'react';
//import BreweryReducer from './BreweryReducer';
import axios from 'axios';


export const BreweryContext = createContext();



const BreweryContextProvider = ({children}) => {
  const [query, setQuery] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [breweries, setBreweries] = useState([])
  const [brewery, setBrewery] = useState({})
  const [loading, setLoading] = useState(false)


//Need to finish implementing useReducer
  // const [state, dispatch] = useReducer(BreweryReducer, {
  //   breweries: [],
  //   brewery: {},
  //   heading: 'Breweries',
  //   loading: false,
  // });

  useEffect(() => {
    setLoading(true)
    getRandomBreweries()
  }, [])

const getRandomBreweries = () => {
    setLoading(true)
    axios
      .get(`https://api.openbrewerydb.org/breweries/random?size=21`)
      .then((res) => {
        if (res.status === 400 || res.status === 404 || res.data.length === 0) {
          setSearchValue('')
        }
        setBreweries(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
}  

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    setQuery(searchValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (searchValue.length === 0) {
      console.log('Please enter a search term')
      setLoading(false)
      return
    }
    axios
      .get(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then((res) => {
        if (res.status === 400 || res.status === 404 || res.data.length === 0) {
          console.log('There was an issue with your search')
          setSearchValue('')
        }
        setBreweries(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
    setSearchValue('')
  }

  return (
    <BreweryContext.Provider value={{ handleChange, handleSubmit, breweries, loading, setBrewery, brewery, getRandomBreweries }}>
      {children}
    </BreweryContext.Provider>
  )
}

export default BreweryContextProvider