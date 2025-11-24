import Footer from '~/components/Footer';
import HeroImageBg from '~/sections/HeroImageBg';

import AppDescription from '~/sections/clubs/AppDescription';
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
      <Footer />
    </>
  )
}

export default ClubsPage;
