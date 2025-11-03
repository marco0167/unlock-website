import { Link } from "react-router";

function ChooseJourney() {
  return (
    <section className="bg-neutral-100 flex flex-col gap-16 pt-20 md:pt-48 not-md:px-4">
      <div className="container mx-auto flex flex-col items-center gap-y-11">
        <div className="text-3xl md:text-[46px] font-sora font-regular text-background md:w-2/3 text-center">
          Unlock is built for ambitious players and forward-thinking clubs.
          <span className="text-neutral-400"> Choose your path.</span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 md:gap-x-3">
          <Link
            to="/clubs"
            className="border-1 text-center rounded-full text-background py-[10px] px-5 font-inter font-regular text-xl md:text-2xl hover:bg-background hover:text-neutral-200 transition duration-200"
          >
            Clubs
          </Link>
          <Link
            to="/players"
            className="border-1 text-center rounded-full text-background py-[10px] px-5 font-inter font-regular text-xl md:text-2xl hover:bg-background hover:text-neutral-200 transition duration-200"
          >
            Players
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ChooseJourney;
