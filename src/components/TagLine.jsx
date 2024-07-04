import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => (
  <div className={`tagline flex items-center ${className || ""}`}>
    {brackets("left")}
    <div className="mx-3 text-n-3">{children}</div>
    {brackets("right")}
  </div>
);

export default TagLine;