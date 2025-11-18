import { Link } from "react-router";

interface HeroImageBgProps {
  actionLink: string;
  bgImage: string;
}

function HeroImageBg({
  actionLink,
  bgImage,
}: HeroImageBgProps) {
  return (
    <section className="md:h-screen h-[80vh] w-full md:px-4 md:py-4">
      <div className="relative h-full w-full md:rounded-[20px] overflow-hidden">
        <img
          src={bgImage}
          alt="Player in an hotel room"
          className="absolute inset-0 w-full h-full object-cover grayscale-0"
        />

        <div className="relative pt-25 z-10 pb-24 px-5 h-full bg-gradient-to-t not-md:to-100% from-black">

          <div className="container m-auto h-full flex not-lg:flex-col-reverse lg:items-end items-center not-lg:justify-start gap-y-10">

            <div className="flex flex-col lg:gap-y-9 gap-y-6 container mx-auto justify-end not-lg:items-center">
              <h3 className="2xl:w-2/3 font-inter font-regular sm:text-2xl text-lg not-lg:text-center">
                Meet the team behind Unlock. United by a shared mission to make world-class sport psychology accessible to every athlete.
              </h3>
              <Link
                to={actionLink}
                className="w-fit border border-neutral-100 hover:bg-neutral-100 hover:text-background transition-colors duration-200 rounded-full md:px-5 px-4 md:py-[10px] py-1 font-inter font-regular md:text-2xl"
                >
                Join the waitlist
              </Link>
            </div>

            <h1 className="font-sora lg:text-6xl xl:text-7xl 2xl:text-8xl sm:text-6xl text-[10vw] not-md:leading-[100%] font-regular flex flex-col lg:text-right text-center">
              <span>People.</span>
              <span>Purpose.</span>
              <span>Performance.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroImageBg;
