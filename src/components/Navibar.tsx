import { useGSAP } from "@gsap/react";
import { linkList } from "../constant";
import { rotorLogo } from "../utils";
import gsap from "gsap";

export const Navibar = () => {

  useGSAP(() => {
    gsap.from(".navibar-item", {
      y: -20,
      delay: 0.5,
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
      ease: "power2.out",
    });
  });

  return (
    <header className="absolute z-20 w-full mt-2">
      <nav className="w-full flex justify-between items-center">
        <div className="flex gap-6 ml-16 max-sm:ml-8 max-sm:gap-3">
          <div className="navibar-item">
            <img
              src={rotorLogo}
              className="py-1"
              width={18}
              height={18}
              alt="logo"
            />
          </div>
          <div className="navibar-item">
            <a href="#home" className="navibar-link">
              RotorPenza
            </a>
          </div>
        </div>
        <div className="flex gap-6 mr-16 max-sm:hidden">
          {linkList.map(({ id, text, link }) => (
            <div className="navibar-item" key={id}>
              <a href={link} className="navibar-link">
                {text}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
