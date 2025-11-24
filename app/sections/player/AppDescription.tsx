import FeatureItem from "~/components/FeatureItem";
import { useNavigate } from "react-router";
import Button from "~/components/Button";

function AppDescription() {
  const navigate  = useNavigate();
  return (
    <section className="pt-32">
      <div className="container mx-auto not-md:px-5">
        <div className="flex flex-col gap-y-21">
          <FeatureItem
            title="This isn’t just content. It’s a guided journey."
            description="With Unlock, you’ll train your mind like you train your body: structured programmes, powerful sessions, and tools to help you build daily habits that make progress stick."
            image="assets/app-screen/why-1.png"
            imageClass="md:bg-neutral-800"
          />
          <FeatureItem
            title="Built by world-leading sport psychologists"
            description="Tools you can use before training, matches, or in high-pressure moments. Levels that show your progress and keep you moving forward."
            image="assets/app-screen/why-1.png"
            imageClass="md:bg-neutral-800"
          />
        </div>
      </div>
      <div className="pt-38 pb-46 px-5 flex flex-col gap-10 items-center bg-gradient-to-t from-neutral-800 to-90%">
        <h2 className="md:text-[70px] text-3xl font-sora font-regular text-center">
          Find your mental edge.
        </h2>
        <Button onClick={() => navigate("/waitlist")} label="Apply for Access" />
      </div>
    </section>
  );
}

export default AppDescription;
