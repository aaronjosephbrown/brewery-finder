import { Link } from "react-router-dom"
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <Disclosure as="nav" className='navbar mb-2 shadow-lg bg-neutral text-neutral-content '>
      {({ open }) => (
        <>
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
              <Disclosure.Button className='btn btn-square btn-ghost'>
                {open ? (
                  <XIcon className='inline-block w-5 h-5 stroke-current' />
                ) : (
                  <MenuIcon className='inline-block w-5 h-5 stroke-current' />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                to='/'
                className={classNames(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  open ? 'bg-neutral-800 text-white' : 'text-neutral-200 hover:text-white hover:bg-neutral-700',
                )}
              >
                Home
              </Link>
              <a
                href='/about'
                className={classNames(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  open ? 'bg-neutral-800 text-white' : 'text-neutral-200 hover:text-white hover:bg-neutral-700',
                )}
              >
                About
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
