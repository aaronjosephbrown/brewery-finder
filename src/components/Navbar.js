import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className='navbar mb-2 shadow-lg bg-neutral text-neutral-content '>
      <div className='flex-none px-2 mx-2'>
      <Link to='/'>
        <span className='text-lg font-bold'>Brewery Finder</span>
        </Link>
      </div>
      <div className='flex-1 px-2 mx-2 lg:flex-none'></div>
      <div className='hidden lg:block lg:ml-auto'>
        <div className='flex items-center'>
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn mx-2' href='/'>
            Home
          </Link>
          <a className='btn btn-ghost btn-sm rounded-btn mx-2' href='/about'>
            About
          </a>
        </div>
      </div>
      <div className='flex-none'>
        <div className='lg:hidden'>
          <div className='dropdown dropdown-end'>
            <button className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-5 h-5 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
            <ul
              tabIndex='0'
              className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <a href='/' className='hover:bg-base-200'>
                  Home
                </a>
              </li>
              <li>
                <a href='/about' className='hover:bg-base-200'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
