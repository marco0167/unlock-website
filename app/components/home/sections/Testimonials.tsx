import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { getWindowDimensions } from "~/utils/window-dimension";

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
      "The mental edge is what separates the good from the great. This platform has transformed how I prepare for high-pressure situations.",
    name: "Cristiano Ronaldo",
    title: "5x Ballon d'Or Winner",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2024-08/240822-Cristiano-Ronaldo-ch-1324-5a0450.jpg",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s",
  },
  {
    quote:
      "Having a strong mental game is just as important as physical training. This platform helped me elevate both.",
    name: "Lionel Messi",
    title: "World Cup Winner",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-10/251027-lionel-messi-nightly-02-cs-d18258.jpg",
    backgroundImage:
      "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg",
  },
  {
    quote:
      "Mental resilience and focus are key to performing at the highest level. This tool has been invaluable in my career.",
    name: "Francesco Totti",
    title: "Serie A Legend",
    image:
      "https://staticfanpage.akamaized.net/wp-content/uploads/sites/27/2024/10/totti-ritorno-serie-a-1729505300274-1200x675.jpg",
    backgroundImage:
      "https://images2.corriereobjects.it/methode_image/2018/10/31/Cultura/Foto%20Cultura%20-%20Trattate/4317.0.973995199-kVTH-U3050843134841O6G-1224x916@Corriere-Web-Sezioni-593x443.jpg?v=20181031204958",
  },
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
          className="w-full h-full object-cover object-center"
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
          <span className="font-semibold text-md md:text-lg">{testimonial.name}</span>
          <span className="text-gray-300 font-medium text-xs md:text-sm">
            {testimonial.title}
          </span>
        </div>
      </div>
    </div>
  );
};

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const windowWidth = getWindowDimensions().width;
  const cardWidth = windowWidth < 768 ? 320 : 500;

  const gap = 32;

  useLayoutEffect(() => {
    if (
      !sliderRef.current ||
      !containerRef.current ||
      typeof gsap === "undefined"
    )
      return;

    const viewportWidth = containerRef.current.clientWidth;

    const cardCenter = currentIndex * (cardWidth + gap) + cardWidth / 2;
    const targetX = viewportWidth / 2 - cardCenter;

    gsap.to(sliderRef.current, {
      x: targetX,
      duration: 1,
      ease: "power3.out",
    });

    gsap.utils.toArray(sliderRef.current?.children).forEach((card, index) => {
      gsap.to(card, {
        scale: index === currentIndex ? 1 : 0.8,
        opacity: index === currentIndex ? 1 : 0.7,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, [currentIndex]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="text-white min-h-screen overflow-hidden px-5 md:p-8 flex items-center justify-center">
      <section className="container m-auto w-full">
        <div className="text-3xl md:text-5xl font-sora md:w-3/5 lg:w-2/5  md:text-left font-regular">
          Trusted by the best
        </div>

        {/* Slider Section */}
        <div className="relative mt-6 md:mt-8 mb-32">
          <div ref={containerRef} className="w-full ">
            <div ref={sliderRef} className="flex gap-8 items-center py-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-wrapper ">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute right-10 -bottom-20 -translate-y-1/2 translate-x-1/2 z-10 flex items-center gap-x-4">
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
}
export default Testimonials;
