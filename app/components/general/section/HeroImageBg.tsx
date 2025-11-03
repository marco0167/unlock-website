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
    <section className="h-screen w-full relative pt-25">
      <img
        src={bgImage}
        alt="Player in an hotel room"
        className="absolute inset-0 w-full h-full object-cover "
      />

      <div className="relative z-10 text-white pb-24  h-full bg-gradient-to-t from-black">
        <div className="flex flex-col gap-y-13 container mx-auto justify-end h-full ">

          <h1 className="font-sora sm:text-7xl font-regular w-2/3">{title}</h1>
          <Link
            to={actionLink}
            className="inline-block w-fit border border-neutral-100 text-neutral-100 hover:bg-neutral-100 hover:text-background transition-colors duration-200 rounded-full px-5 py-[10px] font-inter font-regular text-2xl"
            >
            {actionTitle}
          </Link>
          </div>
      </div>
    </section>
  );
}

export default HeroImageBg;
