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
            title="Supporting clubs in delivering mental training."
            description="Mental training programmes built by elite sport psychologists, supporting your staff to help players think, feel, and perform their best."
            image="assets/images/dashboard-1.png"
            imageClass="md:px-13 md:py-9 md:bg-neutral-400"
          />
          <FeatureItem
            title="Player-First, Always"
            description="We put trust and reputation at the heart of everything we do. Unlock is built on a player-first approach, with privacy and wellbeing protected at every step."
            image="assets/images/dashboard-2.png"
            imageClass="md:px-13 md:py-9 md:bg-neutral-400"
          />
        </div>
      </div>
      <div className="md:pt-38 md:pb-46 py-30 px-5 flex flex-col gap-10 items-center bg-gradient-to-t from-neutral-800 to-90%">
        <div className="flex flex-col md:gap-y-5 gap-y-4 items-center">
          <h2 className="md:text-[70px] text-3xl font-sora font-regular text-center">
            Support Your Players
          </h2>
          <p className="font-inter font-regular md:text-2xl text-center md:w-1/2">
            We’re partnering with a select group of clubs who share our vision
            to help every athlete access the mental skills training they need to
            perform at their best.
          </p>
        </div>

        <Button onClick={() => navigate("/form-contact")} label="Partner with us" />
      </div>
    </section>
  );
}

export default AppDescription;
