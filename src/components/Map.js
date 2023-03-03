import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { useContext } from 'react'
import { BreweryContext } from '../context/BreweryContext'
import Loader from '../components/Loader'

function Map() {
  const { brewery } = useContext(BreweryContext)

  // Ensure that the latitude and longitude values are defined and not empty
  const lat = brewery.latitude ? parseFloat(brewery.latitude) : 0
  const lng = brewery.longitude ? parseFloat(brewery.longitude) : 0

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCcXPMOEWbUyPN6m9wzmNQbS4n0RN8Af5Y',
  })

  if (!isLoaded) return <Loader classname="" />

  return (
    <GoogleMap
      zoom={15}
      center={{ lat, lng }}
      mapContainerClassName='map-container'
    >
      <MarkerF
        position={{
          lat,
          lng,
        }}
      />
    </GoogleMap>
  )
}

export default Map


// AIzaSyCcXPMOEWbUyPN6m9wzmNQbS4n0RN8Af5Y
