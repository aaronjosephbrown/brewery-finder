import { useContext } from 'react'
import { BreweryContext } from '../context/BreweryContext'

 export const SearchField = () => {
  const { searchValue, handleChange, handleSubmit } = useContext(BreweryContext)
   return (
    <div className='relative flex justify-center items-center'>
    <form onSubmit={handleSubmit} >
      <div className='form-control '>
        <div className='relative'>
          <input
            type='text'
            className='w-full pr-40 bg-gray-200 input input-lg text-black text-xl'
            placeholder='Search'
            value={searchValue}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='absolute top-0 right-0 rounded-l-none w-36 btn btn-accent btn-lg'
          >
            Go
          </button>
        </div>
      </div>
    </form>
  </div>
   )
 }