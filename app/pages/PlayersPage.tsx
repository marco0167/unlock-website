import type { LinksFunction } from 'react-router';
import Footer from '~/components/Footer';
import HeroImageBg from '~/sections/HeroImageBg';
import AppDescription from '~/sections/player/AppDescription';

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "assets/images/player-hotel.jpg",
    as: "image"
  }
];

function PlayersPage() {

  return (
    <>
      <HeroImageBg
        title="Mental performance isn’t a bonus,  it’s what separates good from great."
        actionTitle="Apply for Access"
        actionLink="/waitlist"
        bgImage="assets/images/player-hotel.jpg"
      />
      <AppDescription />
      <Footer />
    </>
  )
}

export default PlayersPage
