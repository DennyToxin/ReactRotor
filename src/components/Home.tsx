import { rotorVideo } from "../utils";

export const Home = () => {
  return (
    <div id="home" className="relative page-view bg-slate-400">
      <div className="grain flex items-center justify-center">
        <div className="w-2/5 h-2/5">
          <video
            w-full
            h-full
            className="pointer-events-none"
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
