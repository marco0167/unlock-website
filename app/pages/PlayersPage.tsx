import Footer from '~/components/Footer';
import HeroImageBg from '~/components/general/section/HeroImageBg';
import ChooseJourney from '~/components/home/sections/ChooseJourney';
import AppDescription from '~/components/players/sections/AppDescription';

function PlayersPage() {

  return (
    <>
      <HeroImageBg
        title="Mental performance isn’t a bonus,  it’s what separates good from great."
        actionTitle="Join the waitlist"
        actionLink="/waitlist"
        bgImage="assets/images/player-hotel.jpg"
      />
      <AppDescription />
      <ChooseJourney />
      <Footer />
    </>
  )
}

export default PlayersPage
