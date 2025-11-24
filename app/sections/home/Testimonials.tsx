import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    quote:
      "Unlock delivers mental skills training in such an accessible way – today's athletes are fortunate to have this tool.",
    name: "Matt Jarvis",
    title: "Ex-England & PL player",
    image: "assets/images/matt-jarvis-1.jpeg",
    backgroundImage: "assets/images/matt-jarvis-3.avif",
  },
  {
    quote:
      "Unlock makes mental training stick. It's genuinely useful and I've been able to apply it directly.",
    name: "Ben Mee",
    title: "Brentford F.C.",
    image:
      "https://media.gettyimages.com/id/2181812294/photo/brentford-england-ben-mee-of-brentford-during-the-carabao-cup-fourth-round-match-between.jpg?s=612x612&w=gi&k=20&c=sdOXNqUQQbdF2TtwunYGl6lrL4MzMDluh-TtL9BQrY4=",
    backgroundImage:
      "https://res.cloudinary.com/brentford-fc/image/upload/f_auto,q_auto:best,f_auto,q_100,c_fill,ar_16:9/Ben_Mee_contract_extension_yoagsm.jpg",
  },
  {
    quote:
      "Unlock helps me to do what was unaccessible previously; understand myself & how to perform my best",
    name: "Georgia Stevens",
    title: "Derby County FC",
    image:
      "assets/images/testimonials/georgia-stevens.png",
    backgroundImage:
      "assets/images/testimonials/georgia-stevens.png",
  }
];

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    name: string;
    title: string;
    image: string;
    backgroundImage: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col gap-4 relative w-[320px] not-md:aspect-[4/3] md:w-[500px] md:h-[250px] rounded-2xl overflow-hidden bg-gray-800 text-white shadow-lg">
      <div className="absolute w-full h-full">
        <div className="absolute w-full h-full bg-black/70" />
        <img
          src={testimonial.backgroundImage}
          className="w-full h-full object-cover object-top"
          alt={`${testimonial.name} background`}
          onError={(e) =>
            (e.currentTarget.src =
              "https://placehold.co/400x300/1F2937/9CA3AF?text=Error")
          }
        />
      </div>
      <div className="z-10 items-center flex px-3 pt-3 md:px-8 md:pt-8 flex-grow">
        <span className="text-xl italic font-light">"{testimonial.quote}"</span>
      </div>
      <div className="z-10 flex gap-4 p-4 bg-black/20 backdrop-blur-md ">
        <div className="w-10 h-10 md:w-16 md:h-16 relative rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
          <img
            src={testimonial.image}
            className="object-cover w-full h-full"
            alt={testimonial.name}
            onError={(e) =>
              (e.currentTarget.src =
                "https://placehold.co/100x100/4B5563/F9FAFB?text=Err")
            }
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-md md:text-lg">
            {testimonial.name}
          </span>
          <span className="text-gray-300 font-medium text-xs md:text-sm">
            {testimonial.title}
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
  const cardWidth = windowWidth < 768 ? 320 : 500;
  const gap = 20;

  useLayoutEffect(() => {
    if (!sliderRef.current || !containerRef.current || typeof gsap === "undefined") return;

    const cardCenter = currentIndex * (cardWidth + gap) + cardWidth / 2;
    const targetX = cardWidth - cardWidth / 2 - cardCenter;

    const animConfig = {
      duration: 1,
      ease: "power2.out",
      overwrite: "auto",
    };

    gsap.to(sliderRef.current, {
      x: targetX,
      ...animConfig,
    });

    const children = gsap.utils.toArray(sliderRef.current.children);
    children.forEach((card: any, index: number) => {
      gsap.to(card, {
        scale: index === currentIndex ? 1 : 0.8,
        opacity: index === currentIndex ? 1 : 0.7,
        ...animConfig,
      });
    });
  }, [currentIndex, cardWidth]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && !isHovered) {
      timerRef.current = setInterval(() => {
        goNext();
      }, 3500);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInView, isHovered]);

  return (
    <div className="text-white min-h-screen overflow-hidden px-5 md:p-8 flex items-center justify-center">
      <section className="container m-auto w-full">
        <div className="text-3xl md:text-5xl font-sora md:text-left font-regular">
          Trusted by the best
        </div>

        {/* Slider Section */}
        <div className="relative mb-32">
          <div ref={containerRef} className="w-full">
            <div
              ref={sliderRef}
              className="flex gap-5 items-center md:py-8 py-7 md:pt-14 pt-10"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card-wrapper"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute right-10 -bottom-14 -translate-y-1/2 translate-x-1/2 z-10 flex items-center gap-x-4">
            <button
              onClick={goPrev}
              className="cursor-pointer w-9 h-9 rounded-full border border-neutral-100 flex items-center justify-center hover:scale-110 transition-transform duration-100"
              aria-label="Previous testimonial"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-neutral-100 text-[16px]"
              />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="cursor-pointer w-9 h-9 rounded-full border border-neutral-100 flex items-center justify-center hover:scale-110 transition-transform duration-100"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-neutral-100 text-[16px]"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
