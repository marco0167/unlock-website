import type { LinksFunction } from 'react-router';
import Footer from '~/components/Footer';
import ChooseJourney from '~/components/home/sections/ChooseJourney';
import HeroImageBg from '~/components/ourStory/sections/HeroImageBg';
import Profile from '~/components/ourStory/sections/Profile';
import Story from '~/components/ourStory/sections/Story';
import Values from '~/components/ourStory/sections/Values';

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "assets/images/sam-conference.jpg",
    as: "image"
  }
];

function OurStoryPage() {

  return (
    <>
      <HeroImageBg
        actionLink="/waitlist"
        bgImage="assets/images/sam-conference.jpg"
      />
      <Profile />
      <Values />
      <Story />
      <ChooseJourney />
      <Footer />
    </>
  )
}

export default OurStoryPage
