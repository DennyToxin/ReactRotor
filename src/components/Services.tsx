import { useRef } from "react";
import { serviceCards } from "../constant";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { home, serv2, serv3, serv4 } from "../utils";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <main
      id="services"
      className="max-xl:h-fit page-view bg-bgPrimaryLt justify-center items-center"
    >
      <div ref={scrollRef} className="service__wrapper">
        <article className="service__card">
          <div className="service__text">
            <h4 className="service__card-title">{serviceCards[0].title}</h4>
            <p className="service__card-text">{serviceCards[0].text}</p>
          </div>
          <div className="service__image-wrapper">
            <img className="service__image" src={serv2} />
          </div>
        </article>
        <article className="service__card">
          <div className="service__text">
            <h4 className="service__card-title">{serviceCards[1].title}</h4>
            <p className="service__card-text">{serviceCards[1].text}</p>
          </div>
          <div className="service__image-wrapper">
            <img className="service__image" src={home} />
          </div>
        </article>
        <article className="service__card">
          <div className="service__text">
            <h4 className="service__card-title">{serviceCards[2].title}</h4>
            <p className="w-3/4 max-xl:w-full service__card-text">{serviceCards[2].text}</p>
          </div>
          <div className="absolute w-1/2 h-full right-4 bottom-4 max-2xl:w-1/3 max-xl:hidden">
            <div className="flex w-full h-full items-end justify-end">
              <img className="w-full object-scale-down" src={serv3} />
            </div>
          </div>
        </article>
        <article className="service__card">
          <div className="service__text">
            <h4 className="service__card-title">{serviceCards[3].title}</h4>
            <p className="service__card-text">{serviceCards[3].text}</p>
          </div>
          <div className="absolute w-1/2 h-full right-4 bottom-4 max-2xl:w-1/3 max-xl:hidden">
            <div className="flex w-full h-full items-end justify-end">
              <img className="w-full object-scale-down" src={serv4} />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};
