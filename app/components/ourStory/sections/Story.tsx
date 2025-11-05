function Story() {
  return (
    <section className="bg-neutral-300 md:py-44 py-24">
      <div className="container mx-auto px-4 text-background flex flex-col md:gap-y-22 gap-y-14">
        <div className="grid lg:grid-cols-2 md:gap-y-10 gap-y-6">
          <h3 className=" font-sora font-regular text-5xl">
            Our <span className="text-blue-600">Mission</span>
          </h3>
          <div className="font-inter font-regular md:text-2xl text-base flex flex-col md:gap-y-6 gap-y-4">
            <p>
              At Unlock. we are building a global movement in mental
              performance.
            </p>
            <p>
              We put players first, always. That means elite sport psychology
              delivered with trust, privacy and reputation at the core.
            </p>
            <p>
              Our goal is to become the mindset coach in your pocket. The
              complete system athletes can turn to for learning, building
              habits, staying accountable and performing at their best.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:gap-y-10 gap-y-6">
          <h3 className=" font-sora font-regular text-5xl">
            Our <span className="text-blue-600">Story</span>
          </h3>
          <div className="font-inter font-regular md:text-2xl text-base flex flex-col md:gap-y-6 gap-y-4">
            <div className="grid md:grid-cols-2 gap-x-6 mb-5">
              <img
                src="assets/images/sam-hospital.jpg"
                alt="Sam in a hospital"
                className="rounded-[14px] object-cover aspect-16/9"
              />
              <img
                src="assets/images/sam-conference.jpg"
                alt="Sam at a conference"
                className="rounded-[14px] object-cover aspect-16/9 not-md:hidden"
              />
            </div>
            <p>
              Unlock was founded by Sam Holden, a former footballer whose career
              was shaped by both opportunity and setback. After collapsing
              during a match at 13 and being told he’d never play again, he
              rebuilt his body and mind without the help of a sport
              psychologist. An experience that planted the seed for Unlock.
            </p>
            <p>
              Years later, after playing, studying, and working across sport and
              tech, Sam created Unlock to give athletes the mental support he
              never had.
            </p>
            <img
                src="assets/images/sam-conference.jpg"
                alt="Sam at a conference"
                className="rounded-[14px] object-cover aspect-16/9 md:hidden"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
