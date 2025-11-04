import { useNavigate } from "react-router";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const rotatingWords = ["Potential", "Edge", "Performance"];

function Hero() {
  const navigate = useNavigate();
  const reelRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const reel = reelRef.current;
    if (!reel || !reel.children[0]) return;

    const wordHeight = (reel.children[0] as HTMLElement).clientHeight;

    if (wordHeight === 0) return;

    gsap.set(reel, { y: 0 });

    timelineRef.current = gsap.timeline({
      repeat: -1,
    });

    rotatingWords.forEach((_, index) => {
      timelineRef.current!.to(reel, {
        y: -wordHeight * (index + 1),
        duration: 0.7,
        ease: "power3.inOut",
        delay: 1.9,
      });
    });

    timelineRef.current.add(() => {
      gsap.set(reel, { y: 0 });
    });

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <section className="lg:h-screen container m-auto not-lg:px-6 lg:pb-20 pb-5 lg:pt-50 pt-25 flex not-lg:flex-col gap-y-9 gap-x-39 justify-between">

      <div className="flex-2 flex flex-col gap-y-5  justify-between">
        <h1 className="text-5xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-[120px] text-neutral-100 font-sora font-light flex flex-col ">
          <span className="whitespace-nowrap">Unlock Your</span>

          <div
            className="flex h-[1.2em] gap-x-4"
            style={{ lineHeight: "1.2em" }}
          >
            <div
              className="h-[1.2em] overflow-hidden"
              style={{ lineHeight: "1.2em" }}
            >
              <div ref={reelRef} className="flex flex-col text-neutral-400">
                {[...rotatingWords, rotatingWords[0]].map((word, index) => (
                  <div
                    key={index}
                    className="h-[1.2em] font-light"
                    style={{ lineHeight: "1.2em" }}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </h1>

        <div className="md:gap-y-10 gap-y-5 flex flex-col">
          {/* Subtitle */}
          <p className="text-neutral-100 text-left md:text-2xl text-[16px] font-inter font-regular">
            Unlock provides personalised sport psychology programmes and
            tools, created by leading experts, to help footballers build the
            mental skills to perform at their best.
          </p>

          {/* Call to Action */}
          <div className="grid grid-cols-2 gap-x-3 w-fit md:text-2xl text-[16px] text-neutral-100 font-inter font-regular">
            <button
              onClick={() => navigate("/clubs")}
              className="md:px-5 px-4 md:py-[10px] py-1 border box-border border-blue-600 hover:bg-blue-600  rounded-full transition-colors duration-200"
            >
              Clubs
            </button>
            <button
              onClick={() => navigate("/players")}
              className="md:px-5 px-4 md:py-[10px] py-1 border box-border border-blue-600 hover:bg-blue-600 rounded-full transition-colors duration-200"
            >
              Players
            </button>
          </div>
        </div>
      </div>

      <div className="flex-2 bg-gray-400 rounded-4xl">
        <img
          src="assets/app-screen/unlock-brain-mockup.jpg"
          alt="Hero"
          className="w-full md:h-full h-[400px] object-cover rounded-4xl"
        />
      </div>
    </section>
  );
}

export default Hero;
