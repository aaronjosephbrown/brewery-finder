import { useContext, useEffect, useState } from 'react'
import { BreweryContext } from '../context/BreweryContext'
import { SearchField } from '../components/SearchField'
import { Link } from 'react-router-dom'

export const Breweries = () => {
  const { breweries, getRandomBreweries } = useContext(BreweryContext)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (breweries.length === 0) {
      setMessage(
        <div className='flex justify-center items-center'>
          <h1 className='text-2xl font-bold text-center'>
            Oops, it seems we've come up empty-handed in our quest for breweries
            with that search term!
          </h1>
        </div>
      )
      setTimeout(() => {
        setMessage(null)
        getRandomBreweries()
      }, 5000)
    }
  }, [breweries, getRandomBreweries])

  return (
    <div className='container mx-auto sm:px-6 lg:px-8 min-h-screen'>
      <SearchField />
      <div>{message}</div>
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {breweries.map((brewery) => (
          <li key={brewery.id} className='col-span-1 divide-y rounded-lg'>
            <div className='flex flex-wrap w-full items-center justify-between space-x-6 p-6'>
              <div className='flex-1'>
                <div className='flex items-center space-x-3'>
                  <Link to={`/BreweryInfo/${brewery.id}`}>
                    <h3 className='truncate text-sm font-medium'>
                      {brewery.name}
                    </h3>
                  </Link>
                  <span className='inline-block flex-shrink-0 rounded-full bg-accent px-2 py-0.5 text-xs font-medium'>
                    {brewery.brewery_type}
                  </span>
                </div>
                <p className='mt-1 truncate text-sm text-primary'>
                  {brewery.city}, {brewery.state} {brewery.postal_code}
                </p>
              </div>
            </div>
            <div>
              <div className='-mt-px flex divide-x divide-gray-200'>
                <div className='flex w-0 flex-1'></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
