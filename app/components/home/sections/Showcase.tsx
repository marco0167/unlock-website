import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { getWindowDimensions } from "~/utils/window-dimension";

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

function MenuItem({
  item,
  index,
  isActive,
  isAnimating,
  setIsAnimating,
  setActiveIndex,
}: {
  item: { title: string; description: string };
  index: number;
  isActive: boolean;
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
  setActiveIndex: (index: number) => void;
}) {
  const smallSize = useRef<HTMLDivElement>(null);
  const largeSize = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (isActive) return;

    setActiveIndex(index);
  };

  useGSAP(
    () => {
      if (isAnimating) return;
      if (!smallSize.current || !largeSize.current) return;

      setIsAnimating(true);

      const isCurrentlySmall = !smallSize.current.classList.contains("hidden");
      const isCurrentlyLarge = !largeSize.current.classList.contains("hidden");

      const flipId = `item-${index}`;

      smallSize.current.dataset.flipId = flipId;
      largeSize.current.dataset.flipId = flipId;

      const state = Flip.getState([smallSize.current, largeSize.current], {
        props: "borderRadius",
        simple: true,
      });

      if (isActive && !isCurrentlyLarge) {
        gsap.to(smallSize.current.querySelector(".title"), {
          autoAlpha: 0,
          duration: 0.2,
          onComplete: () => {
            smallSize.current?.classList.add("hidden");
            largeSize.current?.classList.remove("hidden");

            Flip.from(state, {
              duration: 0.6,
              ease: "power2.inOut",
              targets: largeSize.current,
            }).fromTo(
              largeSize.current?.querySelector(".description") as Element,
              { autoAlpha: 0 },
              {
                autoAlpha: 1,
                duration: 0.3,
                onComplete: () => {
                  setIsAnimating(false);
                },
              },
              "-=0.1"
            );
          },
        });
      } else if (!isActive && !isCurrentlySmall) {
        gsap.to(largeSize.current.querySelector(".description"), {
          autoAlpha: 0,
          duration: 0.2,
          onComplete: () => {
            largeSize.current?.classList.add("hidden");
            smallSize.current?.classList.remove("hidden");

            Flip.from(state, {
              duration: 0.6,
              ease: "power2.inOut",
              targets: smallSize.current,
            }).fromTo(
              smallSize.current?.querySelector(".title") as Element,
              { autoAlpha: 0, x: 30, y: 20 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 0.4,
                onComplete: () => {
                  // setIsAnimating(false);
                },
              },
              "-=0.4"
            );
          },
        });
      }
    },
    { dependencies: [isActive], scope: container }
  );

  return (
    <div
      ref={container}
      className="relative cursor-pointer"
      onClick={handleClick}
    >
      <div
        data-flip-id={`item-${index}`}
        ref={smallSize}
        className={`small-${index} bg-[#1e2939]  px-5 py-[10px] w-fit max-w-2xs rounded-[20px] z-10`}
      >
        <div className="text-2xl font-inter font-regular title text-neutral-100">
          {item.title}
        </div>
      </div>

      <div
        data-flip-id={`item-${index}`}
        ref={largeSize}
        className={`large-${index} bg-[#1e2939] px-5 py-[10px] w-fit max-w-md overflow-hidden rounded-[12px] hidden`}
      >
        <div className="text-2xl font-inter font-regular description text-neutral-100">
          {item.description}
        </div>
      </div>
    </div>
  );
}

const WINDOW_WIDTH_BREAKPOINT = 768;

