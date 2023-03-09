import { useContext, useEffect, useState } from 'react'
import { BreweryContext } from '../context/BreweryContext'
import { SearchField } from '../components/SearchField'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const PAGE_SIZE = 15
export const Breweries = () => {
  const { breweries, getRandomBreweries } = useContext(BreweryContext)
  const [message, setMessage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

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


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const startIndex = (currentPage - 1) * PAGE_SIZE
  const endIndex = startIndex + PAGE_SIZE
  const currentBreweries = breweries.slice(startIndex, endIndex)



  return (
    <div className='container mx-auto sm:px-6 lg:px-8 min-h-screen'>
      <SearchField />
      <div>{message}</div>
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {currentBreweries.map((brewery) => (
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
      <div className='mt-4'>
        <Pagination
          itemsCount={breweries.length}
          pageSize={PAGE_SIZE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)

  if (pageCount === 1) return null

  const pages = _.range(1, pageCount + 1)

  return (
    <nav aria-label='Page navigation'>
      <ul className='pagination flex flex-col md:flex-row items-center justify-center daisy'>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item btn ${
              page === currentPage ? 'btn-accent active' : 'btn-outline-primary'
            }`}
          >
            <button className='page-link' onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
      <style>{`
        @media (max-width: 768px) {
          .pagination {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
