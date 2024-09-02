import { Contacts } from "../components/Contacts";
import { Gallery } from "../components/Gallery";
import { Home } from "../components/Home";
import { Navibar } from "../components/Navibar";
import { Services } from "../components/Services";

export const App = () => {
  return (
    <>
      <Navibar />
      <Home />
      <Services />
      <Gallery />
      <Contacts />
    </>
  );
};
