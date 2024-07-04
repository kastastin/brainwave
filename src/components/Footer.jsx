import Section from "./Section";
import { socials } from "../constants";

const Footer = () => (
  <Section crosses className="!px-0 !py-10">
    <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
      <p className="caption text-n-4 lg:block">
        © {new Date().getFullYear()}. All rights reserved.
      </p>

      <ul className="flex flex-wrap gap-5">
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="flex size-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
          >
            <img src={item.iconUrl} alt={item.title} width={16} height={16} />
          </a>
        ))}
      </ul>
    </div>
  </Section>
);

export default Footer;
