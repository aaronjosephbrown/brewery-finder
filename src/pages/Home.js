import { useContext } from 'react'
import { BreweryContext } from '../context/BreweryContext'
import { Breweries } from '../components/Breweries'
import Loader from '../components/Loader'

const Home = () => {
  const { loading } = useContext(BreweryContext)

  if (loading) {
    return <Loader />
  }

  return <Breweries />
}

export default Home
