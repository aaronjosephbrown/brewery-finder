import { useContext } from 'react'
import { BreweryContext } from '../context/BreweryContext'
import { LoaderListView } from './Loader'

export default function Description() {
  const { brewery, loading } = useContext(BreweryContext)

  if (loading) {
    return <LoaderListView />
  }

  const handleGetDirectionsClick = () => {
    const { latitude, longitude } = brewery
    const isAppleDevice = navigator.userAgent.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Mobile') !== -1

    if (latitude && longitude) {
      if (isAppleDevice) {
        window.open(`https://maps.apple.com/?daddr=${latitude},${longitude}`)
      } else {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`)
      }
    }
  }

  return (
    <div className='overflow-hidden bg-accent shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-base font-semibold leading-6'>Brewery's Info</h3>
        <p className='mt-1 max-w-2xl text-sm'>
          Here is some information about the brewery 🍻.
        </p>
      </div>
      <div className='bg-secondary px-4 py-5 sm:px-6'>
        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium '>Name</dt>
            <dd className='mt-1 text-sm'>{brewery.name}</dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium'>Address</dt>
            <dd className='mt-1 text-sm'>{brewery.street}</dd>
            <dd className='mt-1 text-sm'>{`${brewery.city}, ${brewery.state}`}</dd>
            <dd className='mt-1 text-sm'>{brewery.postal_code}</dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium'>Website</dt>
            <dd className='mt-1 text-sm'>
              {brewery.website_url ? (
                <a href={brewery.website_url} target='_blank' rel='noreferrer'>
                  {brewery.website_url}
                </a>
              ) : (
                `${brewery.name} brewery may be flying under the radar without an online presence just yet.`
              )}
            </dd>
          </div>
          <div className='sm:col-span-1'>
            <dt className='text-sm font-medium'>Phone</dt>
            <dd className='mt-1 text-sm'>
              {brewery.phone ? formatPhoneNumber(brewery.phone) : 'No phone number available'}
            </dd>
          </div>
          <div className='sm:col-span-2'>
            <button className='btn' onClick={handleGetDirectionsClick}>
              Get Directions
            </button>
          </div>
        </dl>
      </div>
    </div>
  )
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}