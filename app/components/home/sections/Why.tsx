import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FeatureItem from "~/components/general/FeatureItem";

const InfiniteScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<HTMLSpanElement[]>([]);

  const [resizeTick, setResizeTick] = useState(0);

  useEffect(() => {
    const handleResize = () => setResizeTick(p => p + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      const spans = spansRef.current;
      if (!containerRef.current || !wrapper || spans.length === 0) return;

      const C1 = "#F2F4F7";
      const C2 = "#98A2B3";
      const C3 = "#475467";
      const C_HIDDEN = "#171717";

      const listHeight = spans[0].parentElement?.offsetHeight || 0;
      const gap = 16;
      const totalDistance = listHeight + gap;
      const step = totalDistance / 3;

      gsap.set(containerRef.current, { height: listHeight, overflow: 'hidden' });

      gsap.set(wrapper, { y: 0 });

      gsap.set(spans, { color: C_HIDDEN });
      gsap.set(spans[0], { color: C1 });
      gsap.set(spans[1], { color: C2 });
      gsap.set(spans[2], { color: C3 });

      const tl = gsap.timeline({ repeat: -1 });
      const moveSpeed = 1;
      const pause = 1;
      const easeType = "elastic.out(0.4,0.3)";

      tl
        .to({}, { duration: pause }) // Wait
        .to(wrapper, { y: -step, duration: moveSpeed, ease: easeType }, "step1")
        .to(spans[0], { color: C_HIDDEN, duration: moveSpeed, ease: easeType }, "step1")
        .to(spans[1], { color: C1, duration: moveSpeed, ease: easeType }, "step1")
        .to(spans[2], { color: C2, duration: moveSpeed, ease: easeType }, "step1")
        .to(spans[3], { color: C3, duration: moveSpeed, ease: easeType }, "step1")

        .to({}, { duration: pause })
        .to(wrapper, { y: -step * 2, duration: moveSpeed, ease: easeType }, "step2")
        .to(spans[1], { color: C_HIDDEN, duration: moveSpeed, ease: easeType }, "step2")
        .to(spans[2], { color: C1, duration: moveSpeed, ease: easeType }, "step2")
        .to(spans[3], { color: C2, duration: moveSpeed, ease: easeType }, "step2")
        .to(spans[4], { color: C3, duration: moveSpeed, ease: easeType }, "step2")

        .to({}, { duration: pause })
        .to(wrapper, { y: -totalDistance, duration: moveSpeed, ease: easeType }, "step3")
        .to(spans[2], { color: C_HIDDEN, duration: moveSpeed, ease: easeType }, "step3")
        .to(spans[3], { color: C1, duration: moveSpeed, ease: easeType }, "step3")
        .to(spans[4], { color: C2, duration: moveSpeed, ease: easeType }, "step3")
        .to(spans[5], { color: C3, duration: moveSpeed, ease: easeType }, "step3");

    }, containerRef);

    return () => ctx.revert();
  }, [resizeTick]);

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !spansRef.current.includes(el)) {
      spansRef.current.push(el);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[400px] w-full">
      <div ref={containerRef} className="relative lg:w-4/6 m-auto">
        <div ref={wrapperRef} className="flex flex-col gap-4">

          <h2 className="text-[50px] md:text-[70px] font-sora font-regular text-center leading-none flex flex-col gap-y-4">
            <span ref={addToRefs}>Private.</span>
            <span ref={addToRefs}>Personalised.</span>
            <span ref={addToRefs}>Accessible.</span>
          </h2>

          <h2 className="text-[50px] md:text-[70px] font-sora font-regular text-center leading-none flex flex-col gap-y-4">
            <span ref={addToRefs}>Private.</span>
            <span ref={addToRefs}>Personalised.</span>
            <span ref={addToRefs}>Accessible.</span>
          </h2>

        </div>
      </div>
    </div>
  );
};

function Why() {
  return (
    <section className="container m-auto px-5">
      <InfiniteScrollText />

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
