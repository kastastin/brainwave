import { loading } from "../assets";

const Generating = ({ className }) => (
  <div
    className={`flex h-14 items-center rounded-[1.7rem] bg-n-8/80 px-6 ${
      className || ""
    } text-base`}
  >
    <img src={loading} alt="Loading" className="mr-4 size-5" />
    AI is generating
  </div>
);

export default Generating;
