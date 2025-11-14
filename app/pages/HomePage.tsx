import type { LinksFunction } from 'react-router';
import Footer from '~/components/Footer';
import ChooseJourney from '~/components/home/sections/ChooseJourney';
import FullScreenVideo from '~/components/home/sections/FullScreenVideo';
import Hero from '~/components/home/sections/Hero';
import Showcase from '~/components/home/sections/Showcase';
import Testimonials from '~/components/home/sections/Testimonials';
import Why from '~/components/home/sections/Why';

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "assets/app-screen/unlock-brain-mockup.jpg",
    as: "image"
  }
];

function HomePage() {

  return (
    <>
      <Hero />
      <FullScreenVideo />
      <Showcase />
      <Why />
      <Testimonials />
      <ChooseJourney />
      <Footer />
    </>
  )
}

export default HomePage
