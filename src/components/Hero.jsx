import { ScrollParallax } from "react-just-parallax";

import { heroIcons } from "../constants";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="mt-[-5.25rem] pt-48"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative">
        <div className="relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="relative inline-block">
              Brainwave{" "}
              <img
                src={curve}
                alt="Curve"
                width={624}
                height={28}
                className="absolute left-0 top-full w-full xl:-mt-2"
              />
            </span>
          </h1>

          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-2xl bg-n-8">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />

              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="AI"
                  width={1024}
                  height={490}
                  className="w-full translate-y-[8%] scale-[1.7] md:translate-y-[-10%] md:scale-100 lg:translate-y-[-23%]"
                />

                <Generating className="absolute inset-x-4 bottom-5 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute bottom-[7.5rem] left-[-5.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 p-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, i) => (
                      <li className="p-5" key={i}>
                        <img src={icon} alt={icon} width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute bottom-44 right-[-5.5rem] hidden w-72 xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]">
            <img
              src={heroBackground}
              alt="hero"
              width={1440}
              height={1800}
              className="w-full"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="relative z-10 mt-20 hidden lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
