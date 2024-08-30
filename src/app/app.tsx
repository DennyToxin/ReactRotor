import { Gallery } from "../components/Gallery";
import { Home } from "../components/Home";
import { Services } from "../components/Services";

export const App = () => {
  return (
    <div>
      <Home />
      <Services />
      <Gallery />
    </div>
  );
};
