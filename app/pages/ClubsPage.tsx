import Footer from '~/components/Footer';
import HeroImageBg from '~/components/general/section/HeroImageBg';
import ChooseJourney from '~/components/home/sections/ChooseJourney';

import AppDescription from '~/components/clubs/sections/AppDescription';

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
