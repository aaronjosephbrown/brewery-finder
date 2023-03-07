import { Link } from "react-router-dom";
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-secondary mb-4">
      {({ open }) => (
        <>
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">
                <Link to="/">Brewery Finder</Link>
              </div>
              <div className="flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  hover:text-neutral-200 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex sm:items-center">
                <Link
                  to="/"
                  className="mx-3 py-2 rounded-md text-sm font-medium  hover:text-neutral-200 "
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="mx-3 py-2 rounded-md text-sm font-medium  hover:text-neutral-200 "
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-neutral-200 hover:bg-neutral-900"
                onClick={() => open && open(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium  hover:text-neutral-200 hover:bg-neutral-900"
                onClick={() => open && open(false)}
              >
                About
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
