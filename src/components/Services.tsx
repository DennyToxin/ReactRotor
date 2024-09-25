import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { serviceCards } from "../constant";

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
      className="page-view justify-center items-center bg-bgPrimaryLt max-sm:h-fit max-sm:py-16"
    >
      <div ref={scrollRef} className="services__wrapper">
        <div className="services__tablet">
          <article className="services__card">
            <div className="services__text">
              <h3 className="services__title">{serviceCards[0].title}</h3>
              <p className="services__description">{serviceCards[0].text}</p>
            </div>
            <div className="services__image">
              <img src={serviceCards[0].src} />
            </div>
          </article>
          <article className="services__card">
            <div className="services__text">
              <h3 className="services__title">{serviceCards[1].title}</h3>
              <p className="services__description">{serviceCards[1].text}</p>
            </div>
            <div className="services__image">
              <img src={serviceCards[1].src} />
            </div>
          </article>
        </div>
        <div className="services__tablet">
          <article className="services__card">
            <div className="services__text">
              <h3 className="services__title">{serviceCards[2].title}</h3>
              <p className="services__description">{serviceCards[2].text}</p>
            </div>
            <div className="services__image">
              <img src={serviceCards[2].src} />
            </div>
          </article>
          <article className="services__card">
            <div className="services__text">
              <h3 className="services__title">{serviceCards[3].title}</h3>
              <p className="services__description">{serviceCards[3].text}</p>
            </div>
            <div className="services__image">
              <img className="rotate-90" src={serviceCards[3].src} />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};
