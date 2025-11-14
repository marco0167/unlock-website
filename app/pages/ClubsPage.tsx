import Footer from '~/components/Footer';
import HeroImageBg from '~/components/general/section/HeroImageBg';
import ChooseJourney from '~/components/home/sections/ChooseJourney';

import AppDescription from '~/components/clubs/sections/AppDescription';
import type { LinksFunction } from 'react-router';

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "assets/images/club.jpg",
    as: "image"
  }
];

function ClubsPage() {

  return (
    <>
      <HeroImageBg
        title="Unlock helps your players build the mental skills that drive performance."
        actionTitle="Partner with us"
        actionLink="/form-contact"
        bgImage="assets/images/club.jpg"
      />
      <AppDescription />
      <ChooseJourney />
      <Footer />
    </>
  )
}

export default ClubsPage;
