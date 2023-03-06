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
  }, [params.id, getBrewery])

  return (
    <div className='mx-auto sm:px-6 md:px-8 lg:px-8 min-h-screen'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:basis-1/2 lg:basis-1/2 md:mr-6'>
          <div className='w-full mb-6 md:mb-0'>
            <Description />
          </div>
        </div>
        <div className='w-full md:basis-1/2 lg:basis-1/2'>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default BreweryInfo
