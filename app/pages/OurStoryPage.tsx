import type { LinksFunction } from 'react-router';
import Footer from '~/components/Footer';
import ChooseJourney from '~/sections/home/ChooseJourney';
import HeroImageBg from '~/sections/ourStory/HeroImageBg';
import Profile from '~/sections/ourStory/Profile';
import Story from '~/sections/ourStory/Story';
import Values from '~/sections/ourStory/Values';

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
      {/* <Values /> */}
      <Story />
      <ChooseJourney />
      <Footer />
    </>
  )
}

export default OurStoryPage
