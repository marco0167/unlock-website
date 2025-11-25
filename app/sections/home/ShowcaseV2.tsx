import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { isWindowBelow768 } from "~/utils/window-dimension";

const menuItems = [
  {
    title: "Programmes",
    description:
      "Curated mental performance programmes designed by experts to help you elevate your game.",
    image: "assets/app-screen/phone_1.png",
  },
  {
    title: "Daily habits",
    description:
      "Build healthy daily habits with our expert guidance and support.",
    image: "assets/app-screen/phone_2.png",
  },
  {
    title: "Tools",
    description:
      "Access a suite of tools and resources to help you optimize your mental performance.",
    image: "assets/app-screen/phone_3.png",
  },
  {
    title: "Progress",
    description:
      "Track your progress and stay motivated with our built-in analytics and insights.",
    image: "assets/app-screen/phone_4.png",
  },
];

function ShowcaseV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const mqtTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const mqtRevTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const mobileScreensRef = useRef<HTMLDivElement>(null);

  const duplicatedItems = [...menuItems, ...menuItems, ...menuItems];

  useLayoutEffect(() => {
    if (isWindowBelow768()) {
      const ctxMS = gsap.context(() => {
        if (!mobileScreensRef.current) return;
        if (!progressBarRef.current) return;

        const progressBar = progressBarRef.current
          .firstElementChild as HTMLDivElement;

        const screens: HTMLDivElement[] = gsap.utils.toArray(
          mobileScreensRef.current.children
        );

        gsap.set(screens, { autoAlpha: 0, y: 50 });
        screens.forEach((s) => gsap.set(s.lastChild, { autoAlpha: 0 }));

        const tl = gsap.timeline({ repeat: -1 });
        const progressBarTl = gsap.timeline({ repeat: -1 });

        progressBarTl
          .to(progressBar, {
            width: 0,
            duration: 6.7,
            ease: "none",
          })
          .set(progressBar, { opacity: 0 })
          .to(progressBar, {
            width: "100%",
            duration: 0.7,
            opacity: 1,
            ease: "power2.inOut",
          });

        screens.forEach((screen, index) => {
          tl.to(screen, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          })
            .to(
              screen.lastChild,
              {
                autoAlpha: 1,
                duration: 0.5,
              },
              "<=0.2"
            )

            .to({}, { duration: 6 }) // Pause

            .to(screen.lastChild, {
              autoAlpha: 0,
              duration: 0.5,
            })
            .to(
              screen,
              {
                autoAlpha: 0,
                y: 50,
                duration: 0.5,
              },
              "<=0.2"
            );
        });
      }, mobileScreensRef);

      return () => {
        ctxMS.revert();
      };
    }
    const totalHeight = containerRef.current?.scrollHeight || 0;
    const scrollDistance = totalHeight / 3;

    const ctxMqt = gsap.context(() => {
      mqtTimelineRef.current = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      });

      mqtTimelineRef.current.to(".marquee-track", {
        y: -scrollDistance,
        duration: 40,
      });
    }, containerRef);

    const ctxMqtRev = gsap.context(() => {
      mqtRevTimelineRef.current = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      });

      mqtRevTimelineRef.current.to(".reverse-marquee-track", {
        y: scrollDistance,
        duration: 50,
      });
    }, containerRef);

    const ctxTxt = gsap.context(() => {
      const descriptions =
        textContainerRef.current?.querySelectorAll(".image-description");
      let currentIndex = 0;

      if (descriptions && descriptions.length > 0) {
        gsap.set(descriptions, { autoAlpha: 0 });
        gsap.set(descriptions[0], { autoAlpha: 1 });

        const changeText = () => {
          gsap.to(descriptions[currentIndex], {
            autoAlpha: 0,
            duration: 0.5,
            onComplete: () => {
              currentIndex = (currentIndex + 1) % descriptions.length;
              gsap.to(descriptions[currentIndex], {
                autoAlpha: 1,
                duration: 0.5,
              });
            },
          });
        };

        const intervalId = setInterval(changeText, 12000);

        return () => clearInterval(intervalId);
      }
    }, textContainerRef);

    return () => {
      ctxMqt.revert();
      ctxMqtRev.revert();
      ctxTxt.revert();
    };
  }, [menuItems]);

  return (
    <section className="md:pt-35 pt-20 md:pb-60 pb-30 bg-linear-to-t from-neutral-800 to-background">
      <div className="container mx-auto not-lg:px-6">
        <h2 className="text-[5vw] sm:text-3xl md:text-5xl lg:text-[70px] font-sora font-regular text-center text-neutral-100 flex flex-col xl:w-5/6 m-auto md:mb-37 mb-15">
          Learn, build habits, progress, perform.
          <span className="text-neutral-400">All in one place.</span>
        </h2>
      </div>

      <div className="w-full container mx-auto md:h-[85vh] h-auto md:py-14 lg:pt-22 not-lg:px-6 text-3xl md:text-5xl font-bold">
        <div className="w-full h-full rounded-4xl overflow-hidden relative not-md:p-2 flex items-center md:justify-between not-md:bg-background md:bg-gradient-to-tr md:from-background to-70% to-transparent">
          {/* Rotated Wrapper */}
          <div
            ref={containerRef}
            className="not-md:hidden w-max z-10 flex pl-4 -rotate-45 overflow-hidden absolute top-1/2 left-4/6  transform  -translate-y-1/2"
          >
            <div className="w-[100vw] h-[150vh] rotate-45 absolute xl:top-1120 top-1180 left-50 -translate-y-1/2 -translate-x-1/2 bg-linear-to-t from-neutral-800 to-background" />
            {/* The Moving Track */}
            <div className="marquee-track flex flex-col gap-8">
              {duplicatedItems.map((item, index) => {
                return (
                  <div key={`${item.title}-${index}`} className="flex-shrink-0">
                    <img
                      className="w-[250px] lg:w-[300px] xl:w-[400px] object-contain"
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>

            {/* The Reverse Moving Track */}
            <div className="reverse-marquee-track flex flex-col gap-8 rotate-180 ">
              {duplicatedItems.map((item, index) => {
                return (
                  <div key={`${item.title}-${index}`} className="flex-shrink-0">
                    <img
                      className="w-[250px] lg:w-[300px] xl:w-[400px] object-contain"
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* The Descriptions Container */}
          <div
            ref={textContainerRef}
            className="xl:w-1/2 w-2/3 h-full absolute left-12 font-inter font-medium text-2xl text-neutral-100 not-md:hidden"
          >
            <div className="image-description absolute xl:top-2/5 bottom-12 flex flex-col gap-y-8">
              <h3 className="text-5xl font-sora font-bold">Title</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                sunt corrupti vero dolorem, odio, possimus quidem temporibus
                accusantium
              </p>
            </div>
          </div>

          {/* Mobile Screens */}
          <div
            ref={progressBarRef}
            className="md:hidden xs:w-[230px] w-[46vw] h-[3px] bg-neutral-400 rounded-full absolute top-5 left-1/2 -translate-x-1/2 overflow-hidden"
          >
            <div className="w-full h-full bg-white rounded-full "></div>
          </div>

          <div
            ref={mobileScreensRef}
            className="md:hidden block xs:h-[600px] h-[130vw] w-full relative mt-6 overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="h-full w-auto absolute top-0 left-1/2 -translate-x-1/2"
              >
                <img src={item.image} className="h-full w-auto max-w-none" />
                <div className="absolute opacity-0 bottom-[5vw] xs:bottom-[26px] left-1/2 -translate-x-1/2 xs:w-[254px] not-xs:w-[55vw] h-full">
                  <div className="bg-gradient-to-t from-black/100 to-60% to-transparent not-xs:px-2 h-full text-center flex flex-col justify-end xs:rounded-4xl rounded-[8vw] pb-5">
                    <h3 className="xs:text-2xl text-xl font-sora font-bold xs:mb-4 mb-2">
                      {item.title}
                    </h3>
                    <p className="xs:text-base text-sm font-inter font-medium text-neutral-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseV2;
