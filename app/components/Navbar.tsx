import { Link } from 'react-router'
import { useState } from 'react'

const navigation = [
  { name: 'Players', href: 'players', current: false },
  { name: 'Clubs', href: 'clubs', current: false },
  { name: 'Our Story', href: 'our-story', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="z-50 fixed w-full after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px">
      <div className="mx-auto max-w-[95vw] lg:max-w-[70vw] 2xl:max-w-[55vw] container mt-4 sm:mt-8 bg-[#0A0A0A]/50 backdrop-blur-md border-[1px] border-[#ffffff1a] rounded-full w-full pr-2 sm:pr-3 lg:pr-4 pl-7">

        <div className="relative flex items-center justify-between py-[14px]">

          {/* Mobile menu button */}
          <div className="absolute z-20 inset-y-0 right-0 flex items-center md:hidden">
            <button
              onClick={(e) => {
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 "
            >
              <span className="absolute -inset-0.5 **pointer-events-none**" />
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6 **pointer-events-none**`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6 **pointer-events-none**`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex w-full items-center justify-between md:justify-between gap-4 lg:gap-6 sm:items-stretch relative">

            {/* Logo */}
            <div className=" flex shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Your Company"
                  src="assets/logo.png"
                  className="h-6 w-auto sm:h-8"
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex  items-center justify-between font-inter font-regular text-lg text-neutral-100">
              <div className="flex sm:gap-x-2 2xl:gap-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-950/50' : 'hover:bg-white/10',
                      'rounded-full px-4 py-2 transition-colors duration-300',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/waitlist"
              className="hidden md:flex  rounded-full font-inter font-semibold text-[16px] border-neutral-100 px-4 py-2 text-background bg-neutral-100"
            >
              Join the Waitlist
            </Link>

          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="mx-auto mt-2 bg-background/80 backdrop-blur-md border-[1px] border-[#ffffff1a] rounded-2xl w-full min-w-[200px] max-w-[95vw] px-4 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300',
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/waitlist"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl border-2 border-white px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-black transition-colors duration-300 text-center mt-3"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
