import FeatureItem from "~/components/general/FeatureItem";

function Why() {
  return (
    <section className="container m-auto px-5">
      <div className="container mx-auto py-20 md:py-42">
        <h2 className="text-[50px] md:text-[70px] font-sora font-regular text-center leading-none text-neutral-100 flex flex-col gap-y-4 lg:w-4/6 m-auto">
          <span>Private.</span>
          <span className="text-neutral-400 paddin">Personalised.</span>
          <span className="text-neutral-600 paddin">Accessible.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-y-32 md:gap-36 items-center md:pt-4">
        <FeatureItem
          title="Built for the Demands of Today’s Game."
          description="Players know performance isn’t just physical. Unlock gives you the structure, the tools, and the guidance to train your mind like the world’s top athletes."
          image="assets/app-screen/why-1.png"
          imageClass="md:bg-neutral-800"
          />

        <FeatureItem
          title="More Than an App. A New Standard."
          description="Our mission is simple: to make mental performance training a standard, not a secret. We give every athlete access to world-leading sport psychology."
          image="assets/app-screen/why-1.png"
          imageClass="md:bg-neutral-800"
        />
      </div>
    </section>
  );
}

export default Why;
