import ProfileCards from "../ProfileCards";

function Profile() {
  return (
    <section className="container m-auto flex flex-col gap-y-28 py-38 px-4">

      <div className="grid lg:grid-cols-5 2xl:grid-cols-2 2xl:gap-x-26 gap-x-16 md:gap-y-14 gap-y-10">

        <div className="flex flex-col gap-y-6 not-2xl:col-span-2">
          <h2 className="font-sora font-regular xl:text-5xl lg:text-4xl md:text-5xl text-4xl">Our Psychologists</h2>
          <p className="font-inter font-regular xl:text-2xl md:text-xl">
            Our psychologists work with the world's top athletes to make sure
            they think, feel, and perform their best.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 not-2xl:col-span-3">
          <ProfileCards
            imagePath="assets/images/andrea-profile.png"
            name="Andrea Furst, PhD"
            qualifications="Sport Psychologist | CoFounder"
            description="Sarah is a leading sport psychologist with over 25 years’ experience supporting Olympic and professional athletes, bringing evidence-based mental training to Unlock’s programmes."
            linkedinName="drandreafurstsportpsychologist"
          />
          <ProfileCards
            imagePath="assets/images/sarah-profile.png"
            name="Sarah Cecil, PhD"
            qualifications="Sport Psychologist | CoFounder"
            description="Sarah is a leading sport psychologist with over 25 years’ experience supporting Olympic and professional athletes, bringing evidence-based mental training to Unlock’s programmes."
            linkedinName="sarah-cecil-4b882240"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-5 2xl:grid-cols-2 2xl:gap-x-26 gap-x-16 md:gap-y-14 gap-y-10">
        <div className="flex flex-col gap-y-6 not-2xl:col-span-2">
          <h2 className="font-sora font-regular xl:text-5xl lg:text-4xl md:text-5xl text-4xl">Founders & Advisors</h2>
          <p className="font-inter font-regular xl:text-2xl md:text-xl">
            Unlock’s Founder, Sam, and Advisor, Matt, have both experienced the need for mental skills.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 not-2xl:col-span-3">
          <ProfileCards
            imagePath="assets/images/sam-profile.jpg"
            name="Sam Holden"
            qualifications="Ex-Footballer | CoFounder"
            description="Sam Holden is a former professional footballer and founder dedicated to making sport psychology accessible to every athlete."
            linkedinName="sampholden"
          />
          <ProfileCards
            imagePath="assets/images/matt-profile.jpg"
            name="Matt Jarvis"
            qualifications="Ex-Footballer | Advisor"
            description="Matt Jarvis is a former Premier League and England international footballer with over a decade of experience at the highest level."
            linkedinName="matthew-jarvis-5b385597"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
