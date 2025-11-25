import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function FeatureItem({
  title,
  description,
  image,
  imgContainerClass = "",
  imgClass = "",
}: {
  title: string;
  description: string;
  image: string;
  imgContainerClass?: string;
  imgClass?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isEven =
        containerRef.current
          ?.computedStyleMap()
          .get("transform-origin")
          ?.toString() === "0px 0px";

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, rotate: isEven ? 10 : -10 },
        {
          opacity: 1,
          rotate: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        imgRef.current,
        { y: 200 },
        {
          y: 0,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        txtRef.current,
        { y: 200 },
        {
          y: 0,
          scrollTrigger: {
            trigger: txtRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 3,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="origin-top-right nth-[even]:origin-top-left flex not-md:flex-col justify-between items-center w-full gap-9 md:gap-21 md:nth-[even]:flex-row-reverse "
    >
      <div
        ref={imgRef}
        className={`md:rounded-[46px] rounded-[20px] not-md:w-[100%] md:w-1/2 max-w-[800px] md:h-120 mb-4 ${imgContainerClass}`}
      >
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover rounded-lg ${imgClass}`}
        />
      </div>

      <div ref={txtRef} className="flex flex-col gap-6 md:w-1/2">
        <span className="text-[26px] md:text-5xl font-sora font-regular whitespace-pre-line">
          {title}
        </span>

        <p className="md:text-2xl font-inter font-regular">{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
