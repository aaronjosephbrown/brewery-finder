import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { BreweryContext } from '../context/BreweryContext'
import Description from '../components/Description'
import axios from 'axios'
import Map from '../components/Map'

const BreweryInfo = () => {
  const { setBrewery } = useContext(BreweryContext)
  const params = useParams()

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${params.id}`)
      .then((res) => {
        setBrewery(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [params.id, setBrewery])

  return (
    <div className='mx-auto sm:px-6 lg:px-8 min-h-screen'>
      <div className='flex flex-row'>
        <div className='basis-3/4 mr-6'>
        <Description />
        </div>
        <Map className='basis-1/4' />
      </div>
    </div>
  )
}

export default BreweryInfo
