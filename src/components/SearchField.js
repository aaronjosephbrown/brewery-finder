import { useContext } from 'react';
import { BreweryContext } from '../context/BreweryContext';

const SearchField = () => {
  const { searchValue, handleChange, handleSubmit } = useContext(BreweryContext);
  return (
    <div className='relative flex justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <div className='relative'>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black text-xl'
              placeholder='Search'
              value={searchValue}
              onChange={handleChange}
              aria-label='Search breweries powered by OpenAI'
            />
            <button
              type='submit'
              className='absolute top-0 right-0 rounded-l-none w-36 btn btn-accent btn-lg'
            >
              Go
            </button>
          </div>
        </div>
        <p className='text-sm text-center '>
          Ask us where to find a beer in a city and embark on a taste adventure. From hidden gems to top-rated spots, we'll guide you to the best beer in town. Get ready to sip, savor, and enjoy Miami's thriving craft beer scene!
          </p>
      </form>
    </div>
  );
};

export {SearchField};