function ContentItem({
  item,
  isActive,
  isPrevious,
  isAnimating,
  setIsAnimating,
}: {
  item: { image: string, description: string };
  isActive: boolean;
  isPrevious?: boolean;
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const isMobile = getWindowDimensions().width < WINDOW_WIDTH_BREAKPOINT;

 useGSAP(
  () => {
    if (isAnimating) return;
    if (!container.current) return;

    const descriptionSelector = ".description";

    if (!isActive && !isPrevious) {
      gsap.set(descriptionSelector, { autoAlpha: 0 });
      gsap.set(container.current, {
        autoAlpha: 0,
        x: isMobile ? 0 : 300,
        zIndex: 0
      });
      return;
    }

    // Start animating
    setIsAnimating(true);

    // Mobile animation
    if (isMobile) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      tl
        .to(descriptionSelector, {
          autoAlpha: 0,
          duration: 0.3
        })
        .fromTo(
          container.current,
          {
            autoAlpha: isActive ? 0 : 1,
            scale: isActive ? 0.5 : 1,
          },
          {
            autoAlpha: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.5,
            duration: 0.6,
            ease: "power1.inOut",
            delay: isActive ? 0.6 : 0,
          }
        );

      if (isActive) {
        tl.to(descriptionSelector, {
          autoAlpha: 1,
          duration: 0.6
        });
      }

    // 3. Desktop animation
    } else {
      gsap.fromTo(
        container.current,
        {
          autoAlpha: isActive ? 0 : 1,
          x: isActive ? "10%" : 0,
          scale: isActive ? 0.5 : 1,
        },
        {
          autoAlpha: isActive ? 1 : 0,
          x: isActive ? 0 : "-10%",
          scale: isActive ? 1 : 0.5,
          duration: 0.6,
          delay: isActive ? 0.2 : 0,
          ease: "power1.inOut",
          onComplete: () => {
            if (isActive) {
              gsap.set(container.current, { zIndex: 5 });
            } else {
              gsap.set(container.current, { x: 300, zIndex: 0 });
              setIsAnimating(false);
            }
          },
        }
      );
    }
  },
  { dependencies: [isActive, isPrevious, isMobile], scope: container }
);

  return (
    <div
      ref={container}
      className="w-full h-full absolute md:top-50 left-0 not-md:gap-y-8 not-md:py-7 not-md:px-9"
    >
      <div className="w-full h-full relative">

        <div className="md:hidden bg-[#1e2939] px-3 py-[6px] w-full rounded-[12px] text-[16px] font-inter font-regular description text-neutral-100">
          {item.description}
        </div>
        <img
          src={item.image}
          alt="app screen"
          className="absolute object-cover md:top-1/2 top-1/3 md:left-2/3 left-1/2 -translate-x-1/2 md:-translate-y-1/2  h-auto md:max-h-full md:w-auto w-[80%] md:max-w-full max-w-[300px]"
          />
      </div>
    </div>
  );
}

function Showcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const previousIndex = useRef<number>(-1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const buttonBlocked = useRef<boolean>(false);

  gsap.registerPlugin(Flip);

  return (
    <section className="md:pt-35 pt-20 md:pb-60 pb-30 bg-linear-to-t from-neutral-800 to-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl xl:text-[70px] font-sora font-regular text-center text-neutral-100 flex flex-col lg:w-4/6 m-auto md:mb-37 mb-15">
          Learn, build habits, apply tools, and keep progressing.
          <span className="text-neutral-400">All in one place.</span>
        </h2>
      </div>

      <div className="w-full container mx-auto md:h-[85vh] h-[400px] md:py-14 md:pt-22 text-3xl md:text-5xl font-bold px-6">
        <div className=" w-full h-full rounded-4xl overflow-hidden relative bg-background flex items-center md:justify-between md:px-16 not-md:px-4">
          <div className="not-md:hidden w-fit z-10 h-fit flex flex-col gap-8">
            {menuItems.map((item, index) => {
              return (
                <MenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  isActive={activeIndex === index}
                  setActiveIndex={(index) => {
                    previousIndex.current = activeIndex;
                    setActiveIndex(index);
                  }}
                  isAnimating={isAnimating}
                  setIsAnimating={setIsAnimating}
                />
              );
            })}
          </div>

          <div className="w-fit h-full">
            {menuItems.map((item, index) => {
              return (
                <ContentItem
                  key={item.title}
                  item={item}
                  isActive={activeIndex === index}
                  isPrevious={previousIndex.current === index}
                  isAnimating={isAnimating}
                  setIsAnimating={setIsAnimating}
                />
              );
            })}
          </div>

          <div className="z-10 not-md:flex not-md:justify-between not-md:w-full pt-30">
            <div
              className="cursor-pointer w-9 h-9 not-md:rotate-270 rounded-full bg-neutral-800 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-100"
              onClick={() => {
                if (isAnimating) return;
                if (buttonBlocked.current) return;

                buttonBlocked.current = true;
                setTimeout(() => {
                  buttonBlocked.current = false;
                }, 800);

                setActiveIndex((prev) => {
                  previousIndex.current = prev;
                  if (prev === 0) {
                    return menuItems.length - 1;
                  }
                  return prev - 1;
                });
              }}
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                className="text-neutral-100 text-[16px]"
              />
            </div>
            <div
              className="cursor-pointer w-9 h-9 not-md:rotate-270 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 transition-transform duration-100"
              onClick={() => {
                if (isAnimating) return;
                if (buttonBlocked.current) return;

                buttonBlocked.current = true;
                setTimeout(() => {
                  buttonBlocked.current = false;
                }, 800);

                setActiveIndex((prev) => {
                  previousIndex.current = prev;
                  if (prev === menuItems.length - 1) {
                    return 0;
                  }
                  return prev + 1;
                });
              }}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-neutral-100 text-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
