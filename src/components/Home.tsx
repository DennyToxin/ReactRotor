import { useGSAP } from "@gsap/react";
import { rotorVideo } from "../utils";
import gsap from "gsap";

export const Home = () => {
  useGSAP(() => {
    gsap.from(".home-text", {
      y: 20,
      delay: 1.5,
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
      ease: "power2.out",
    });

    gsap.from(".home-image", {
      y: "100%",
      delay: 1.5,
      duration: 1.5,
      ease: "power2.out",
    });
  });

  return (
    <div
      id="home"
      className="relative page-view bg-bgPrimaryLt flex justify-center items-end"
    >
      <div className="relative w-5/6 h-5/6 flex">
        <div
          className="w-1/3 flex flex-col max-md:bg-bgPrimaryLt
          max-md:absolute max-md:w-full max-md:z-10 max-md:bg-opacity-60"
        >
          <p className="home-title home-text font-sz-4">RotorPenza</p>
          <p className="home-subtitle home-text font-sz-2">
            Производство и ремонт формующих роторов
          </p>
          <div className="home-text py-5 max-xl:py-4 max-md:py-3">
            <a className="home-link font-sz-2" href="#services">
              Подробнее
            </a>
          </div>
        </div>
        <div
          className="w-2/3 flex justify-center
          max-md:w-full"
        >
          <video
            className="pointer-events-none home-image"
            autoPlay
            muted
            loop
            playsInline={true}
            key={rotorVideo}
          >
            <source src={rotorVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
