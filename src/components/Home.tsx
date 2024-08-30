import { useGSAP } from "@gsap/react";
import { linkList } from "../constant";
import gsap from "gsap";
import { photo2, rotorLogo } from "../utils";

export const Home = () => {
  useGSAP(() => {
    gsap.from("#header", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.1,
    });

    gsap.from(".home-text", {
      delay: 0.5,
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.from(".image", {
      delay: 0.5,
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <div
      className="full-screen overflow-hidden bg-canvas
      flex flex-col items-center"
    >
      <header className="absolute w-full flex items-center px-5 sm:px-10 py-5">
        <nav className="w-full flex justify-between items-center">
          <div id="header" className="flex justify-center ml-10">
            <img src={rotorLogo} width={18} height={18} alt="logo" />
            <a href="/" className="logo link ml-2">
              RotorPenza
            </a>
          </div>
          <div
            id="header"
            className="flex justify-center gap-10 mr-10
            max-sm:hidden"
          >
            {linkList.map(({ id, text, link }) => (
              <a href={link} className="link cursor-pointer" key={id}>
                {text}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <div className="flex justify-center items-center w-full h-full">
        <div
          className="relative w-4/5 h-4/5 flex items-center
          max-lg:justify-center justify-evenly"
        >
          <div className="home-text z-10 rounded-b-md">
            RotorPenza - это производство, ремонт, и реставрация формующих
            роторов и изготовление комплектующих к ним. Разработка и
            изготовление матриц для сахарного печенья и заливки мармелада.
            Создание струнных резок и фильер для пряничного производства.
          </div>
          <img src={photo2} className="image" alt="photo" />
        </div>
      </div>
    </div>
  );
};
