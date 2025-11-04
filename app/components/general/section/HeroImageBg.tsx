import { Link } from "react-router";

interface HeroImageBgProps {
  title: string;
  actionTitle: string;
  actionLink: string;
  bgImage: string;
}

function HeroImageBg({
  title,
  actionTitle,
  actionLink,
  bgImage,
}: HeroImageBgProps) {
  return (
    <section className="md:h-screen h-[80vh] w-full md:px-4 md:pt-4">
      <div className="relative h-full w-full pt-25 md:rounded-[20px] overflow-hidden">
        <img
          src={bgImage}
          alt="Player in an hotel room"
          className="absolute inset-0 w-full h-full object-cover "
        />

        <div className="relative z-10 text-white pb-24 px-5 h-full bg-gradient-to-t not-md:to-100% from-black">
          <div className="flex flex-col md:gap-y-13 gap-y-6 container mx-auto justify-end h-full not-md:items-center">

            <h1 className="font-sora md:text-7xl text-2xl font-regular md:w-2/3 not-md:text-center">{title}</h1>
            <Link
              to={actionLink}
              className="inline-block w-fit border border-neutral-100 text-neutral-100 hover:bg-neutral-100 hover:text-background transition-colors duration-200 rounded-full md:px-5 px-4 md:py-[10px] py-1 font-inter font-regular md:text-2xl"
              >
              {actionTitle}
            </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroImageBg;
