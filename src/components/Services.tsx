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
          end: "top 65%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
    })
  }, {scope: scrollRef});

  return (
    <main
      id="services"
      className="page-view bg-bgPrimaryLt justify-center items-center"
    >
      <div
        ref={scrollRef}
        className="services__wrapper"
      >
        {serviceCards.map(({ id, title, text }) => (
          <article key={id} className="service__card">
            <h4 className="service__card-title">{title}</h4>
            <p className="service__card-text">{text}</p>
          </article>
        ))}
      </div>
    </main>
  );
};