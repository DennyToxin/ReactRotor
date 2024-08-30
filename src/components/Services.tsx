import React from "react";
import { serviceCards } from "../constant";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = Array.from(scrollRef.current?.children || []);

    cards.forEach((card) => {
      gsap.from(card, {
        x: "-100%",
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: card,
          start: "bottom bottom",
          end: "top 65%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
    })
  }, {scope: scrollRef});

  return (
    <div
      id="services"
      className="full-screen overflow-hidden bg-canvas flex flex-col
      justify-center items-center gap-10 max-sm:gap-4"
      ref={scrollRef}
    >
      {serviceCards.map(({ id, title, text }) => (
        <div key={id} className="wrapper">
          <div className="services-title">{title}</div>
          <div className="services-text">{text}</div>
        </div>
      ))}
    </div>
  );
};
