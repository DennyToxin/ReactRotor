import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { home, mail, phone } from "../utils";

export const Home = () => {
  useGSAP(() => {
    gsap.from(".home__text", {
      y: 20,
      delay: 1.5,
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
      ease: "power2.out",
    });

    gsap.from(".home__header", {
      opacity: 0,
      delay: 1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".home__image", {
      y: "100%",
      delay: 1.5,
      duration: 1.5,
      ease: "power2.out",
    });
  });

  return (
    <main
      id="home"
      className="page-view bg-bgPrimaryLt justify-center items-end"
    >
      <section
        className="relative w-5/6 h-5/6 max-sm:w-full flex
        max-md:justify-center"
      >
        <header className="home__header">
          <h2 className="home__title home__text text-fontPrimaryLt">
            RotorPenza
          </h2>
          <h3 className="home__subtitle home__text text-fontPrimaryLt">
            Производство и ремонт формующих роторов по России и СНГ
          </h3>
          <div className="flex flex-col home__text my-3 gap-2">
            <a href="tel:+79273718606" className="home__contacts">
              <img src={phone} alt="phone" />
              +7 (927) 371 86 06
            </a>
            <a href="mailto:rotorpenza@yandex.ru" className="home__contacts">
              <img src={mail} alt="mail" />
              rotorpenza@ya.ru
            </a>
          </div>
          <div className="home__text mt-2">
            <a className="button" href="#services">
              Подробнее
            </a>
          </div>
        </header>
        <div
          className="w-2/3 flex justify-center
          max-md:w-full"
        >
          <img src={home} className="home__image" />
        </div>
      </section>
    </main>
  );
};
