import Footer from '~/components/Footer';
import ChooseJourney from '~/components/home/sections/ChooseJourney';
import HeroImageBg from '~/components/ourStory/sections/HeroImageBg';
import AppDescription from '~/components/players/sections/AppDescription';

function OurStoryPage() {

  return (
    <>
      <HeroImageBg
        title="Mental performance isn’t a bonus,  it’s what separates good from great."
        actionTitle="Join the waitlist"
        actionLink="/waitlist"
        bgImage="assets/images/sam-conference.jpg"
      />
      <AppDescription />
      <ChooseJourney />
      <Footer />
    </>
  )
}

export default OurStoryPage
