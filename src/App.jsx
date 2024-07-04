import Hero from "./components/Hero";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero/>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
