import { Link } from "react-router"
import { Linkedin } from "./svgs"

function Footer() {
  return (
    <section className="bg-neutral-100 pt-20 md:pt-44">
      <footer className='bg-background not-md:w-[95vw] flex flex-col container mx-auto md:rounded-t-[46px] rounded-t-[26px] md:px-10 px-5 md:py-13 py-6 gap-y-22'>

         <div className="flex justify-between items-start">
            <ul className="flex flex-col gap-y-5 text-neutral-100 font-inter font-regular md:text-lg text-lg">
                <li className="hover:scale-105 transition duration-200">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="hover:scale-105 transition duration-100">
                  <Link to="/players">
                    Players
                  </Link>
                </li>
                <li className="hover:scale-105 transition duration-100">
                  <Link to="/clubs">
                    Clubs
                  </Link>
                </li>
                <li className="hover:scale-105 transition duration-100">
                  <Link to="/our-story">
                    Our Story
                  </Link>
                </li>
            </ul>
            <Link to='https://www.linkedin.com/company/unlockathlete/' target="_blank" >
              <Linkedin />
            </Link>
         </div>

         <div className="flex not-md:flex-col justify-between not-md:items-center gap-y-12">
          <Link to="/" prefetch="intent">
            <img src="assets/logo-light.svg" alt="Unlock Logo" className="h-12 md:h-8 w-auto"/>
          </Link>
          <div className="flex gap-x-8">
            <Link to="/terms" prefetch="intent" className="text-[12px] font-inter font-regular text-neutral-400 hover:scale-105 transition duration-100">Terms of Service</Link>
            <Link to="/privacy" prefetch="intent" className="text-[12px] font-inter font-regular text-neutral-400 hover:scale-105 transition duration-100">Privacy Policy</Link>
          </div>
         </div>
      </footer>
    </section>
  )
}

export default Footer
