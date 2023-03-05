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
          <span className='text-sm text-gray-400 mt-1'>
            Search breweries powered by&nbsp;
            <a
              href='https://openai.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              OpenAI
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export {SearchField};
