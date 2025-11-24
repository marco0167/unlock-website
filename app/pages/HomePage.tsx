import type { LinksFunction } from 'react-router';
import Footer from '~/components/Footer';
import ChooseJourney from '~/sections/home/ChooseJourney';
import FullScreenVideo from '~/sections/home/FullScreenVideo';
import Hero from '~/sections/home/Hero';
import ShowcaseV2 from '~/sections/home/ShowcaseV2';
import Testimonials from '~/sections/home/Testimonials';
import Why from '~/sections/home/Why';

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
      {/* <Showcase /> */}
      <ShowcaseV2 />
      <Why />
      <Testimonials />
      <ChooseJourney />
      <Footer />
    </>
  )
}

export default HomePage
