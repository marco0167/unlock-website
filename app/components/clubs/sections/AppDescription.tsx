import FeatureItem from "~/components/general/FeatureItem";
import { Link } from "react-router";

function AppDescription() {
  return (
    <section className="pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-21">
          <FeatureItem
            title="We support clubs in delivering mental training"
            description="Our app delivers world-class programmes directly to athletes, while supporting your staff in reinforcing those skills."
            image="assets/images/dashboard-1.png"
            imageClass="px-13 py-9 bg-neutral-400"
          />
          <FeatureItem
            title="Player-First, Always"
            description="We put trust and reputation at the heart of everything we do. Unlock is built on a player-first approach, with privacy and wellbeing protected at every step."
            image="assets/images/dashboard-2.png"
            imageClass="px-13 py-9 bg-neutral-400"
          />
        </div>
      </div>
        <div className="pt-38 pb-46 flex flex-col gap-10 items-center bg-gradient-to-t from-neutral-800 to-60%">

          <div className="flex flex-col items-center">
            <h2 className="text-[70px] font-sora font-regular">
              Support Your Players
            </h2>
            <p className="font-inter font-regular text-2xl w-1/2 text-center">
              We’re partnering with a select group of clubs who share our vision to help every athlete access the mental skills training they need to perform at their best.
            </p>
          </div>
          <Link
            to="/waitlist"
            className="inline-block w-fit border border-blue-600 text-neutral-100 hover:bg-blue-600 transition-colors duration-200 rounded-full px-5 py-[10px] font-inter font-regular text-2xl"
          >
            Join the waitlist
          </Link>
        </div>
    </section>
  );
}

export default AppDescription;
