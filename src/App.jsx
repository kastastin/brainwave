import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
