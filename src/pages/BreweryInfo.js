import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { BreweryContext } from '../context/BreweryContext'
import Description from '../components/Description'
import Map from '../components/Map'

const BreweryInfo = () => {
  const params = useParams()
  const { getBrewery } = useContext(BreweryContext)

  useEffect(() => {
    getBrewery(params.id)
  }, [params.id])

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
