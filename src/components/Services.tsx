import { useRef } from "react";
import { serviceCards } from "../constant";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = Array.from(scrollRef.current?.children || []);

    cards.forEach((card) => {
      gsap.from(card, {
        x: "-100%",
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "70% bottom",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
    })
  }, {scope: scrollRef});

  return (
    <div
      id="services"
      className="page-view bg-bgPrimaryLt flex justify-center items-center"
    >
      <div
        ref={scrollRef}
        className="w-5/6 grid gap-8 grid-cols-2 max-md:grid-cols-1
        max-sm:w-full max-sm:gap-4"
      >
        {serviceCards.map(({ id, title, text }) => (
          <div key={id} className="service-card">
            <p className="service-title font-sz-3">{title}</p>
            <p className="service-text font-sz-2">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// useGSAP(
//   () => {
//     const screen = scrollRef.current;
//     gsap.from(".service-card", {
//       x: "-100%",
//       opacity: 0,
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: screen,
//         start: "top 80%",
//         end: "bottom bottom",
//         scrub: true,
//         toggleActions: "play none none reverse",
//       },
//     });
//   },
//   { scope: scrollRef }
// );
