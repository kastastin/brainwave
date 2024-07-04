import Button from "./Button";
import Section from "./Section";
import Tagline from "./TagLine";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";
import { check2, grid, loading1 } from "../assets";

const Roadmap = () => (
  <Section id="roadmap" className="overflow-hidden">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              key={item.id}
              className={`rounded-[2.5rem] p-0.25 md:flex even:md:translate-y-28 ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
            >
              <div className="relative overflow-hidden rounded-[2.4375rem] bg-n-8 p-8 xl:p-15">
                <div className="absolute left-0 top-0 max-w-full">
                  <img
                    src={grid}
                    alt="Grid"
                    width={550}
                    height={550}
                    className="w-full"
                  />
                </div>
                <div className="relative z-1">
                  <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center rounded bg-n-1 px-4 py-1 text-n-8">
                      <img
                        src={item.status === "done" ? check2 : loading1}
                        alt={status}
                        width={16}
                        height={16}
                        className="mr-2.5"
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="-mx-15 -my-10 mb-10">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      width={628}
                      height={426}
                      className="w-full"
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
