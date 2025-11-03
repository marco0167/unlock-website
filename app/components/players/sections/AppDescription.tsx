import FeatureItem from "~/components/general/FeatureItem";
import { Link } from "react-router";

function AppDescription() {
  return (
    <section className="pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-21">
          <FeatureItem
            title="This isn’t just content. It’s a guided journey."
            description="With Unlock, you’ll train your mind like you train your body: structured programmes, powerful sessions, and tools to help you build daily habits that make progress stick."
            image="assets/app-screen/why-1.png"
          />
          <FeatureItem
            title="Built by world-leading sport psychologists"
            description="Tools you can use before training, matches, or in high-pressure moments. Levels that show your progress and keep you moving forward."
            image="assets/app-screen/why-1.png"
          />
        </div>
      </div>
        <div className="pt-38 pb-46 flex flex-col gap-10 items-center bg-gradient-to-t from-neutral-800 to-60%">
          <h2 className="text-[70px] font-sora font-regular">
            Find your mental edge.
          </h2>
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
